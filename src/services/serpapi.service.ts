import {
    FlightResponse,
    FlightSearchParams,
    MultiCitySegment,
    SerpApiResponse,
    SerpFlightOffer,
    TripType,
    TravelClass,
} from '@/types/serpapi.types';

const SERPAPI_BASE_URL = 'https://serpapi.com/search';
const REQUEST_TIMEOUT_MS = 10_000;

function normalizeTravelClassInput(value?: string): TravelClass {
    if (value === '1') return 'economy';
    if (value === '2') return 'premium_economy';
    if (value === '3') return 'business';
    if (value === '4') return 'first';

    const normalized = (value ?? 'economy').trim().toLowerCase().replace(/[\s-]+/g, '_');

    if (normalized === 'premium_economy' || normalized === 'business' || normalized === 'first') {
        return normalized;
    }

    return 'economy';
}

function normalizeTripTypeInput(value?: string): TripType {
    if (value === '1') return 'round-trip';
    if (value === '2') return 'one-way';
    if (value === '3') return 'multi-city';
    if (value === 'round-trip' || value === 'one-way' || value === 'multi-city') {
        return value;
    }

    return 'round-trip';
}

function getUsdToBdtRate(): number {
    const rawRate = process.env.USD_TO_BDT_RATE ?? '125';
    const rate = Number(rawRate);
    return Number.isFinite(rate) && rate > 0 ? rate : 125;
}

function mapTravelClassToSerp(travelClass: string | undefined): string {
    const normalizedClass = normalizeTravelClassInput(travelClass);
    const map: Record<TravelClass, string> = {
        economy: '1',
        premium_economy: '2',
        business: '3',
        first: '4',
    };

    return map[normalizedClass] ?? '1';
}

function mapTripTypeToSerp(type: FlightSearchParams['type']): string {
    const normalizedType = normalizeTripTypeInput(type);
    const map: Record<TripType, string> = {
        'round-trip': '1',
        'one-way': '2',
        'multi-city': '3',
    };

    return map[normalizedType] ?? '1';
}

function buildMultiCitySegments(params: FlightSearchParams): MultiCitySegment[] {
    if (params.multiCitySegments && params.multiCitySegments.length > 0) {
        return params.multiCitySegments;
    }

    const fallbackSegments: MultiCitySegment[] = [
        {
            departureId: params.origin,
            arrivalId: params.destination,
            date: params.departDate,
        },
    ];

    if (params.returnDate) {
        fallbackSegments.push({
            departureId: params.destination,
            arrivalId: params.origin,
            date: params.returnDate,
        });
    }

    return fallbackSegments;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function convertSerpApiResponse(response: any): FlightResponse[] {
    const serpResponse = response as SerpApiResponse;
    const bestFlights = serpResponse.best_flights ?? [];
    const usdToBdtRate = getUsdToBdtRate();
    const mapped: Array<FlightResponse | null> = bestFlights
        .map((offer: SerpFlightOffer, index) => {
            const segments = offer.flights ?? [];
            if (!segments.length) {
                return null;
            }

            const firstSegment = segments[0];
            const lastSegment = segments[segments.length - 1];

            return {
                id: `serpapi-${index}-${firstSegment.flight_number ?? 'unknown'}`,
                source: 'serpapi' as const,
                flight_number: segments.map((segment) => segment.flight_number).filter(Boolean).join(' / '),
                airline: {
                    name: firstSegment.airline || 'Unknown Airline',
                    logo: firstSegment.airline_logo || offer.airline_logo,
                },
                departure: {
                    airport: `${firstSegment.departure_airport?.id ?? ''} ${firstSegment.departure_airport?.name ?? ''}`.trim(),
                    time: firstSegment.departure_airport?.time ?? '',
                },
                arrival: {
                    airport: `${lastSegment.arrival_airport?.id ?? ''} ${lastSegment.arrival_airport?.name ?? ''}`.trim(),
                    time: lastSegment.arrival_airport?.time ?? '',
                },
                duration: offer.total_duration ?? segments.reduce((total, segment) => total + (segment.duration ?? 0), 0),
                travel_class: firstSegment.travel_class || 'economy',
                price: {
                    amount: Math.round((offer.price ?? 0) * usdToBdtRate),
                    currency: 'BDT',
                },
                extensions: [...(offer.extensions ?? []), ...segments.flatMap((segment) => segment.extensions ?? [])],
                layovers: (offer.layovers ?? []).map((layover) => ({
                    airport: `${layover.id} ${layover.name}`.trim(),
                    duration: layover.duration,
                })),
            };
        });

    return mapped.filter((flight): flight is FlightResponse => flight !== null);
}

export async function searchFlightsWithSerpApi(params: FlightSearchParams): Promise<FlightResponse[]> {
    const apiKey = process.env.SERPAPI_API_KEY ?? 'b926fcd888efa082cd130fb65a222736370b1683324736a08bcec6328dccd700';
    if (!apiKey) {
        throw new Error('SERPAPI_API_KEY is missing in environment variables');
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    const query = new URLSearchParams({
        engine: 'google_flights',
        api_key: apiKey,
        departure_id: params.origin,
        arrival_id: params.destination,
        outbound_date: params.departDate,
        adults: String(params.adults ?? 1),
        children: String(params.children ?? 0),
        infants_in_seat: String(params.infantsInSeat ?? 0),
        infants_on_lap: String(params.infantsOnLap ?? 0),
        travel_class: mapTravelClassToSerp(params.travelClass),
        currency: 'USD',
        gl: 'us',
        hl: 'en',
        type: mapTripTypeToSerp(params.type),
    });

    if (params.returnDate && params.type === 'round-trip') {
        query.set('return_date', params.returnDate);
    }

    if (mapTripTypeToSerp(params.type) === '3') {
        const segments = buildMultiCitySegments(params);
        query.set('multi_city_json', JSON.stringify(segments));
        query.delete('departure_id');
        query.delete('arrival_id');
        query.delete('outbound_date');
        query.delete('return_date');

        if (segments.length < 2) {
            query.set('type', '2');
            query.set('departure_id', params.origin);
            query.set('arrival_id', params.destination);
            query.set('outbound_date', params.departDate);
        }
    }

    try {
        const response = await fetch(`${SERPAPI_BASE_URL}?${query.toString()}`, {
            method: 'GET',
            signal: controller.signal,
        });

        if (response.status === 429) {
            throw new Error('SerpApi rate limit exceeded. Please try again later.');
        }

        if (!response.ok) {
            const message = await response.text();
            throw new Error(`SerpApi request failed: ${message || response.statusText}`);
        }

        const data = (await response.json()) as SerpApiResponse;
        if (data.error) {
            throw new Error(data.error);
        }

        return convertSerpApiResponse(data);
    } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
            throw new Error('SerpApi request timeout after 10 seconds');
        }

        throw error;
    } finally {
        clearTimeout(timeout);
    }
}

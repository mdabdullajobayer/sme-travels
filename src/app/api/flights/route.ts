import { NextResponse } from 'next/server';
import { searchFlights } from '@/controllers/flight.controller';
import { FlightSearchParams } from '@/types/serpapi.types';

function normalizeTravelClassInput(value: string): string {
    return value.trim().toLowerCase().replace(/[\s-]+/g, '_');
}

function normalizeTripTypeInput(value: string | null, hasReturnDate: boolean): FlightSearchParams['type'] {
    if (value === '1') return 'round-trip';
    if (value === '2') return 'one-way';
    if (value === '3') return 'multi-city';
    if (value === 'round-trip' || value === 'one-way' || value === 'multi-city') {
        return value;
    }

    return hasReturnDate ? 'round-trip' : 'one-way';
}

function parseMultiCitySegments(value: string | null): FlightSearchParams['multiCitySegments'] {
    if (!value) {
        return undefined;
    }

    try {
        const parsed = JSON.parse(value);
        if (!Array.isArray(parsed)) {
            return undefined;
        }

        return parsed
            .filter((segment) => segment?.departureId && segment?.arrivalId && segment?.date)
            .map((segment) => ({
                departureId: String(segment.departureId).toUpperCase(),
                arrivalId: String(segment.arrivalId).toUpperCase(),
                date: String(segment.date),
            }));
    } catch {
        return undefined;
    }
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const origin = searchParams.get('origin')?.trim();
    const destination = searchParams.get('destination')?.trim();
    const departDate = searchParams.get('departDate') || searchParams.get('departureDate');
    const returnDate = searchParams.get('returnDate') || undefined;
    const adults = Number(searchParams.get('adults') || '1');
    const children = Number(searchParams.get('children') || '0');
    const infantsInSeat = Number(searchParams.get('infants_in_seat') || searchParams.get('infantsInSeat') || searchParams.get('infants') || '0');
    const infantsOnLap = Number(searchParams.get('infants_on_lap') || searchParams.get('infantsOnLap') || '0');
    const travelClass = searchParams.get('travelClass') || 'economy';
    const tripType = normalizeTripTypeInput(searchParams.get('type'), Boolean(returnDate));
    const moreOptions = searchParams.get('moreOptions') === 'true';
    const multiCitySegments = parseMultiCitySegments(searchParams.get('multiCitySegments'));
    const provider: FlightSearchParams['provider'] = 'serpapi';

    if (!origin || !destination || !departDate) {
        return NextResponse.json(
            { error: 'Missing required parameters: origin, destination, departDate' },
            { status: 400 }
        );
    }

    try {
        const flights = await searchFlights({
            origin,
            destination,
            departDate,
            returnDate,
            adults,
            children,
            infantsInSeat,
            infantsOnLap,
            travelClass: normalizeTravelClassInput(travelClass) as FlightSearchParams['travelClass'],
            type: tripType,
            multiCitySegments,
            moreOptions,
            provider,
        });

        return NextResponse.json({
            data: flights,
            meta: {
                total: flights.length,
                currency: 'BDT',
                providers: ['serpapi'],
            },
        });
    } catch (error) {
        console.error('Flight search error:', error);

        const message = error instanceof Error ? error.message : 'Internal server error';
        const status = /rate limit/i.test(message) ? 429 : 500;

        return NextResponse.json({ error: message }, { status });
    }
}

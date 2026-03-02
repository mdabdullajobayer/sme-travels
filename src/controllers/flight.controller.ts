import { searchFlightsWithSerpApi } from '@/services/serpapi.service';
import { FlightResponse, FlightSearchParams, TravelClass, TripType } from '@/types/serpapi.types';

function normalizeTravelClass(value?: string): TravelClass {
    if (value === '1') return 'economy';
    if (value === '2') return 'premium_economy';
    if (value === '3') return 'business';
    if (value === '4') return 'first';

    const normalized = (value ?? 'economy').toLowerCase().replace(/[\s-]+/g, '_');
    if (normalized === 'premium_economy' || normalized === 'business' || normalized === 'first') {
        return normalized;
    }

    return 'economy';
}

function normalizeTripType(value: string | undefined, hasReturnDate: boolean): TripType {
    if (value === '1') return 'round-trip';
    if (value === '2') return 'one-way';
    if (value === '3') return 'multi-city';

    if (value === 'round-trip' || value === 'one-way' || value === 'multi-city') {
        return value;
    }

    return hasReturnDate ? 'round-trip' : 'one-way';
}

export async function searchFlights(params: FlightSearchParams): Promise<FlightResponse[]> {
    const normalizedParams: FlightSearchParams = {
        ...params,
        adults: params.adults && params.adults > 0 ? params.adults : 1,
        children: params.children && params.children > 0 ? params.children : 0,
        infantsInSeat: params.infantsInSeat && params.infantsInSeat > 0 ? params.infantsInSeat : 0,
        infantsOnLap: params.infantsOnLap && params.infantsOnLap > 0 ? params.infantsOnLap : 0,
        travelClass: normalizeTravelClass(params.travelClass),
        type: normalizeTripType(params.type, Boolean(params.returnDate)),
        provider: 'serpapi',
    };

    return searchFlightsWithSerpApi(normalizedParams);
}

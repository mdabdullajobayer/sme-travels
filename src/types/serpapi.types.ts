export type TravelClass = 'economy' | 'premium_economy' | 'business' | 'first';
export type TripType = 'one-way' | 'round-trip' | 'multi-city';
export type TravelClassInput = TravelClass | '1' | '2' | '3' | '4';
export type TripTypeInput = TripType | '1' | '2' | '3';

export interface MultiCitySegment {
    departureId: string;
    arrivalId: string;
    date: string;
}

export interface FlightSearchParams {
    origin: string;
    destination: string;
    departDate: string;
    returnDate?: string;
    adults?: number;
    children?: number;
    infantsInSeat?: number;
    infantsOnLap?: number;
    travelClass?: TravelClassInput;
    type?: TripTypeInput;
    multiCitySegments?: MultiCitySegment[];
    moreOptions?: boolean;
    provider?: 'serpapi';
}

export interface FlightResponse {
    id: string;
    source: 'serpapi';
    flight_number: string;
    airline: {
        name: string;
        logo?: string;
    };
    departure: {
        airport: string;
        time: string;
    };
    arrival: {
        airport: string;
        time: string;
    };
    duration: number;
    travel_class: string;
    price: {
        amount: number;
        currency: string;
    };
    extensions: string[];
    layovers: Array<{
        airport: string;
        duration?: number;
    }>;
}

export interface SerpAirportInfo {
    name: string;
    id: string;
    time: string;
}

export interface SerpFlightSegment {
    departure_airport: SerpAirportInfo;
    arrival_airport: SerpAirportInfo;
    duration?: number;
    airplane?: string;
    airline: string;
    airline_logo?: string;
    travel_class: string;
    flight_number: string;
    legroom?: string;
    extensions?: string[];
    overnight?: boolean;
}

export interface SerpLayover {
    duration: number;
    name: string;
    id: string;
    overnight?: boolean;
}

export interface SerpFlightOffer {
    flights: SerpFlightSegment[];
    layovers?: SerpLayover[];
    total_duration?: number;
    carbon_emissions?: {
        this_flight: number;
        typical_for_this_route: number;
        difference_percent: number;
    };
    price: number;
    type?: string;
    airline_logo?: string;
    extensions?: string[];
    departure_token?: string;
}

export interface SerpApiError {
    status?: string;
    message?: string;
}

export interface SerpApiResponse {
    search_metadata?: {
        id: string;
        status: string;
        created_at: string;
        google_flights_url?: string;
        raw_html_file?: string;
        total_time_taken?: number;
    };
    search_parameters?: Record<string, string | number | boolean>;
    best_flights?: SerpFlightOffer[];
    other_flights?: SerpFlightOffer[];
    error?: string;
    errors?: SerpApiError[];
}

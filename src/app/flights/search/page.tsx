"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchHeader from '@/components/search/SearchHeader';
import FlightFilters from '@/components/search/FlightFilters';

export default function FlightSearchResults() {
    const searchParams = useSearchParams();
    const origin = searchParams.get('origin') || 'DAC';
    const originCity = searchParams.get('originCity') || 'Dhaka';
    const destination = searchParams.get('destination') || 'CXB';
    const destinationCity = searchParams.get('destinationCity') || "Cox's Bazar";
    const departureDate = searchParams.get('departureDate') || '';
    const adults = searchParams.get('adults') || '1';
    const travelClass = searchParams.get('travelClass') || 'Economy';
    const currencyCode = searchParams.get('currencyCode') || 'BDT';

    const [loading, setLoading] = useState(true);
    const [flights, setFlights] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFlights = async () => {
            setLoading(true);
            setError(null);

            try {
                const queryParams = new URLSearchParams({
                    origin,
                    destination,
                    departureDate,
                    adults,
                    travelClass: travelClass.toUpperCase(),
                    currencyCode
                });

                const res = await fetch(`/api/flights?${queryParams.toString()}`);
                if (!res.ok) {
                    const errorData = await res.json();
                    throw new Error(errorData.error || 'Failed to fetch flights');
                }

                const data = await res.json();
                setFlights(data.data || []);
                if (data.data?.length === 0) {
                    setError('No flights found for this route and date.');
                }
            } catch (err: any) {
                console.error('Search error:', err);
                setError(err.message || 'An error occurred while searching for flights.');
            } finally {
                setLoading(false);
            }
        };

        if (departureDate) {
            fetchFlights();
        } else {
            setLoading(false);
            setError("Invalid search parameters. Please try again from the home page.");
        }
    }, [origin, destination, departureDate, adults, travelClass, currencyCode]);

    // Format date for display
    const formattedDate = departureDate ? new Date(departureDate).toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }) : '';

    return (
        <div className="min-h-screen flex flex-col bg-background-light">
            {/* <Navbar /> */}

            {/* Advanced Search Header */}
            <SearchHeader
                initialOrigin={origin}
                initialDestination={destination}
                initialDepartureDate={departureDate}
                initialAdults={adults}
                initialTravelClass={travelClass}
            />

            {/* Main Content Area */}
            <main className="flex-1 container mx-auto px-4 py-8 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left Sidebar Layout */}
                    <div className="hidden lg:block lg:col-span-1">
                        <FlightFilters />
                    </div>

                    {/* Right Results Layout */}
                    <div className="lg:col-span-3">
                        {/* Loading State */}
                        {loading && (
                            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
                                <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
                                <p className="text-lg font-medium text-slate-600">Searching for the best flights...</p>
                                <p className="text-slate-400 text-sm mt-2">Checking real-time prices entirely for you.</p>
                            </div>
                        )}

                        {/* Error State */}
                        {error && !loading && (
                            <div className="bg-red-50 p-8 rounded-2xl border border-red-100 text-center">
                                <div className="text-5xl mb-4">😔</div>
                                <h3 className="text-xl font-bold text-red-800 mb-2">We couldn't find any flights!</h3>
                                <p className="text-red-600 mb-6">{error}</p>
                                <Link href="/" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                                    Back to Home
                                </Link>
                            </div>
                        )}

                        {/* Results Grid */}
                        {!loading && flights.length > 0 && (
                            <div className="flex flex-col gap-6">
                                <div className="flex justify-between items-center mb-2">
                                    <h2 className="text-2xl font-bold text-slate-800">
                                        {flights.length} Flight{flights.length > 1 ? 's' : ''} Found
                                    </h2>
                                    <div className="flex gap-2">
                                        <span className="text-sm text-slate-500">Prices are per person and include taxes</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {flights.map((flight, index) => {
                                        const segment = flight.itineraries?.[0]?.segments?.[0];
                                        const price = flight.price?.total || 'N/A';
                                        const currency = flight.price?.currency || '';
                                        const airline = segment?.carrierCode || 'Airline';
                                        const depTime = segment?.departure?.at ? new Date(segment.departure.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A';
                                        const arrTime = segment?.arrival?.at ? new Date(segment.arrival.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A';
                                        const duration = flight.itineraries?.[0]?.duration ? flight.itineraries[0].duration.replace('PT', '').toLowerCase() : 'N/A';

                                        return (
                                            <div key={flight.id || index} className="bg-white border text-slate-800 border-slate-200 p-6 rounded-2xl hover:shadow-lg transition-all hover:border-primary/30 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                                                {index === 0 && (
                                                    <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                                                        Best Value
                                                    </div>
                                                )}

                                                <div className="flex items-center gap-6 w-full md:w-auto">
                                                    <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center font-bold text-slate-400 text-lg shadow-sm">
                                                        {airline}
                                                    </div>
                                                    <div>
                                                        <p className="font-extrabold text-2xl text-slate-900">{depTime} <span className="text-slate-400 mx-2 text-xl font-normal">→</span> {arrTime}</p>
                                                        <p className="text-sm font-medium text-slate-500 mt-1">{originCity} to {destinationCity}</p>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-center flex-1 w-full md:w-auto py-4 md:py-0 md:px-12">
                                                    <div className="w-full flex items-center justify-center gap-3">
                                                        <div className="h-px bg-slate-200 flex-1"></div>
                                                        <div className="flex flex-col items-center">
                                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-white z-10 px-2">
                                                                {flight.itineraries?.[0]?.segments?.length === 1 ? 'Direct Flight' : `${flight.itineraries?.[0]?.segments?.length - 1} Stop(s)`}
                                                            </span>
                                                            <span className="text-xs text-slate-500 mt-1">{duration}</span>
                                                        </div>
                                                        <div className="h-px bg-slate-200 flex-1"></div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-4 pl-0 md:pl-6 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0">
                                                    <div className="text-left md:text-right">
                                                        <p className="text-3xl font-black text-primary">{price} <span className="text-sm font-bold text-slate-400">{currency}</span></p>
                                                    </div>
                                                    <button className="bg-primary hover:bg-primary-hover shadow-md shadow-primary/20 text-white font-bold py-3 px-8 rounded-xl transition-all hover:-translate-y-0.5 w-full md:w-auto">
                                                        Select
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>        </div>
    );
}

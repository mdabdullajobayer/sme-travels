"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchHeaderProps {
    initialOrigin: string;
    initialDestination: string;
    initialDepartureDate: string;
    initialAdults: string;
    initialTravelClass: string;
}

export default function SearchHeader({
    initialOrigin,
    initialDestination,
    initialDepartureDate,
    initialAdults,
    initialTravelClass
}: SearchHeaderProps) {
    const router = useRouter();
    const flightTypes = ['One Way', 'Round Trip', 'Multi City'];

    // Manage local state before allowing user to search again
    const [selectedFlightType, setSelectedFlightType] = useState('One Way');
    const [origin, setOrigin] = useState(initialOrigin);
    const [destination, setDestination] = useState(initialDestination);
    const [departureDate, setDepartureDate] = useState(initialDepartureDate || '');
    const [adults, setAdults] = useState(initialAdults);
    const [travelClass, setTravelClass] = useState(initialTravelClass);

    const handleSearch = () => {
        const queryParams = new URLSearchParams({
            origin,
            destination,
            departureDate,
            adults,
            travelClass,
            currencyCode: 'BDT'
        });

        router.push(`/flights/search?${queryParams.toString()}`);
    };

    return (
        <div className="bg-primary pt-24 pb-6 shadow-md z-10 relative">
            <div className="container mx-auto px-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 shadow-lg">
                    {/* Flight Types */}
                    <div className="flex gap-2 mb-4">
                        {flightTypes.map((type) => (
                            <button
                                key={type}
                                onClick={() => setSelectedFlightType(type)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedFlightType === type
                                    ? 'bg-white text-primary'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    {/* Inputs Row */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mt-2">
                        <div className="md:col-span-3 pb-2 md:pb-0 border-b md:border-b-0 md:border-r border-white/20 relative">
                            <label className="text-[10px] text-white/70 uppercase font-bold tracking-wider px-3">From</label>
                            <input
                                type="text"
                                value={origin}
                                onChange={(e) => setOrigin(e.target.value.toUpperCase().slice(0, 3))}
                                className="w-full bg-transparent text-white font-bold text-lg px-3 outline-none placeholder:text-white/40 uppercase"
                                placeholder="DAC"
                            />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-1/2 md:rotate-0 rotate-90 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                                <span className="text-white text-sm">⇄</span>
                            </div>
                        </div>

                        <div className="md:col-span-3 pb-2 md:pb-0 border-b md:border-b-0 md:border-r border-white/20 pl-0 md:pl-2">
                            <label className="text-[10px] text-white/70 uppercase font-bold tracking-wider px-3">To</label>
                            <input
                                type="text"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value.toUpperCase().slice(0, 3))}
                                className="w-full bg-transparent text-white font-bold text-lg px-3 outline-none placeholder:text-white/40 uppercase"
                                placeholder="CXB"
                            />
                        </div>

                        <div className="md:col-span-2 pb-2 md:pb-0 border-b md:border-b-0 md:border-r border-white/20 pl-0 md:pl-2">
                            <label className="text-[10px] text-white/70 uppercase font-bold tracking-wider px-3">Date</label>
                            <input
                                type="date"
                                value={departureDate}
                                onChange={(e) => setDepartureDate(e.target.value)}
                                className="w-full bg-transparent text-white font-bold text-lg px-3 outline-none [color-scheme:dark]"
                            />
                        </div>

                        <div className="md:col-span-2 pb-2 md:pb-0 border-b md:border-b-0 border-white/20 pl-0 md:pl-2">
                            <label className="text-[10px] text-white/70 uppercase font-bold tracking-wider px-3">Traveler & Class</label>
                            <div className="flex px-3 gap-2">
                                <select
                                    className="bg-transparent text-white font-bold outline-none cursor-pointer w-1/3"
                                    value={adults}
                                    onChange={(e) => setAdults(e.target.value)}
                                >
                                    {[1, 2, 3, 4, 5, 6].map(num => <option key={num} value={num} className="text-slate-900">{num}</option>)}
                                </select>
                                <select
                                    className="bg-transparent text-white font-bold outline-none cursor-pointer w-2/3 truncate"
                                    value={travelClass}
                                    onChange={(e) => setTravelClass(e.target.value)}
                                >
                                    <option value="Economy" className="text-slate-900">Economy</option>
                                    <option value="Premium_Economy" className="text-slate-900">Prem. Eco</option>
                                    <option value="Business" className="text-slate-900">Business</option>
                                    <option value="First" className="text-slate-900">First</option>
                                </select>
                            </div>
                        </div>

                        <div className="md:col-span-2 pl-0 md:pl-2 pt-2 md:pt-0 flex items-end">
                            <button
                                onClick={handleSearch}
                                className="w-full bg-secondary hover:bg-secondary-hover text-slate-900 font-bold py-3 px-4 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 h-[46px]"
                            >
                                <span>Modify</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

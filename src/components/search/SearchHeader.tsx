"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchHeaderProps {
    initialOrigin: string;
    initialDestination: string;
    initialDepartureDate: string;
    initialAdults: string;
    initialChildren?: string;
    initialInfants?: string;
    initialTravelClass: string;
}

export default function SearchHeader({
    initialOrigin,
    initialDestination,
    initialDepartureDate,
    initialAdults,
    initialChildren = '0',
    initialInfants = '0',
    initialTravelClass
}: SearchHeaderProps) {
    const router = useRouter();
    const flightTypes = ['One Way', 'Round Trip', 'Multi City'];

    // Manage local state before allowing user to search again
    const [selectedFlightType, setSelectedFlightType] = useState('One Way');
    const [origin, setOrigin] = useState(initialOrigin);
    const [destination, setDestination] = useState(initialDestination);
    const [departureDate, setDepartureDate] = useState(initialDepartureDate || '');

    // Traveler state
    const [adults, setAdults] = useState(parseInt(initialAdults) || 1);
    const [children, setChildren] = useState(parseInt(initialChildren) || 0);
    const [infants, setInfants] = useState(parseInt(initialInfants) || 0);
    const [travelClass, setTravelClass] = useState(initialTravelClass);
    const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);

    const getTotalTravelers = () => adults + children + infants;

    const handleSearch = () => {
        const queryParams = new URLSearchParams({
            origin,
            destination,
            departureDate,
            adults: adults.toString(),
            children: children.toString(),
            infants: infants.toString(),
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

                        <div className="md:col-span-2 pb-2 md:pb-0 border-b md:border-b-0 border-white/20 pl-0 md:pl-2 relative">
                            <label className="text-[10px] text-white/70 uppercase font-bold tracking-wider px-3">Traveler & Class</label>

                            <div
                                className="flex px-3 gap-2 cursor-pointer mt-1"
                                onClick={() => setShowTravelerDropdown(!showTravelerDropdown)}
                            >
                                <div className="text-white font-bold truncate">
                                    {getTotalTravelers()} Traveler{getTotalTravelers() > 1 ? 's' : ''}, {travelClass.replace('_', ' ')}
                                </div>
                            </div>

                            {/* Dropdown */}
                            {showTravelerDropdown && (
                                <div className="absolute top-[105%] right-0 md:right-auto md:left-0 w-80 bg-white shadow-xl border border-slate-100 rounded-xl z-50 p-4" onClick={(e) => e.stopPropagation()}>

                                    {/* Adults */}
                                    <div className="flex justify-between items-center mb-4">
                                        <div>
                                            <p className="font-bold text-slate-900">Adults</p>
                                            <p className="text-[10px] text-slate-500">12 yrs and above</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button
                                                className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-slate-300 disabled:hover:text-slate-600"
                                                disabled={adults <= 1}
                                                onClick={() => setAdults(t => Math.max(1, t - 1))}
                                            >-</button>
                                            <span className="font-bold text-slate-900 w-4 text-center">{adults}</span>
                                            <button
                                                className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-slate-300 disabled:hover:text-slate-600"
                                                disabled={adults >= 9}
                                                onClick={() => setAdults(t => Math.min(9, t + 1))}
                                            >+</button>
                                        </div>
                                    </div>

                                    {/* Children */}
                                    <div className="flex justify-between items-center mb-4">
                                        <div>
                                            <p className="font-bold text-slate-900">Children</p>
                                            <p className="text-[10px] text-slate-500">2-11 yrs</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button
                                                className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-slate-300 disabled:hover:text-slate-600"
                                                disabled={children <= 0}
                                                onClick={() => setChildren(c => Math.max(0, c - 1))}
                                            >-</button>
                                            <span className="font-bold text-slate-900 w-4 text-center">{children}</span>
                                            <button
                                                className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-slate-300 disabled:hover:text-slate-600"
                                                disabled={children >= 9}
                                                onClick={() => setChildren(c => Math.min(9, c + 1))}
                                            >+</button>
                                        </div>
                                    </div>

                                    {/* Infants */}
                                    <div className="flex justify-between items-center mb-4">
                                        <div>
                                            <p className="font-bold text-slate-900">Infants</p>
                                            <p className="text-[10px] text-slate-500">Below 2 yrs</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button
                                                className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-slate-300 disabled:hover:text-slate-600"
                                                disabled={infants <= 0}
                                                onClick={() => setInfants(i => Math.max(0, i - 1))}
                                            >-</button>
                                            <span className="font-bold text-slate-900 w-4 text-center">{infants}</span>
                                            <button
                                                className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-slate-300 disabled:hover:text-slate-600"
                                                disabled={infants >= adults}
                                                onClick={() => setInfants(i => Math.min(adults, i + 1))}
                                            >+</button>
                                        </div>
                                    </div>

                                    <div className="border-t border-slate-100 pt-4">
                                        <p className="font-bold text-slate-900 mb-2">Class</p>
                                        <div className="grid grid-cols-2 gap-2">
                                            {['Economy', 'Premium_Economy', 'Business', 'First'].map((c) => (
                                                <div
                                                    key={c}
                                                    className={`p-2 border rounded-lg text-center cursor-pointer text-sm font-medium transition-colors ${travelClass === c ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 text-slate-600 hover:border-primary'}`}
                                                    onClick={() => setTravelClass(c)}
                                                >
                                                    {c.replace('_', ' ')}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <button
                                        className="w-full mt-4 bg-primary text-white font-bold py-2 rounded-lg hover:bg-primary/90 transition-colors"
                                        onClick={() => setShowTravelerDropdown(false)}
                                    >
                                        Done
                                    </button>
                                </div>
                            )}
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

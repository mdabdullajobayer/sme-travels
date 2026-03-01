import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const flightTypes = ['One Way', 'Round Trip', 'Multi City'];

const popularAirports = [
    { city: 'Dhaka', code: 'DAC', airport: 'Hazrat Shahjalal International Airport' },
    { city: "Cox's Bazar", code: 'CXB', airport: "Cox's Bazar Airport" },
    { city: 'Sylhet', code: 'ZYL', airport: 'Osmani International Airport' },
    { city: 'Chittagong', code: 'CGP', airport: 'Shah Amanat International Airport' },
    { city: 'Dubai', code: 'DXB', airport: 'Dubai International Airport' },
    { city: 'Kuala Lumpur', code: 'KUL', airport: 'Kuala Lumpur International Airport' },
    { city: 'Singapore', code: 'SIN', airport: 'Changi Airport' },
    { city: 'Bangkok', code: 'BKK', airport: 'Suvarnabhumi Airport' },
];

export default function FlightSearch() {
    const [selectedFlightType, setSelectedFlightType] = useState('One Way');
    const [from, setFrom] = useState({ city: 'Dhaka', code: 'DAC', airport: 'Hazrat Shahjalal International Airport' });
    const [to, setTo] = useState({ city: "Cox's Bazar", code: 'CXB', airport: "Cox's Bazar Airport" });
    const [departureDate, setDepartureDate] = useState('2026-03-03');
    const [returnDate, setReturnDate] = useState('');
    const [travelers, setTravelers] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [travelClass, setTravelClass] = useState('Economy');

    const getTotalTravelers = () => travelers + children + infants;

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const [showFromDropdown, setShowFromDropdown] = useState(false);
    const [showToDropdown, setShowToDropdown] = useState(false);
    const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);

    const fromRef = useRef<HTMLDivElement>(null);
    const toRef = useRef<HTMLDivElement>(null);
    const travelerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (fromRef.current && !fromRef.current.contains(event.target as Node)) setShowFromDropdown(false);
            if (toRef.current && !toRef.current.contains(event.target as Node)) setShowToDropdown(false);
            if (travelerRef.current && !travelerRef.current.contains(event.target as Node)) setShowTravelerDropdown(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const swapLocations = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
    };

    const handleSearch = () => {
        setLoading(true);

        const queryParams = new URLSearchParams({
            origin: from.code,
            originCity: from.city,
            destination: to.code,
            destinationCity: to.city,
            departureDate,
            adults: travelers.toString(),
            children: children.toString(),
            infants: infants.toString(),
            travelClass: travelClass,
            currencyCode: 'BDT'
        });

        router.push(`/flights/search?${queryParams.toString()}`);
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl">
                <div className="flex flex-col gap-6">
                    {/* Flight Type Tabs */}
                    <div className="flex gap-4">
                        {flightTypes.map((type) => (
                            <button
                                key={type}
                                onClick={() => setSelectedFlightType(type)}
                                className={`px-4 py-2 rounded-full font-medium transition-colors ${selectedFlightType === type
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-100 text-slate-700 hover:bg-primary hover:text-white'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    {/* Input Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        {/* From */}
                        <div
                            ref={fromRef}
                            className={`border ${showFromDropdown ? 'border-primary' : 'border-slate-200'} rounded-lg p-3 hover:border-primary transition-colors cursor-pointer relative`}
                            onClick={() => setShowFromDropdown(!showFromDropdown)}
                        >
                            <p className="text-xs text-slate-500 font-medium mb-1">FROM</p>
                            <p className="text-xl font-bold text-slate-900 truncate">{from.city}</p>
                            <p className="text-xs text-slate-500 truncate mt-1">{from.code}, {from.airport}</p>

                            {/* Dropdown */}
                            {showFromDropdown && (
                                <div className="absolute top-[105%] left-0 w-80 bg-white shadow-xl border border-slate-100 rounded-xl z-50 max-h-80 overflow-y-auto">
                                    <div className="p-3 text-xs font-bold text-slate-400 bg-slate-50 border-b border-slate-100 sticky top-0">POPULAR AIRPORTS</div>
                                    {popularAirports.map(airport => (
                                        <div
                                            key={airport.code}
                                            className="p-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50 last:border-0"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setFrom(airport);
                                                setShowFromDropdown(false);
                                            }}
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className="truncate pr-2">
                                                    <p className="font-bold text-slate-900 truncate">{airport.city}</p>
                                                    <p className="text-xs text-slate-500 truncate">{airport.airport}</p>
                                                </div>
                                                <div className="text-sm font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded shrink-0">{airport.code}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Swap Button */}
                            <div
                                className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white border border-slate-200 rounded-full w-8 h-8 flex items-center justify-center shadow-sm cursor-pointer hover:bg-slate-50"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    swapLocations();
                                }}
                            >
                                <span className="text-primary text-xs">⇄</span>
                            </div>
                        </div>

                        {/* To */}
                        <div
                            ref={toRef}
                            className={`border ${showToDropdown ? 'border-primary' : 'border-slate-200'} rounded-lg p-3 hover:border-primary transition-colors cursor-pointer relative`}
                            onClick={() => setShowToDropdown(!showToDropdown)}
                        >
                            <p className="text-xs text-slate-500 font-medium mb-1">TO</p>
                            <p className="text-xl font-bold text-slate-900 truncate">{to.city}</p>
                            <p className="text-xs text-slate-500 truncate mt-1">{to.code}, {to.airport}</p>

                            {/* Dropdown */}
                            {showToDropdown && (
                                <div className="absolute top-[105%] left-0 w-80 bg-white shadow-xl border border-slate-100 rounded-xl z-50 max-h-80 overflow-y-auto">
                                    <div className="p-3 text-xs font-bold text-slate-400 bg-slate-50 border-b border-slate-100 sticky top-0">POPULAR AIRPORTS</div>
                                    {popularAirports.map(airport => (
                                        <div
                                            key={airport.code}
                                            className="p-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50 last:border-0"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setTo(airport);
                                                setShowToDropdown(false);
                                            }}
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className="truncate pr-2">
                                                    <p className="font-bold text-slate-900 truncate">{airport.city}</p>
                                                    <p className="text-xs text-slate-500 truncate">{airport.airport}</p>
                                                </div>
                                                <div className="text-sm font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded shrink-0">{airport.code}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Date */}
                        <div className="flex border border-slate-200 rounded-lg hover:border-primary transition-colors">
                            <div className="w-1/2 p-3 border-r border-slate-200">
                                <p className="text-xs text-slate-500 font-medium mb-1">DEPARTURE DATE</p>
                                <input
                                    type="date"
                                    className="text-lg font-bold text-slate-900 w-full outline-none bg-transparent"
                                    value={departureDate}
                                    onChange={(e) => setDepartureDate(e.target.value)}
                                />
                            </div>
                            <div className="w-1/2 p-3 bg-slate-50/50">
                                <p className="text-xs text-slate-500 font-medium mb-1">RETURN DATE</p>
                                {selectedFlightType === 'Round Trip' ? (
                                    <input
                                        type="date"
                                        className="text-lg font-bold text-slate-900 w-full outline-none bg-transparent"
                                        value={returnDate}
                                        onChange={(e) => setReturnDate(e.target.value)}
                                    />
                                ) : (
                                    <p className="text-sm text-slate-400 mt-2 font-medium">Not required</p>
                                )}
                            </div>
                        </div>

                        {/* Travelers & Class */}
                        <div
                            ref={travelerRef}
                            className={`border ${showTravelerDropdown ? 'border-primary' : 'border-slate-200'} rounded-lg p-3 hover:border-primary transition-colors cursor-pointer relative`}
                            onClick={() => setShowTravelerDropdown(!showTravelerDropdown)}
                        >
                            <p className="text-xs text-slate-500 font-medium mb-1">TRAVELER, CLASS</p>
                            <p className="text-xl font-bold text-slate-900">{getTotalTravelers()} Traveler{getTotalTravelers() > 1 ? 's' : ''}</p>
                            <p className="text-sm text-slate-500 mt-1">{travelClass.replace('_', ' ')}</p>

                            {/* Dropdown */}
                            {showTravelerDropdown && (
                                <div className="absolute top-[105%] right-0 w-80 bg-white shadow-xl border border-slate-100 rounded-xl z-50 p-4" onClick={(e) => e.stopPropagation()}>

                                    {/* Adults */}
                                    <div className="flex justify-between items-center mb-4">
                                        <div>
                                            <p className="font-bold text-slate-900">Adults</p>
                                            <p className="text-[10px] text-slate-500">12 yrs and above</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button
                                                className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-slate-300 disabled:hover:text-slate-600"
                                                disabled={travelers <= 1}
                                                onClick={() => setTravelers(t => Math.max(1, t - 1))}
                                            >-</button>
                                            <span className="font-bold w-4 text-center">{travelers}</span>
                                            <button
                                                className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-slate-300 disabled:hover:text-slate-600"
                                                disabled={travelers >= 9}
                                                onClick={() => setTravelers(t => Math.min(9, t + 1))}
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
                                            <span className="font-bold w-4 text-center">{children}</span>
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
                                            <span className="font-bold w-4 text-center">{infants}</span>
                                            <button
                                                className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-slate-300 disabled:hover:text-slate-600"
                                                disabled={infants >= travelers}
                                                onClick={() => setInfants(i => Math.min(travelers, i + 1))}
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
                    </div>

                    <div className="flex justify-center mt-2">
                        <button
                            onClick={handleSearch}
                            disabled={loading}
                            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors disabled:opacity-50 flex items-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                    Searching...
                                </>
                            ) : (
                                'Search Flights'
                            )}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}
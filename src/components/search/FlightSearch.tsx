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

type Airport = {
    city: string;
    code: string;
    airport: string;
};

type MultiCitySegment = {
    fromCode: string;
    toCode: string;
    date: string;
};

function normalizeTravelClassInput(value: string): string {
    return value.trim().toLowerCase().replace(/[\s-]+/g, '_');
}

function mapFlightTypeToQueryType(flightType: string): 'round-trip' | 'one-way' | 'multi-city' {
    if (flightType === 'Round Trip') return 'round-trip';
    if (flightType === 'Multi City') return 'multi-city';
    return 'one-way';
}

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
    const [flexSearch, setFlexSearch] = useState(false);
    const [multiCitySegments, setMultiCitySegments] = useState<MultiCitySegment[]>([
        { fromCode: 'DAC', toCode: 'CXB', date: '2026-03-03' },
        { fromCode: 'CXB', toCode: 'ZYL', date: '2026-03-06' },
    ]);

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

    const updateMultiCitySegment = (index: number, updates: Partial<MultiCitySegment>) => {
        setMultiCitySegments((prev) =>
            prev.map((segment, currentIndex) =>
                currentIndex === index ? { ...segment, ...updates } : segment
            )
        );
    };

    const addMultiCitySegment = () => {
        if (multiCitySegments.length >= 5) return;
        setMultiCitySegments((prev) => [
            ...prev,
            { fromCode: prev[prev.length - 1]?.toCode || 'DAC', toCode: 'CXB', date: departureDate },
        ]);
    };

    const removeMultiCitySegment = (index: number) => {
        if (multiCitySegments.length <= 2) return;
        setMultiCitySegments((prev) => prev.filter((_, currentIndex) => currentIndex !== index));
    };

    const getAirportByCode = (code: string): Airport =>
        popularAirports.find((airport) => airport.code === code) || popularAirports[0];

    const handleSearch = () => {
        setLoading(true);

        if (selectedFlightType === 'Multi City') {
            const validSegments = multiCitySegments.filter(
                (segment) => segment.fromCode && segment.toCode && segment.date
            );
            const firstSegment = validSegments[0] || multiCitySegments[0];
            const firstOrigin = getAirportByCode(firstSegment.fromCode);
            const firstDestination = getAirportByCode(firstSegment.toCode);

            const queryParams = new URLSearchParams({
                origin: firstOrigin.code,
                originCity: firstOrigin.city,
                destination: firstDestination.code,
                destinationCity: firstDestination.city,
                departureDate: firstSegment.date,
                adults: travelers.toString(),
                children: children.toString(),
                infants_in_seat: infants.toString(),
                infants_on_lap: '0',
                travelClass: normalizeTravelClassInput(travelClass),
                type: 'multi-city',
                multiCity: JSON.stringify(validSegments),
                flexSearch: flexSearch ? '1' : '0',
            });

            router.push(`/flights/search?${queryParams.toString()}`);
            return;
        }

        const queryParams = new URLSearchParams({
            origin: from.code,
            originCity: from.city,
            destination: to.code,
            destinationCity: to.city,
            departureDate,
            adults: travelers.toString(),
            children: children.toString(),
            infants_in_seat: infants.toString(),
            infants_on_lap: '0',
            travelClass: normalizeTravelClassInput(travelClass),
            type: mapFlightTypeToQueryType(selectedFlightType),
            flexSearch: flexSearch ? '1' : '0',
        });

        if (selectedFlightType !== 'One Way' && returnDate) {
            queryParams.set('returnDate', returnDate);
        }

        router.push(`/flights/search?${queryParams.toString()}`);
    };

    return (
        <div className="w-full flex flex-col gap-4 text-slate-800">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                {flightTypes.map((type) => (
                    <label key={type} className="inline-flex items-center gap-2 cursor-pointer select-none">
                        <input
                            type="radio"
                            name="flight-type"
                            checked={selectedFlightType === type}
                            onChange={() => setSelectedFlightType(type)}
                            className="h-4 w-4 accent-primary"
                        />
                        <span className="font-medium text-slate-700">{type}</span>
                    </label>
                ))}

                <div className="inline-flex items-center gap-2">
                    <span className="text-slate-600">Class</span>
                    <select
                        value={travelClass}
                        onChange={(e) => setTravelClass(e.target.value)}
                        className="h-9 rounded-md border border-slate-300 bg-white px-2.5 text-sm font-medium text-slate-700 outline-none focus:border-primary"
                    >
                        {['Economy', 'Premium_Economy', 'Business', 'First'].map((c) => (
                            <option key={c} value={c}>{c.replace('_', ' ')}</option>
                        ))}
                    </select>
                </div>

                <div
                    ref={travelerRef}
                    className={`relative inline-flex items-center gap-2 rounded-md border px-2.5 h-9 cursor-pointer ${showTravelerDropdown ? 'border-primary ring-2 ring-primary/15' : 'border-slate-300'}`}
                    onClick={() => setShowTravelerDropdown(!showTravelerDropdown)}
                >
                    <span>👤</span>
                    <span className="text-sm font-medium text-slate-700">{getTotalTravelers()}</span>

                    {showTravelerDropdown && (
                        <div className="absolute top-[115%] left-0 w-[320px] max-w-[calc(100vw-2rem)] bg-white shadow-xl border border-slate-100 rounded-xl z-50 p-4" onClick={(e) => e.stopPropagation()}>
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <p className="font-bold text-slate-900">Adults</p>
                                    <p className="text-[10px] text-slate-500">12 yrs and above</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary disabled:opacity-30"
                                        disabled={travelers <= 1}
                                        onClick={() => setTravelers(t => Math.max(1, t - 1))}
                                    >-</button>
                                    <span className="font-bold w-4 text-center">{travelers}</span>
                                    <button
                                        className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary disabled:opacity-30"
                                        disabled={travelers >= 9}
                                        onClick={() => setTravelers(t => Math.min(9, t + 1))}
                                    >+</button>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <p className="font-bold text-slate-900">Children</p>
                                    <p className="text-[10px] text-slate-500">2-11 yrs</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary disabled:opacity-30"
                                        disabled={children <= 0}
                                        onClick={() => setChildren(c => Math.max(0, c - 1))}
                                    >-</button>
                                    <span className="font-bold w-4 text-center">{children}</span>
                                    <button
                                        className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary disabled:opacity-30"
                                        disabled={children >= 9}
                                        onClick={() => setChildren(c => Math.min(9, c + 1))}
                                    >+</button>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <p className="font-bold text-slate-900">Infants</p>
                                    <p className="text-[10px] text-slate-500">Below 2 yrs</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary disabled:opacity-30"
                                        disabled={infants <= 0}
                                        onClick={() => setInfants(i => Math.max(0, i - 1))}
                                    >-</button>
                                    <span className="font-bold w-4 text-center">{infants}</span>
                                    <button
                                        className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary disabled:opacity-30"
                                        disabled={infants >= travelers}
                                        onClick={() => setInfants(i => Math.min(travelers, i + 1))}
                                    >+</button>
                                </div>
                            </div>

                            <button
                                className="w-full mt-1 bg-primary text-white font-bold py-2 rounded-lg hover:bg-primary/90 transition-colors"
                                onClick={() => setShowTravelerDropdown(false)}
                            >
                                Done
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {selectedFlightType !== 'Multi City' ? (
                <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_56px_1.45fr_1.25fr] gap-3 items-stretch">
                        <div
                            ref={fromRef}
                            className={`xl:col-start-1 border ${showFromDropdown ? 'border-primary ring-2 ring-primary/15' : 'border-slate-300'} rounded-lg p-3.5 hover:border-primary transition-all cursor-pointer relative bg-white min-h-[86px]`}
                            onClick={() => setShowFromDropdown(!showFromDropdown)}
                        >
                            <p className="text-xs text-slate-500 font-medium mb-1">Journey From</p>
                            <p className="text-[17px] font-semibold text-slate-800 truncate">{from.city} - {from.code}</p>
                            <p className="text-xs text-slate-500 truncate">{from.airport}</p>

                            {showFromDropdown && (
                                <div className="absolute top-[105%] left-0 w-full min-w-[280px] max-w-[420px] bg-white shadow-xl border border-slate-100 rounded-xl z-50 max-h-80 overflow-y-auto">
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
                        </div>

                        <div className="xl:col-start-2 order-2 xl:order-none flex items-center justify-center">
                            <button
                                type="button"
                                className="w-12 h-12 xl:w-11 xl:h-11 rounded-full border border-slate-300 bg-white text-primary text-lg hover:border-primary hover:bg-primary/5 transition-colors"
                                onClick={swapLocations}
                                aria-label="Swap origin and destination"
                            >
                                ⇄
                            </button>
                        </div>

                        <div
                            ref={toRef}
                            className={`xl:col-start-3 order-1 xl:order-none border ${showToDropdown ? 'border-primary ring-2 ring-primary/15' : 'border-slate-300'} rounded-lg p-3.5 hover:border-primary transition-all cursor-pointer relative bg-white min-h-[86px]`}
                            onClick={() => setShowToDropdown(!showToDropdown)}
                        >
                            <p className="text-xs text-slate-500 font-medium mb-1">Journey To</p>
                            <p className="text-[17px] font-semibold text-slate-800 truncate">{to.city} - {to.code}</p>
                            <p className="text-xs text-slate-500 truncate">{to.airport}</p>

                            {showToDropdown && (
                                <div className="absolute top-[105%] left-0 md:right-0 md:left-auto w-full min-w-[280px] max-w-[420px] bg-white shadow-xl border border-slate-100 rounded-xl z-50 max-h-80 overflow-y-auto">
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

                        <div className="xl:col-start-4 grid grid-cols-2 border border-slate-300 rounded-lg hover:border-primary transition-colors bg-white overflow-hidden min-h-[86px]">
                            <div className="p-3.5 border-r border-slate-200 flex flex-col justify-center">
                                <p className="text-xs text-slate-500 font-medium mb-1">Departing</p>
                                <input
                                    type="date"
                                    className="text-sm md:text-base font-semibold text-slate-800 w-full outline-none bg-transparent [color-scheme:light]"
                                    value={departureDate}
                                    onChange={(e) => setDepartureDate(e.target.value)}
                                />
                            </div>
                            <div className="p-3.5 bg-slate-50/50 flex flex-col justify-center">
                                <p className="text-xs text-slate-500 font-medium mb-1">Returning</p>
                                {selectedFlightType !== 'One Way' ? (
                                    <input
                                        type="date"
                                        className="text-sm md:text-base font-semibold text-slate-800 w-full outline-none bg-transparent [color-scheme:light]"
                                        value={returnDate}
                                        onChange={(e) => setReturnDate(e.target.value)}
                                    />
                                ) : (
                                    <p className="text-sm text-slate-400 mt-1 font-medium">Not required</p>
                                )}
                            </div>
                        </div>
                </div>
            ) : (
                <div className="border border-slate-300 rounded-lg bg-slate-50/40 p-3 md:p-4">
                    <div className="space-y-3">
                        {multiCitySegments.map((segment, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-11 gap-3 items-end bg-white border border-slate-300 rounded-lg p-3">
                                <div className="md:col-span-4">
                                    <label className="text-xs text-slate-500 font-medium mb-1 block">Journey From</label>
                                    <select
                                        value={segment.fromCode}
                                        onChange={(e) => updateMultiCitySegment(index, { fromCode: e.target.value })}
                                        className="w-full h-11 rounded-lg border border-slate-300 px-3 text-sm font-medium text-slate-800 outline-none focus:border-primary"
                                    >
                                        {popularAirports.map((airport) => (
                                            <option key={`multi-from-${index}-${airport.code}`} value={airport.code}>
                                                {airport.city} ({airport.code})
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="md:col-span-4">
                                    <label className="text-xs text-slate-500 font-medium mb-1 block">Journey To</label>
                                    <select
                                        value={segment.toCode}
                                        onChange={(e) => updateMultiCitySegment(index, { toCode: e.target.value })}
                                        className="w-full h-11 rounded-lg border border-slate-300 px-3 text-sm font-medium text-slate-800 outline-none focus:border-primary"
                                    >
                                        {popularAirports.map((airport) => (
                                            <option key={`multi-to-${index}-${airport.code}`} value={airport.code}>
                                                {airport.city} ({airport.code})
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="md:col-span-2">
                                    <label className="text-xs text-slate-500 font-medium mb-1 block">Departing</label>
                                    <input
                                        type="date"
                                        value={segment.date}
                                        onChange={(e) => updateMultiCitySegment(index, { date: e.target.value })}
                                        className="w-full h-11 rounded-lg border border-slate-300 px-3 text-sm font-semibold text-slate-800 outline-none focus:border-primary [color-scheme:light]"
                                    />
                                </div>

                                <div className="md:col-span-1 flex md:justify-end">
                                    <button
                                        type="button"
                                        className="w-full md:w-auto h-11 px-3 rounded-lg border border-slate-300 text-slate-600 font-medium hover:border-red-300 hover:text-red-500 disabled:opacity-40 disabled:cursor-not-allowed"
                                        disabled={multiCitySegments.length <= 2}
                                        onClick={() => removeMultiCitySegment(index)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className="flex justify-between items-center gap-3 flex-wrap pt-1">
                            <p className="text-sm text-slate-500">Add up to 5 flight legs for multi-city booking.</p>
                            <button
                                type="button"
                                onClick={addMultiCitySegment}
                                disabled={multiCitySegments.length >= 5}
                                className="h-10 px-4 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                                + Add Another Flight
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex justify-center pt-1">
                <button
                    onClick={handleSearch}
                    disabled={loading}
                    className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-bold py-3 px-10 rounded-lg shadow-sm transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            Searching...
                        </>
                    ) : (
                        'Search Now'
                    )}
                </button>
            </div>
        </div>
    );
}
import { useState } from 'react';

const flightTypes = ['One Way', 'Round Trip', 'Multi City'];

export default function FlightSearch() {
    const [selectedFlightType, setSelectedFlightType] = useState('One Way');
    const [from, setFrom] = useState({ city: 'Dhaka', code: 'DAC', airport: 'Hazrat Shahjalal International Airport' });
    const [to, setTo] = useState({ city: "Cox's Bazar", code: 'CXB', airport: "Cox's Bazar Airport" });
    const [departureDate, setDepartureDate] = useState('2026-03-03');
    const [returnDate, setReturnDate] = useState('');
    const [travelers, setTravelers] = useState(1);
    const [travelClass, setTravelClass] = useState('Economy');

    const swapLocations = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
    };

    return (
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
                    className="border border-slate-200 rounded-lg p-3 hover:border-primary transition-colors cursor-pointer relative"
                    onClick={() => console.log('Open From airport selector')}
                >
                    <p className="text-xs text-slate-500 font-medium mb-1">FROM</p>
                    <p className="text-xl font-bold text-slate-900 truncate">{from.city}</p>
                    <p className="text-xs text-slate-500 truncate mt-1">{from.code}, {from.airport}</p>

                    {/* Swap Button */}
                    <div
                        className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white border border-slate-200 rounded-full w-8 h-8 flex items-center justify-center shadow-sm cursor-pointer hover:bg-slate-50"
                        onClick={swapLocations}
                    >
                        <span className="text-primary text-xs">⇄</span>
                    </div>
                </div>

                {/* To */}
                <div
                    className="border border-slate-200 rounded-lg p-3 hover:border-primary transition-colors cursor-pointer"
                    onClick={() => console.log('Open To airport selector')}
                >
                    <p className="text-xs text-slate-500 font-medium mb-1">TO</p>
                    <p className="text-xl font-bold text-slate-900 truncate">{to.city}</p>
                    <p className="text-xs text-slate-500 truncate mt-1">{to.code}, {to.airport}</p>
                </div>

                {/* Date */}
                <div className="flex border border-slate-200 rounded-lg hover:border-primary transition-colors cursor-pointer">
                    <div
                        className="w-1/2 p-3 border-r border-slate-200"
                        onClick={() => console.log('Open Departure Date picker')}
                    >
                        <p className="text-xs text-slate-500 font-medium mb-1">DEPARTURE DATE</p>
                        <p className="text-xl font-bold text-slate-900">{departureDate}</p>
                    </div>
                    <div
                        className="w-1/2 p-3 bg-slate-50/50 cursor-pointer"
                        onClick={() => console.log('Open Return Date picker')}
                    >
                        <p className="text-xs text-slate-500 font-medium mb-1">RETURN DATE</p>
                        {selectedFlightType === 'Round Trip' ? (
                            <p className="text-xl font-bold text-slate-900">{returnDate || 'Select Date'}</p>
                        ) : (
                            <p className="text-sm text-slate-400 mt-2 font-medium">Not required</p>
                        )}
                    </div>
                </div>

                {/* Travelers & Class */}
                <div
                    className="border border-slate-200 rounded-lg p-3 hover:border-primary transition-colors cursor-pointer"
                    onClick={() => console.log('Open Traveler selector')}
                >
                    <p className="text-xs text-slate-500 font-medium mb-1">TRAVELER, CLASS</p>
                    <p className="text-xl font-bold text-slate-900">{travelers} Traveler{travelers > 1 ? 's' : ''}</p>
                    <p className="text-xs text-slate-500 mt-1">{travelClass}</p>
                </div>
            </div>
        </div>
    );
}
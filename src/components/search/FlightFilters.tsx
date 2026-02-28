"use client";

import { useState } from 'react';

export default function FlightFilters() {
    // In a real implementation, these would dispatch to a context/state manager
    // to filter the flights array in the parent component.
    const [priceRange, setPriceRange] = useState(50000);
    const [stops, setStops] = useState({ direct: true, one: true, twoPlus: false });

    return (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm sticky top-24">
            <h3 className="font-bold text-slate-900 mb-6 flex justify-between items-center">
                Filter Results
                <button className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">Reset</button>
            </h3>

            {/* Price Filter */}
            <div className="mb-6 pb-6 border-b border-slate-100">
                <h4 className="font-bold text-slate-800 mb-3 text-sm">Price Range</h4>
                <div className="flex justify-between text-xs text-slate-500 font-medium mb-2">
                    <span>0 BDT</span>
                    <span>{priceRange.toLocaleString()} BDT</span>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100000"
                    step="1000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
            </div>

            {/* Stops Filter */}
            <div className="mb-6 pb-6 border-b border-slate-100">
                <h4 className="font-bold text-slate-800 mb-3 text-sm">Stops</h4>
                <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-5 h-5">
                            <input
                                type="checkbox"
                                className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded checked:bg-primary checked:border-primary transition-colors cursor-pointer"
                                checked={stops.direct}
                                onChange={(e) => setStops({ ...stops, direct: e.target.checked })}
                            />
                            <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium select-none">Direct Flight</span>
                        <span className="ml-auto text-xs text-slate-400">12</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-5 h-5">
                            <input
                                type="checkbox"
                                className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded checked:bg-primary checked:border-primary transition-colors cursor-pointer"
                                checked={stops.one}
                                onChange={(e) => setStops({ ...stops, one: e.target.checked })}
                            />
                            <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium select-none">1 Stop</span>
                        <span className="ml-auto text-xs text-slate-400">45</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-5 h-5">
                            <input
                                type="checkbox"
                                className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded checked:bg-primary checked:border-primary transition-colors cursor-pointer"
                                checked={stops.twoPlus}
                                onChange={(e) => setStops({ ...stops, twoPlus: e.target.checked })}
                            />
                            <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium select-none">2+ Stops</span>
                        <span className="ml-auto text-xs text-slate-400">8</span>
                    </label>
                </div>
            </div>

            {/* Departure Time */}
            <div className="mb-6 pb-6 border-b border-slate-100">
                <h4 className="font-bold text-slate-800 mb-3 text-sm">Departure Time</h4>
                <div className="grid grid-cols-2 gap-2">
                    <button className="border border-slate-200 hover:border-primary hover:bg-primary/5 rounded-lg py-2 flex flex-col items-center justify-center gap-1 transition-colors">
                        <span className="text-lg">🌅</span>
                        <span className="text-xs font-bold text-slate-600">00:00 - 06:00</span>
                    </button>
                    <button className="border border-slate-200 hover:border-primary hover:bg-primary/5 rounded-lg py-2 flex flex-col items-center justify-center gap-1 transition-colors">
                        <span className="text-lg">☀️</span>
                        <span className="text-xs font-bold text-slate-600">06:00 - 12:00</span>
                    </button>
                    <button className="border border-slate-200 hover:border-primary hover:bg-primary/5 rounded-lg py-2 flex flex-col items-center justify-center gap-1 transition-colors">
                        <span className="text-lg">🌇</span>
                        <span className="text-xs font-bold text-slate-600">12:00 - 18:00</span>
                    </button>
                    <button className="border border-slate-200 hover:border-primary hover:bg-primary/5 rounded-lg py-2 flex flex-col items-center justify-center gap-1 transition-colors">
                        <span className="text-lg">🌙</span>
                        <span className="text-xs font-bold text-slate-600">18:00 - 00:00</span>
                    </button>
                </div>
            </div>

            <div className="text-center">
                <p className="text-xs text-slate-400">Showing all available flights</p>
            </div>
        </div>
    );
}

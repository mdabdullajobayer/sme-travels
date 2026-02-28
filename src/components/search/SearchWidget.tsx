'use client';

import React, { useState } from 'react';
import Tabs from './Tabs';
import FlightSearch from './FlightSearch';
import HotelSearch from './HotelSearch';
import TourSearch from './TourSearch';
import VisaSearch from './VisaSearch';
import HajjSearch from './HajjSearch';
import UmrahSearch from './UmrahSearch';

export type TabType = 'Flight' | 'Hotel' | 'Tour' | 'Visa' | 'Hajj' | 'Umrah';

export default function SearchWidget() {
    const [activeTab, setActiveTab] = useState<TabType>('Flight');

    return (
        <div className="w-full">
            {/* Tabs */}
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Main Search Area */}
            <div className="p-6">
                {activeTab === 'Flight' && <FlightSearch />}
                {activeTab === 'Hotel' && <HotelSearch />}
                {activeTab === 'Tour' && <TourSearch />}
                {activeTab === 'Visa' && <VisaSearch />}
                {activeTab === 'Hajj' && <HajjSearch />}
                {activeTab === 'Umrah' && <UmrahSearch />}
            </div>

            {/* Floating Search Button */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <button className="bg-secondary hover:bg-secondary-hover text-slate-900 font-bold px-12 py-3 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all w-[240px]">
                    Search
                </button>
            </div>
        </div>
    );
}

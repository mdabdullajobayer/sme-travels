import React from 'react';
import { Plane, Building2, Map, CreditCard, Tent, MoonStar } from 'lucide-react';
import { TabType } from './SearchWidget';

interface TabsProps {
    activeTab: TabType;
    setActiveTab: (tab: TabType) => void;
}

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
    const tabs = [
        { id: 'Flight', icon: Plane, label: 'Flight' },
        { id: 'Hotel', icon: Building2, label: 'Hotel' },
        { id: 'Tour', icon: Map, label: 'Tour' },
        { id: 'Visa', icon: CreditCard, label: 'Visa' },
        { id: 'Hajj', icon: Tent, label: 'Hajj' },
        { id: 'Umrah', icon: MoonStar, label: 'Umrah' },
    ] as const;

    return (
        <div className="flex border-b border-slate-200 px-6 pt-4">
            {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as TabType)}
                        className={`flex items-center gap-2 px-6 py-4 font-semibold text-lg relative transition-colors ${isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'
                            }`}
                    >
                        <Icon className="w-5 h-5" />
                        {tab.label}
                        {isActive && (
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary rounded-t-md"></span>
                        )}
                    </button>
                );
            })}
        </div>
    );
}

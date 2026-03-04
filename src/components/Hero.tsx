import React from 'react';
import SearchWidget from './search/SearchWidget';

export default function Hero() {
    return (
        <section className="relative w-full min-h-[700px] md:min-h-[760px] flex items-center justify-center -mt-16 pt-20 pb-16 overflow-visible">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-slate-900/35 to-slate-950/60"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs sm:text-sm text-white/95 mb-5">
                        Trusted Travel Partner for Flights, Hotels & Holidays
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight drop-shadow-md">
                        সব থেকে স্বল্প খরচে ভ্রমণ
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                        সবচেয়ে সাশ্রয়ী মূল্যে ভ্রমণের নিশ্চয়তা 
                    </p>
                </div>

                <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-white/70 shadow-xl w-full max-w-7xl mx-auto relative overflow-visible">
                    <SearchWidget />
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import SearchWidget from './search/SearchWidget';

export default function Hero() {
    return (
        <div className="relative w-full h-[700px] flex items-center justify-center -mt-16 pt-16">
            {/* Background Image Setup (using a placeholder that looks tropical) */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                        সব থেকে স্বল্প খরচে ভ্রমণ
                    </h1>
                    <p className="text-lg text-white/90 drop-shadow-md">
                        Find the best flights, hotels, and tours at unbeatable prices.
                    </p>
                </div>

                {/* Floating Search Widget */}
                <div className="bg-white rounded-[20px] shadow-2xl w-full max-w-5xl mx-auto pb-6 relative">
                    <SearchWidget />
                </div>
            </div>
        </div>
    );
}

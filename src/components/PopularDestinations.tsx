import React from 'react';

export default function PopularDestinations() {
    const destinations = [
        {
            id: 1,
            city: "Cox's Bazar",
            country: "Bangladesh",
            image: "https://images.unsplash.com/photo-1608958435020-e855b0b30fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            properties: 124
        },
        {
            id: 2,
            city: "Kathmandu",
            country: "Nepal",
            image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            properties: 342
        },
        {
            id: 3,
            city: "Bangkok",
            country: "Thailand",
            image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            properties: 1530
        },
        {
            id: 4,
            city: "Dubai",
            country: "UAE",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            properties: 850
        },
        {
            id: 5,
            city: "Sylhet",
            country: "Bangladesh",
            image: "https://images.unsplash.com/photo-1631464372986-e3d64fe3050c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            properties: 86
        }
    ];

    return (
        <section className="w-full px-8 sm:px-6 lg:px-8 py-12">
            <div className="mb-8 text-center sm:text-left">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Explore Popular Destinations</h2>
                <p className="text-slate-600">These destinations have a lot to offer</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 h-[400px]">
                {/* Large Item 1 */}
                <div className="group md:col-span-3 lg:col-span-2 relative rounded-2xl overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${destinations[0].image})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-2xl font-bold drop-shadow-md">{destinations[0].city}</h3>
                        <div className="flex items-center gap-2 mt-1 drop-shadow-md">
                            <span className="text-sm font-medium opacity-90">{destinations[0].country}</span>
                            <span className="w-1 h-1 bg-white rounded-full"></span>
                            <span className="text-sm">{destinations[0].properties} properties</span>
                        </div>
                    </div>
                </div>

                {/* Small Items grid */}
                <div className="grid grid-rows-2 gap-4 md:col-span-3 lg:col-span-4 h-full">
                    <div className="grid grid-cols-2 gap-4">
                        {/* Small Item 2 */}
                        <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${destinations[1].image})` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white">
                                <h3 className="text-xl font-bold drop-shadow-md">{destinations[1].city}</h3>
                                <p className="text-xs opacity-90">{destinations[1].properties} properties</p>
                            </div>
                        </div>

                        {/* Small Item 3 */}
                        <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${destinations[2].image})` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white">
                                <h3 className="text-xl font-bold drop-shadow-md">{destinations[2].city}</h3>
                                <p className="text-xs opacity-90">{destinations[2].properties} properties</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Small Item 4 */}
                        <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${destinations[3].image})` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white">
                                <h3 className="text-xl font-bold drop-shadow-md">{destinations[3].city}</h3>
                                <p className="text-xs opacity-90">{destinations[3].properties} properties</p>
                            </div>
                        </div>

                        {/* Small Item 5 */}
                        <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${destinations[4].image})` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white">
                                <h3 className="text-xl font-bold drop-shadow-md">{destinations[4].city}</h3>
                                <p className="text-xs opacity-90">{destinations[4].properties} properties</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

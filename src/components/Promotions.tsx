import React from 'react';
import Image from 'next/image';

export default function Promotions() {
    const promotions = [
        {
            id: 1,
            title: 'BDT 200 Discount',
            description: 'New Individual Customer will get BDT 200 Discount on first 10 tickets only.',
            code: 'AMYNEW200',
            bgType: 'bg-gradient-to-r from-blue-600 to-primary'
        },
        {
            id: 2,
            title: 'Up to 15% OFF on Hotels',
            description: 'Book domestic or international hotels and save up to 15% immediately.',
            code: 'STAY15',
            bgType: 'bg-gradient-to-r from-teal-500 to-emerald-400'
        },
        {
            id: 3,
            title: 'Visa Assistance Deal',
            description: 'Get smooth visa processing at flat 10% discount this month.',
            code: 'VISA10',
            bgType: 'bg-gradient-to-r from-purple-500 to-indigo-500'
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Exciting Offers</h2>
                    <p className="text-slate-600">Save more on your next journey with these exclusive promotions</p>
                </div>
                <button className="text-primary font-semibold hover:underline">View All</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {promotions.map((promo) => (
                    <div key={promo.id} className={`${promo.bgType} rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                        {/* Background design accents */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -translate-x-6 translate-y-6"></div>

                        <div className="relative z-10">
                            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide backdrop-blur-sm">Limited Time</span>
                            <h3 className="text-2xl font-bold mt-4 mb-2">{promo.title}</h3>
                            <p className="text-white/90 text-sm mb-6 leading-relaxed">{promo.description}</p>

                            <div className="flex items-center justify-between">
                                <div className="bg-white/20 backdrop-blur-md rounded border border-white/30 border-dashed px-3 py-1 text-sm font-mono tracking-widest">
                                    {promo.code}
                                </div>
                                <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-slate-50 transition-colors shadow-sm">
                                    Copy Code
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

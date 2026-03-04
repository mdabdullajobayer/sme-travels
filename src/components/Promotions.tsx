import React from 'react';

export default function Promotions() {
    const promotions = [
        {
            id: 1,
            image: '/offers/image.jpg',
        },
        {
            id: 2,
            image: '/offers/image.jpg',
        },
        {
            id: 3,
            image: '/offers/image.jpg',
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {promotions.map((promo) => (
                    <div key={promo.id} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <img
                            src={promo.image}
                            alt="Offer image"
                            className="w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

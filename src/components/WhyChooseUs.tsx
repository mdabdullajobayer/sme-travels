export default function WhyChooseUs() {
    const features = [
        {
            title: "Best Price Guarantee",
            description: "Find a lower price? We'll match it and give you more.",
            icon: "🏷️",
            color: "bg-blue-50 text-blue-600"
        },
        {
            title: "24/7 Customer Support",
            description: "We're here to help you anytime, anywhere in the world.",
            icon: "🎧",
            color: "bg-green-50 text-green-600"
        },
        {
            title: "Easy & Instant Booking",
            description: "Book flights, hotels, and tours in just a few clicks.",
            icon: "⚡",
            color: "bg-orange-50 text-orange-600"
        },
        {
            title: "Secure Payments",
            description: "Your transactions are protected with top-tier security.",
            icon: "🔒",
            color: "bg-purple-50 text-purple-600"
        }
    ];

    return (
        <section className="py-12 md:py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose SME Travels?</h2>
                    <p className="text-slate-600 text-lg">
                        We make travel planning as easy as the trip itself. Enjoy premium services with unbeatable value.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-6 ${feature.color}`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-slate-500 line-clamp-3">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

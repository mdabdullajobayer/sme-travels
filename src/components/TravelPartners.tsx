export default function TravelPartners() {
    const airlines = [
        "Biman Bangladesh",
        "US-Bangla",
        "Novoair",
        "AirAstra",
        "Emirates",
        "Qatar Airways",
        "Saudi Airlines",
        "Singapore Airlines",
        "Thai Airways",
        "SriLankan Airlines",
        "Indigo",
        "Vistara"
    ];

    return (
        <section className="py-10 border-y border-slate-100 bg-slate-50/50 overflow-hidden">
            <div className="container mx-auto px-4 mb-8">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-800">Our Trusted Travel Partners</h2>
                    <p className="text-slate-500 mt-2">Connecting you with the world's best airlines</p>
                </div>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-12 py-4">
                    {airlines.map((airline, index) => (
                        <span key={index} className="text-xl md:text-2xl font-bold text-slate-300 mx-4 transition-colors hover:text-primary cursor-default grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                            {airline}
                        </span>
                    ))}
                </div>
                {/* Duplicate for infinite loop */}
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-12 py-4">
                    {airlines.map((airline, index) => (
                        <span key={`dup-${index}`} className="text-xl md:text-2xl font-bold text-slate-300 mx-4 transition-colors hover:text-primary cursor-default grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                            {airline}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

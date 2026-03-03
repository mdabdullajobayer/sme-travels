export default function DownloadApp() {
    return (
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white via-primary/[0.03] to-white">
            <div className="container mx-auto">
                <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 bg-white rounded-3xl p-7 md:p-10 lg:p-12 border border-slate-200/80 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.35)] overflow-hidden">
                    {/* Decorative backgrounds */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.06),transparent_35%)]"></div>

                    <div className="w-full lg:w-1/2 relative z-10 flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm w-max">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            Get the App
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                            Your Trip, On <span className="text-primary">Your Phone</span>
                        </h2>
                        <p className="text-base md:text-lg text-slate-600 max-w-xl">
                            Book cheaper flights, manage your itinerary on the go, and unlock exclusive app-only deals.
                        </p>

                        <div className="flex flex-wrap gap-3 md:gap-4 items-center">
                            {/* App Store button */}
                            <button className="bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-3 px-5 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg">
                                <div className="text-2xl"></div>
                                <div className="text-left">
                                    <p className="text-[10px] text-slate-300 uppercase font-medium tracking-wider">Download on the</p>
                                    <p className="text-base md:text-lg font-bold leading-none mt-1">App Store</p>
                                </div>
                            </button>

                            {/* Google Play button */}
                            <button className="bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-3 px-5 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg">
                                <div className="text-2xl">▶</div>
                                <div className="text-left">
                                    <p className="text-[10px] text-slate-300 uppercase font-medium tracking-wider">Get it on</p>
                                    <p className="text-base md:text-lg font-bold leading-none mt-1">Google Play</p>
                                </div>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] items-center gap-4 mt-4 pt-6 border-t border-slate-200/70">
                            <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm w-20 h-20 flex flex-col items-center justify-center text-center">
                                <span className="text-2xl font-bold text-slate-400">QR</span>
                                <span className="text-[10px] text-slate-400 mt-1">Scan to Download</span>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <div className="flex text-amber-500 text-sm tracking-wide">★★★★★</div>
                                <p className="font-bold text-slate-900">4.9/5 Rating</p>
                                <p className="text-xs text-slate-500">Over 1 Million Downloads</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end">
                        <div className="relative w-[250px] sm:w-[270px] h-[500px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden shadow-primary/20 transform lg:rotate-3 transition-transform hover:rotate-0 duration-500 ease-out flex flex-col">
                            {/* Phone Notch */}
                            <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-3xl z-20 w-32 mx-auto"></div>
                            {/* App Screen Mockup */}
                            <div className="flex-1 bg-slate-50 p-4 pt-10 flex flex-col gap-4">
                                <div className="flex justify-between items-center text-slate-900 font-bold">
                                    <span>Hi, Traveler 👋</span>
                                    <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                                </div>
                                <div className="bg-primary text-white p-4 rounded-2xl shadow-lg">
                                    <p className="text-xs opacity-80 mb-1">Upcoming Trip</p>
                                    <p className="font-bold text-xl">DAC ✈️ CXB</p>
                                    <p className="text-xs mt-2">Tomorrow, 10:00 AM</p>
                                </div>
                                <div className="flex-1 rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden flex flex-col p-4 gap-3">
                                    <p className="font-bold text-slate-900">Explore</p>
                                    <div className="h-24 bg-slate-100 rounded-xl relative overflow-hidden">
                                        <div className="absolute bottom-2 left-2 text-slate-400 font-bold text-sm">Cox's Bazar</div>
                                    </div>
                                    <div className="h-24 bg-slate-100 rounded-xl relative overflow-hidden">
                                        <div className="absolute bottom-2 left-2 text-slate-400 font-bold text-sm">Sylhet</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

export default function Newsletter() {
    return (
        <section className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center flex flex-col gap-6 items-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl mb-2 border border-white/20">
                        💌
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Get verified travel deals <br />
                        <span className="text-primary-light">straight to your inbox!</span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-xl">
                        Subscribe now and receive exclusive discounts on flights, hotels, and holiday packages. No spam, just deals.
                    </p>

                    <form className="w-full max-w-lg mt-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative flex items-center bg-white/10 p-1.5 rounded-full border border-white/20 backdrop-blur-md focus-within:bg-white/20 focus-within:border-white/40 transition-all">
                            <div className="pl-4 text-slate-400">
                                ✉️
                            </div>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-transparent text-white placeholder:text-slate-400 px-4 py-3 outline-none"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-colors whitespace-nowrap shadow-lg"
                            >
                                Subscribe
                            </button>
                        </div>
                        <p className="text-xs text-slate-400 mt-4">
                            By subscribing, you agree to our Terms & Conditions and Privacy Policy.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

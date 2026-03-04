export default function AboutUsPage() {
    return (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">About Us</h1>
                    <p className="text-sm text-slate-500">SME Travel Agency - Book Your Next Adventure</p>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed">
                    SME Travel Agency is a modern travel platform helping customers book flights, hotels, tours, and visa services with confidence and convenience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="rounded-xl border border-slate-200 p-4">
                        <p className="font-semibold text-slate-900 mb-1">Our Mission</p>
                        <p className="text-sm text-slate-600">Deliver seamless and affordable travel solutions for every journey.</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 p-4">
                        <p className="font-semibold text-slate-900 mb-1">Our Vision</p>
                        <p className="text-sm text-slate-600">Become the most trusted digital travel partner in the region.</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 p-4">
                        <p className="font-semibold text-slate-900 mb-1">Our Promise</p>
                        <p className="text-sm text-slate-600">Transparent pricing, responsive support, and traveler-first service.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

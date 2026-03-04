export default function TermsPage() {
    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms & Conditions</h1>
                <p className="text-sm text-slate-500 mb-6">SME Travel Agency - Book Your Next Adventure</p>

                <div className="space-y-5 text-slate-700 text-sm leading-relaxed">
                    <p>By using SME Travel Agency services, you agree to our booking, payment, and cancellation terms for flights, hotels, tours, and visa services.</p>
                    <p>All prices, schedules, and availability are subject to change by airlines, hotels, and suppliers without prior notice.</p>
                    <p>Travelers must provide accurate personal information and valid travel documents at the time of booking and travel.</p>
                    <p>SME Travel Agency acts as a booking facilitator and follows supplier policies for modifications, refunds, and service delivery.</p>
                </div>
            </div>
        </section>
    );
}

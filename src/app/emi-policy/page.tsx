export default function EmiPolicyPage() {
    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">EMI Policy</h1>
                <p className="text-sm text-slate-500 mb-6">SME Travel Agency - Book Your Next Adventure</p>

                <div className="space-y-5 text-slate-700 text-sm leading-relaxed">
                    <p>EMI options are available on eligible banks/cards and minimum transaction amounts.</p>
                    <p>Tenure, interest, and processing charges are determined by partner banks and payment gateways.</p>
                    <p>Travelers should review final EMI breakdown before payment confirmation.</p>
                    <p>Failed or reversed EMI transactions follow bank settlement timelines.</p>
                </div>
            </div>
        </section>
    );
}

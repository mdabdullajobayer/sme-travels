const bookings = [
    { id: 'BK-32918', route: 'DAC → CXB', type: 'Flight', date: '12 Mar 2026', status: 'Confirmed', amount: 'BDT 8,450' },
    { id: 'BK-32774', route: 'DAC → KUL', type: 'Flight', date: '20 Mar 2026', status: 'Pending', amount: 'BDT 31,200' },
    { id: 'BK-32092', route: 'Cox\'s Bazar Sea View', type: 'Hotel', date: '08 Feb 2026', status: 'Completed', amount: 'BDT 14,000' },
    { id: 'BK-31881', route: 'Visa Processing - Thailand', type: 'Visa', date: '31 Jan 2026', status: 'Completed', amount: 'BDT 4,500' },
];

export default function BookingsPage() {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Booking List</h1>
                    <p className="text-sm text-slate-600">All your SME Travel Agency flights, hotels, tours, and visa bookings.</p>
                </div>
                <button className="h-10 px-4 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors w-full md:w-auto">
                    New Booking
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-sm">
                    <thead>
                        <tr className="text-left text-slate-500 border-b border-slate-200">
                            <th className="py-3 font-semibold">Booking ID</th>
                            <th className="py-3 font-semibold">Service</th>
                            <th className="py-3 font-semibold">Type</th>
                            <th className="py-3 font-semibold">Date</th>
                            <th className="py-3 font-semibold">Amount</th>
                            <th className="py-3 font-semibold">Status</th>
                            <th className="py-3 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((row) => (
                            <tr key={row.id} className="border-b border-slate-100">
                                <td className="py-3 font-medium text-slate-900">{row.id}</td>
                                <td className="py-3 text-slate-700">{row.route}</td>
                                <td className="py-3 text-slate-700">{row.type}</td>
                                <td className="py-3 text-slate-700">{row.date}</td>
                                <td className="py-3 text-slate-900 font-medium">{row.amount}</td>
                                <td className="py-3">
                                    <span className="inline-flex rounded-full px-2.5 py-1 text-xs font-semibold bg-slate-100 text-slate-700">{row.status}</span>
                                </td>
                                <td className="py-3">
                                    <button className="text-primary font-semibold hover:underline">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

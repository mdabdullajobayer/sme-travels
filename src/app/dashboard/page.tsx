const stats = [
    { title: 'Total Bookings', value: '24', note: '+3 this month' },
    { title: 'Upcoming Trips', value: '6', note: 'Next trip in 4 days' },
    { title: 'Saved Travelers', value: '5', note: 'Ready for quick checkout' },
    { title: 'Reward Points', value: '18,240', note: 'Worth BDT 1,824' },
];

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">Welcome back</p>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">SME Travel Agency Dashboard</h1>
                <p className="text-sm text-slate-600 mt-2">Track flights, hotels, tours, and visa bookings from one place.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {stats.map((item) => (
                    <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        <p className="text-sm text-slate-500">{item.title}</p>
                        <p className="text-2xl font-bold text-slate-900 mt-1">{item.value}</p>
                        <p className="text-xs text-slate-500 mt-2">{item.note}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-4">Recent Activity</h3>
                    <ul className="space-y-3 text-sm text-slate-700">
                        <li className="flex justify-between"><span>Flight booked: DAC → KUL</span><span className="text-slate-500">2h ago</span></li>
                        <li className="flex justify-between"><span>Profile updated</span><span className="text-slate-500">Yesterday</span></li>
                        <li className="flex justify-between"><span>Payment method added</span><span className="text-slate-500">2 days ago</span></li>
                    </ul>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-4">Upcoming Trip</h3>
                    <div className="rounded-lg bg-primary text-white p-4">
                        <p className="text-xs text-white/80">Round Trip</p>
                        <p className="text-xl font-bold mt-1">Dhaka (DAC) → Bangkok (BKK)</p>
                        <p className="text-sm text-white/90 mt-2">Departure: 14 Mar 2026 • Return: 21 Mar 2026</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

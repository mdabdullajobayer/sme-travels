import Link from 'next/link';

const links = [
    { href: '/dashboard', label: 'Overview' },
    { href: '/dashboard/bookings', label: 'Booking List' },
    { href: '/dashboard/profile', label: 'Profile' },
    { href: '/dashboard/settings', label: 'Settings' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
                <aside className="rounded-2xl border border-slate-200 bg-white p-4 h-fit shadow-sm">
                    <h2 className="text-lg font-bold text-slate-900 mb-1">SME Travel Agency</h2>
                    <p className="text-xs text-slate-500 mb-4">Book Your Next Adventure</p>
                    <nav className="space-y-2">
                        {links.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-primary transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-6 rounded-xl bg-primary/5 border border-primary/15 p-3">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wide">Membership</p>
                        <p className="text-sm text-slate-700 mt-1">SME Premium Traveler</p>
                    </div>
                </aside>

                <div className="min-w-0">{children}</div>
            </div>
        </section>
    );
}

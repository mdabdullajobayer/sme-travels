import Link from 'next/link';

export default function SignupPage() {
    return (
        <section className="min-h-[calc(100vh-8rem)] py-12 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                <div className="rounded-3xl bg-gradient-to-br from-primary to-blue-500 text-white p-8 md:p-10 shadow-xl">
                    <p className="inline-flex px-3 py-1 rounded-full bg-white/20 text-xs font-semibold tracking-wide uppercase mb-5">
                        Join SME Travels
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">Create your travel account and book faster every time.</h1>
                    <p className="text-white/90 text-sm md:text-base max-w-lg mb-8">
                        Save traveler info, manage bookings, and get exclusive member-only deals from your personal dashboard.
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-xl border border-white/25 bg-white/10 p-4">
                            <p className="font-semibold">Easy Checkout</p>
                            <p className="text-white/80">Saved profile data</p>
                        </div>
                        <div className="rounded-xl border border-white/25 bg-white/10 p-4">
                            <p className="font-semibold">Member Offers</p>
                            <p className="text-white/80">Special pricing access</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8">
                    <div className="grid grid-cols-2 bg-slate-100 rounded-xl p-1 mb-6">
                        <Link href="/auth" className="rounded-lg text-slate-500 py-2.5 text-sm font-semibold text-center">Sign In</Link>
                        <button className="rounded-lg bg-white text-slate-900 py-2.5 text-sm font-semibold shadow-sm">Sign Up</button>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-slate-700">Full Name</label>
                            <input type="text" placeholder="Your full name" className="mt-1 w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:border-primary" />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-slate-700">Email Address</label>
                            <input type="email" placeholder="you@example.com" className="mt-1 w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:border-primary" />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-slate-700">Phone Number</label>
                            <input type="tel" placeholder="+88 01XXXXXXXXX" className="mt-1 w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:border-primary" />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-slate-700">Password</label>
                            <input type="password" placeholder="Create a strong password" className="mt-1 w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:border-primary" />
                        </div>

                        <label className="inline-flex items-start gap-2 text-sm text-slate-600">
                            <input type="checkbox" className="h-4 w-4 mt-0.5 accent-primary" />
                            I agree to the Terms, Privacy Policy, and receive booking updates.
                        </label>

                        <Link href="/dashboard" className="w-full h-11 rounded-lg bg-primary text-white font-semibold hover:bg-primary-hover transition-colors flex items-center justify-center">
                            Create Account
                        </Link>
                    </form>

                    <p className="text-sm text-slate-500 mt-6 text-center">
                        Already have an account?{' '}
                        <Link href="/auth" className="text-primary font-semibold hover:underline">Sign In</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

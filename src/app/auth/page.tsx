import Link from 'next/link';

export default function AuthPage() {
    return (
        <section className="min-h-[calc(100vh-8rem)] py-12 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                <div className="rounded-3xl bg-gradient-to-br from-primary to-blue-500 text-white p-8 md:p-10 shadow-xl">
                    <p className="inline-flex px-3 py-1 rounded-full bg-white/20 text-xs font-semibold tracking-wide uppercase mb-5">
                        SME Travel Agency
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">Manage bookings, profile, and your next journey in one place.</h1>
                    <p className="text-white/90 text-sm md:text-base max-w-lg mb-8">
                        Sign in to SME Travel Agency - Book Your Next Adventure and manage flights, hotels, tours, and visa services from one dashboard.
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-xl border border-white/25 bg-white/10 p-4">
                            <p className="font-semibold">25k+</p>
                            <p className="text-white/80">Bookings Managed</p>
                        </div>
                        <div className="rounded-xl border border-white/25 bg-white/10 p-4">
                            <p className="font-semibold">24/7</p>
                            <p className="text-white/80">Traveler Support</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8">
                    <div className="grid grid-cols-2 bg-slate-100 rounded-xl p-1 mb-6">
                        <button className="rounded-lg bg-white text-slate-900 py-2.5 text-sm font-semibold shadow-sm">Sign In</button>
                        <Link href="/auth/signup" className="rounded-lg text-slate-500 py-2.5 text-sm font-semibold text-center">Sign Up</Link>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-slate-700">Email Address</label>
                            <input type="email" placeholder="you@example.com" className="mt-1 w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:border-primary" />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-slate-700">Password</label>
                            <input type="password" placeholder="••••••••" className="mt-1 w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:border-primary" />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="inline-flex items-center gap-2 text-slate-600">
                                <input type="checkbox" className="h-4 w-4 accent-primary" />
                                Remember me
                            </label>
                            <Link href="/auth/forgot-password" className="text-primary font-semibold hover:underline">
                                Forgot password?
                            </Link>
                        </div>

                        <Link href="/dashboard" className="w-full h-11 rounded-lg bg-primary text-white font-semibold hover:bg-primary-hover transition-colors flex items-center justify-center">
                            Sign In
                        </Link>
                    </form>

                    <div className="relative my-6">
                        <div className="border-t border-slate-200"></div>
                        <span className="absolute left-1/2 -translate-x-1/2 -top-2.5 bg-white px-3 text-xs text-slate-400">OR</span>
                    </div>

                    <button type="button" className="w-full h-11 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:border-primary hover:text-primary transition-colors">
                        Continue with Google
                    </button>

                    <p className="text-sm text-slate-500 mt-6 text-center">
                        Don&apos;t have an account?{' '}
                        <Link href="/auth/signup" className="text-primary font-semibold hover:underline">Create account</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

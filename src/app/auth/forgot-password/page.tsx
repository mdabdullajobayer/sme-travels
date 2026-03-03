import Link from 'next/link';

export default function ForgotPasswordPage() {
    return (
        <section className="min-h-[calc(100vh-8rem)] py-12 px-4 flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-lg p-6 md:p-8">
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Reset Password</h1>
                <p className="text-sm text-slate-600 mb-2">Enter your email and we&apos;ll send a reset link.</p>
                <p className="text-xs text-slate-500 mb-6">SME Travel Agency - Book Your Next Adventure</p>

                <form className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-slate-700">Email Address</label>
                        <input type="email" placeholder="you@example.com" className="mt-1 w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:border-primary" />
                    </div>

                    <button type="button" className="w-full h-11 rounded-lg bg-primary text-white font-semibold hover:bg-primary-hover transition-colors">
                        Send Reset Link
                    </button>
                </form>

                <Link href="/auth" className="inline-block mt-5 text-sm text-primary font-semibold hover:underline">
                    Back to Sign In
                </Link>
            </div>
        </section>
    );
}

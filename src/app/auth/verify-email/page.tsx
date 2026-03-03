import Link from 'next/link';

export default function VerifyEmailPage() {
    return (
        <section className="min-h-[calc(100vh-8rem)] py-12 px-4 flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-lg p-6 md:p-8 text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl mb-4">
                    ✉️
                </div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Verify Your Email</h1>
                <p className="text-sm text-slate-600 mb-2">
                    We sent a verification link to your email. Please verify to activate your account.
                </p>
                <p className="text-xs text-slate-500 mb-6">SME Travel Agency - Book Your Next Adventure</p>

                <button type="button" className="w-full h-11 rounded-lg bg-primary text-white font-semibold hover:bg-primary-hover transition-colors">
                    Resend Verification Email
                </button>

                <div className="mt-5 text-sm text-slate-600">
                    Already verified?{' '}
                    <Link href="/auth" className="text-primary font-semibold hover:underline">Sign In</Link>
                </div>
            </div>
        </section>
    );
}

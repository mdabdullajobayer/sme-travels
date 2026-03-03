export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
                <h1 className="text-2xl font-bold text-slate-900">Account Settings</h1>
                <p className="text-sm text-slate-600 mt-1">Control notifications, security, and preferences.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="font-medium text-slate-900">Email Notifications</p>
                        <p className="text-sm text-slate-500">Receive booking updates and travel offers.</p>
                    </div>
                    <button className="h-7 w-12 rounded-full bg-primary/20 relative">
                        <span className="absolute right-1 top-1 h-5 w-5 rounded-full bg-primary"></span>
                    </button>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="font-medium text-slate-900">SMS Alerts</p>
                        <p className="text-sm text-slate-500">Get instant flight and payment alerts.</p>
                    </div>
                    <button className="h-7 w-12 rounded-full bg-slate-200 relative">
                        <span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white border border-slate-300"></span>
                    </button>
                </div>

                <div className="border-t border-slate-200 pt-5">
                    <p className="font-medium text-slate-900 mb-3">Security</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button className="h-10 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors">
                            Change Password
                        </button>
                        <button className="h-10 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors">
                            Enable 2FA
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

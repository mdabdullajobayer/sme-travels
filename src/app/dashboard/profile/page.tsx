export default function ProfilePage() {
    return (
        <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
                <h1 className="text-2xl font-bold text-slate-900">My Profile</h1>
                <p className="text-sm text-slate-600 mt-1">Manage personal details and travel preferences.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-medium text-slate-700">Full Name</label>
                        <input className="mt-1 w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:border-primary" defaultValue="Md. Traveler Hasan" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-slate-700">Email</label>
                        <input className="mt-1 w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:border-primary" defaultValue="traveler@example.com" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-slate-700">Phone</label>
                        <input className="mt-1 w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:border-primary" defaultValue="+88 01700 000000" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-slate-700">Date of Birth</label>
                        <input type="date" className="mt-1 w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:border-primary [color-scheme:light]" defaultValue="1995-01-10" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="text-sm font-medium text-slate-700">Address</label>
                        <input className="mt-1 w-full h-11 rounded-lg border border-slate-300 px-3 outline-none focus:border-primary" defaultValue="Banani, Dhaka, Bangladesh" />
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <button className="h-10 px-5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

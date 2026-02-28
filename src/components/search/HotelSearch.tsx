export default function HotelSearch() {
    return (
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Location */}
                <div className="border border-slate-200 rounded-lg p-3 hover:border-primary transition-colors cursor-pointer">
                    <p className="text-xs text-slate-500 font-medium mb-1">CITY/HOTEL/RESORT/AREA</p>
                    <input
                        type="text"
                        placeholder="e.g. Cox's Bazar"
                        className="w-full text-xl font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none bg-transparent"
                    />
                </div>

                {/* Dates */}
                <div className="flex border border-slate-200 rounded-lg hover:border-primary transition-colors">
                    <div className="w-1/2 p-3 border-r border-slate-200 cursor-pointer">
                        <p className="text-xs text-slate-500 font-medium mb-1">CHECK IN</p>
                        <p className="text-xl font-bold text-slate-900">03 Mar&apos;26</p>
                        <p className="text-xs text-slate-500 mt-1">Tuesday</p>
                    </div>
                    <div className="w-1/2 p-3 cursor-pointer">
                        <p className="text-xs text-slate-500 font-medium mb-1">CHECK OUT</p>
                        <p className="text-xl font-bold text-slate-900">04 Mar&apos;26</p>
                        <p className="text-xs text-slate-500 mt-1">Wednesday</p>
                    </div>
                </div>

                {/* Guests */}
                <div className="border border-slate-200 rounded-lg p-3 hover:border-primary transition-colors cursor-pointer">
                    <p className="text-xs text-slate-500 font-medium mb-1">ROOMS & GUESTS</p>
                    <p className="text-xl font-bold text-slate-900">1 Room, 2 Guests</p>
                    <p className="text-xs text-slate-500 mt-1">2 Adults</p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4 text-sm mt-2">
                <span className="text-slate-500 font-medium">Search for:</span>
                {['Business', 'Couples', 'Families', 'Friends', 'Solo'].map((filter) => (
                    <label key={filter} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
                        <span className="text-slate-700">{filter}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

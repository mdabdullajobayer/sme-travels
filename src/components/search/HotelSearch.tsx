import Image from 'next/image';

export default function HotelSearch() {
    return (
        <div className="flex flex-col gap-6">
            {/* add comming soon text with icon */}
            <div className="flex items-center justify-center">
                <p className="text-2xl font-bold text-slate-900">Coming Soon</p>
            </div>
        </div>
    );
}

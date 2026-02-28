import React from 'react';

export default function UmrahSearch() {
    return (
        <div className="flex flex-col gap-6">
            <div className="w-full xl:w-2/3">
                <div className="border border-slate-200 rounded-lg p-3 hover:border-primary transition-colors cursor-pointer">
                    <p className="text-xs text-slate-500 font-medium mb-1">UMRAH PACKAGE DURATION</p>
                    <select className="w-full text-xl font-bold text-slate-900 bg-transparent focus:outline-none cursor-pointer appearance-none">
                        <option value="" disabled selected>Select Duration</option>
                        <option value="7">7 Days Package</option>
                        <option value="10">10 Days Package</option>
                        <option value="14">14 Days Package</option>
                        <option value="21">21 Days Package</option>
                        <option value="custom">Custom Duration</option>
                    </select>
                </div>
            </div>

            <div className="bg-[#002B5E] text-white p-4 rounded-lg flex items-center justify-between w-full xl:w-2/3 mt-2 mt-4 relative overflow-hidden">
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-white/10 p-2 rounded-full hidden sm:block">
                            <span className="text-2xl">✨</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Planning a Family Umrah?</h4>
                            <p className="text-sm text-slate-300">We offer specialized packages for families and large groups.</p>
                        </div>
                    </div>
                    <button className="bg-white text-[#002B5E] px-4 py-2 rounded font-semibold text-sm whitespace-nowrap hover:bg-slate-100 transition-colors">
                        View Deals
                    </button>
                </div>
                {/* Subtle decorative circles */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 right-10 w-16 h-16 bg-white/5 rounded-full translate-y-1/2"></div>
            </div>
        </div>
    );
}

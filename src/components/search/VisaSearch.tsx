export default function VisaSearch() {
    return (
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full xl:w-2/3">
                {/* Country */}
                <div className="border border-slate-200 rounded-lg p-3 hover:border-primary transition-colors cursor-pointer">
                    <p className="text-xs text-slate-500 font-medium mb-1">COUNTRY</p>
                    <select className="w-full text-xl font-bold text-slate-900 bg-transparent focus:outline-none cursor-pointer appearance-none">
                        <option value="" disabled selected>Select a country</option>
                        <option value="BD">Bangladesh</option>
                        <option value="IN">India</option>
                        <option value="TH">Thailand</option>
                        <option value="SG">Singapore</option>
                        <option value="MY">Malaysia</option>
                    </select>
                </div>

                {/* Visa Type */}
                <div className="border border-slate-200 rounded-lg p-3 hover:border-primary transition-colors cursor-pointer">
                    <p className="text-xs text-slate-500 font-medium mb-1">VISA TYPE</p>
                    <select className="w-full text-xl font-bold text-slate-900 bg-transparent focus:outline-none cursor-pointer appearance-none">
                        <option value="" disabled selected>Select visa type</option>
                        <option value="tourist">Tourist Visa</option>
                        <option value="business">Business Visa</option>
                        <option value="medical">Medical Visa</option>
                        <option value="student">Student Visa</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

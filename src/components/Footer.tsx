import React from 'react';
import { Facebook, Youtube, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#000161] text-white pt-16 pb-6 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Upper Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Column 1: Discover */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Discover</h4>
                        <div className="flex gap-12">
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Talent & Culture</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
                            </ul>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li><a href="#" className="hover:text-white transition-colors">EMI Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 2: Payment Methods */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Payment Methods</h4>
                        <div className="grid grid-cols-4 gap-3">
                            {/* Mocking the 11 payment providers with simple boxes for now */}
                            {[...Array(11)].map((_, i) => (
                                <div key={i} className="bg-white/10 rounded-md h-8 w-12 flex items-center justify-center text-[10px] font-bold text-white/50">
                                    Pay
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Need Help */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Need Help ?</h4>
                        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                            We&apos;re here for you 24/7! Reach out to us through Messenger or call anytime, day or night, for the support you need.
                        </p>
                        <div className="space-y-4">
                            <div className="flex gap-3 text-sm text-slate-300">
                                <MapPin className="w-5 h-5 shrink-0 text-white" />
                                <p><strong>Dhaka Experience Center</strong><br />Sheltech Ayaan, House 58, Road 6 & 11, Block C, Level 2, Banani, Dhaka.</p>
                            </div>
                            <div className="flex gap-3 text-sm text-slate-300">
                                <MapPin className="w-5 h-5 shrink-0 text-white" />
                                <p><strong>Chittagong Experience Center</strong><br />1952 Rose Tower, Golpahar Circle, Mehedibag, Chittagong.</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact</h4>
                        <div className="space-y-4 mb-8">
                            <a href="mailto:info@gozayaan.com" className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors">
                                <Mail className="w-5 h-5 shrink-0" />
                                info@amygozayaan.com
                            </a>
                            <a href="tel:+8809678332211" className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors">
                                <Phone className="w-5 h-5 shrink-0" />
                                +88 09678 332211
                            </a>
                        </div>

                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#000161] hover:bg-slate-200 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#000161] hover:bg-slate-200 transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#000161] hover:bg-slate-200 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Lower Section (Copyright) */}
                <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-2xl font-bold tracking-tight">
                        <Image src="/sme_logo.png" alt="Logo" width={180} height={100} />
                    </div>
                    <p className="text-sm text-slate-300">
                        &copy; Copyright {new Date().getFullYear()} AmyGozayaan Ltd.
                    </p>
                </div>

            </div>
        </footer>
    );
}

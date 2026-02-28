import Link from 'next/link';
import { Menu, User, MessageCircle } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-1">
                            <span className="text-secondary text-3xl">amy</span>gozayaan
                        </Link>
                    </div>

                    {/* Right side navigation items */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button className="text-slate-600 hover:text-primary font-medium flex items-center gap-2 transition-colors">
                            BDT <span className="text-xs">▼</span>
                        </button>
                        <button className="text-slate-600 hover:text-primary transition-colors">
                            <MessageCircle className="w-5 h-5" />
                        </button>
                        <button className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md font-medium transition-colors">
                            <User className="w-4 h-4" />
                            Sign In
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button className="text-slate-600 hover:text-primary">
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

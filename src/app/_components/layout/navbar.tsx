"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "../../_context/CartContext";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { totalUniqueItems } = useCart();
    const router = useRouter();

    const handleNav = (hash: string) => {
        router.push(`/${hash}`);
    };

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
                    Ratu<span className="text-amber-500">Jahit</span>
                </div>
            
                {/* Links */}
                <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-600">
                    <button onClick={() => router.push('/')} className="hover:text-amber-500 transition-colors cursor-pointer">Beranda</button>
                    <Link href="/#about" className="hover:text-amber-500 transition-colors cursor-pointer">Tentang Kami</Link>
                    <Link href="/#services" className="hover:text-amber-500 transition-colors cursor-pointer">Layanan</Link>
                    <Link href="/#contact" className="hover:text-amber-500 transition-colors cursor-pointer">Kontak</Link>
                </div>

                {/* Right actions (Cart, Account Dropdown, CTA) */}
                <div className="flex items-center gap-5 md:gap-6">
                    {/* Cart Icon */}
                    <Link href="/cart" className="relative text-gray-500 hover:text-amber-500 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {totalUniqueItems > 0 && (
                            <span className="absolute -top-1.5 -right-2 bg-amber-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                                {totalUniqueItems}
                            </span>
                        )}
                    </Link>

                    {/* Account Dropdown */}
                    <div className="relative">
                        <button 
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                            className="flex items-center gap-1.5 text-gray-500 hover:text-amber-500 transition-colors focus:outline-none cursor-pointer"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-4 w-52 bg-white border border-gray-100 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] py-2 z-50">
                                <div className="px-5 py-3 border-b border-gray-50 mb-1">
                                    <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider mb-1">Akun Saya</p>
                                    <p className="text-sm font-bold text-gray-900">Halo, Pengguna!</p>
                                </div>
                                
                                {/* User Links */}
                                <div className="py-1">
                                    <button onClick={() => { handleNav('#profile'); setIsDropdownOpen(false); }} className="w-full text-left flex items-center gap-3 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                                        User
                                    </button>
                                    <button onClick={() => { router.push('/cart'); setIsDropdownOpen(false); }} className="w-full text-left flex items-center gap-3 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                                        Pesanan Saya
                                    </button>
                                </div>
                                
                                <div className="border-t border-gray-50 my-1"></div>
                                
                                {/* Admin Links */}
                                <div className="py-1">
                                    <Link href="/admin" onClick={() => setIsDropdownOpen(false)} className="flex items-center justify-between px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                                        <span className="flex items-center gap-3">
                                            Dashboard Admin
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <button onClick={() => router.push('/cart')} className="hidden md:inline-flex px-7 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-full hover:bg-amber-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                        Mulai Pesan
                    </button>

                    {/* Mobile Hamburger Button */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-gray-500 hover:text-amber-500 transition-colors focus:outline-none ml-2"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.1)] absolute w-full top-20 left-0 flex flex-col items-center py-6 gap-2 z-40">
                    <button onClick={() => { setIsMobileMenuOpen(false); router.push('/'); }} className="text-sm font-semibold text-gray-600 hover:text-amber-500 transition-colors w-full text-center py-3 border-b border-gray-50/50">Beranda</button>
                    <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-600 hover:text-amber-500 transition-colors w-full text-center py-3 border-b border-gray-50/50">Tentang Kami</Link>
                    <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-600 hover:text-amber-500 transition-colors w-full text-center py-3 border-b border-gray-50/50">Layanan</Link>
                    <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-600 hover:text-amber-500 transition-colors w-full text-center py-3">Kontak</Link>
                    
                    <button onClick={() => { setIsMobileMenuOpen(false); router.push('/cart'); }} className="mt-4 px-10 py-3 bg-amber-500 text-white text-sm font-semibold rounded-full hover:bg-amber-600 transition-all shadow-sm">
                        Mulai Pesan
                    </button>
                </div>
            )}
        </nav>
    );
}
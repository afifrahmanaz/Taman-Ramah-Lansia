"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Beranda" },
        { href: "/program", label: "Program" },
        { href: "/kegiatan", label: "Kegiatan" },
        { href: "/galeri", label: "Galeri" },
        { href: "/donasi", label: "Donasi" },
        { href: "/kontak", label: "Kontak" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Top Bar */}
            <div className="bg-gray-900 text-white py-2 hidden md:block">
                <div className="container-custom flex justify-between items-center">
                    <p className="text-sm text-white">
                        Melayani dengan Sepenuh Hati untuk Para Lansia
                    </p>
                    <a
                        href="https://wa.me/6281366018880"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-white/80 transition-colors"
                    >
                        <FaWhatsapp size={14} />
                        <span>+62 813-6601-8880</span>
                    </a>
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-white border-b border-gray-200 shadow-sm">
                <div className="container-custom py-3 lg:py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src="/images/gallery/logo_taman_ramah_lansia_1768937159444 copy.png"
                            alt="Logo Taman Ramah Lansia"
                            width={56}
                            height={56}
                            className="w-10 h-10 md:w-14 md:h-14 object-contain transition-all"
                            priority
                        />
                        <div>
                            <h1 className="text-gray-800 text-lg font-bold tracking-tight leading-none">
                                Taman Ramah Lansia
                            </h1>
                            <p className="text-xs text-primary-600 font-medium">
                                RUMBIA 504 • PANGKALPINANG
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-gray-600 text-sm font-medium hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="https://wa.me/6281366018880"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-lg transition-all shadow-md"
                        >
                            Hubungi Kami
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2.5 text-gray-700 hover:bg-gray-100 rounded-full transition-colors active:bg-gray-200"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-x-0 top-[76px] bottom-0 bg-white/95 backdrop-blur-sm z-40 overflow-y-auto">
                    <nav className="container-custom py-6 flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center justify-between px-4 py-3 text-base font-medium text-gray-800 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all border-b border-gray-50 active:scale-[0.99]"
                            >
                                {link.label}
                                <span className="text-gray-300 text-sm">›</span>
                            </Link>
                        ))}
                        <div className="mt-8 px-2">
                            <a
                                href="https://wa.me/6281366018880"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center justify-center w-full py-3 bg-primary-500 hover:bg-primary-600 text-white text-base font-bold rounded-lg transition-all shadow-md active:scale-95 gap-2"
                            >
                                <FaWhatsapp size={20} />
                                Hubungi via WhatsApp
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

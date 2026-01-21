"use client";

import Link from "next/link";
import { FaHandHoldingHeart } from "react-icons/fa";

export default function DonationCTA() {
    const whatsappNumber = "6281366018880";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Halo, saya ingin berdonasi untuk Taman Ramah Lansia Rumbia 504"
    )}`;

    return (
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl md:rounded-2xl p-6 md:p-10 text-white shadow-soft relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary-400/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6">
                <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 mb-3 md:mb-4">
                        <FaHandHoldingHeart className="text-secondary-400 w-6 h-6 md:w-8 md:h-8" />
                        <h3 className="text-xl md:text-3xl font-bold !text-white">Dukung Kegiatan Kami</h3>
                    </div>
                    <p className="text-sm md:text-lg leading-relaxed !text-white max-w-2xl">
                        Bantu para lansia mendapatkan pelayanan kesehatan <br className="hidden md:block" />
                        dan kegiatan sosial yang berkualitas. Setiap donasi Anda sangat berarti!
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <Link
                        href="/donasi"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-50 transition-all shadow-md w-full md:min-w-[160px] text-sm md:text-base whitespace-nowrap"
                    >
                        Info Donasi
                    </Link>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1da851] transition-all shadow-md w-full md:min-w-[160px] text-sm md:text-base whitespace-nowrap"
                    >
                        Hubungi Kami
                    </a>
                </div>
            </div>
        </div>
    );
}

"use client";

import Link from "next/link";
import { FaWhatsapp, FaHandHoldingHeart } from "react-icons/fa";

export default function DonationCTA() {
    const whatsappNumber = "6281366018880";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Halo, saya ingin berdonasi untuk Taman Ramah Lansia Rumbia 504"
    )}`;

    return (
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-10 text-white shadow-soft relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary-400/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                        <FaHandHoldingHeart size={32} className="text-secondary-400" />
                        <h3 className="text-2xl md:text-3xl font-bold">Dukung Kegiatan Kami</h3>
                    </div>
                    <p className="text-base md:text-lg leading-relaxed opacity-95">
                        Bantu para lansia mendapatkan pelayanan kesehatan dan kegiatan sosial yang berkualitas.
                        Setiap donasi Anda sangat berarti!
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                        href="/donasi"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-50 transition-all shadow-md min-w-[160px]"
                    >
                        Info Donasi
                    </Link>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1da851] transition-all shadow-md min-w-[160px]"
                    >
                        <FaWhatsapp size={20} />
                        Hubungi Kami
                    </a>
                </div>
            </div>
        </div>
    );
}

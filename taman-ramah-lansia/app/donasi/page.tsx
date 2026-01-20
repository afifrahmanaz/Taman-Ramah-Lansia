"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCopy, FaCheck, FaWhatsapp, FaChartPie } from "react-icons/fa";

export default function DonasiPage() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async (text: string) => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const campaigns = [
        {
            title: "Pengadaan Alat Kesehatan",
            description: "Pembelian tensi meter dan alat cek gula darah baru",
            target: 5000000,
            current: 3500000,
            status: "Aktif",
        },
        {
            title: "Dana Operasional Bulanan",
            description: "Biaya operasional kegiatan rutin bulanan",
            target: 2000000,
            current: 1800000,
            status: "Aktif",
        },
    ];

    return (
        <div>
            {/* Hero Header */}
            <section className="relative h-[300px] md:h-[350px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&h=600&fit=crop"
                        alt="Donasi Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gray-900/80"></div>
                </div>

                <div className="container-custom relative z-10 text-center">
                    <p className="text-primary-300 text-sm font-medium uppercase tracking-widest mb-4">
                        Dukung Program Kami
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold !text-white mb-4 drop-shadow-md relative z-20">
                        Campaign &amp; Donasi
                    </h1>
                    <p className="text-white max-w-xl mx-auto">
                        Setiap donasi Anda membantu meningkatkan kualitas pelayanan untuk para lansia
                    </p>
                </div>
            </section>

            {/* Active Campaigns */}
            <section className="section bg-gray-50">
                <div className="container-custom">
                    <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-2">
                        Campaign Aktif
                    </p>
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">Donasi Untuk Program</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {campaigns.map((campaign, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-3">
                                    {campaign.status}
                                </span>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{campaign.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{campaign.description}</p>

                                {/* Progress */}
                                <div className="mb-4">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-500">Terkumpul</span>
                                        <span className="font-semibold text-primary-600">
                                            {Math.round((campaign.current / campaign.target) * 100)}%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary-500 rounded-full"
                                            style={{ width: `${(campaign.current / campaign.target) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">
                                        Rp {campaign.current.toLocaleString("id-ID")}
                                    </span>
                                    <span className="font-medium text-gray-700">
                                        Target: Rp {campaign.target.toLocaleString("id-ID")}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Donation Methods */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Bank Transfer */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Transfer Bank</h3>
                            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                <p className="text-sm text-gray-500 mb-1">Bank BRI</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-bold text-gray-800 font-mono">1234567890</p>
                                    <button
                                        onClick={() => handleCopy("1234567890")}
                                        className={`p-2 rounded-lg transition-all ${copied
                                            ? "bg-primary-100 text-primary-600"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                            }`}
                                    >
                                        {copied ? <FaCheck size={16} /> : <FaCopy size={16} />}
                                    </button>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">a.n. Azwani Azam</p>
                            </div>
                            <p className="text-sm text-gray-500">
                                Setelah transfer, konfirmasi via WhatsApp dengan menyertakan bukti transfer.
                            </p>
                        </div>

                        {/* WhatsApp */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Donasi via WhatsApp</h3>
                            <p className="text-gray-600 mb-4">
                                Hubungi kami langsung untuk informasi lebih lanjut tentang donasi.
                            </p>
                            <a
                                href="https://wa.me/6281366018880?text=Halo,%20saya%20ingin%20berdonasi%20untuk%20Taman%20Ramah%20Lansia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all"
                            >
                                <FaWhatsapp size={20} />
                                Chat WhatsApp
                            </a>
                            <p className="text-sm text-gray-500 mt-3 text-center">
                                PJ: Azwani Azam
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transparency */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-2">
                            Transparansi
                        </p>
                        <h2 className="text-2xl font-bold text-gray-800 mb-8">Alokasi Dana Donasi</h2>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-primary-500 text-white rounded-xl p-5 text-center">
                                <p className="text-3xl font-bold mb-1">60%</p>
                                <p className="text-primary-100 text-sm">Kesehatan</p>
                            </div>
                            <div className="bg-primary-600 text-white rounded-xl p-5 text-center">
                                <p className="text-3xl font-bold mb-1">25%</p>
                                <p className="text-primary-100 text-sm">Edukasi</p>
                            </div>
                            <div className="bg-gray-700 text-white rounded-xl p-5 text-center">
                                <p className="text-3xl font-bold mb-1">15%</p>
                                <p className="text-gray-400 text-sm">Sosial</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

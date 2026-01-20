import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaHeart } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { href: "/", label: "Beranda" },
        { href: "/program", label: "Program" },
        { href: "/kegiatan", label: "Kegiatan" },
        { href: "/galeri", label: "Galeri" },
        { href: "/donasi", label: "Donasi" },
        { href: "/kontak", label: "Kontak" },
    ];

    const programs = [
        "Pemeriksaan Kesehatan",
        "Perawatan Diri",
        "Kajian Agama",
        "Seminar Edukasi",
    ];

    return (
        <footer className="bg-gray-800 text-white">
            {/* CTA Section */}
            <div className="bg-primary-500">
                <div className="container-custom py-6 lg:py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <FaHeart size={24} className="text-white" />
                            <div>
                                <h3 className="text-lg font-bold">Dukung Program Kami</h3>
                                <p className="text-primary-100 text-sm">Setiap donasi membantu lansia mendapat pelayanan terbaik</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href="https://wa.me/6281366018880"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 bg-white text-primary-600 hover:bg-gray-100 font-semibold rounded-lg transition-all text-sm"
                            >
                                Hubungi Kami
                            </a>
                            <Link
                                href="/donasi"
                                className="px-5 py-2.5 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg transition-all text-sm"
                            >
                                Donasi
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container-custom py-8 lg:py-12">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
                    {/* About */}
                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/images/gallery/logo_taman_ramah_lansia_1768937159444 copy.png"
                                alt="Logo Taman Ramah Lansia"
                                width={48}
                                height={48}
                                className="w-12 h-12 object-contain"
                            />
                            <div>
                                <h3 className="text-lg font-bold whitespace-nowrap">
                                    <span className="text-white">Taman</span> <span className="text-primary-500">Ramah Lansia</span>
                                </h3>
                                <p className="text-xs text-gray-400">Rumbia 504</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Sebuah wadah untuk meningkatkan kualitas hidup dan kesejahteraan para lansia di Bukit Merapin, Pangkalpinang.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h4 className="font-semibold mb-4">Menu</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div className="col-span-1">
                        <h4 className="font-semibold mb-4">Program</h4>
                        <ul className="space-y-2">
                            {programs.map((program, idx) => (
                                <li key={idx}>
                                    <Link
                                        href="/program"
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {program}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-2 lg:col-span-1">
                        <h4 className="font-semibold mb-4">Kontak</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-2">
                                <FaMapMarkerAlt size={14} className="text-primary-400 mt-1 flex-shrink-0" />
                                <span>Rumbia 504 RT.003 RW 001<br />Gerunggang, Bukit Merapin, Pangkalpinang</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhone size={14} className="text-primary-400 flex-shrink-0" />
                                <span>+62 813-6601-8880</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaWhatsapp size={14} className="text-primary-400 flex-shrink-0" />
                                <span>PJ: Azwani Azam</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700">
                <div className="container-custom py-4">
                    <p className="text-sm text-gray-500 text-center">
                        © {currentYear} Taman Ramah Lansia Rumbia 504. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

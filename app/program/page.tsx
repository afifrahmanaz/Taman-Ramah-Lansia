import Link from "next/link";
import Image from "next/image";
import { programLayanan, programSeminar } from "@/app/data/programs";
import {
    FaCheck,
    FaClock,
    FaUsers,
    FaWhatsapp,
    FaHeartbeat,
    FaCut,
    FaBook,
    FaBrain,
    FaHandsHelping,
    FaLightbulb,
    FaUserMd,
    FaMosque,
    FaSeedling,
} from "react-icons/fa";

const iconMap: { [key: string]: any } = {
    FaHeartbeat: FaHeartbeat,
    FaCut: FaCut,
    FaBook: FaBook,
    FaBrain: FaBrain,
    FaHandsHelping: FaHandsHelping,
    FaLightbulb: FaLightbulb,
    FaUserMd: FaUserMd,
    FaMosque: FaMosque,
    FaSeedling: FaSeedling,
};

export default function ProgramPage() {
    return (
        <div>
            {/* Hero Header */}
            <section className="relative h-[250px] md:h-[350px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&h=600&fit=crop"
                        alt="Program Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gray-900/80"></div>
                </div>

                <div className="container-custom relative z-10 text-center">
                    <p className="text-primary-300 text-xs md:text-sm font-medium uppercase tracking-widest mb-3 md:mb-4">
                        Layanan Lengkap
                    </p>
                    <h1 className="text-2xl md:text-4xl font-bold !text-white mb-3 md:mb-4 drop-shadow-md relative z-20">
                        Program Kami
                    </h1>
                    <p className="text-white text-sm md:text-base max-w-xl mx-auto px-4">
                        Detail lengkap semua program layanan dan seminar yang tersedia untuk para lansia
                    </p>
                </div>
            </section>

            {/* Stats */}
            {/* Stats - Floating Card */}
            <div className="container-custom relative z-30 -mt-10 md:-mt-16 mb-8 md:mb-12">
                <div className="bg-white rounded-xl md:rounded-2xl shadow-xl border border-gray-100 p-4 md:p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 divide-x-0 md:divide-x divide-gray-100">
                        <div className="flex flex-col items-center text-center group p-1 md:p-2">
                            <div className="w-8 h-8 md:w-12 md:h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                                <FaHeartbeat className="w-4 h-4 md:w-6 md:h-6" />
                            </div>
                            <p className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-0.5 md:mb-1 group-hover:text-primary-600 transition-colors">3</p>
                            <p className="text-[10px] md:text-sm font-medium text-gray-500 uppercase tracking-wide">Layanan Rutin</p>
                        </div>
                        <div className="flex flex-col items-center text-center group p-1 md:p-2">
                            <div className="w-8 h-8 md:w-12 md:h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                                <FaBrain className="w-4 h-4 md:w-6 md:h-6" />
                            </div>
                            <p className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-0.5 md:mb-1 group-hover:text-primary-600 transition-colors">6</p>
                            <p className="text-[10px] md:text-sm font-medium text-gray-500 uppercase tracking-wide">Seminar</p>
                        </div>
                        <div className="flex flex-col items-center text-center group p-1 md:p-2">
                            <div className="w-8 h-8 md:w-12 md:h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                                <FaCheck className="w-4 h-4 md:w-6 md:h-6" />
                            </div>
                            <p className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-0.5 md:mb-1 group-hover:text-primary-600 transition-colors">100%</p>
                            <p className="text-[10px] md:text-sm font-medium text-gray-500 uppercase tracking-wide">Gratis</p>
                        </div>
                        <div className="flex flex-col items-center text-center group p-1 md:p-2">
                            <div className="w-8 h-8 md:w-12 md:h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                                <FaUsers className="w-4 h-4 md:w-6 md:h-6" />
                            </div>
                            <p className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-0.5 md:mb-1 group-hover:text-primary-600 transition-colors">60+</p>
                            <p className="text-[10px] md:text-sm font-medium text-gray-500 uppercase tracking-wide">Tahun</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Layanan Rutin */}
            <section className="section bg-gray-50 pt-0 md:pt-12">
                <div className="container-custom">
                    <p className="text-primary-600 text-xs md:text-sm font-medium uppercase tracking-widest mb-2">
                        Layanan Rutin
                    </p>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8">Program Layanan Berkala</h2>

                    <div className="space-y-4">
                        {programLayanan.map((program) => {
                            const IconComponent = iconMap[program.icon];
                            return (
                                <div key={program.id} className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
                                    <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                                                <div className="w-9 h-9 md:w-11 md:h-11 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    {IconComponent && <IconComponent size={18} className="md:w-5 md:h-5" />}
                                                </div>
                                                <div>
                                                    <span className="inline-block px-1.5 py-0.5 bg-primary-100 text-primary-700 text-[10px] md:text-xs font-medium rounded mb-1">
                                                        GRATIS
                                                    </span>
                                                    <h3 className="text-base md:text-lg font-bold text-gray-800 leading-tight">{program.title}</h3>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">{program.description}</p>
                                            <ul className="space-y-1">
                                                {program.details.map((detail, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
                                                        <FaCheck className="text-primary-500 mt-0.5 flex-shrink-0" size={10} />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="lg:w-64 bg-gray-50 rounded-lg p-3 md:p-4 text-xs md:text-sm">
                                            <div className="flex items-center gap-2 text-gray-800 font-medium mb-1.5 md:mb-2">
                                                <FaClock className="text-primary-500" size={12} />
                                                Jadwal
                                            </div>
                                            <p className="text-gray-600 mb-2 md:mb-3">{program.jadwal}</p>
                                            <div className="flex items-center gap-2 text-gray-800 font-medium mb-1.5 md:mb-2">
                                                <FaUsers className="text-primary-500" size={12} />
                                                Persyaratan
                                            </div>
                                            <p className="text-gray-600">{program.persyaratan}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Seminar & Workshop */}
            <section className="section bg-white">
                <div className="container-custom">
                    <p className="text-primary-600 text-xs md:text-sm font-medium uppercase tracking-widest mb-2">
                        Edukasi
                    </p>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8">Seminar &amp; Workshop</h2>

                    <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 md:gap-8 lg:gap-10">
                        {programSeminar.map((seminar) => {
                            const IconComponent = iconMap[seminar.icon];
                            return (
                                <div key={seminar.id} className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group flex flex-col h-full">
                                    {/* Card Image */}
                                    <div className="relative h-32 md:h-64 overflow-hidden">
                                        <Image
                                            // @ts-ignore
                                            src={seminar.image || "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"}
                                            alt={seminar.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                                        <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 flex items-end justify-between">
                                            <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] md:text-xs font-bold uppercase tracking-wider rounded md:rounded-lg">
                                                {seminar.category}
                                            </span>
                                            <div className="w-6 h-6 md:w-10 md:h-10 bg-white text-primary-600 rounded md:rounded-lg flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                                                {IconComponent && <IconComponent className="w-3 h-3 md:w-5 md:h-5" />}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-3 md:p-8 flex flex-col flex-grow">
                                        <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-2 md:mb-4 group-hover:text-primary-600 transition-colors line-clamp-2 leading-tight">
                                            {seminar.title}
                                        </h3>

                                        <p className="text-gray-600 mb-3 md:mb-6 leading-relaxed flex-grow line-clamp-2 md:line-clamp-3 text-xs md:text-base">
                                            {seminar.description}
                                        </p>

                                        <div className="pt-3 md:pt-6 border-t border-gray-100 space-y-1.5 md:space-y-3 mt-auto">
                                            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-600">
                                                <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 flex-shrink-0">
                                                    <FaClock className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" />
                                                </div>
                                                <div className="min-w-0">
                                                    <span className="block text-[10px] md:text-xs text-gray-400">Durasi</span>
                                                    <span className="font-medium truncate block">{seminar.durasi}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-600">
                                                <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 flex-shrink-0">
                                                    <FaUserMd className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" />
                                                </div>
                                                <div className="min-w-0">
                                                    <span className="block text-[10px] md:text-xs text-gray-400">Narasumber</span>
                                                    <span className="font-medium truncate block">{seminar.narasumber}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-primary-500 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 !text-white">
                        Tertarik Mengikuti Program?
                    </h2>
                    <p className="text-primary-50 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
                        Semua program GRATIS untuk warga RT.03 Bukit Merapin berusia 60 tahun ke atas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="https://wa.me/6281366018880?text=Halo,%20saya%20ingin%20mendaftar%20program%20Taman%20Ramah%20Lansia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all text-sm md:text-base"
                        >
                            <FaWhatsapp size={18} />
                            Daftar via WhatsApp
                        </a>
                        <Link
                            href="/kontak"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all text-sm md:text-base"
                        >
                            Hubungi Kami
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

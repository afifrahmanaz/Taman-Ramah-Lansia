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
            <section className="relative h-[300px] md:h-[350px] flex items-center overflow-hidden">
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
                    <p className="text-primary-300 text-sm font-medium uppercase tracking-widest mb-4">
                        Layanan Lengkap
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold !text-white mb-4 drop-shadow-md relative z-20">
                        Program Kami
                    </h1>
                    <p className="text-white max-w-xl mx-auto">
                        Detail lengkap semua program layanan dan seminar yang tersedia untuk para lansia
                    </p>
                </div>
            </section>

            {/* Stats */}
            {/* Stats - Floating Card */}
            <div className="container-custom relative z-30 -mt-16 mb-12">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-gray-100">
                        <div className="flex flex-col items-center text-center group p-2">
                            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-3 group-hover:scale-110 transition-transform">
                                <FaHeartbeat size={24} />
                            </div>
                            <p className="text-4xl font-extrabold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors">3</p>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Layanan Rutin</p>
                        </div>
                        <div className="flex flex-col items-center text-center group p-2">
                            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-3 group-hover:scale-110 transition-transform">
                                <FaBrain size={24} />
                            </div>
                            <p className="text-4xl font-extrabold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors">6</p>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Seminar</p>
                        </div>
                        <div className="flex flex-col items-center text-center group p-2">
                            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-3 group-hover:scale-110 transition-transform">
                                <FaCheck size={24} />
                            </div>
                            <p className="text-4xl font-extrabold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors">100%</p>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Gratis</p>
                        </div>
                        <div className="flex flex-col items-center text-center group p-2">
                            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-3 group-hover:scale-110 transition-transform">
                                <FaUsers size={24} />
                            </div>
                            <p className="text-4xl font-extrabold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors">60+</p>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Tahun</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Layanan Rutin */}
            <section className="section bg-gray-50">
                <div className="container-custom">
                    <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-2">
                        Layanan Rutin
                    </p>
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">Program Layanan Berkala</h2>

                    <div className="space-y-4">
                        {programLayanan.map((program) => {
                            const IconComponent = iconMap[program.icon];
                            return (
                                <div key={program.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                    <div className="flex flex-col lg:flex-row gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="w-11 h-11 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    {IconComponent && <IconComponent size={20} />}
                                                </div>
                                                <div>
                                                    <span className="inline-block px-2 py-0.5 bg-primary-100 text-primary-700 text-xs font-medium rounded mb-1">
                                                        GRATIS
                                                    </span>
                                                    <h3 className="text-lg font-bold text-gray-800">{program.title}</h3>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                                            <ul className="space-y-1">
                                                {program.details.map((detail, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                        <FaCheck className="text-primary-500 mt-0.5 flex-shrink-0" size={12} />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="lg:w-64 bg-gray-50 rounded-lg p-4">
                                            <div className="flex items-center gap-2 text-gray-800 font-medium mb-2 text-sm">
                                                <FaClock className="text-primary-500" size={14} />
                                                Jadwal
                                            </div>
                                            <p className="text-sm text-gray-600 mb-3">{program.jadwal}</p>
                                            <div className="flex items-center gap-2 text-gray-800 font-medium mb-2 text-sm">
                                                <FaUsers className="text-primary-500" size={14} />
                                                Persyaratan
                                            </div>
                                            <p className="text-sm text-gray-600">{program.persyaratan}</p>
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
                    <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-2">
                        Edukasi
                    </p>
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">Seminar &amp; Workshop</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
                        {programSeminar.map((seminar) => {
                            const IconComponent = iconMap[seminar.icon];
                            return (
                                <div key={seminar.id} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group flex flex-col h-full">
                                    {/* Card Image */}
                                    <div className="relative h-64 overflow-hidden">

                                        <Image
                                            // @ts-ignore
                                            src={seminar.image || "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"}
                                            alt={seminar.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                                            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-lg">
                                                {seminar.category}
                                            </span>
                                            <div className="w-10 h-10 bg-white text-primary-600 rounded-lg flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                                                {IconComponent && <IconComponent size={20} />}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors line-clamp-2">
                                            {seminar.title}
                                        </h3>

                                        <p className="text-gray-600 mb-6 leading-relaxed flex-grow line-clamp-3">
                                            {seminar.description}
                                        </p>

                                        <div className="pt-6 border-t border-gray-100 space-y-3">
                                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                                <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                                                    <FaClock size={14} />
                                                </div>
                                                <div>
                                                    <span className="block text-xs text-gray-400">Durasi</span>
                                                    <span className="font-medium">{seminar.durasi}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                                <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                                                    <FaUserMd size={14} />
                                                </div>
                                                <div>
                                                    <span className="block text-xs text-gray-400">Narasumber</span>
                                                    <span className="font-medium">{seminar.narasumber}</span>
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
                    <h2 className="text-2xl font-bold mb-4">Tertarik Mengikuti Program?</h2>
                    <p className="text-primary-100 max-w-xl mx-auto mb-6">
                        Semua program GRATIS untuk warga RT.03 Bukit Merapin berusia 60 tahun ke atas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="https://wa.me/6281366018880?text=Halo,%20saya%20ingin%20mendaftar%20program%20Taman%20Ramah%20Lansia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all"
                        >
                            <FaWhatsapp size={18} />
                            Daftar via WhatsApp
                        </a>
                        <Link
                            href="/kontak"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all"
                        >
                            Hubungi Kami
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

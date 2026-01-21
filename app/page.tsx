import Link from "next/link";
import Image from "next/image";
import {
  FaHeartbeat,
  FaCut,
  FaBook,
  FaBrain,
  FaHandsHelping,
  FaLightbulb,
  FaUserMd,
  FaMosque,
  FaSeedling,
  FaChevronRight,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Card from "@/components/Card";
import DonationCTA from "@/components/DonationCTA";
import ActivityCard from "@/components/ActivityCard";
import { programLayanan, programSeminar, kegiatanList } from "@/app/data/programs";

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

export default function Home() {
  const allServices = [
    ...programLayanan.map((p) => ({
      icon: iconMap[p.icon],
      title: p.title,
      description: p.description,
      category: p.category,
    })),
    ...programSeminar.slice(0, 3).map((s) => ({
      icon: iconMap[s.icon],
      title: s.title,
      description: s.description,
      category: s.category,
    })),
  ];

  const featuredActivities = kegiatanList.slice(0, 2);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] lg:min-h-[650px] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/Gemini_Generated_Image_jwz4z0jwz4z0jwz4.png"
            alt="Taman Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 py-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
              <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse"></span>
              <span className="text-[10px] sm:text-xs font-medium text-white/90 tracking-wider uppercase">
                Wadah Masyarakat
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-3 leading-tight">
              <span className="text-white">Taman</span> <span className="text-primary-500">Ramah Lansia</span>
            </h1>
            <p className="text-base md:text-2xl text-white/90 font-medium mb-4">
              Rumbia 504 Pangkalpinang
            </p>

            <p className="text-sm sm:text-lg text-white/80 mb-6 leading-relaxed max-w-2xl">
              Sebuah wadah untuk meningkatkan kualitas hidup dan kesejahteraan para lansia melalui layanan kesehatan, edukasi, dan kegiatan sosial.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/program"
                className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm sm:text-base font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                Lihat Program
                <FaChevronRight size={12} />
              </Link>
              <Link
                href="/donasi"
                className="inline-flex items-center gap-2 px-5 py-2 md:px-6 md:py-3 bg-white/10 hover:bg-white/20 text-white text-sm md:text-base font-semibold rounded-lg border border-white/30 transition-all backdrop-blur-sm active:scale-95"
              >
                Dukung Kami
              </Link>
            </div>

            {/* Quick Stats - Grid on Mobile */}
            <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-4 lg:gap-8 mt-8 lg:mt-10 pt-6 lg:pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaUsers className="text-primary-400" size={16} />
                </div>
                <div>
                  <p className="text-lg lg:text-2xl font-bold text-white">60+</p>
                  <p className="text-[10px] lg:text-sm text-gray-400">Tahun Peserta</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaHeartbeat className="text-primary-400" size={16} />
                </div>
                <div>
                  <p className="text-lg lg:text-2xl font-bold text-white">9</p>
                  <p className="text-[10px] lg:text-sm text-gray-400">Program Aktif</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 col-span-2 lg:col-span-1">
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-primary-400" size={16} />
                </div>
                <div>
                  <p className="text-lg lg:text-2xl font-bold text-white">RT.03</p>
                  <p className="text-[10px] lg:text-sm text-gray-400">Bukit Merapin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4 lg:mb-6">
                <span className="h-px w-8 lg:w-12 bg-primary-500"></span>
                <span className="text-primary-600 font-semibold uppercase tracking-widest text-xs lg:text-sm">
                  Tentang Kami
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-text-main mb-4 lg:mb-6 leading-tight">
                Peduli Lansia,
                <span className="text-primary-500"> Peduli Keluarga</span>
              </h2>
              <p className="text-sm md:text-base text-text-muted leading-relaxed mb-4 lg:mb-6">
                Taman Ramah Lansia adalah program inisiatif masyarakat RT.03 Bukit Merapin
                yang berkomitmen memberikan pelayanan kesehatan gratis, edukasi, dan kegiatan
                sosial untuk meningkatkan kualitas hidup para lansia di lingkungan kami.
              </p>
              <p className="text-sm md:text-base text-text-muted leading-relaxed mb-6 lg:mb-8">
                Dengan dukungan relawan dan donatur, kami telah melayani puluhan lansia
                dengan berbagai program yang bermanfaat.
              </p>

              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <div className="bg-background-cream rounded-xl p-4 lg:p-5">
                  <FaCalendarAlt className="text-primary-500 mb-2 lg:mb-3" size={20} />
                  <h4 className="font-bold text-text-main mb-1 text-sm lg:text-base">Jadwal Rutin</h4>
                  <p className="text-xs lg:text-sm text-text-muted">Kamis Minggu Pertama Setiap Bulan</p>
                </div>
                <div className="bg-background-cream rounded-xl p-4 lg:p-5">
                  <FaHeartbeat className="text-primary-500 mb-2 lg:mb-3" size={20} />
                  <h4 className="font-bold text-text-main mb-1 text-sm lg:text-base">100% Gratis</h4>
                  <p className="text-xs lg:text-sm text-text-muted">Untuk warga usia 60+</p>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 lg:p-8 text-white">
                <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 !text-white">Jam Operasional</h3>
                <div className="space-y-3 lg:space-y-4 text-sm lg:text-base">
                  <div className="flex justify-between items-center pb-3 lg:pb-4 border-b border-primary-900/20">
                    <span className="text-white/80">Hari</span>
                    <span className="font-semibold">Kamis (Minggu Pertama)</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 lg:pb-4 border-b border-primary-900/20">
                    <span className="text-white/80">Bulan</span>
                    <span className="font-semibold">1x Setiap Bulan</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Jam</span>
                    <span className="font-semibold">08:00 - 10:00 WIB</span>
                  </div>
                </div>
                <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-primary-900/20">
                  <p className="text-xs lg:text-sm text-white/70 mb-2 lg:mb-3">Lokasi:</p>
                  <p className="font-medium text-sm lg:text-base">Rumbia 504 RT.003 RW 001<br />Gerunggang, Bukit Merapin, Pangkalpinang</p>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 lg:w-32 lg:h-32 bg-primary-500/10 rounded-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 lg:w-24 lg:h-24 bg-primary-500/10 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section >

      {/* Services Section */}
      < section className="section bg-background-cream relative" >
        <div className="absolute inset-0 bg-pattern pointer-events-none"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-10 lg:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4 lg:mb-6">
              <span className="h-px w-8 lg:w-12 bg-primary-500"></span>
              <span className="text-primary-600 font-semibold uppercase tracking-widest text-xs lg:text-sm">
                Layanan Kami
              </span>
              <span className="h-px w-8 lg:w-12 bg-primary-500"></span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-main mb-3 lg:mb-4">
              Program & Layanan
            </h2>
            <p className="text-sm md:text-base text-text-muted max-w-2xl mx-auto">
              Berbagai program yang dirancang khusus untuk mendukung kesehatan
              dan kesejahteraan para lansia
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {allServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-card hover:shadow-soft transition-all group border border-gray-100"
              >
                <div className="w-10 h-10 lg:w-14 lg:h-14 bg-primary-500/10 text-primary-500 rounded-lg lg:rounded-xl flex items-center justify-center mb-3 lg:mb-5 group-hover:bg-primary-500 group-hover:text-white transition-all">
                  {service.icon && <service.icon className="w-5 h-5 lg:w-7 lg:h-7" />}
                </div>
                <span className="inline-block text-[10px] lg:text-xs font-semibold text-primary-600 uppercase tracking-wider mb-1 lg:mb-2">
                  {service.category}
                </span>
                <h3 className="text-sm lg:text-lg font-bold text-text-main mb-2 lg:mb-3 leading-tight">{service.title}</h3>
                <p className="text-xs lg:text-sm text-text-muted leading-relaxed line-clamp-3 md:line-clamp-none">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 lg:mt-12">
            <Link
              href="/program"
              className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-semibold transition-colors text-sm lg:text-base"
            >
              Lihat Semua Program
              <FaChevronRight size={12} />
            </Link>
          </div>
        </div>
      </section >

      {/* Featured Activities */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 lg:mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3 lg:mb-4">
                <span className="h-px w-8 lg:w-12 bg-primary-500"></span>
                <span className="text-primary-600 font-semibold uppercase tracking-widest text-xs lg:text-sm">
                  Kegiatan
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-main leading-tight">
                Kegiatan Terbaru
              </h2>
            </div>
            <Link
              href="/kegiatan"
              className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold rounded-lg transition-all text-sm lg:text-base w-fit"
            >
              Lihat Semua
              <FaChevronRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 md:gap-8">
            {featuredActivities.map((activity) => (
              <ActivityCard key={activity.id} {...activity} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="section !pt-0 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8 lg:mb-12">
            <p className="text-primary-600 text-xs lg:text-sm font-medium uppercase tracking-widest mb-2">
              Bergabung
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 lg:mb-4">
              Cara Mengikuti Program
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm lg:text-base">
              Ikuti langkah sederhana untuk menjadi peserta program kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary-500 text-white rounded-xl flex items-center justify-center text-lg lg:text-xl font-bold mx-auto mb-3 lg:mb-4">
                1
              </div>
              <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-1 lg:mb-2">Daftar</h3>
              <p className="text-gray-600 text-xs lg:text-sm">
                Hubungi kami via WhatsApp atau datang langsung saat jam operasional
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary-600 text-white rounded-xl flex items-center justify-center text-lg lg:text-xl font-bold mx-auto mb-3 lg:mb-4">
                2
              </div>
              <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-1 lg:mb-2">Datang</h3>
              <p className="text-gray-600 text-xs lg:text-sm">
                Hadir sesuai jadwal pelayanan di tempat
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary-700 text-white rounded-xl flex items-center justify-center text-lg lg:text-xl font-bold mx-auto mb-3 lg:mb-4">
                3
              </div>
              <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-1 lg:mb-2">Ikuti</h3>
              <p className="text-gray-600 text-xs lg:text-sm">
                Nikmati berbagai layanan dan program yang tersedia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="section bg-background-cream">
        <div className="container-custom">
          <DonationCTA />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-10 lg:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4 lg:mb-6">
              <span className="h-px w-8 lg:w-12 bg-primary-500"></span>
              <span className="text-primary-600 font-semibold uppercase tracking-widest text-xs lg:text-sm">
                Testimoni
              </span>
              <span className="h-px w-8 lg:w-12 bg-primary-500"></span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-main mb-3 lg:mb-4">
              Apa Kata Mereka
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-background-light rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary-500/10 text-primary-500 rounded-full flex items-center justify-center text-xl font-bold">
                  S
                </div>
                <div>
                  <h4 className="font-bold text-text-main">Bu Siti</h4>
                  <p className="text-sm text-text-muted">Peserta, 65 tahun</p>
                </div>
              </div>
              <p className="text-text-muted leading-relaxed italic">
                &quot;Alhamdulillah, dengan adanya program ini saya bisa cek kesehatan rutin
                tanpa biaya. Sangat membantu para lansia seperti saya.&quot;
              </p>
            </div>

            <div className="bg-background-light rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-secondary-400/10 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-text-main">Pak Ahmad</h4>
                  <p className="text-sm text-text-muted">Peserta, 68 tahun</p>
                </div>
              </div>
              <p className="text-text-muted leading-relaxed italic">
                &quot;Workshop keterampilan sangat bermanfaat. Sekarang saya bisa membuat
                kerajinan dan menambah penghasilan.&quot;
              </p>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}

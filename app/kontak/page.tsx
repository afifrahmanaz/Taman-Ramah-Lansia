"use client";

import { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaWhatsapp, FaClock, FaPaperPlane, FaLocationArrow } from "react-icons/fa";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "6281366018880";
    const message = `Halo, saya ${formData.name}\nNomor: ${formData.phone}\n\nPesan: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      {/* Hero Header */}
      <section className="relative h-[250px] md:h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=600&fit=crop"
            alt="Kontak Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <p className="text-primary-300 text-xs md:text-sm font-medium uppercase tracking-widest mb-3 md:mb-4">
            Layanan Masyarakat
          </p>
          <h1 className="text-2xl md:text-4xl font-bold !text-white mb-3 md:mb-4 drop-shadow-md relative z-20">
            Hubungi Kami
          </h1>
          <p className="text-white text-sm md:text-base max-w-xl mx-auto px-4">
            Kami siap menyambut Anda untuk informasi kegiatan, pendaftaran, atau donasi.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div>
              <p className="text-primary-600 text-xs md:text-sm font-medium uppercase tracking-widest mb-2">
                Informasi Kontak
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8">
                Terhubung Dengan Kami
              </h2>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Alamat</h4>
                    <p className="text-gray-600 text-sm">
                      Rumbia 504 RT.003 RW 001<br />
                      Gerunggang, Bukit Merapin, Pangkalpinang
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                    <FaWhatsapp size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">WhatsApp</h4>
                    <p className="text-gray-600 text-sm">
                      <span className="font-medium text-gray-800">Azwani Azam</span><br />
                      +62 813-6601-8880
                    </p>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Jam Operasional</h4>
                    <p className="text-gray-600 text-sm">
                      Kamis (Minggu Pertama Setiap Bulan)<br />
                      <span className="font-medium text-gray-800">08:00 - 10:00 WIB</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Kirim Pesan</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-lg focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:bg-white transition-all"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-lg focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:bg-white transition-all"
                    placeholder="Contoh: 0812..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-lg focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:bg-white transition-all resize-none"
                    placeholder="Tuliskan pertanyaan atau pesan Anda..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  Kirim Pesan
                  <FaPaperPlane size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative h-[400px] bg-gray-100 group">
        <iframe
          src="https://maps.google.com/maps?q=Jl.+Rumbia+No.504,+Bukit+Merapin,+Gerunggang,+Pangkal+Pinang&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Taman Ramah Lansia"
        />
        <a
          href="https://maps.app.goo.gl/ZQTRd1R5HJwD4tm36"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 right-6 bg-white text-primary-600 px-5 py-3 rounded-full shadow-xl font-bold flex items-center gap-2 hover:bg-primary-50 hover:scale-105 transition-all z-10 border border-gray-100"
        >
          <FaLocationArrow /> Petunjuk Arah
        </a>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Pertanyaan Umum</h2>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Apakah ada biaya untuk mengikuti program?
                </h4>
                <p className="text-gray-600 text-sm">
                  Tidak ada biaya. Semua layanan GRATIS untuk warga RT.03 Bukit Merapin berusia 60 tahun ke atas.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Bagaimana cara mendaftar?
                </h4>
                <p className="text-gray-600 text-sm">
                  Anda dapat mendaftar melalui WhatsApp atau datang langsung saat jadwal pelayanan.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Apakah bisa ikut kegiatan tertentu saja?
                </h4>
                <p className="text-gray-600 text-sm">
                  Tentu saja! Anda dapat memilih kegiatan yang diminati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

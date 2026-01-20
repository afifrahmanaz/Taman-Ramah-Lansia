"use client";

import { useState } from "react";
import Image from "next/image";
import ActivityCard from "@/components/ActivityCard";
import { FaFilter, FaSearch } from "react-icons/fa";
import { kegiatanList } from "@/app/data/programs";

export default function KegiatanPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = [
    "Semua",
    "Kesehatan",
    "Keagamaan",
    "Edukasi & Seminar",
    "Sosial & Rekreasi",
  ];

  const filteredActivities =
    selectedCategory === "Semua"
      ? kegiatanList
      : kegiatanList.filter((activity) => activity.category === selectedCategory);

  return (
    <div>
      {/* Hero Header */}
      <section className="relative h-[300px] md:h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1600&h=600&fit=crop"
            alt="Kegiatan Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <p className="text-primary-300 text-sm font-medium uppercase tracking-widest mb-4">
            Dokumentasi
          </p>
          <h1 className="text-3xl md:text-4xl font-bold !text-white mb-4 drop-shadow-md relative z-20">
            Kegiatan &amp; Berita
          </h1>
          <p className="text-white max-w-xl mx-auto">
            Dokumentasi lengkap kegiatan dan berita terbaru dari Taman Ramah Lansia
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          {/* Filter */}
          <div className="bg-white rounded-xl p-4 shadow-sm mb-8 border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <FaFilter size={14} className="text-primary-500" />
              <span className="font-medium text-gray-700 text-sm">Filter Kategori</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all ${selectedCategory === category
                    ? "bg-primary-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-gray-500 text-sm mb-6">
            Menampilkan <span className="font-medium text-gray-700">{filteredActivities.length}</span> kegiatan
          </p>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredActivities.map((activity) => (
              <ActivityCard key={activity.id} {...activity} />
            ))}
          </div>

          {/* Empty State */}
          {filteredActivities.length === 0 && (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
              <FaSearch size={40} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">
                Tidak ada kegiatan untuk kategori ini.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

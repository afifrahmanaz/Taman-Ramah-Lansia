"use client";

import { useState } from "react";
import Image from "next/image";
import { FaFilter, FaTimes, FaSearchPlus } from "react-icons/fa";

const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop", alt: "Pemeriksaan Kesehatan", category: "Kesehatan" },
    { id: 2, src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop", alt: "Cek Tekanan Darah", category: "Kesehatan" },
    { id: 3, src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop", alt: "Konsultasi Dokter", category: "Kesehatan" },
    { id: 4, src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop", alt: "Workshop Merajut", category: "Workshop" },
    { id: 5, src: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&h=600&fit=crop", alt: "Kerajinan Tangan", category: "Workshop" },
    { id: 6, src: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=800&h=600&fit=crop", alt: "Kajian Agama", category: "Keagamaan" },
    { id: 7, src: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&h=600&fit=crop", alt: "Doa Bersama", category: "Keagamaan" },
    { id: 8, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", alt: "Seminar Anti Hoax", category: "Seminar" },
    { id: 9, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop", alt: "Seminar Kesehatan", category: "Seminar" },
    { id: 10, src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop", alt: "Kegiatan Sosial", category: "Sosial" },
    { id: 11, src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop", alt: "Rekreasi Bersama", category: "Sosial" },
    { id: 12, src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop", alt: "Workshop Berkebun", category: "Workshop" },
];

const categories = ["Semua", "Kesehatan", "Workshop", "Keagamaan", "Seminar", "Sosial"];

export default function GaleriPage() {
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    const filteredImages =
        selectedCategory === "Semua"
            ? galleryImages
            : galleryImages.filter((img) => img.category === selectedCategory);

    return (
        <div>
            {/* Hero Header */}
            <section className="relative h-[300px] md:h-[350px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1600&h=600&fit=crop"
                        alt="Gallery Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gray-900/80"></div>
                </div>

                <div className="container-custom relative z-10 text-center">
                    <p className="text-primary-300 text-sm font-medium uppercase tracking-widest mb-4">
                        Dokumentasi Visual
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold !text-white mb-4 drop-shadow-md relative z-20">
                        Galeri Foto
                    </h1>
                    <p className="text-white max-w-xl mx-auto">
                        Dokumentasi visual kegiatan dan momen berharga bersama para lansia
                    </p>
                </div>
            </section>

            {/* Gallery Content */}
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

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredImages.map((image) => (
                            <div
                                key={image.id}
                                onClick={() => setSelectedImage(image)}
                                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                                    <FaSearchPlus className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredImages.length === 0 && (
                        <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
                            <p className="text-gray-500">
                                Tidak ada foto untuk kategori ini.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all"
                        aria-label="Tutup"
                    >
                        <FaTimes size={18} />
                    </button>

                    <div
                        className="max-w-4xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative aspect-video rounded-xl overflow-hidden">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium mb-2">
                                {selectedImage.category}
                            </span>
                            <p className="text-white font-medium">{selectedImage.alt}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

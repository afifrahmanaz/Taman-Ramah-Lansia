// Data Program Layanan Taman Ramah Lansia
export const programLayanan = [
    {
        id: 1,
        title: "Pemeriksaan Kesehatan Gratis",
        category: "Kesehatan",
        icon: "FaHeartbeat",
        description: "Pemeriksaan kesehatan lengkap meliputi:",
        details: [
            "Cek Tekanan Darah",
            "Cek Gula Darah",
            "Cek Kolesterol",
            "Timbang Berat Badan",
            "Konsultasi dengan petugas kesehatan"
        ],
        jadwal: "Setiap Sabtu Bulan Pertama (08.00 - 10.00 WIB)",
        persyaratan: "Warga RT.03 Bukit Merapin berusia 60 tahun ke atas"
    },
    {
        id: 2,
        title: "Perawatan Diri",
        category: "Kesehatan",
        icon: "FaCut",
        description: "Layanan perawatan diri gratis:",
        details: [
            "Cek Kebersihan Kuku",
            "Potong Kuku bila perlu",
            "Cek Rambut",
            "Potong Rambut"
        ],
        jadwal: "Setiap Sabtu Bulan Pertama (08.00 - 10.00 WIB)",
        persyaratan: "Warga RT.03 Bukit Merapin berusia 60 tahun ke atas"
    },
    {
        id: 3,
        title: "Senam Lansia",
        category: "Kesehatan",
        icon: "FaSeedling",
        description: "Kegiatan senam bersama untuk menjaga kebugaran fisik dan mental lansia",
        details: [
            "Gerakan senam ringan dan aman",
            "Instruktur senam berpengalaman",
            "Meningkatkan kelenturan tubuh",
            "Relaksasi dan pendinginan"
        ],
        jadwal: "1x setiap bulan (Jam 07.00 WIB)",
        persyaratan: "Warga RT.03 Bukit Merapin berusia 60 tahun ke atas"
    }
];

// Data Seminar & Workshop
export const programSeminar = [
    {
        id: 1,
        title: "Seminar Anti Hoax & Literasi Digital",
        category: "Edukasi & Seminar",
        icon: "FaBrain",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        description: "Edukasi literasi digital untuk lansia di era informasi",
        materi: [
            "Mengenal Berita Hoax dan Ciri-cirinya",
            "Cara Memverifikasi Informasi di Media Sosial",
            "Penggunaan WhatsApp dan Facebook yang Bijak",
            "Tips Aman Berselancar di Internet",
            "Menghindari Penipuan Online",
            "Etika Berkomunikasi di Media Sosial"
        ],
        narasumber: "Tim Literasi Digital Pangkalpinang",
        durasi: "2-3 jam",
        target: "30-40 peserta per sesi"
    },
    {
        id: 2,
        title: "Workshop Keterampilan Tangan",
        category: "Edukasi & Seminar",
        icon: "FaHandsHelping",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        description: "Pelatihan keterampilan praktis yang menghasilkan produk bernilai jual",
        materi: [
            "Merajut (Rajut Tas, Rajut Bros, Rajut Taplak)",
            "Membuat Kerajinan dari Kain Perca",
            "Membuat Bros dari Kain Flanel",
            "Sulam Bordir Sederhana",
            "Membuat Bunga dari Kain",
            "Tips Menjual Produk Kerajinan"
        ],
        narasumber: "Instruktur Keterampilan Bersertifikat",
        durasi: "4-6 jam (praktik langsung)",
        target: "20-30 peserta per sesi",
        perlengkapan: "Disediakan bahan dan alat dasar"
    },
    {
        id: 3,
        title: "Seminar Kesehatan",
        category: "Edukasi & Seminar",
        icon: "FaUserMd",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
        description: "Edukasi kesehatan langsung dari tenaga medis profesional",
        materi: [
            "Pengelolaan Hipertensi di Usia Lanjut",
            "Diabetes dan Pola Makan Sehat untuk Lansia",
            "Menjaga Kesehatan Jantung",
            "Gizi Seimbang untuk Lansia",
            "Olahraga Ringan yang Aman untuk Lansia",
            "Mengatasi Nyeri Sendi dan Osteoporosis",
            "Pentingnya Medical Check Up Rutin",
            "Penggunaan Obat yang Benar"
        ],
        narasumber: "Dokter Umum dan Dokter Spesialis",
        durasi: "2-3 jam (termasuk sesi tanya jawab)",
        target: "40-50 peserta per sesi",
        bonus: "Konsultasi gratis setelah seminar"
    },
    {
        id: 4,
        title: "Seminar Agama Islam",
        category: "Edukasi & Seminar",
        icon: "FaMosque",
        image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=800&h=600&fit=crop",
        description: "Kajian mendalam tentang Islam dan kehidupan di usia senja",
        materi: [
            "Persiapan Menghadapi Akhirat di Usia Senja",
            "Taubat dan Perbaikan Diri",
            "Berbakti kepada Orang Tua dan Anak",
            "Sedekah dan Ibadah di Masa Tua",
            "Sabar dalam Menghadapi Ujian Kesehatan",
            "Memanfaatkan Waktu dengan Ibadah",
            "Adab Bermasyarakat dalam Islam"
        ],
        narasumber: "Ustadz/Ustadzah Berpengalaman",
        durasi: "2-3 jam",
        target: "40-60 peserta per sesi"
    },
    {
        id: 5,
        title: "Seminar Ide Bisnis di Masa Tua",
        category: "Edukasi & Seminar",
        icon: "FaLightbulb",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
        description: "Inspirasi dan panduan memulai usaha kecil-kecilan di usia lanjut",
        materi: [
            "Peluang Bisnis Realistis untuk Lansia",
            "Usaha Jualan Kue Kering dan Basah",
            "Bisnis Tanaman Hias dan Sayuran",
            "Jasa Jahit dan Sulam",
            "Membuat Jamu dan Minuman Kesehatan",
            "Marketing Sederhana (Door to Door, WhatsApp)",
            "Menghitung Modal dan Keuntungan"
        ],
        narasumber: "Praktisi UMKM Berpengalaman",
        durasi: "3-4 jam (termasuk praktik)",
        target: "20-30 peserta per sesi",
        bonus: "Pendampingan usaha gratis 1 bulan"
    },
    {
        id: 6,
        title: "Workshop Aktivitas Produktif",
        category: "Edukasi & Seminar",
        icon: "FaSeedling",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
        description: "Kegiatan produktif yang menyehatkan fisik dan mental",
        materi: [
            "Berkebun Sayuran dalam Pot",
            "Budidaya Tanaman Obat Keluarga (TOGA)",
            "Memasak Makanan Sehat untuk Lansia",
            "Menulis Memoir dan Kisah Hidup",
            "Fotografi Sederhana dengan HP",
            "Senam dan Yoga untuk Lansia"
        ],
        narasumber: "Instruktur Bersertifikat",
        durasi: "Varies (2-4 jam per topik)",
        target: "15-25 peserta per sesi"
    }
];

// Data Kegiatan (Sample Activities)
export const kegiatanList = [
    {
        id: 1,
        title: "Pemeriksaan Kesehatan Rutin Januari 2026",
        slug: "pemeriksaan-kesehatan-januari-2026",
        date: "Coming Soon",
        category: "Kesehatan",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
        participants: 45,
        description: "Kegiatan pemeriksaan kesehatan rutin bulanan untuk para lansia RT.03 Bukit Merapin.",
        highlights: [
            "45 peserta mengikuti pemeriksaan lengkap",
            "10 peserta mendapat rujukan untuk follow-up",
            "Pembagian vitamin gratis untuk semua peserta",
            "Konsultasi kesehatan dengan tenaga medis"
        ]
    },
    {
        id: 2,
        title: "Workshop Merajut untuk Pemula",
        slug: "workshop-merajut-januari-2026",
        date: "Coming Soon",
        category: "Edukasi & Seminar",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        participants: 30,
        description: "Pelatihan keterampilan merajut dasar untuk para lansia yang ingin belajar kerajinan tangan.",
        highlights: [
            "30 peserta belajar teknik dasar merajut",
            "Setiap peserta berhasil membuat 1 bros",
            "Pemberian starter kit benang dan jarum rajut",
            "Follow-up workshop lanjutan bulan depan"
        ]
    },
    {
        id: 3,
        title: "Seminar Anti Hoax dan Literasi Digital",
        slug: "seminar-anti-hoax-januari-2026",
        date: "Coming Soon",
        category: "Edukasi & Seminar",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
        participants: 35,
        description: "Edukasi literasi digital untuk membantu lansia mengenali dan menghindari berita hoax.",
        highlights: [
            "35 peserta mengikuti seminar dengan antusias",
            "Praktik langsung verifikasi berita di smartphone",
            "Tips keamanan menggunakan WhatsApp",
            "Pembagian panduan literasi digital cetak"
        ]
    },
    {
        id: 4,
        title: "Kajian Agama Islam - Adab Bertetangga",
        slug: "kajian-agama-januari-2026",
        date: "Coming Soon",
        category: "Keagamaan",
        image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=600&h=400&fit=crop",
        participants: 40,
        description: "Kajian rutin membahas adab dan tata cara bertetangga menurut ajaran Islam.",
        highlights: [
            "40 peserta hadir dalam kajian",
            "Diskusi interaktif tentang kehidupan bertetangga",
            "Pembagian buku panduan Islam",
            "Sesi tanya jawab dengan ustadz"
        ]
    },
    {
        id: 5,
        title: "Seminar Kesehatan: Hipertensi di Usia Lanjut",
        slug: "seminar-hipertensi-februari-2026",
        date: "Coming Soon",
        category: "Edukasi & Seminar",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
        participants: 42,
        description: "Seminar kesehatan dengan narasumber dokter spesialis tentang pengelolaan hipertensi.",
        highlights: [
            "Narasumber: dr. Budi Santoso, Sp.PD",
            "42 peserta mendapat edukasi lengkap",
            "Sesi konsultasi gratis setelah seminar",
            "Pembagian brosur pola makan sehat"
        ]
    },
    {
        id: 6,
        title: "Pelatihan Bisnis Kue Kering",
        slug: "pelatihan-kue-kering-februari-2026",
        date: "Coming Soon",
        category: "Edukasi & Seminar",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop",
        participants: 28,
        description: "Pelatihan membuat dan menjual kue kering sebagai usaha sampingan untuk lansia.",
        highlights: [
            "28 peserta belajar 3 resep kue kering",
            "Praktik langsung dari chef berpengalaman",
            "Tips packaging dan pricing produk",
            "Pendampingan usaha selama 1 bulan"
        ]
    },
    {
        id: 7,
        title: "Rekreasi Bersama ke Taman Kota",
        slug: "rekreasi-taman-kota-februari-2026",
        date: "Coming Soon",
        category: "Sosial & Rekreasi",
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop",
        participants: 50,
        description: "Kegiatan rekreasi bersama untuk meningkatkan kebersamaan dan kesehatan mental lansia.",
        highlights: [
            "50 peserta ikut rekreasi",
            "Senam pagi bersama di taman",
            "Makan siang bersama",
            "Foto bersama dan dokumentasi"
        ]
    },
    {
        id: 8,
        title: "Workshop Berkebun Sayuran dalam Pot",
        slug: "workshop-berkebun-maret-2026",
        date: "Coming Soon",
        category: "Edukasi & Seminar",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
        participants: 25,
        description: "Pelatihan teknik berkebun sayuran dalam pot untuk lahan terbatas.",
        highlights: [
            "25 peserta belajar teknik berkebun",
            "Pembagian bibit dan pot gratis",
            "Praktik menanam kangkung dan bayam",
            "Panduan perawatan tanaman"
        ]
    }
];

export default {
    programLayanan,
    programSeminar,
    kegiatanList
};

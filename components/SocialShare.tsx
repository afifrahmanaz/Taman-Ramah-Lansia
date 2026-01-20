"use client";

import { FaFacebook, FaWhatsapp, FaLink } from "react-icons/fa";

interface SocialShareProps {
    title: string;
    url?: string;
}

export default function SocialShare({ title, url }: SocialShareProps) {
    const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
    const shareText = `${title} - Taman Ramah Lansia Rumbia 504`;

    const handleFacebookShare = () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(facebookUrl, "_blank", "width=600,height=400");
    };

    const handleWhatsAppShare = () => {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
        window.open(whatsappUrl, "_blank");
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            alert("Link berhasil disalin!");
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div className="flex flex-wrap gap-2">
            <button
                onClick={handleFacebookShare}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white text-sm font-semibold rounded-lg hover:bg-[#0c63d4] transition-all"
                aria-label="Bagikan ke Facebook"
            >
                <FaFacebook size={16} />
                <span>Facebook</span>
            </button>

            <button
                onClick={handleWhatsAppShare}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-sm font-semibold rounded-lg hover:bg-[#1da851] transition-all"
                aria-label="Bagikan ke WhatsApp"
            >
                <FaWhatsapp size={16} />
                <span>WhatsApp</span>
            </button>

            <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-all"
                aria-label="Salin Link"
            >
                <FaLink size={14} />
                <span>Salin Link</span>
            </button>
        </div>
    );
}

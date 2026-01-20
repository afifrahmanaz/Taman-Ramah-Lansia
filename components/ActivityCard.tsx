import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaUsers, FaArrowRight } from "react-icons/fa";

interface ActivityCardProps {
    id: number;
    title: string;
    slug: string;
    date: string;
    category: string;
    image: string;
    participants: number;
    description: string;
    highlights?: string[];
}

export default function ActivityCard({
    title,
    slug,
    date,
    category,
    image,
    participants,
    description,
}: ActivityCardProps) {
    return (
        <article className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all group border border-gray-100">
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-primary-600 text-xs font-bold rounded-full uppercase tracking-wide">
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-3 text-xs text-text-muted">
                    <span className="flex items-center gap-1.5">
                        <FaCalendarAlt size={12} className="text-primary-400" />
                        {date}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <FaUsers size={12} className="text-primary-400" />
                        {participants} peserta
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-text-main mb-2 line-clamp-2 group-hover:text-primary-500 transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-muted mb-4 line-clamp-2">
                    {description}
                </p>

                {/* Read More */}
                <Link
                    href={`/kegiatan/${slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:text-primary-600 group/link"
                >
                    Baca Selengkapnya
                    <FaArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
            </div>
        </article>
    );
}

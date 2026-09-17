import PublicLayout from '@/layouts/public-layout';

import { usePage } from '@inertiajs/react';
import { useState } from 'react';

type Category = 'all' | 'religious' | 'heritage' | 'festivals' | 'nature' | 'cuisine' | 'shopping' | 'health' | 'education';

const categories: { id: Category; label: string; emoji: string }[] = [
    { id: 'all', label: 'All', emoji: '✦' },
    { id: 'religious', label: 'Religious Sites', emoji: '⛪' },
    { id: 'heritage', label: 'Heritage', emoji: '🏛' },
    { id: 'festivals', label: 'Festivals', emoji: '🎉' },
    { id: 'nature', label: 'Nature', emoji: '🌿' },
    { id: 'cuisine', label: 'Cuisine', emoji: '🍽' },
    { id: 'shopping', label: 'Shopping', emoji: '🛍' },
    { id: 'health', label: 'Health Services', emoji: '🏥' },
    { id: 'education', label: 'Education', emoji: '🎓' },
];

const attractions = [
    {
        category: 'religious' as Category,
        name: 'San Isidro Labrador Parish',
        location: 'Poblacion, Pulilan',
        desc: 'Pulilan’s principal parish and the church associated with the Kneeling Carabao Festival and devotion to San Isidro Labrador.',
        img: '/images/carousel-images/Religious.jpg',
        highlight: 'Faith & tradition',
    },
    {
        category: 'religious' as Category,
        name: 'Ascension Parish',
        location: 'Pulilan, Bulacan',
        desc: 'One of the religious sites currently listed by the official Pulilan tourism program.',
        img: '/images/carousel-images/Religious.jpg',
        highlight: 'Religious site',
    },
    {
        category: 'heritage' as Category,
        name: 'Pulilan Heritage Houses',
        location: 'Various Barangays',
        desc: 'Pulilan’s heritage listings include historic houses such as Adriano Salvador House, Casa Filomena, Casa Balbina, and Casa Francisco.',
        img: '/images/carousel-images/Heritage.jpg',
        highlight: 'Historic houses',
    },
    {
        category: 'heritage' as Category,
        name: 'Municipal Hall & Plaza',
        location: 'Poblacion, Pulilan',
        desc: 'The Gabaldon Building, Museo de Pulilan, Trial Court, and Old Town Hall are among the town’s historic and cultural structures.',
        img: '/images/carousel-images/Historical.jpg',
        highlight: 'Cultural structures',
    },
    {
        category: 'nature' as Category,
        name: 'Pulilan riverside areas',
        location: 'Pulilan, Bulacan',
        desc: 'Riverside areas and agricultural landscapes are part of Pulilan’s nature and outdoor tourism story.',
        img: '/images/carousel-images/Attraction.jpg',
        highlight: 'Natural Landmark',
    },
    {
        category: 'nature' as Category,
        name: 'Pulilan Farmlands',
        location: 'Multiple Barangays',
        desc: 'The verdant rice paddies and farmlands of Pulilan paint a quintessentially Filipino rural landscape, especially beautiful during planting and harvest seasons.',
        img: '/images/carousel-images/Local-Products.jpg',
        highlight: 'Agricultural Heritage',
    },
    {
        category: 'cuisine' as Category,
        name: 'Bulakeño Cuisine Experience',
        location: 'Poblacion & Longos',
        desc: 'Sample authentic Bulacan dishes — kare-kare, crispy pata, dinuguan, and the famous Bulacan pastillas de leche alongside local delicacies unique to Pulilan.',
        img: '/images/carousel-images/Cuisine.jpg',
        highlight: 'Local Flavors',
    },
    {
        category: 'cuisine' as Category,
        name: 'Riverside Seafood & Grill',
        location: 'Near Pampanga River',
        desc: 'Fresh river fish, grilled tilapia, and classic Filipino river cuisine served in an open-air setting overlooking the Pampanga watershed.',
        img: '/images/carousel-images/Cuisine.jpg',
        highlight: 'Fresh Catch Daily',
    },
    {
        category: 'shopping' as Category,
        name: 'Pulilan Public Market',
        location: 'Poblacion, Pulilan',
        desc: "The vibrant public market offers everything from fresh farm produce to local handicrafts, native sweets, and regional products made by Pulilan's artisans.",
        img: '/images/carousel-images/Shopping.jpg',
        highlight: 'Daily Market',
    },
    {
        category: 'education' as Category,
        name: 'Pulilan Central School',
        location: 'Poblacion, Pulilan',
        desc: 'A community school serving generations of Pulilan learners and families.',
        img: '/images/carousel-images/Education.jpg',
        highlight: 'Learning in Pulilan',
    },
    {
        category: 'health' as Category,
        name: 'Pulilan Municipal Health Office',
        location: 'Poblacion, Pulilan',
        desc: 'A central community health facility supporting residents and visitors.',
        img: '/images/carousel-images/Health.jpg',
        highlight: 'Community Care',
    },
];

export default function Attractions() {
    const { url } = usePage();
    const requestedCategory = new URLSearchParams(url.split('?')[1] ?? '').get('category') as Category | null;
    const initialCategory = categories.find((category) => category.id === requestedCategory)?.id ?? 'all';
    const [active, setActive] = useState<Category>(initialCategory);

    const filtered = active === 'all' ? attractions : attractions.filter((a) => a.category === active);

    return (
        <PublicLayout>
            <div className="text-scale min-h-screen bg-[#4169E1]" style={{ fontSize: '16px' }}>
                {/* Hero */}
                <div className="relative h-72 overflow-hidden">
                    <img
                        src="/images/carousel-images/Attraction.jpg"
                        alt="Pulilan attractions"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#4169E1]/60 to-[#4169E1]" />
                    <div className="absolute inset-0 flex items-end justify-center pb-14 text-center">
                        <div>
                            <div className="mb-3 flex items-center justify-center gap-2">
                                <div className="h-px w-6 bg-[#d4a853]" />
                                <span className="text-xs font-medium tracking-widest text-[#d4a853] uppercase">Things to See & Do</span>
                                <div className="h-px w-6 bg-[#d4a853]" />
                            </div>
                            <h1 className="font-display text-5xl font-semibold text-[#f5f0e8] lg:text-6xl">Attractions</h1>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="sticky top-20 z-30 border-b border-white/10 bg-[#4169E1]/95 backdrop-blur-md">
                    <div className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
                        <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActive(cat.id)}
                                    className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                        active === cat.id
                                            ? 'bg-[#d4a853] text-[#0d1b2a]'
                                            : 'bg-white/5 text-[#f5f0e8]/60 hover:bg-white/10 hover:text-[#f5f0e8]'
                                    }`}
                                >
                                    <span>{cat.emoji}</span>
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Attractions grid */}
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((item, i) => (
                            <article
                                key={i}
                                className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#f3ede2] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a853]/50"
                            >
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/90 to-transparent" />
                                    <span className="absolute top-3 left-3 rounded-full border border-[#d4a853]/50 bg-[#172554]/85 px-2.5 py-1 text-xs font-semibold text-[#f8d477] backdrop-blur-sm">
                                        {item.highlight}
                                    </span>
                                </div>
                                <div className="p-5">
                                    <div className="mb-2 flex items-start justify-between gap-2">
                                        <h3 className="font-display text-base leading-snug font-semibold text-[#000080] transition-colors group-hover:text-[#4169E1]">
                                            {item.name}
                                        </h3>
                                    </div>
                                    <div className="mb-3 flex items-center gap-1.5">
                                        <svg className="h-3 w-3 shrink-0 text-[#1e3a8a]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                        </svg>
                                        <span className="text-xs text-[#000080]/35">{item.location}</span>
                                    </div>
                                    <p className="line-clamp-3 text-xs leading-relaxed text-[#000080]/50">{item.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="font-display py-20 text-center text-xl text-[#000080]/30">No attractions found in this category.</div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}

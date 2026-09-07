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
        name: 'San Isidro Labrador Parish Church',
        location: 'Poblacion, Pulilan',
        desc: 'A 17th-century Augustinian baroque church, the spiritual heart of Pulilan and venue of the annual Carabao Festival. Its stone facade and ornate interiors reflect centuries of Filipino Catholic devotion.',
        img: 'https://images.unsplash.com/photo-1760549310131-b09d86c601e3?w=600&h=400&fit=crop&auto=format',
        highlight: 'UNESCO Recognized',
    },
    {
        category: 'religious' as Category,
        name: 'Longos Church (San Pedro Calungsod)',
        location: 'Longos, Pulilan',
        desc: 'One of the oldest churches in Bulacan, featuring a beautiful colonial facade and a tranquil courtyard that transports visitors to colonial-era Philippines.',
        img: 'https://images.unsplash.com/photo-1708464437185-3a2f6765bf92?w=600&h=400&fit=crop&auto=format',
        highlight: '17th Century',
    },
    {
        category: 'heritage' as Category,
        name: 'Pulilan Heritage Houses',
        location: 'Various Barangays',
        desc: 'Scattered throughout Pulilan are well-preserved ancestral bahay na bato (stone houses) from the Spanish colonial period, offering a window into 19th-century Filipino life.',
        img: 'https://images.unsplash.com/photo-1771868454902-4fe2477fa64c?w=600&h=400&fit=crop&auto=format',
        highlight: 'Colonial Era',
    },
    {
        category: 'heritage' as Category,
        name: 'Municipal Hall & Plaza',
        location: 'Poblacion, Pulilan',
        desc: 'The civic center of Pulilan, featuring a classic Filipino municipal hall and the historic plaza where community life has gathered for generations.',
        img: 'https://images.unsplash.com/photo-1646138092104-4d2a9e399a5e?w=600&h=400&fit=crop&auto=format',
        highlight: 'Civic Center',
    },
    {
        category: 'nature' as Category,
        name: 'Pampanga River Banks',
        location: 'Western Pulilan',
        desc: 'The Pampanga River forms a natural boundary offering scenic walks, local fishing communities, and peaceful views of the Central Luzon plains.',
        img: 'https://images.unsplash.com/photo-1682724425247-f34019858601?w=600&h=400&fit=crop&auto=format',
        highlight: 'Natural Landmark',
    },
    {
        category: 'nature' as Category,
        name: 'Pulilan Farmlands',
        location: 'Multiple Barangays',
        desc: 'The verdant rice paddies and farmlands of Pulilan paint a quintessentially Filipino rural landscape, especially beautiful during planting and harvest seasons.',
        img: 'https://images.unsplash.com/photo-1601000234047-d9308ea1ed51?w=600&h=400&fit=crop&auto=format',
        highlight: 'Agricultural Heritage',
    },
    {
        category: 'cuisine' as Category,
        name: 'Bulakeño Cuisine Experience',
        location: 'Poblacion & Longos',
        desc: 'Sample authentic Bulacan dishes — kare-kare, crispy pata, dinuguan, and the famous Bulacan pastillas de leche alongside local delicacies unique to Pulilan.',
        img: 'https://images.unsplash.com/photo-1537495988501-f9cd94a78f3e?w=600&h=400&fit=crop&auto=format',
        highlight: 'Local Flavors',
    },
    {
        category: 'cuisine' as Category,
        name: 'Riverside Seafood & Grill',
        location: 'Near Pampanga River',
        desc: 'Fresh river fish, grilled tilapia, and classic Filipino river cuisine served in an open-air setting overlooking the Pampanga watershed.',
        img: 'https://images.unsplash.com/photo-1578366687181-5f90a617ca7a?w=600&h=400&fit=crop&auto=format',
        highlight: 'Fresh Catch Daily',
    },
    {
        category: 'shopping' as Category,
        name: 'Pulilan Public Market',
        location: 'Poblacion, Pulilan',
        desc: "The vibrant public market offers everything from fresh farm produce to local handicrafts, native sweets, and regional products made by Pulilan's artisans.",
        img: 'https://images.unsplash.com/photo-1489710020360-66e504159b43?w=600&h=400&fit=crop&auto=format',
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
            <div className="min-h-screen bg-[#1d4ed8]">
                {/* Hero */}
                <div className="relative h-72 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1708464437185-3a2f6765bf92?w=1600&h=500&fit=crop&auto=format"
                        alt="Pulilan attractions"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a]/60 to-[#1d4ed8]" />
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
                <div className="sticky top-20 z-30 border-b border-white/10 bg-[#1d4ed8]/95 backdrop-blur-md">
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
                                className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#1e3a8a] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a853]/50"
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
                                        <h3 className="font-display text-base leading-snug font-semibold text-[#f5f0e8] transition-colors group-hover:text-[#d4a853]">
                                            {item.name}
                                        </h3>
                                    </div>
                                    <div className="mb-3 flex items-center gap-1.5">
                                        <svg
                                            className="h-3 w-3 shrink-0 text-[#f5f0e8]/30"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                        </svg>
                                        <span className="text-xs text-[#f5f0e8]/35">{item.location}</span>
                                    </div>
                                    <p className="line-clamp-3 text-xs leading-relaxed text-[#f5f0e8]/50">{item.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="font-display py-20 text-center text-xl text-[#f5f0e8]/30">No attractions found in this category.</div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}

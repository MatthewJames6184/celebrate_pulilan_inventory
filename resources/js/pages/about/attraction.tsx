import PublicLayout from '@/layouts/public-layout';
import { attractions, type AttractionCategory, slugifyAttraction } from '@/lib/attractions';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

type Category = 'all' | AttractionCategory;

const categories: { id: Category; label: string; emoji: string }[] = [
    { id: 'all', label: 'All', emoji: '✦' },
    { id: 'religious', label: 'Religious Sites', emoji: '⛪' },
    { id: 'heritage', label: 'Heritage', emoji: '🏛' },
    { id: 'festivals', label: 'Festivals', emoji: '🎉' },
    { id: 'local-products', label: 'Local Products', emoji: '🛍' },
];

export default function Attractions() {
    const { url } = usePage();
    const requestedCategory = new URLSearchParams(url.split('?')[1] ?? '').get('category') as Category | null;
    const initialCategory = categories.find((category) => category.id === requestedCategory)?.id ?? 'all';
    const [active, setActive] = useState<Category>(initialCategory);

    const filtered = active === 'all' ? attractions : attractions.filter((a) => a.category === active);

    return (
        <PublicLayout>
            <div className=" min-h-screen bg-gradient-to-b from-[#fbf9f5] via-[#f6f3ec] to-[#ebe6da]" style={{ fontSize: '16px' }}>
                {/* Hero */}
                <div className="relative h-80 overflow-hidden sm:h-96 lg:h-[24rem]">
                    <img src="/images/image-1.jpg" alt="Pulilan attractions" className="h-full w-full object-cover object-[100%_60%] transition-all duration-300 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#fbf9f5]/55 via-[#000080]/20 to-[#fbf9f5]" />
                    <div className="absolute inset-0 flex items-end justify-center px-6 pb-30 text-center">
                        <div>
                            <div className="mb-3 flex items-center justify-center gap-2">
                                <div className="h-px w-6 bg-[#d4a853]" />
                                <span className="text-xs font-bold tracking-widest text-[#e9bc5b] drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] uppercase drop-shadow-md">Things to See & Do</span>
                                <div className="h-px w-6 bg-[#d4a853]" />
                            </div>
                            <h1 className="font-display text-5xl font-semibold text-[#f5f0e8] drop-shadow-[0_3px_4px_rgba(0,0,0,0.85)] lg:text-6xl">What to See in Pulilan</h1>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="sticky top-20 z-30 border-b border-[#e3dccb] bg-[#fbf9f5]/90 backdrop-blur-md">
                    <div className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
                        <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActive(cat.id)}
                                    className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                        active === cat.id
                                            ? 'border-[#d4a853] bg-[#d4a853] text-[#0d1b2a] shadow-sm'
                                            : 'border-[#e3dccb] bg-white/70 text-[#1e2a4a]/70 hover:border-[#d4a853]/60 hover:bg-white hover:text-[#1e2a4a]'
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
                        {filtered.map((item) => (
                            <Link
                                key={`${item.category}-${item.name}`}
                                href={route('about.detail', { topic: item.category, slug: slugifyAttraction(item.name) })}
                                className="group block overflow-hidden border border-white/10 bg-[#f3ede2] text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a853]/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4a853]"
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
                                        <h3 className="font-display text-base leading-snug font-semibold text-[#173f82] transition-colors group-hover:text-[#4169E1]">
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
                            </Link>
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

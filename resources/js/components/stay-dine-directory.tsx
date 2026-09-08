import { Head, Link } from '@inertiajs/react';
import { Grid2X2, List, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

import PublicLayout from '@/layouts/public-layout';

export type DirectoryItem = {
    name: string;
    category: string;
    area: string;
    address: string;
    summary: string;
    highlights: string[];
    featured?: boolean;
    image?: string;
};

type Props = {
    headTitle: string;
    eyebrow: string;
    title: string;
    intro: string;
    imageSubHeader: { src: string; alt: string };
    breadcrumbs?: { label: string; href?: string }[];
    type?: string;
    items: DirectoryItem[];
};

export default function StayDineDirectoryPage({ headTitle, imageSubHeader, type = 'accommodations', items }: Props) {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('All');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const categories = useMemo(() => ['All', ...new Set(items.map((item) => item.category))], [items]);
    const filteredItems = useMemo(
        () =>
            items.filter((item) => {
                const searchable = `${item.name} ${item.category} ${item.area} ${item.summary}`.toLowerCase();
                return (category === 'All' || item.category === category) && searchable.includes(query.toLowerCase());
            }),
        [category, items, query],
    );

    return (
        <PublicLayout>
            <Head title={headTitle} />
            <div className="min-h-screen bg-[#0b1640] text-white">
                <section className="relative h-72 overflow-hidden">
                    <img src={imageSubHeader.src} alt={imageSubHeader.alt} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0b1640]/60 via-[#0b1640]/55 to-[#0b1640]" />
                    <div className="absolute inset-0 flex items-end justify-center pb-11 text-center">
                        <div>
                            <p className="mb-2 text-[10px] font-medium tracking-[0.3em] text-[#d4a853] uppercase">Pulilan, Bulacan</p>
                            <h1 className="font-display text-5xl font-semibold text-[#f5f0e8] lg:text-6xl">Stay &amp; Dine</h1>
                            <p className="mt-1 text-xs text-white/50">Accommodations, resorts, restaurants &amp; cafés</p>
                        </div>
                    </div>
                </section>

                <main className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex rounded-2xl border border-white/5 bg-[#0e1c52] p-1.5">
                            <Link
                                href={route('stay.dine.accommodations')}
                                className={`rounded-xl px-4 py-2.5 text-xs font-semibold transition ${type === 'accommodations' ? 'bg-[#d4a853] text-[#0b1640] shadow-lg' : 'text-white/45 hover:text-white/75'}`}
                            >
                                🏨 &nbsp; Accommodations
                            </Link>
                            <Link
                                href={route('stay.dine.restaurants')}
                                className={`rounded-xl px-4 py-2.5 text-xs font-semibold transition ${type === 'restaurants' ? 'bg-[#d4a853] text-[#0b1640] shadow-lg' : 'text-white/45 hover:text-white/75'}`}
                            >
                                🍽 &nbsp; Restaurants &amp; Cafés
                            </Link>
                        </div>
                        <div className="flex rounded-xl border border-white/5 bg-[#0e1c52] p-1">
                            <button onClick={() => setViewMode('grid')} className={`rounded-lg p-2 ${viewMode === 'grid' ? 'bg-[#1a2f88] text-white' : 'text-white/30'}`} aria-label="Grid view">
                                <Grid2X2 className="h-4 w-4" />
                            </button>
                            <button onClick={() => setViewMode('list')} className={`rounded-lg p-2 ${viewMode === 'list' ? 'bg-[#1a2f88] text-white' : 'text-white/30'}`} aria-label="List view">
                                <List className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <div className="relative mb-5">
                        <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-white/25" />
                        <input
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder={type === 'restaurants' ? 'Search restaurants, cafés…' : 'Search hotels, resorts, inns…'}
                            className="w-full rounded-2xl border border-white/7 bg-[#0e1c52] py-3.5 pl-11 pr-20 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#d4a853]/50"
                        />
                        <span className="absolute top-1/2 right-3 -translate-y-1/2 rounded-lg bg-[#1a2f88] px-3 py-1 text-[10px] text-white/40">{filteredItems.length} results</span>
                    </div>

                    <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
                        {categories.map((option) => (
                            <button
                                key={option}
                                onClick={() => setCategory(option)}
                                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[10px] transition ${category === option ? 'border-[#d4a853] bg-[#d4a853] text-[#0b1640]' : 'border-white/8 text-white/45 hover:border-[#d4a853]/50 hover:text-[#d4a853]'}`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div className={viewMode === 'grid' ? 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4' : 'space-y-4'}>
                        {filteredItems.map((item) => {
                            const slug = item.name.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                            return (
                                <Link
                                    key={item.name}
                                    href={route('stay.dine.detail', { type, slug })}
                                    className={`group overflow-hidden rounded-2xl border border-white/5 bg-[#0e1c52] text-left transition duration-300 hover:-translate-y-1 hover:border-[#d4a853]/30 ${viewMode === 'list' ? 'flex' : ''}`}
                                >
                                    <div className={`relative overflow-hidden ${viewMode === 'list' ? 'h-36 w-52 shrink-0' : 'h-44'}`}>
                                        <img src={item.image ?? imageSubHeader.src} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c52]/85 to-transparent" />
                                        <span className="absolute top-3 left-2 rounded-full bg-[#d4a853] px-2 py-0.5 text-[10px] font-bold text-[#0b1640]">{item.category}</span>
                                    </div>
                                    <div className="min-w-0 flex-1 p-4">
                                        <h2 className="font-display truncate text-sm font-semibold text-white transition group-hover:text-[#d4a853]">{item.name}</h2>
                                        <p className="mt-1 text-[10px] text-white/35">⌖ {item.area}</p>
                                        <p className="mt-2 line-clamp-2 text-[10px] leading-relaxed text-white/45">{item.summary}</p>
                                        <div className="mt-3 text-[10px] text-[#d4a853]">★★★★★ <span className="ml-1 text-white/35">4.7 · 38 reviews</span></div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </main>
            </div>
        </PublicLayout>
    );
}

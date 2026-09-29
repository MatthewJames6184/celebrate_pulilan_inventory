import { Head, Link } from '@inertiajs/react';
import { Grid2X2, List, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

import ScrollReveal from '@/components/scroll-reveal';
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
            <div className="min-h-screen w-full min-w-0 bg-[#fffdf8] text-[#1f2937]" style={{ fontSize: '20px' }}>
                <section className="relative h-72 overflow-hidden">
                    <img src={imageSubHeader.src} alt={imageSubHeader.alt} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f4d]/75 via-[#0b1f4d]/50 to-[#0b1f4d]/15" />
                    <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-7xl items-end justify-start px-6 pb-11 text-left lg:px-10">
                        <div>
                            <p className="mb-2 text-[0.625em] font-semibold tracking-[0.3em] text-[#f1c75b] uppercase">Pulilan, Bulacan</p>
                            <h1 className="font-display text-[3em] font-semibold text-white lg:text-[3.75em]">Stay &amp; Dine</h1>
                            <p className="mt-1 text-[0.75em] text-white/80">Accommodations, resorts, restaurants &amp; cafés</p>
                        </div>
                    </div>
                </section>

                <main className="mx-auto w-full max-w-7xl min-w-0 px-6 py-8 lg:px-10">
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                        <div className="relative flex rounded-2xl border border-[#123b8f]/10 bg-[#f1eee7] p-1.5">
                            <span
                                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] rounded-xl bg-[#123b8f] shadow-lg transition-transform duration-500 ease-out ${
                                    type === 'restaurants' ? 'translate-x-full' : 'translate-x-0'
                                }`}
                                aria-hidden="true"
                            />
                            <Link
                                href={route('stay.dine.accommodations')}
                                className={`relative z-10 rounded-xl px-4 py-2.5 text-[0.75em] font-semibold transition-colors ${type === 'accommodations' ? 'text-white' : 'text-slate-600 hover:text-[#123b8f]'}`}
                            >
                                🏨 &nbsp; Accommodations
                            </Link>
                            <Link
                                href={route('stay.dine.restaurants')}
                                className={`relative z-10 rounded-xl px-4 py-2.5 text-[0.75em] font-semibold transition-colors ${type === 'restaurants' ? 'text-white' : 'text-slate-600 hover:text-[#123b8f]'}`}
                            >
                                🍽 &nbsp; Restaurants &amp; Cafés
                            </Link>
                        </div>
                        <div className="flex rounded-xl border border-[#123b8f]/10 bg-[#f1eee7] p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`rounded-lg p-2 ${viewMode === 'grid' ? 'bg-[#123b8f] text-white' : 'text-slate-500 hover:text-[#123b8f]'}`}
                                aria-label="Grid view"
                            >
                                <Grid2X2 className="h-4 w-4" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`rounded-lg p-2 ${viewMode === 'list' ? 'bg-[#123b8f] text-white' : 'text-slate-500 hover:text-[#123b8f]'}`}
                                aria-label="List view"
                            >
                                <List className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <div className="relative mb-5">
                        <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder={type === 'restaurants' ? 'Search restaurants, cafés…' : 'Search hotels, resorts, inns…'}
                            className="w-full rounded-2xl border border-[#123b8f]/15 bg-white py-3.5 pr-20 pl-11 text-[0.75em] text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#123b8f]/50"
                        />
                        <span className="absolute top-1/2 right-3 -translate-y-1/2 rounded-lg bg-[#f1eee7] px-3 py-1 text-[0.625em] text-slate-600">
                            {filteredItems.length} results
                        </span>
                    </div>

                    <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
                        {categories.map((option) => (
                            <button
                                key={option}
                                onClick={() => setCategory(option)}
                                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[0.625em] transition ${category === option ? 'border-[#123b8f] bg-[#123b8f] text-white' : 'border-[#123b8f]/15 bg-white text-slate-600 hover:border-[#123b8f]/50 hover:text-[#123b8f]'}`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div
                        key={viewMode}
                        className={`${viewMode === 'grid' ? 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4' : 'space-y-4'} animate-[fade-up_500ms_ease-out]`}
                    >
                        {filteredItems.map((item, index) => {
                            const slug = item.name
                                .toLowerCase()
                                .trim()
                                .replace(/\s+/g, '-')
                                .replace(/[^a-z0-9-]/g, '');
                            return (
                                <ScrollReveal key={item.name} delay={index * 70}>
                                    <Link
                                        href={route('stay.dine.detail', { type, slug })}
                                        className={`group block h-full overflow-hidden rounded-2xl border border-[#e8e1d5] bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c89b33] hover:shadow-xl ${viewMode === 'list' ? 'flex' : ''}`}
                                    >
                                        <div className={`relative overflow-hidden ${viewMode === 'list' ? 'h-36 w-52 shrink-0' : 'h-44'}`}>
                                            <img
                                                src={item.image ?? '/images/placeholder-img/wat-da-dog-doin.jpg'}
                                                alt={item.name}
                                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1e40af]/85 to-transparent" />
                                            <span className="absolute top-3 left-2 rounded-full bg-[#d4a853] px-2 py-0.5 text-[0.625em] font-bold text-[#0b1640]">
                                                {item.category}
                                            </span>
                                        </div>
                                        <div className="min-w-0 flex-1 bg-white p-4">
                                            <h2 className="font-display truncate text-[0.875em] font-semibold text-[#1A3B70] transition-colors group-hover:text-[#C89B33]">
                                                {item.name}
                                            </h2>
                                            <p className="mt-1 text-[0.625em] text-[#1A3B70]/65">⌖ {item.area}</p>
                                            <p className="mt-2 line-clamp-2 text-[0.625em] leading-relaxed text-[#1A3B70]/75">{item.summary}</p>
                                            <div className="mt-3 text-[0.625em] text-[#1A3B70]/55">Listed in the municipal directory</div>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </main>
            </div>
        </PublicLayout>
    );
}

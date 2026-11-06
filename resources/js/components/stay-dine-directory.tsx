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

type StatsItem = {
    value: string;
    label: string;
};

type Props = {
    headTitle: string;
    eyebrow?: string;
    title: string;
    intro?: string;
    imageSubHeader: { src: string; alt: string };
    breadcrumbs?: { label: string; href?: string }[];
    stats?: StatsItem[];
    type?: 'accommodations' | 'restaurants';
    items: DirectoryItem[];
    defaultView?: 'grid' | 'list';
    focusLabel?: string;
    focusNote?: string;
};

export default function StayDineDirectoryPage({
    headTitle,
    eyebrow = 'Where to Stay and Dine',
    title,
    intro = 'Explore recommended local stays and food spots in Pulilan.',
    imageSubHeader,
    breadcrumbs = [],
    stats = [],
    type = 'accommodations',
    items,
    defaultView = 'grid',
    focusLabel,
    focusNote,
}: Props) {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('All');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>(defaultView);
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
            <div className="min-h-screen bg-[#1d4ed8] text-white" style={{ fontSize: '20px' }}>
                <section className="relative h-72 overflow-hidden">
                    <img src={imageSubHeader.src} alt={imageSubHeader.alt} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a]/60 via-[#1e3a8a]/55 to-[#1d4ed8]" />
                    <div className="absolute inset-0 flex items-end justify-center pb-11 text-center">
                        <div>
                            <p className="mb-2 text-[0.625em] font-medium tracking-[0.3em] text-[#d4a853] uppercase">Pulilan, Bulacan</p>
                            <h1 className="font-display text-[3em] font-semibold text-[#f5f0e8] lg:text-[3.75em]">Stay &amp; Dine</h1>
                            <p className="mt-1 text-[0.75em] text-white/50">Accommodations, resorts, restaurants &amp; cafés</p>
                        </div>
                    </div>
                </section>

                <main className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
                    <div className="mb-6 rounded-[28px] border border-white/10 bg-[#1e40af]/75 p-5 shadow-[0_20px_50px_rgba(10,20,52,0.18)] backdrop-blur-sm">
                        {breadcrumbs.length > 0 && (
                            <nav aria-label="Breadcrumb" className="text-[0.625em] text-white/60">
                                <ol className="flex flex-wrap items-center gap-2">
                                    {breadcrumbs.map((item, index) => (
                                        <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                                            {index > 0 && <span aria-hidden="true">/</span>}
                                            {item.href ? (
                                                <Link href={item.href} className="transition hover:text-[#d4a853]">
                                                    {item.label}
                                                </Link>
                                            ) : (
                                                <span>{item.label}</span>
                                            )}
                                        </li>
                                    ))}
                                </ol>
                            </nav>
                        )}

                        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                            <div>
                                <p className="text-[0.625em] font-medium tracking-[0.2em] text-[#d4a853] uppercase">{eyebrow}</p>
                                <h2 className="mt-2 font-display text-[2em] font-semibold text-[#f5f0e8] lg:text-[2.7em]">{title}</h2>
                                {intro && <p className="mt-2 max-w-2xl text-[0.7em] leading-relaxed text-white/70">{intro}</p>}
                            </div>

                            {stats.length > 0 && (
                                <div className="grid grid-cols-3 gap-3 text-left sm:min-w-[21rem]">
                                    {stats.map((stat) => (
                                        <div key={stat.label} className="rounded-2xl border border-white/10 bg-[#0c2c6e]/70 p-3">
                                            <div className="text-[1.125em] font-bold text-[#f5f0e8]">{stat.value}</div>
                                            <div className="mt-1 text-[0.55em] text-white/60">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {focusLabel && (
                            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#d4a853]/35 bg-[#d4a853]/8 p-3.5 text-left">
                                <span className="rounded-full bg-[#d4a853] px-2 py-1 text-[0.625em] font-bold text-[#0b1640]">{focusLabel}</span>
                                {focusNote && <p className="text-[0.625em] leading-relaxed text-white/70">{focusNote}</p>}
                            </div>
                        )}
                    </div>

                    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                        <div className="relative flex rounded-2xl border border-white/10 bg-[#1e40af] p-1.5">
                            <span
                                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] rounded-xl bg-[#d4a853] shadow-lg transition-transform duration-500 ease-out ${
                                    type === 'restaurants' ? 'translate-x-full' : 'translate-x-0'
                                }`}
                                aria-hidden="true"
                            />
                            <Link
                                href={route('stay.dine.accommodations')}
                                className={`relative z-10 rounded-xl px-4 py-2.5 text-[0.75em] font-semibold transition-colors ${type === 'accommodations' ? 'text-[#0b1640]' : 'text-white/45 hover:text-white/75'}`}
                            >
                                🏨 &nbsp; Accommodations
                            </Link>
                            <Link
                                href={route('stay.dine.restaurants')}
                                className={`relative z-10 rounded-xl px-4 py-2.5 text-[0.75em] font-semibold transition-colors ${type === 'restaurants' ? 'text-[#0b1640]' : 'text-white/45 hover:text-white/75'}`}
                            >
                                🍽 &nbsp; Restaurants &amp; Cafés
                            </Link>
                        </div>
                        <div className="flex rounded-xl border border-white/10 bg-[#1e40af] p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`rounded-lg p-2 ${viewMode === 'grid' ? 'bg-[#1a2f88] text-white' : 'text-white/30'}`}
                                aria-label="Grid view"
                            >
                                <Grid2X2 className="h-4 w-4" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`rounded-lg p-2 ${viewMode === 'list' ? 'bg-[#1a2f88] text-white' : 'text-white/30'}`}
                                aria-label="List view"
                            >
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
                            className="w-full rounded-2xl border border-white/10 bg-[#1e40af] py-3.5 pr-20 pl-11 text-[0.75em] text-white outline-none placeholder:text-white/25 focus:border-[#d4a853]/50"
                        />
                        <span className="absolute top-1/2 right-3 -translate-y-1/2 rounded-lg bg-[#1a2f88] px-3 py-1 text-[0.625em] text-white/40">
                            {filteredItems.length} results
                        </span>
                    </div>

                    <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
                        {categories.map((option) => (
                            <button
                                key={option}
                                onClick={() => setCategory(option)}
                                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[0.625em] transition ${category === option ? 'border-[#d4a853] bg-[#d4a853] text-[#0b1640]' : 'border-white/8 text-white/45 hover:border-[#d4a853]/50 hover:text-[#d4a853]'}`}
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
                            const routeType = type === 'restaurants' ? 'restaurant' : 'accommodation';

                            return (
                                <ScrollReveal key={item.name} delay={index * 70}>
                                    <Link
                                        href={`/stay-dine/${routeType}/${slug}`}
                                        className={`group block h-full overflow-hidden rounded-2xl border border-[#cbd8e8] bg-[#EAF0F8] text-left transition duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:border-[#C89B33] hover:shadow-xl hover:shadow-[#1A3B70]/15 ${viewMode === 'list' ? 'flex' : ''}`}
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
                                        <div className="min-w-0 flex-1 bg-[#F8F9FA] p-4">
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

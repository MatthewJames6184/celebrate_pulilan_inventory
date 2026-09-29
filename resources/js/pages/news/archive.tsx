import { Head, Link } from '@inertiajs/react';
import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';

import { newsItems } from '@/data/news';
import PublicLayout from '@/layouts/public-layout';

export default function NewsArchive() {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('All');
    const categories = ['All', ...new Set(newsItems.map((item) => item.category))];
    const filtered = useMemo(
        () =>
            newsItems.filter(
                (item) =>
                    (category === 'All' || item.category === category) && `${item.title} ${item.excerpt}`.toLowerCase().includes(query.toLowerCase()),
            ),
        [category, query],
    );
    const featured = filtered[0] ?? newsItems[0];

    return (
        <PublicLayout>
            <Head title="News & Events" />
            <div className="text-scale min-h-screen bg-[#fffdf8] text-[#1f2937]" style={{ fontSize: '16px' }}>
                <section className="bg-[#123b8f] text-white">
                    <div className="mx-auto max-w-7xl px-6 pt-28 pb-10 lg:px-10">
                        <div className="mb-3 flex items-center gap-2">
                            <span className="h-px w-6 bg-[#d4a853]" />
                            <p className="text-xs font-semibold tracking-widest text-[#f1c75b] uppercase">Stay in the loop</p>
                        </div>
                        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                            <h1 className="font-display text-5xl leading-none font-semibold">
                                News &amp;
                                <br />
                                <span className="text-[#f1c75b] italic">Events</span>
                            </h1>
                        </div>
                    </div>
                </section>
                <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
                    <div className="mb-8 flex flex-col gap-5 border-b border-[#123b8f]/10 pb-8 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-wrap gap-2">
                            {categories.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setCategory(item)}
                                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${category === item ? 'bg-[#123b8f] text-white' : 'border border-[#123b8f]/15 bg-white text-slate-600 hover:border-[#123b8f]/40 hover:text-[#123b8f]'}`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full max-w-xs">
                            <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <input
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                placeholder="Search articles…"
                                className="w-full rounded-xl border border-[#123b8f]/15 bg-white py-3 pr-4 pl-10 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#123b8f]/50"
                            />
                        </div>
                    </div>
                    <Link
                        href={route('news.show', { slug: featured.slug })}
                        className="group mb-14 grid overflow-hidden rounded-3xl border border-[#e8e1d5] bg-white shadow-sm transition hover:border-[#c89b33] hover:shadow-xl md:grid-cols-2"
                    >
                        <div className="relative h-64 overflow-hidden md:h-auto">
                            <img
                                src={featured.image}
                                alt={featured.title}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <span className="absolute top-5 left-5 rounded-full bg-[#e8b84b] px-3 py-1 text-xs font-bold text-[#17233d]">
                                Featured · {featured.category}
                            </span>
                        </div>
                        <div className="flex flex-col justify-center space-y-4 bg-white p-8 lg:p-10">
                            <p className="text-xs text-slate-500">{featured.date} · 4 min read</p>
                            <h2 className="font-display text-2xl leading-snug font-semibold text-[#123b8f] transition-colors group-hover:text-[#a27620] lg:text-3xl">
                                {featured.title}
                            </h2>
                            <p className="text-sm leading-relaxed text-slate-600">{featured.excerpt}</p>
                            <span className="text-sm font-semibold text-[#a27620]">Read full story →</span>
                        </div>
                    </Link>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filtered
                            .filter((item) => item.slug !== featured.slug)
                            .map((item) => (
                                <Link
                                    key={item.slug}
                                    href={route('news.show', { slug: item.slug })}
                                    className="group overflow-hidden rounded-2xl border border-[#e8e1d5] bg-white shadow-sm transition hover:border-[#c89b33] hover:shadow-xl"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                        <span className="absolute top-3 left-3 rounded-full bg-[#e8b84b] px-2.5 py-1 text-xs font-bold text-[#17233d]">
                                            {item.category}
                                        </span>
                                    </div>
                                    <div className="space-y-3 bg-white p-5">
                                        <p className="text-xs text-slate-500">{item.date} · 3 min read</p>
                                        <h2 className="font-display text-base leading-snug font-semibold text-[#123b8f] transition-colors group-hover:text-[#a27620]">
                                            {item.title}
                                        </h2>
                                        <p className="line-clamp-2 text-xs leading-relaxed text-slate-600">{item.excerpt}</p>
                                        <span className="block text-right text-xs font-semibold text-[#a27620]">Read more →</span>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}

import { Head, Link } from '@inertiajs/react';
import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';

import PublicLayout from '@/layouts/public-layout';
import { newsItems } from '@/data/news';

export default function NewsArchive() {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('All');
    const categories = ['All', ...new Set(newsItems.map((item) => item.category))];
    const filtered = useMemo(() => newsItems.filter((item) => (category === 'All' || item.category === category) && `${item.title} ${item.excerpt}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
    const featured = filtered[0] ?? newsItems[0];

    return (
        <PublicLayout>
            <Head title="News & Events" />
            <div className="min-h-screen bg-[#1d4ed8] text-white">
                <section className="bg-[#2563eb]">
                    <div className="mx-auto max-w-7xl px-6 pt-28 pb-10 lg:px-10">
                    <div className="mb-3 flex items-center gap-2"><span className="h-px w-6 bg-[#d4a853]" /><p className="text-xs font-medium tracking-widest text-[#d4a853] uppercase">Stay in the loop</p></div>
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <h1 className="font-display text-5xl leading-none font-semibold">News &amp;<br /><span className="text-[#d4a853] italic">Events</span></h1>
                    </div>
                    </div>
                </section>
                <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
                    <div className="mb-8 flex flex-col gap-5 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-wrap gap-2">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-1.5 text-sm font-medium ${category === item ? 'bg-[#d4a853] text-[#0b1640]' : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'}`}>{item}</button>)}</div>
                        <div className="relative w-full max-w-xs"><Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-white/35" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles…" className="w-full rounded-xl border border-white/10 bg-[#1e3a8a] py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#d4a853]/50" /></div>
                    </div>
                    <Link href={route('news.show', { slug: featured.slug })} className="group mb-14 grid overflow-hidden rounded-3xl border border-[#cbd8e8] bg-[#EAF0F8] transition hover:border-[#C89B33] hover:shadow-xl hover:shadow-[#1A3B70]/15 md:grid-cols-2">
                        <div className="relative h-64 overflow-hidden md:h-auto"><img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute top-5 left-5 rounded-full bg-[#d4a853] px-3 py-1 text-xs font-bold text-[#0b1640]">Featured · {featured.category}</span></div>
                        <div className="flex flex-col justify-center space-y-4 bg-[#F8F9FA] p-8 lg:p-10"><p className="text-xs text-[#1A3B70]/60">{featured.date} · 4 min read</p><h2 className="font-display text-2xl leading-snug font-semibold text-[#1A3B70] transition-colors group-hover:text-[#C89B33] lg:text-3xl">{featured.title}</h2><p className="text-sm leading-relaxed text-[#1A3B70]/75">{featured.excerpt}</p><span className="text-sm font-medium text-[#C89B33]">Read full story →</span></div>
                    </Link>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.filter((item) => item.slug !== featured.slug).map((item) => <Link key={item.slug} href={route('news.show', { slug: item.slug })} className="group overflow-hidden rounded-2xl border border-[#cbd8e8] bg-[#EAF0F8] transition hover:border-[#C89B33] hover:shadow-xl hover:shadow-[#1A3B70]/15"><div className="relative h-48 overflow-hidden"><img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute top-3 left-3 rounded-full bg-[#C89B33] px-2.5 py-1 text-xs font-bold text-[#1A3B70]">{item.category}</span></div><div className="space-y-3 bg-[#F8F9FA] p-5"><p className="text-xs text-[#1A3B70]/60">{item.date} · 3 min read</p><h2 className="font-display text-base font-semibold leading-snug text-[#1A3B70] transition-colors group-hover:text-[#C89B33]">{item.title}</h2><p className="line-clamp-2 text-xs leading-relaxed text-[#1A3B70]/75">{item.excerpt}</p><span className="block text-right text-xs font-medium text-[#C89B33]">Read more →</span></div></Link>)}</div>
                </section>
            </div>
        </PublicLayout>
    );
}

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
            <div className="min-h-screen bg-[#0b1640] text-white">
                <section className="mx-auto max-w-5xl px-6 pt-28 pb-8 lg:px-10">
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div><p className="mb-2 text-[10px] font-medium tracking-[0.3em] text-[#d4a853] uppercase">Stay in the loop</p><h1 className="font-display text-4xl leading-none font-semibold md:text-5xl">News &amp;<br /><span className="text-[#d4a853] italic">Events</span></h1></div>
                        <div className="relative w-full md:w-52"><Search className="absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-white/30" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles…" className="w-full rounded-lg border border-white/10 bg-[#07143b] py-2 pl-9 pr-3 text-[10px] text-white outline-none placeholder:text-white/30 focus:border-[#d4a853]/50" /></div>
                    </div>
                    <div className="mt-5 flex gap-2 overflow-x-auto">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-3 py-1 text-[9px] ${category === item ? 'bg-[#d4a853] font-semibold text-[#0b1640]' : 'bg-[#10245f] text-white/45 hover:text-white'}`}>{item}</button>)}</div>
                </section>
                <section className="mx-auto max-w-5xl px-6 pb-16 lg:px-10">
                    <Link href={route('news.show', { slug: featured.slug })} className="group mb-6 grid overflow-hidden rounded-xl border border-white/5 bg-[#10245f] md:grid-cols-2">
                        <img src={featured.image} alt={featured.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 md:h-full" />
                        <div className="space-y-3 p-5"><span className="inline-block rounded bg-[#d4a853] px-2 py-1 text-[9px] font-bold text-[#0b1640]">Featured · {featured.category}</span><p className="text-[9px] text-white/35">{featured.date} · 4 min read</p><h2 className="font-display text-lg font-semibold leading-tight group-hover:text-[#d4a853]">{featured.title}</h2><p className="line-clamp-3 text-[10px] leading-relaxed text-white/45">{featured.excerpt}</p><span className="inline-block pt-1 text-[9px] font-semibold text-[#d4a853]">Read full story →</span></div>
                    </Link>
                    <div className="grid gap-4 md:grid-cols-3">{filtered.filter((item) => item.slug !== featured.slug).map((item) => <Link key={item.slug} href={route('news.show', { slug: item.slug })} className="group overflow-hidden rounded-xl border border-white/5 bg-[#10245f]"><div className="h-28 overflow-hidden"><img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="space-y-2 p-3"><span className="text-[9px] text-[#d4a853]">{item.category}</span><h2 className="font-display line-clamp-2 text-xs font-semibold leading-snug group-hover:text-[#d4a853]">{item.title}</h2><p className="line-clamp-2 text-[9px] leading-relaxed text-white/40">{item.excerpt}</p><span className="block text-right text-[9px] text-[#d4a853]">Read more →</span></div></Link>)}</div>
                </section>
            </div>
        </PublicLayout>
    );
}

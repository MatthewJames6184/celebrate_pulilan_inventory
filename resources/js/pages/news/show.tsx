import { Head, Link } from '@inertiajs/react';

import PublicLayout from '@/layouts/public-layout';
import { getNewsBySlug, getRelatedNews } from '@/data/news';

export default function NewsShow({ slug }: { slug: string }) {
    const article = getNewsBySlug(slug);
    const related = getRelatedNews(article.slug, 3);

    return (
        <PublicLayout>
            <Head title={article.title} />
            <div className="min-h-screen bg-[#0b1640] text-white">
                <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
                    <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0b1640]/25 via-transparent to-[#0b1640]" />
                    <Link href={route('news.archive')} className="absolute top-24 left-6 rounded-full border border-white/10 bg-[#0b1640]/50 px-3 py-2 text-sm text-white/70 backdrop-blur transition hover:text-white lg:left-10">← All News</Link>
                    <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-8 lg:px-10">
                        <div className="mb-3 flex items-center gap-3"><span className="rounded-full bg-[#d4a853] px-2.5 py-1 text-xs font-bold text-[#0b1640]">{article.category}</span><span className="text-xs text-white/40">{article.date} · 4 min read</span></div>
                        <h1 className="font-display max-w-3xl text-4xl leading-tight font-semibold lg:text-5xl">{article.title}</h1>
                    </div>
                </section>
                <article className="mx-auto max-w-3xl px-6 py-12 lg:px-0">
                    <div className="mb-10 flex items-center justify-between gap-4 border-b border-white/10 pb-8"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a2f88] font-bold text-[#d4a853]">L</div><div><p className="text-sm text-white/70">Luz Macaraeg</p><p className="text-xs text-white/35">Municipal community correspondent</p></div></div><div className="flex gap-2"><button className="rounded-md border border-white/10 px-3 py-1.5 text-[10px] text-white/45 hover:border-[#d4a853]/40 hover:text-[#d4a853]">Share</button><button className="rounded-md border border-white/10 px-3 py-1.5 text-[10px] text-white/45 hover:border-[#d4a853]/40 hover:text-[#d4a853]">Save</button></div></div>
                    <p className="font-display mb-8 text-xl leading-relaxed text-white/75 italic">{article.excerpt}</p>
                    <div className="space-y-5">{article.content.map((paragraph) => <p key={paragraph} className="text-base leading-[1.85] tracking-[0.01em] text-white/60">{paragraph}</p>)}</div>
                    <blockquote className="my-12 border-l-4 border-[#d4a853] pl-6 font-display text-xl leading-relaxed text-white/80 italic">“Pulilan's heritage is not just preserved in buildings and traditions — it lives in the heart of every community celebration.”</blockquote>
                    <div className="my-10 border-t border-white/10 pt-5"><div className="flex flex-wrap gap-2"><span className="rounded-full bg-[#10245f] px-3 py-1 text-[10px] text-white/45">Pulilan</span><span className="rounded-full bg-[#10245f] px-3 py-1 text-[10px] text-white/45">{article.category}</span><span className="rounded-full bg-[#10245f] px-3 py-1 text-[10px] text-white/45">Culture</span></div></div>
                    <div className="rounded-2xl border border-white/5 bg-[#10245f] p-6"><p className="text-sm text-white/70">Enjoyed this article?</p><p className="mt-1 text-xs text-white/30">Share it with your community and friends.</p><div className="mt-4 flex gap-2"><button className="rounded-md bg-[#1a2f88] px-3 py-1.5 text-[10px] text-white/70">Facebook</button><button className="rounded-md bg-[#1a2f88] px-3 py-1.5 text-[10px] text-white/70">Twitter</button><button className="rounded-md bg-[#1a2f88] px-3 py-1.5 text-[10px] text-white/70">Copy Link</button></div></div>
                </article>
                <section className="border-t border-white/10 bg-[#0e1c52]"><div className="mx-auto max-w-7xl px-6 py-14 lg:px-10"><div className="mb-8 flex items-center gap-2"><span className="h-px w-6 bg-[#d4a853]" /><span className="text-xs tracking-widest text-[#d4a853] uppercase">More Stories</span></div><div className="grid gap-6 md:grid-cols-3">{related.map((item) => <Link key={item.slug} href={route('news.show', { slug: item.slug })} className="group overflow-hidden rounded-2xl border border-white/5 bg-[#10245f] transition hover:-translate-y-1 hover:border-[#d4a853]/30"><img src={item.image} alt={item.title} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" /><div className="p-5"><p className="text-xs text-white/30">{item.date}</p><h2 className="font-display mt-2 text-sm font-semibold text-white transition-colors group-hover:text-[#d4a853]">{item.title}</h2><span className="mt-3 inline-block text-xs text-[#d4a853]">Read more →</span></div></Link>)}</div></div></section>
            </div>
        </PublicLayout>
    );
}

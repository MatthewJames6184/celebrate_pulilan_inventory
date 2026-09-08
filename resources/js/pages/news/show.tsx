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
                <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
                    <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0b1640]/35 via-[#0b1640]/30 to-[#0b1640]" />
                    <Link href={route('news.archive')} className="absolute top-24 left-6 rounded-full border border-white/10 bg-[#0b1640]/60 px-4 py-2 text-sm text-white/70 backdrop-blur hover:text-white lg:left-10">← All News</Link>
                    <div className="absolute inset-x-0 bottom-0 mx-auto max-w-3xl px-6 pb-12">
                        <div className="mb-4 flex items-center gap-3"><span className="rounded-full bg-[#d4a853] px-3 py-1 text-xs font-bold text-[#0b1640]">{article.category}</span><span className="text-xs text-white/40">{article.date}</span></div>
                        <h1 className="font-display text-3xl leading-tight font-semibold lg:text-5xl">{article.title}</h1>
                    </div>
                </section>
                <article className="mx-auto max-w-3xl px-6 py-14">
                    <div className="mb-10 flex items-center gap-3 border-b border-white/10 pb-8"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a2f88] font-bold text-[#d4a853]">P</div><div><p className="text-sm text-white/70">Pulilan Tourism Office</p><p className="text-xs text-white/35">Municipal community correspondent</p></div></div>
                    <p className="font-display mb-8 text-xl leading-relaxed text-white/75 italic">{article.excerpt}</p>
                    <div className="space-y-5">{article.content.map((paragraph) => <p key={paragraph} className="text-base leading-[1.85] tracking-[0.01em] text-white/60">{paragraph}</p>)}</div>
                    <blockquote className="my-12 border-l-4 border-[#d4a853] pl-6 font-display text-xl leading-relaxed text-white/80 italic">“Pulilan's heritage is not just preserved in buildings and traditions — it lives in the heart of every community celebration.”</blockquote>
                    <div className="mt-10 rounded-2xl border border-white/5 bg-[#0e1c52] p-6"><p className="text-sm text-white/60">Enjoyed this story?</p><p className="mt-1 text-xs text-white/30">Share it with your community and friends.</p></div>
                </article>
                <section className="border-t border-white/5 bg-[#0e1c52]"><div className="mx-auto max-w-7xl px-6 py-14 lg:px-10"><div className="mb-8 flex items-center gap-2"><span className="h-px w-6 bg-[#d4a853]" /><span className="text-xs tracking-widest text-[#d4a853] uppercase">More Stories</span></div><div className="grid gap-6 md:grid-cols-3">{related.map((item) => <Link key={item.slug} href={route('news.show', { slug: item.slug })} className="group overflow-hidden rounded-2xl border border-white/5 bg-[#0b1640] hover:border-[#d4a853]/30"><img src={item.image} alt={item.title} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" /><div className="p-5"><p className="text-xs text-white/30">{item.date}</p><h2 className="font-display mt-2 text-sm font-semibold group-hover:text-[#d4a853]">{item.title}</h2><span className="mt-3 inline-block text-xs text-[#d4a853]">Read more →</span></div></Link>)}</div></div></section>
            </div>
        </PublicLayout>
    );
}

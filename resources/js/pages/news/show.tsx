import { Head, Link } from '@inertiajs/react';

import { getNewsBySlug, getRelatedNews } from '@/data/news';
import PublicLayout from '@/layouts/public-layout';

export default function NewsShow({ slug }: { slug: string }) {
    const article = getNewsBySlug(slug);
    const related = getRelatedNews(article.slug, 3);

    return (
        <PublicLayout>
            <Head title={article.title} />
            <div className="text-scale min-h-screen bg-[#fffdf8] text-[#1f2937]" style={{ fontSize: '16px' }}>
                <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
                    <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f4d]/20 via-[#0b1f4d]/15 to-[#0b1f4d]/85" />
                    <Link
                        href={route('news.archive')}
                        className="absolute top-24 left-6 rounded-full border border-white/30 bg-[#0b1f4d]/55 px-3 py-2 text-sm text-white backdrop-blur transition hover:bg-[#0b1f4d]/80 lg:left-10"
                    >
                        ← All News
                    </Link>
                    <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-8 lg:px-10">
                        <div className="mb-3 flex items-center gap-3">
                            <span className="rounded-full bg-[#e8b84b] px-2.5 py-1 text-xs font-bold text-[#17233d]">{article.category}</span>
                            <span className="text-xs text-white/80">{article.date} · 4 min read</span>
                        </div>
                        <h1 className="font-display max-w-3xl text-4xl leading-tight font-semibold lg:text-5xl">{article.title}</h1>
                    </div>
                </section>
                <article className="mx-auto max-w-3xl px-6 py-12 lg:px-0">
                    <div className="mb-10 flex items-center justify-between gap-4 border-b border-[#123b8f]/10 pb-8">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#123b8f] font-bold text-[#f1c75b]">L</div>
                            <div>
                                <p className="text-sm font-medium text-[#123b8f]">Luz Macaraeg</p>
                                <p className="text-xs text-slate-500">Municipal community correspondent</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="rounded-md border border-[#123b8f]/15 px-3 py-1.5 text-[10px] text-slate-600 hover:border-[#a27620]/50 hover:text-[#8b671e]">
                                Share
                            </button>
                            <button className="rounded-md border border-[#123b8f]/15 px-3 py-1.5 text-[10px] text-slate-600 hover:border-[#a27620]/50 hover:text-[#8b671e]">
                                Save
                            </button>
                        </div>
                    </div>
                    <p className="font-display mb-8 text-xl leading-relaxed text-[#123b8f] italic">{article.excerpt}</p>
                    <div className="space-y-5">
                        {article.content.map((paragraph) => (
                            <p key={paragraph} className="text-base leading-[1.85] tracking-[0.01em] text-slate-700">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <blockquote className="font-display my-12 border-l-4 border-[#e1b64f] pl-6 text-xl leading-relaxed text-[#123b8f] italic">
                        “Pulilan's heritage is not just preserved in buildings and traditions — it lives in the heart of every community celebration.”
                    </blockquote>
                    <div className="my-10 border-t border-[#123b8f]/10 pt-5">
                        <div className="flex flex-wrap gap-2">
                            <span className="rounded-full bg-[#f1eee7] px-3 py-1 text-[10px] text-slate-600">Pulilan</span>
                            <span className="rounded-full bg-[#f1eee7] px-3 py-1 text-[10px] text-slate-600">{article.category}</span>
                            <span className="rounded-full bg-[#f1eee7] px-3 py-1 text-[10px] text-slate-600">Culture</span>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-[#123b8f]/10 bg-[#f7f3eb] p-6">
                        <p className="text-sm font-semibold text-[#123b8f]">Enjoyed this article?</p>
                        <p className="mt-1 text-xs text-slate-600">Share it with your community and friends.</p>
                        <div className="mt-4 flex gap-2">
                            <button className="rounded-md bg-[#123b8f] px-3 py-1.5 text-[10px] text-white">Facebook</button>
                            <button className="rounded-md bg-[#123b8f] px-3 py-1.5 text-[10px] text-white">Twitter</button>
                            <button className="rounded-md bg-[#123b8f] px-3 py-1.5 text-[10px] text-white">Copy Link</button>
                        </div>
                    </div>
                </article>
                <section className="border-t border-[#123b8f]/10 bg-[#f7f3eb]">
                    <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
                        <div className="mb-8 flex items-center gap-2">
                            <span className="h-px w-6 bg-[#a27620]" />
                            <span className="text-xs font-semibold tracking-widest text-[#a27620] uppercase">More Stories</span>
                        </div>
                        <div className="grid gap-6 md:grid-cols-3">
                            {related.map((item) => (
                                <Link
                                    key={item.slug}
                                    href={route('news.show', { slug: item.slug })}
                                    className="group overflow-hidden rounded-2xl border border-[#e8e1d5] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#c89b33]/50 hover:shadow-lg"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                    <div className="p-5">
                                        <p className="text-xs text-slate-500">{item.date}</p>
                                        <h2 className="font-display mt-2 text-sm font-semibold text-[#123b8f] transition-colors group-hover:text-[#a27620]">
                                            {item.title}
                                        </h2>
                                        <span className="mt-3 inline-block text-xs font-semibold text-[#a27620]">Read more →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}

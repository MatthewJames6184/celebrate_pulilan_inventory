import { Head, Link } from '@inertiajs/react';

import PublicLayout from '@/layouts/public-layout';
import { getNewsBySlug, getRelatedNews, type NewsItem } from '@/data/news';

type NewsShowProps = {
    slug: string;
    item?: NewsItem;
};

export default function NewsShow({ slug, item }: NewsShowProps) {
    const news = item ?? getNewsBySlug(slug);
    const relatedNews = getRelatedNews(news.slug, 3);

    return (
        <PublicLayout>
            <Head title={news.title} />

            <div className="min-h-screen bg-slate-50">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                        <Link href={route('home')} className="font-medium text-slate-600 hover:text-emerald-700">Home</Link>
                        <span>/</span>
                        <Link href={route('news.archive')} className="font-medium text-slate-600 hover:text-emerald-700">News Archive</Link>
                        <span>/</span>
                        <span className="text-slate-700">{news.title}</span>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
                        <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                            <img src={news.image} alt={news.title} className="h-[320px] w-full object-cover sm:h-[420px]" />

                            <div className="space-y-6 p-6 sm:p-8">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-700">
                                        {news.category}
                                    </span>
                                    <span className="text-sm font-medium text-slate-500">{news.date}</span>
                                </div>

                                <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">{news.title}</h1>

                                <p className="text-lg leading-8 text-slate-700">{news.excerpt}</p>

                                {news.content.map((paragraph) => (
                                    <p key={paragraph} className="text-base leading-8 text-slate-700">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </article>

                        <aside className="space-y-6">
                            <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                                <h2 className="text-xl font-black uppercase tracking-[0.18em] text-slate-900">Related News</h2>
                                <div className="mt-5 space-y-4">
                                    {relatedNews.map((item) => (
                                        <Link key={item.slug} href={route('news.show', { slug: item.slug })} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:border-emerald-200 hover:bg-emerald-50">
                                            <img src={item.image} alt={item.title} className="h-16 w-16 rounded-xl object-cover" />
                                            <div className="min-w-0 flex-1">
                                                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-700">{item.category}</p>
                                                <h3 className="mt-1 text-sm font-bold leading-snug text-slate-900">{item.title}</h3>
                                                <p className="mt-1 text-xs text-slate-500">{item.date}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link href={route('news.archive')} className="block rounded-[24px] border border-slate-200 bg-emerald-900 px-6 py-5 text-center text-base font-bold text-white transition hover:border-emerald-300 hover:text-yellow-400">
                                News Archive
                            </Link>
                        </aside>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}

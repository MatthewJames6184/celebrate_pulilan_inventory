import { Head, Link } from '@inertiajs/react';

import PublicLayout from '@/layouts/public-layout';
import { newsItems } from '@/data/news';

export default function NewsArchive() {
    return (
        <PublicLayout>
            <Head title="News Archive" />

            <div className="min-h-screen bg-slate-50">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">News Archive</p>
                            <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">Pulilan Community News</h1>
                        </div>
                        <Link href={route('home')} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700">
                            Back to Home
                        </Link>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {newsItems.map((item) => (
                            <article key={item.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                                <Link href={route('news.show', { slug: item.slug })} className="block">
                                    <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                                </Link>
                                <div className="space-y-4 p-5">
                                    <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                                        <span>{item.category}</span>
                                        <span className="text-slate-400">{item.date}</span>
                                    </div>

                                    <Link href={route('news.show', { slug: item.slug })} className="block text-2xl font-bold leading-snug text-slate-950 transition hover:text-emerald-700">
                                        {item.title}
                                    </Link>

                                    <p className="text-sm leading-7 text-slate-600">{item.excerpt}</p>

                                    <Link
                                        href={route('news.show', { slug: item.slug })}
                                        className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-100"
                                    >
                                        Read more
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}

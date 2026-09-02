import { Link } from '@inertiajs/react';

import { featuredNews, newsItems } from '@/data/news';

const upcomingEvents = [
    {
        title: 'Kasedihan Festival',
        date: 'October 10, 2026',
        image: '/images/carousel-images/Festival.jpg',
        desc: 'A cultural showcase celebrating community talent and heritage.',
    },
    {
        title: 'Heritage Night',
        date: 'November 8, 2026',
        image: '/images/carousel-images/Heritage.jpg',
        desc: 'An evening of music, storytelling, and local traditions.',
    },
];

export default function LatestNewsEvents() {
    const otherNewsItems = newsItems.slice(1, 4);

    return (
        <div className="w-full bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-0">
            <div className="bg-emerald-700 px-6 py-5">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Latest News</p>
                    <Link href={route('news.archive')} className="hidden rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-700 sm:inline-flex">
                        News Archive
                    </Link>
                </div>
            </div>

            <div className="mt-0 grid gap-6 p-6 lg:grid-cols-[1.7fr_0.9fr]">
                <article className="space-y-4">
                    <div className="space-y-2">
                        <Link href={route('news.show', { slug: featuredNews.slug })} className="block text-2xl font-bold text-slate-900 transition hover:text-emerald-700">
                            {featuredNews.title}
                        </Link>
                        <p className="text-sm font-medium text-slate-500">{featuredNews.date}</p>
                    </div>

                    <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-slate-100">
                        <Link href={route('news.show', { slug: featuredNews.slug })} className="block">
                            <img src={featuredNews.image} alt={featuredNews.title} className="h-[260px] w-full object-cover sm:h-[320px]" />
                        </Link>
                    </div>

                    <p className="text-base leading-7 text-slate-700">{featuredNews.excerpt}</p>

                    <Link
                        href={route('news.show', { slug: featuredNews.slug })}
                        className="mt-4 inline-flex items-center gap-2 border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800"
                    >
                        Read more
                    </Link>

                    <div className="mt-4">
                        <h4 className="mb-2 text-lg font-bold text-slate-900">Upcoming Events</h4>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {upcomingEvents.map((ev) => (
                                <article key={ev.title} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                                    <img src={ev.image} alt={ev.title} className="h-16 w-16 rounded-md object-cover" />
                                    <div>
                                        <h5 className="text-sm font-semibold text-slate-900">{ev.title}</h5>
                                        <p className="mt-1 text-xs text-slate-500">{ev.date}</p>
                                        <p className="mt-1 text-xs text-slate-600">{ev.desc}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </article>

                <aside className="space-y-4 border-l border-slate-200 pl-0 lg:pl-6">
                    <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
                        <h3 className="text-xl font-black uppercase tracking-[0.12em] text-slate-900">Other News</h3>
                        <Link href={route('news.archive')} className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                            More
                        </Link>
                    </div>

                    <div className="space-y-4">
                        {otherNewsItems.map((item) => (
                            <Link key={item.slug} href={route('news.show', { slug: item.slug })} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:-translate-y-0.5 hover:shadow-sm">
                                <img src={item.image} alt={item.title} className="h-20 w-20 rounded-xl object-cover" />
                                <div className="min-w-0 flex-1">
                                    <h4 className="text-base font-bold leading-snug text-slate-900">{item.title}</h4>
                                    <p className="mt-2 text-xs font-medium text-slate-500">{item.date}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    );
}

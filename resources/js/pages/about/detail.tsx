import PublicLayout from '@/layouts/public-layout';
import { whatToSeePages, type WhatToSeeTopic } from '@/lib/what-to-see';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type DetailPageProps = {
    topic: WhatToSeeTopic;
    slug: string;
};

export default function Detail({ topic, slug }: DetailPageProps) {
    const page = whatToSeePages[topic];
    const card = page.cards.find((item) => item.slug === slug) ?? page.cards[0];

    return (
        <PublicLayout>
            <Head title={card.title} />
            <main className="min-h-screen bg-[#f3e6c9] text-[#102033]">
                <section className="relative h-72 overflow-hidden">
                    <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#163b82]/60" />
                    <div className="absolute inset-0 flex items-end">
                        <div className="mx-auto w-full max-w-7xl px-6 pb-12 lg:px-10">
                            <p className="text-[10px] font-bold tracking-[0.25em] text-[#f5bd2f] uppercase">{page.highlightLabel}</p>
                            <h1 className="font-display mt-3 text-4xl font-semibold text-white lg:text-6xl">{card.title}</h1>
                        </div>
                    </div>
                </section>

                <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.4fr_0.8fr] lg:px-10">
                    <article className="rounded-2xl bg-white p-6 shadow-sm lg:p-10">
                        <p className="text-sm leading-7 text-slate-600">{card.description}</p>
                        <p className="mt-5 text-sm leading-7 text-slate-600">{page.summary}</p>
                        <div className="mt-8 flex flex-wrap gap-2">
                            {page.highlights.map((highlight) => (
                                <span key={highlight} className="rounded-full bg-[#f5bd2f]/25 px-4 py-2 text-xs font-semibold text-[#8a641c]">
                                    {highlight}
                                </span>
                            ))}
                        </div>
                    </article>

                    <aside className="rounded-2xl bg-[#163b82] p-6 text-white">
                        <p className="text-[10px] font-bold tracking-[0.25em] text-[#f5bd2f] uppercase">Explore more</p>
                        <div className="mt-5 space-y-2">
                            {page.cards.map((item) => (
                                <Link
                                    key={item.slug}
                                    href={route('about.detail', { topic, slug: item.slug })}
                                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition ${
                                        item.slug === card.slug ? 'bg-[#f5bd2f] font-semibold text-[#102033]' : 'bg-white/5 text-white/75 hover:bg-white/10'
                                    }`}
                                >
                                    {item.title}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            ))}
                        </div>
                        <Link href={route('about.attraction')} className="mt-8 inline-flex items-center gap-2 text-sm text-[#f5bd2f] hover:text-white">
                            <ArrowLeft className="h-4 w-4" /> Back to What to See
                        </Link>
                    </aside>
                </section>
            </main>
        </PublicLayout>
    );
}

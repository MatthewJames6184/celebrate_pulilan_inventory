import { Link } from '@inertiajs/react';

import PublicTopicPage from '@/components/public-topic-page';
import { whatToSeePages, type WhatToSeeTopic } from '@/lib/what-to-see';

type DetailPageProps = {
    topic: WhatToSeeTopic;
    slug: string;
};

export default function Detail({ topic, slug }: DetailPageProps) {
    const page = whatToSeePages[topic];
    const card = page.cards.find((item) => item.slug === slug) ?? page.cards[0];

    return (
        <PublicTopicPage
            headTitle={card.title}
            title={card.title}
            imageSubHeader={{ src: page.detailImage, alt: card.title }}
            breadcrumbs={[
                { label: 'Home', href: route('home') },
                { label: 'About Pulilan', href: route('about') },
                { label: page.title, href: route(`about.${topic}`) },
                { label: card.title },
            ]}
        >
            <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
                    <div className="space-y-6">
                        <img src={card.image} alt={card.title} className="h-80 w-full rounded-3xl object-cover shadow-sm" />

                        <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">{page.highlightLabel}</p>
                            <h2 className="mt-2 text-3xl font-semibold text-slate-950">{card.title}</h2>
                            <p className="mt-4 text-sm leading-8 text-slate-600">{card.description}</p>
                            <p className="mt-4 text-sm leading-8 text-slate-600">{page.summary}</p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {page.highlights.map((item) => (
                                    <span key={item} className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </article>
                    </div>

                    <aside className="space-y-4">
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-slate-950">Related Pages</h3>
                            <div className="mt-4 space-y-3">
                                {page.cards.map((item) => (
                                    <Link
                                        key={item.slug}
                                        href={route('about.detail', { topic, slug: item.slug })}
                                        className={`block rounded-2xl border px-4 py-3 text-sm transition ${
                                            item.slug === card.slug
                                                ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
                                                : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-200 hover:bg-emerald-50'
                                        }`}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link
                            href={route(`about.${topic}`)}
                            className="block rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5 text-sm font-semibold text-slate-900 transition hover:border-emerald-300 hover:bg-emerald-50"
                        >
                            Back to {page.title}
                        </Link>
                    </aside>
                </div>
            </section>
        </PublicTopicPage>
    );
}

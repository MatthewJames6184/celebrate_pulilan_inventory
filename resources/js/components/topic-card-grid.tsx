import { Link } from '@inertiajs/react';
import type { ReactNode } from 'react';
import { ArrowRight, Building2, MapPin } from 'lucide-react';

import type { WhatToSeeCard, WhatToSeeTopic } from '@/lib/what-to-see';

type TopicCardGridProps = {
    topic: WhatToSeeTopic;
    eyebrow: string;
    title: string;
    summary: string;
    cards: WhatToSeeCard[];
    footer?: ReactNode;
};

export default function TopicCardGrid({ topic, eyebrow, cards, footer }: TopicCardGridProps) {
    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-6 space-y-1">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">{eyebrow}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {cards.map((card) => (
                    <Link
                        key={card.slug}
                        href={route('about.detail', { topic, slug: card.slug })}
                        className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="h-48 overflow-hidden bg-slate-100">
                            <img src={card.image} alt={card.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                        </div>
                        <div className="space-y-3 border-t border-slate-200 p-5">
                            <h3 className="text-lg font-semibold uppercase tracking-[0.12em] text-slate-950">{card.title}</h3>
                            <div className="space-y-2 text-sm text-slate-600">
                                <div className="flex items-center gap-2">
                                    <Building2 className="h-4 w-4 shrink-0 text-slate-400" />
                                    <span>{card.category}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 shrink-0 text-slate-400" />
                                    <span>{card.location}</span>
                                </div>
                            </div>
                            <div className="pt-2 text-sm font-semibold text-emerald-700 transition group-hover:translate-x-1">
                                <span className="inline-flex items-center gap-2">
                                    View Details
                                    <ArrowRight className="h-4 w-4" />
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {footer ? <div className="mt-8">{footer}</div> : null}
        </section>
    );
}

import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';

const cards = [
    {
        title: 'Accommodations',
        items: ['Resorts', 'Guesthouses', 'Bed & breakfasts', 'Service apartments'],
        href: route('stay.dine.accommodations'),
        description: 'View resort-style stays, guesthouses, and practical lodging options for family and event travel.',
    },
    {
        title: 'Restaurants',
        items: ['Local favorites', 'Family dining', 'Coffee shops', 'Street food'] ,
        href: route('stay.dine.restaurants'),
        description: 'Explore food spots for everyday meals, local flavors, and quick bites around town.',
    },
];

export default function StayDine() {
    return (
        <PublicLayout>
            <Head title="Where to Stay and Dine" />

            <section className="space-y-6 rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm shadow-slate-200/80 md:p-10">
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Where to Stay and Dine</p>
                    <h1 className="text-4xl font-semibold text-slate-950">Find the best hotels, resorts, and restaurants in Pulilan.</h1>
                    <p className="max-w-3xl text-base leading-8 text-slate-600">
                        Choose accommodations and dining spots that suit your trip, whether it is festival season, a cultural tour, or a quiet weekend away.
                    </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                    {cards.map((card) => (
                        <article key={card.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <h2 className="text-2xl font-semibold text-slate-950">{card.title}</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                            <ul className="mt-4 space-y-3 text-slate-700">
                                {card.items.map((item) => (
                                    <li key={item} className="rounded-2xl bg-white px-4 py-3 shadow-sm shadow-slate-200">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={card.href}
                                className="mt-5 inline-flex items-center rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800"
                            >
                                Learn more
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </PublicLayout>
    );
}

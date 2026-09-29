import PublicLayout from '@/layouts/public-layout';
import { Head, Link } from '@inertiajs/react';

const cards = [
    {
        title: 'Accommodations',
        items: ['Resorts', 'Guesthouses', 'Bed & breakfasts', 'Service apartments'],
        href: route('stay.dine.accommodations'),
        description: 'View resort-style stays, guesthouses, and practical lodging options for family and event travel.',
    },
    {
        title: 'Restaurants',
        items: ['Local favorites', 'Family dining', 'Coffee shops', 'Street food'],
        href: route('stay.dine.restaurants'),
        description: 'Explore food spots for everyday meals, local flavors, and quick bites around town.',
    },
];

export default function StayDine() {
    return (
        <PublicLayout>
            <Head title="Where to Stay and Dine" />

            <section
                className="text-scale mx-auto mt-24 mb-16 max-w-7xl space-y-6 rounded-3xl border border-[#123b8f]/10 bg-[#fffdf8] p-8 shadow-sm shadow-[#123b8f]/5 md:p-10"
                style={{ fontSize: '20px' }}
            >
                <div className="space-y-3">
                    <p className="text-sm font-semibold tracking-[0.3em] text-[#a27620] uppercase">Where to Stay and Dine</p>
                    <h1 className="font-display text-4xl font-semibold text-[#123b8f]">Find the best hotels, resorts, and restaurants in Pulilan.</h1>
                    <p className="max-w-3xl text-base leading-8 text-slate-600">
                        Choose accommodations and dining spots that suit your trip, whether it is festival season, a cultural tour, or a quiet weekend
                        away.
                    </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                    {cards.map((card) => (
                        <article key={card.title} className="rounded-3xl border border-[#123b8f]/10 bg-[#f7f3eb] p-6 shadow-sm">
                            <h2 className="font-display text-2xl font-semibold text-[#123b8f]">{card.title}</h2>
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
                                className="mt-5 inline-flex items-center rounded-full bg-[#123b8f] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]"
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

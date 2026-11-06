import PublicLayout from '@/layouts/public-layout';
import { Head, Link } from '@inertiajs/react';

const cards = [
    {
        title: 'Accommodations',
        items: ['Resorts', 'Guesthouses', 'Bed & breakfasts', 'Service apartments'],
        href: route('stay.dine.accommodations'),
        description: 'View resort-style stays, guesthouses, and practical lodging options for family and event travel.',
        image: '/images/other-images/stay-dine-resort.jpg',
        highlight: 'Stay in comfort',
    },
    {
        title: 'Restaurants',
        items: ['Local favorites', 'Family dining', 'Coffee shops', 'Street food'],
        href: route('stay.dine.restaurants'),
        description: 'Explore food spots for everyday meals, local flavors, and quick bites around town.',
        image: '/images/carousel-images/Cuisine.jpg',
        highlight: 'Taste the town',
    },
];

export default function StayDine() {
    return (
        <PublicLayout>
            <Head title="Where to Stay and Dine" />

            <div className="min-h-screen bg-gradient-to-b from-[#fbf9f5] via-[#f6f3ec] to-[#ebe6da]" style={{ fontSize: '16px' }}>
                <div className="relative h-80 overflow-hidden sm:h-96 lg:h-[24rem]">
                    <img src={cards[0].image} alt="Pulilan stay and dine" className="h-full w-full object-cover object-[100%_60%] transition-all duration-300 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#fbf9f5]/55 via-[#000080]/20 to-[#fbf9f5]" />
                    <div className="absolute inset-0 flex items-end justify-center px-6 pb-30 text-center">
                        <div>
                            <div className="mb-3 flex items-center justify-center gap-2">
                                <div className="h-px w-6 bg-[#d4a853]" />
                                <span className="text-xs font-bold tracking-[0.2em] text-[#e9bc5b] drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] uppercase">
                                    Where to Stay and Dine
                                </span>
                                <div className="h-px w-6 bg-[#d4a853]" />
                            </div>
                            <h1 className="font-display text-5xl font-semibold text-[#f5f0e8] drop-shadow-[0_3px_4px_rgba(0,0,0,0.85)] lg:text-6xl">
                                Stay &amp; Dine in Pulilan
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="sticky top-20 z-30 border-b border-[#e3dccb] bg-[#fbf9f5]/90 backdrop-blur-md">
                    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-4 lg:px-10">
                        <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
                            {cards.map((card) => (
                                <Link
                                    key={card.title}
                                    href={card.href}
                                    className="flex shrink-0 items-center gap-2 rounded-full border border-[#e3dccb] bg-white/70 px-4 py-2 text-sm font-medium text-[#1e2a4a]/70 transition-all duration-200 hover:border-[#d4a853]/60 hover:bg-white hover:text-[#1e2a4a]"
                                >
                                    <span>{card.title === 'Accommodations' ? '🏨' : '🍽'}</span>
                                    {card.title}
                                </Link>
                            ))}
                        </div>
                        <Link
                            href={route('stay.dine.submit-listing')}
                            className="inline-flex items-center rounded-full bg-[#173f82] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1e3a8a]"
                        >
                            Submit listing
                        </Link>
                    </div>
                </div>

                <div id="stay-dine-directory" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
                    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="mb-2 text-xs font-bold tracking-[0.25em] text-[#173f82] uppercase">Browse by category</p>
                            <h2 className="font-display text-3xl text-[#173f82]">Explore where to stay and eat</h2>
                        </div>
                        <a href="#stay-dine-directory" className="inline-flex items-center text-sm font-semibold text-[#173f82] hover:text-[#1e3a8a]">
                            Jump to directory ↑
                        </a>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {cards.map((card) => (
                            <article key={card.title} className="group cursor-pointer overflow-hidden border border-white/10 bg-[#f3ede2] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a853]/50">
                                <div className="relative h-52 overflow-hidden">
                                    <img src={card.image} alt={card.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/90 to-transparent" />
                                    <span className="absolute top-3 left-3 rounded-full border border-[#d4a853]/50 bg-[#172554]/85 px-2.5 py-1 text-xs font-semibold text-[#f8d477] backdrop-blur-sm">
                                        {card.highlight}
                                    </span>
                                </div>

                                <div className="p-5">
                                    <div className="mb-2 flex items-start justify-between gap-2">
                                        <h2 className="font-display text-base leading-snug font-semibold text-[#173f82] transition-colors group-hover:text-[#4169E1]">
                                            {card.title}
                                        </h2>
                                    </div>

                                    <p className="mb-4 text-xs leading-relaxed text-[#000080]/50">{card.description}</p>

                                    <ul className="space-y-2 text-xs text-[#000080]/65">
                                        {card.items.map((item) => (
                                            <li key={item} className="flex items-center gap-2">
                                                <span className="h-1.5 w-1.5 rounded-full bg-[#d4a853]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-5 flex items-center gap-3">
                                        <Link
                                            href={card.href}
                                            className="inline-flex items-center rounded-full bg-[#173f82] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#1e3a8a]"
                                        >
                                            Learn more
                                        </Link>
                                        <Link
                                            href={route('stay.dine.submit-listing')}
                                            className="inline-flex items-center rounded-full border border-[#173f82]/20 bg-white/70 px-4 py-2 text-xs font-semibold text-[#173f82] transition hover:border-[#173f82]/40 hover:bg-white"
                                        >
                                            Submit listing
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}

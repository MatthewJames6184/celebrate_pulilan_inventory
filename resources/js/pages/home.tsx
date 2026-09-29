import { featuredNews, newsItems } from '@/data/news';
import PublicLayout from '@/layouts/public-layout';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const heroSlides = [
    {
        eyebrow: 'THE KNEELING CARABAO FESTIVAL',
        title: 'Celebrate Pulilan,\nwhere tradition lives',
        description: 'Meet a town shaped by the people, faith, and festive traditions that make every visit feel memorable.',
        image: '/images/hero-images/hero-3.jpg',
        href: route('about.festivals'),
        action: 'Explore the Festival',
    },
    {
        eyebrow: 'WELCOME TO PULILAN',
        title: 'A warm welcome\nin the heart of Bulacan',
        description: 'Discover a welcoming municipality filled with living heritage, vibrant festivals, and warm Filipino hospitality.',
        image: '/images/image-1.jpg',
        href: route('about.attraction'),
        action: 'Explore Pulilan',
    },
    {
        eyebrow: 'OUR HERITAGE',
        title: 'Centuries of\nstories to discover',
        description:
            "Walk through Pulilan's storied past, from Spanish-era churches to ancestral homes and the traditions that shaped our community.",
        image: '/images/hero-images/hero-1.jpg',
        href: route('about.history'),
        action: 'Our History',
    },
    {
        eyebrow: 'LOCAL CUISINE',
        title: 'Taste the\nFlavors of Bulacan',
        description: 'Savor authentic Bulakeño dishes prepared with generations of local culinary tradition.',
        image: '/images/carousel-images/Cuisine.jpg',
        href: `${route('about.detail', { topic: 'cuisine', slug: 'sumang-bulagta' })}`,
        action: 'Discover Cuisine',
    },
];

const discoveryCards = [
    {
        title: 'Heritage',
        badge: 'Walk through our story',
        image: '/images/carousel-images/Heritage.jpg',
        href: `${route('about.attraction')}?category=heritage`,
    },
    {
        title: 'Festivals',
        badge: 'Feel the Pulilan spirit',
        image: '/images/carousel-images/Festival.jpg',
        href: route('about.festivals'),
    },
    {
        title: 'Attractions',
        badge: 'Places worth visiting',
        image: '/images/carousel-images/Attraction.jpg',
        href: route('about.attraction'),
    },
    {
        title: 'Cuisine',
        badge: 'Taste local flavors',
        image: '/images/carousel-images/Cuisine.jpg',
        href: route('about.detail', { topic: 'cuisine', slug: 'sumang-bulagta' }),
    },
    {
        title: 'Local products',
        badge: 'Made nearby',
        image: '/images/carousel-images/Local-Products.jpg',
        href: `${route('about.attraction')}?category=shopping`,
    },
    {
        title: 'Stay & dine',
        badge: 'Rest and recharge',
        image: '/images/carousel-images/Resorts.jpg',
        href: route('stay.dine.accommodations'),
    },
];

const stayCards = [
    {
        title: 'Accommodations',
        image: '/images/carousel-images/Resorts.jpg',
        href: 'stay.dine.accommodations',
        items: ['Villa Lorenzo Resort', 'ACI Garden Resort', 'Marahuyo Private Resort'],
    },
    {
        title: 'Local Cuisine',
        image: '/images/carousel-images/Cuisine.jpg',
        href: 'stay.dine.restaurants',
        items: ['Sujeo Restaurant', 'Dejabrew Cafe', 'River of Life Resort and Restaurant'],
    },
];

const barangays = [
    'Balatong A',
    'Balatong B',
    'Cutcot',
    'Dampol 1st',
    'Dampol 2nd A',
    'Dampol 2nd B',
    'Dulong Malabon',
    'Inaon',
    'Longos',
    'Lumbac',
    'Paltao',
    'Penabatan',
    'Poblacion',
    'Sta. Peregrina',
    'Sto. Cristo',
    'Taal',
    'Tabon',
    'Tibag',
    'Tinejero',
];

export default function Home() {
    const [active, setActive] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const slide = heroSlides[active];

    useEffect(() => {
        const timer = window.setInterval(() => setActive((current) => (current + 1) % heroSlides.length), 7000);
        return () => window.clearInterval(timer);
    }, []);

    return (
        <PublicLayout>
            <Head title="Discover Pulilan" />

            {/* HERO SECTION */}
            <section
                className="relative isolate min-h-[82svh] overflow-hidden bg-[#102a72] lg:min-h-[680px]"
                onTouchStart={(event) => {
                    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
                }}
                onTouchEnd={(event) => {
                    if (touchStartX.current === null) {
                        return;
                    }

                    const distance = event.changedTouches[0].clientX - touchStartX.current;

                    if (Math.abs(distance) > 50) {
                        setActive((current) => (current + (distance < 0 ? 1 : -1) + heroSlides.length) % heroSlides.length);
                    }

                    touchStartX.current = null;
                }}
            >
                <img
                    src={slide.image}
                    alt={slide.title.replace('\n', ' ')}
                    className="absolute inset-0 -z-20 block h-full w-full object-cover object-center transition-opacity duration-700"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071936]/85 via-[#071936]/55 to-[#071936]/10" />
                <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-[#071936]/45 to-transparent" />
                <div className="mx-auto flex min-h-[82svh] max-w-7xl items-center px-6 pt-24 pb-32 sm:px-10 lg:min-h-[680px] lg:px-16">
                    <div className="w-full max-w-3xl text-left" style={{ fontSize: '16px' }}>
                        <div className="mb-5 flex items-center gap-3">
                            <div className="h-px w-9 bg-[#e1b64f] sm:w-12" />
                            <p className="text-[0.75em] font-semibold tracking-[0.18em] text-[#f1c75b] uppercase sm:text-[0.875em]">
                                {slide.eyebrow}
                            </p>
                        </div>
                        <h1 className="font-display mb-5 max-w-3xl text-[2.75em] leading-[1.04] font-semibold whitespace-pre-line text-white [text-shadow:_0_2px_14px_rgb(0_0_0_/_45%)] sm:text-[3.75em] lg:mb-6 lg:text-[5em] lg:leading-[0.98]">
                            {slide.title}
                        </h1>
                        <p className="mb-8 max-w-xl text-[1.0625em] leading-relaxed text-white/90 [text-shadow:_0_1px_8px_rgb(0_0_0_/_45%)] sm:text-[1.125em] lg:mb-9 lg:text-[1.25em]">
                            {slide.description}
                        </p>
                        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                            <Link
                                href={slide.href}
                                className="inline-flex items-center gap-2 rounded-full bg-[#e8b84b] px-7 py-3.5 text-[1em] font-semibold text-[#17233d] shadow-lg shadow-black/15 transition-all hover:-translate-y-0.5 hover:bg-[#f2c85e]"
                            >
                                {slide.action} <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            </Link>
                            <Link
                                href={route('about.attraction')}
                                className="inline-flex items-center rounded-full border border-white/65 px-7 py-3.5 text-[1em] font-medium text-white transition-all hover:border-white hover:bg-white/10"
                            >
                                What to see
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center lg:bottom-8 lg:pb-0">
                    <div className="flex items-center gap-2">
                        {heroSlides.map((item, index) => (
                            <button
                                key={item.eyebrow}
                                type="button"
                                aria-label={`Show ${item.eyebrow}`}
                                onClick={() => setActive(index)}
                                className={`h-2 rounded-full transition-all duration-200 hover:bg-[#d4a853] active:bg-[#d4a853] ${active === index ? 'w-8 bg-[#d4a853]' : 'w-2 bg-white/30'}`}
                            />
                        ))}
                    </div>
                    <div className="absolute right-6 bottom-8 flex gap-2 lg:right-10 lg:bottom-0">
                        <button
                            type="button"
                            onClick={() => setActive((active - 1 + heroSlides.length) % heroSlides.length)}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-[#d4a853] hover:bg-[#d4a853] hover:text-[#0d1b2a] active:border-[#d4a853] active:bg-[#d4a853] active:text-[#0d1b2a]"
                        >
                            <ChevronLeft className="h-3.5 w-3.5" />
                        </button>
                        <button
                            type="button"
                            onClick={() => setActive((active + 1) % heroSlides.length)}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-[#d4a853] hover:bg-[#d4a853] hover:text-[#0d1b2a] active:border-[#d4a853] active:bg-[#d4a853] active:text-[#0d1b2a]"
                        >
                            <ChevronRight className="h-3.5 w-3.5" />
                        </button>
                    </div>
                </div>
            </section>
            {/* SEARCH SECTION */}
            <section className="bg-[#123b8f] px-6 py-7 sm:px-10">
                <form
                    action={route('about')}
                    method="get"
                    className="mx-auto flex max-w-6xl flex-col gap-3 rounded-2xl bg-white/8 p-3 sm:p-4 md:flex-row"
                    style={{ fontSize: '16px' }}
                >
                    <label className="relative flex-1">
                        <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-[#123b8f]/55" />
                        <input
                            name="q"
                            placeholder="Search attractions, food, events..."
                            className="h-[52px] w-full rounded-xl border border-white bg-[#fffdf8] px-11 text-[0.875em] text-[#1e293b] outline-none placeholder:text-slate-500 focus:border-[#e1b64f] focus:ring-2 focus:ring-[#e1b64f]/30"
                        />
                    </label>
                    <select
                        name="type"
                        className="h-[52px] rounded-xl border border-white bg-[#fffdf8] px-4 text-[0.875em] text-slate-700 outline-none focus:border-[#e1b64f]"
                    >
                        <option>All Categories</option>
                        <option>Attractions</option>
                        <option>Food</option>
                        <option>Events</option>
                    </select>
                    <button className="h-[52px] rounded-xl bg-[#e8b84b] px-7 text-[0.875em] font-bold text-[#17233d] transition hover:bg-[#f2c85e]">
                        Search
                    </button>
                </form>
                <div className="mx-auto mt-3 flex max-w-6xl flex-wrap gap-2 text-[0.75em] text-white/80" style={{ fontSize: '16px' }}>
                    <span className="font-semibold text-white/60">Popular:</span>
                    <Link
                        href={route('about.festivals')}
                        className="rounded-full border border-white/20 px-3 py-1 transition hover:border-[#e8b84b] hover:text-[#f2c85e]"
                    >
                        Carabao Festival
                    </Link>
                    <Link
                        href={route('about.history')}
                        className="rounded-full border border-white/20 px-3 py-1 transition hover:border-[#e8b84b] hover:text-[#f2c85e]"
                    >
                        Heritage
                    </Link>
                    <Link
                        href={route('stay.dine.restaurants')}
                        className="rounded-full border border-white/20 px-3 py-1 transition hover:border-[#e8b84b] hover:text-[#f2c85e]"
                    >
                        Local cuisine
                    </Link>
                </div>
            </section>
            {/* WHAT TO SEE SECTION */}
            <section className="bg-[#fffdf8] px-6 py-16 text-[#1f2937] sm:px-10 lg:py-24">
                <div className="mx-auto max-w-7xl" style={{ fontSize: '16px' }}>
                    <p className="text-[0.75em] font-bold tracking-[0.2em] text-[#a27620] uppercase">Make a day of it</p>
                    <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <h2 className="font-display max-w-2xl text-[2em] leading-tight font-semibold text-[#123b8f] lg:text-[2.75em]">
                            Find your own Pulilan story
                        </h2>
                        <Link
                            href={route('about.attraction')}
                            className="inline-flex items-center gap-2 text-[0.875em] font-semibold text-[#123b8f] transition hover:text-[#a27620]"
                        >
                            Browse all places <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                        {discoveryCards.map((card) => (
                            <Link
                                key={card.title}
                                href={card.href}
                                className="group relative h-52 overflow-hidden rounded-2xl shadow-md shadow-[#123b8f]/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-60"
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#102a55]/90 via-[#102a55]/20 to-transparent" />
                                <div className="absolute inset-x-3 bottom-3">
                                    <span className="inline-block rounded-full bg-[#f1c75b] px-2.5 py-1 text-[0.5625em] font-semibold text-[#17233d]">
                                        {card.badge}
                                    </span>
                                    <h3 className="font-display mt-2 text-[0.875em] font-semibold text-white">{card.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            {/* FEATURED FESTIVAL SECTION */}
            <section className="bg-[#fffdf8] px-6 py-16 sm:px-10 lg:py-24">
                <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-[#123b8f] shadow-xl shadow-[#123b8f]/15 md:grid-cols-2">
                    <img
                        src="/images/carabao-kneel-2.jpg"
                        alt="A decorated carabao taking part in Pulilan's Kneeling Carabao Festival"
                        className="h-64 w-full object-cover sm:h-80 md:h-full md:min-h-[440px]"
                    />
                    <div className="flex flex-col justify-center px-6 py-10 text-white sm:px-10 md:px-12 lg:px-16">
                        <p className="text-xs font-bold tracking-[0.2em] text-[#f1c75b] sm:text-sm">A PULILAN TRADITION · EVERY MAY 15</p>
                        <h2 className="font-display mt-4 text-3xl font-semibold sm:text-4xl lg:text-[2.75em]">
                            The Carabao
                            <br />
                            <span className="text-[#f1c75b] italic">Festival</span>
                        </h2>
                        <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
                            Witness the spectacular Kneeling Carabao Festival — a cherished cultural tradition in Pulilan where farmers parade their
                            beautifully decorated carabaos and honor San Isidro Labrador, the patron saint of farmers, in thanksgiving for a bountiful
                            harvest.
                        </p>
                        <div className="mt-6 grid max-w-md grid-cols-2 gap-4 border-t border-white/20 pt-5 text-xs text-white/75 sm:text-sm">
                            <span>
                                <b className="block text-lg text-white sm:text-xl">May 15</b>Festival Day
                            </span>
                            <span>
                                <b className="block text-lg text-white sm:text-xl">19</b>Barangays
                            </span>
                        </div>
                        <Link
                            href={route('about.festivals')}
                            className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#e8b84b] px-5 py-3 text-xs font-bold text-[#17233d] transition hover:bg-[#f2c85e] sm:text-sm"
                        >
                            Learn About the Festival <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
            {/* STAY & DINE SECTION */}
            <section className="bg-[#f7f3eb] px-6 py-16 text-[#1f2937] sm:px-10 lg:py-24">
                <div className="mx-auto max-w-7xl text-center">
                    <div className="mb-3 flex items-center justify-center gap-2">
                        <div className="h-px w-6 bg-[#c09040]" />
                        <p className="text-xs font-bold tracking-[0.25em] text-[#a27620]">STAY &amp; DINE</p>
                        <div className="h-px w-6 bg-[#c09040]" />
                    </div>
                    <h2 className="font-display text-4xl font-semibold text-[#123b8f] lg:text-5xl">
                        Where to Stay,
                        <br />
                        What to Eat
                    </h2>
                    <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-600">
                        Plan a comfortable overnight stay or discover local dining experiences to make your visit unforgettable.
                    </p>
                    <div className="mt-14 grid gap-8 text-left md:grid-cols-2">
                        {stayCards.map((card) => (
                            <div
                                key={card.title}
                                className="overflow-hidden rounded-3xl border border-[#e8e1d5] bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <img src={card.image} alt={card.title} className="h-56 w-full object-cover" />
                                <div className="p-6">
                                    <h3 className="font-display mb-4 text-xl font-semibold text-[#123b8f]">{card.title}</h3>
                                    {card.items.map((item) => (
                                        <p key={item} className="border-b border-[#f5f0e8] py-3 text-sm text-slate-500 last:border-0">
                                            • {item}
                                        </p>
                                    ))}
                                    <Link
                                        href={route(card.href)}
                                        className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-[#123b8f]/20 py-2.5 text-center text-sm font-semibold text-[#123b8f] transition hover:border-[#e1b64f] hover:bg-[#e1b64f]/10"
                                    >
                                        View All {card.title} <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* BARANGAYS SECTION */}
            <section className="bg-[#fffdf8] px-6 py-16 sm:px-10 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        <div style={{ fontSize: '16px' }}>
                            <div className="mb-4 flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-[#a27620]" />
                                <span className="text-[0.75em] font-semibold tracking-[0.16em] text-[#a27620] uppercase">Find your way</span>
                            </div>
                            <h2 className="font-display mb-5 text-[2.25em] leading-tight font-semibold text-[#123b8f] lg:text-[3em]">
                                Getting to Pulilan
                            </h2>
                            <p className="mb-7 max-w-xl text-[1em] leading-relaxed text-slate-600">
                                Find Pulilan in Bulacan and plan your route before you go. Explore our 19 barangays and discover what is waiting along
                                the way.
                            </p>
                            <div className="mb-8 flex flex-wrap gap-2">
                                {barangays.map((barangay) => (
                                    <span
                                        key={barangay}
                                        className="rounded-full border border-[#123b8f]/10 bg-white px-3 py-1.5 text-[0.75em] text-slate-700"
                                    >
                                        {barangay}
                                    </span>
                                ))}
                            </div>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Pulilan%2C+Bulacan"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-[#123b8f] px-6 py-3 text-[0.875em] font-semibold text-white transition hover:bg-[#1d4ed8]"
                            >
                                Get directions <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                        <div className="overflow-hidden rounded-3xl border border-[#123b8f]/10 bg-white p-2 shadow-lg shadow-[#123b8f]/10">
                            <img
                                src="/images/other-images/pulilan-google-map.gif"
                                alt="Map showing Pulilan and nearby towns in Bulacan"
                                className="aspect-[4/3] w-full rounded-2xl object-cover"
                            />
                            <div className="flex items-center justify-between gap-4 px-4 py-4">
                                <div>
                                    <p className="font-semibold text-[#123b8f]">Pulilan, Bulacan</p>
                                    <p className="mt-1 text-sm text-slate-600">A welcoming stop in Central Luzon</p>
                                </div>
                                <MapPin className="h-6 w-6 shrink-0 text-[#a27620]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* NEWS SECTION */}
            <section className="bg-[#f7f3eb] px-6 py-16 sm:px-10 sm:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-7xl text-center">
                        <div className="mb-3 flex items-center justify-center gap-2">
                            <div className="h-px w-6 bg-[#a27620]" />
                            <p className="text-xs font-bold tracking-[0.25em] text-[#a27620] sm:text-sm">LATEST UPDATES</p>
                            <div className="h-px w-6 bg-[#a27620]" />
                        </div>
                        <h2 className="font-display text-4xl text-[#123b8f] sm:text-5xl lg:text-6xl">
                            News &amp;
                            <span className="text-[#a27620] italic"> Events</span>
                        </h2>
                    </div>
                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {[featuredNews, ...newsItems.slice(1, 3)].map((item) => (
                            <Link
                                key={item.slug}
                                href={route('news.show', { slug: item.slug })}
                                className="group overflow-hidden rounded-2xl border border-[#e8e1d5] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c89b33] hover:shadow-lg"
                            >
                                <img src={item.image} alt={item.title} className="h-48 w-full object-cover sm:h-56" />
                                <div className="p-5 sm:p-6">
                                    <p className="mb-2 font-mono text-xs text-slate-500 sm:text-sm">{item.date}</p>
                                    <h3 className="font-display mb-3 border-b border-[#123b8f]/15 pb-2 text-base leading-snug font-semibold text-[#123b8f] transition-colors group-hover:text-[#a27620] sm:text-lg">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-slate-600">{item.excerpt}</p>
                                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#a27620]">
                                        Read more <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-6 flex justify-center">
                        <Link
                            href={route('news.archive')}
                            className="w-fit rounded-full border border-[#123b8f]/20 px-5 py-2.5 text-sm text-[#123b8f] transition hover:border-[#e1b64f] hover:bg-[#e1b64f]/10 sm:text-base"
                        >
                            View All News
                        </Link>
                    </div>
                </div>
            </section>
            {/* PLAN YOUR VISIT SECTION */}
            <section className="relative overflow-hidden bg-[#123b8f] px-6 py-24">
                <div className="absolute inset-0 bg-gradient-to-br from-[#17499b] to-[#0c2b68]" />
                <div className="relative mx-auto max-w-4xl text-center" style={{ fontSize: '16px' }}>
                    <div className="mb-4 flex items-center justify-center gap-2">
                        <div className="h-px w-8 bg-[#d4a853]" />
                        <span className="text-[0.75em] font-semibold tracking-widest text-[#f1c75b] uppercase">Plan Your Visit</span>
                        <div className="h-px w-8 bg-[#d4a853]" />
                    </div>
                    <h2 className="font-display mb-6 text-[2.25em] leading-tight font-semibold text-[#f5f0e8] lg:text-[3.75em]">
                        Ready to Experience
                        <br />
                        <em className="text-[#f1c75b]">Pulilan?</em>
                    </h2>
                    <p className="mx-auto mb-10 max-w-lg text-[1em] leading-relaxed text-white/80">
                        Whether you&apos;re a traveler, historian, entrepreneur, or local — Pulilan has something extraordinary waiting for you.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href={route('contact')}
                            className="rounded-full bg-[#e8b84b] px-9 py-3.5 text-[1em] font-semibold text-[#17233d] shadow-xl shadow-black/15 transition-all hover:-translate-y-0.5 hover:bg-[#f2c85e]"
                        >
                            Plan Your Visit
                        </Link>
                        <Link
                            href={route('about.attraction')}
                            className="rounded-full border border-white/50 px-9 py-3.5 text-[1em] font-medium text-white transition-all hover:border-white hover:bg-white/10"
                        >
                            Explore What to See
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}

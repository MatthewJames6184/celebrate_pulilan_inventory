import { featuredNews, newsItems } from '@/data/news';
import PublicLayout from '@/layouts/public-layout';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { useEffect, useState } from 'react';

const heroSlides = [
    {
        eyebrow: 'WELCOME TO PULILAN',
        title: 'Where Heritage\nMeets Horizons',
        description: 'Discover the Carabao Capital of the Philippines — a municipality rich in colonial history, vibrant festivals, and warm Filipino hospitality.',
        image: 'https://images.unsplash.com/photo-1708464437185-3a2f6765bf92?w=1600&h=900&fit=crop&auto=format',
        href: route('about.attraction'),
        action: 'Explore Pulilan',
    },
    {
        eyebrow: 'PLAN YOUR VISIT',
        title: 'Your Next\nAdventure Awaits',
        description: 'From sacred churches to scenic riverbanks, Pulilan offers a journey through centuries of faith, culture, and natural beauty.',
        image: 'https://images.unsplash.com/photo-1760549310131-b09d86c601e3?w=1600&h=900&fit=crop&auto=format',
        href: route('contact'),
        action: 'Start Planning',
    },
    {
        eyebrow: 'PULILAN FESTIVALS',
        title: 'Celebrate With\nOur Community',
        description: 'Experience the Carabao Festival — a UNESCO-recognized tradition where decorated water buffaloes kneel before San Isidro Labrador.',
        image: 'https://images.unsplash.com/photo-1630192226649-1934968dca48?w=1600&h=900&fit=crop&auto=format',
        href: route('about.festivals'),
        action: 'See Festivals',
    },
    {
        eyebrow: 'LOCAL CUISINE',
        title: 'Taste the\nFlavors of Bulacan',
        description: 'Savor authentic Bulakeño dishes — from crispy pata to classic kare-kare, prepared with generations of culinary tradition.',
        image: 'https://images.unsplash.com/photo-1537495988501-f9cd94a78f3e?w=1600&h=900&fit=crop&auto=format',
        href: `${route('about.detail', { topic: 'cuisine', slug: 'sumang-bulagta' })}`,
        action: 'Discover Cuisine',
    },
    {
        eyebrow: 'OUR HERITAGE',
        title: 'Centuries of\nStories to Tell',
        description: "Walk through Pulilan's storied past — from Spanish-era churches and ancestral homes to the battles that shaped our nation.",
        image: 'https://images.unsplash.com/photo-1771868454902-4fe2477fa64c?w=1600&h=900&fit=crop&auto=format',
        href: route('about.history'),
        action: 'Our History',
    },
];

const discoveryCards = [
    { title: 'Religious', badge: 'Faith and tradition', image: '/images/carousel-images/Religious.jpg', href: `${route('about.attraction')}?category=religious` },
    { title: 'Historical', badge: 'Stories from the past', image: '/images/carousel-images/Historical.jpg', href: route('about.history') },
    { title: 'Heritage', badge: 'Walk through our story', image: '/images/carousel-images/Heritage.jpg', href: `${route('about.attraction')}?category=heritage` },
    { title: 'Cuisine', badge: 'Taste local flavors', image: '/images/carousel-images/Cuisine.jpg', href: route('about.detail', { topic: 'cuisine', slug: 'sumang-bulagta' }) },
    { title: 'Shopping', badge: 'Find local favorites', image: '/images/carousel-images/Shopping.jpg', href: `${route('about.attraction')}?category=shopping` },
    { title: 'Education', badge: 'Learning in Pulilan', image: '/images/carousel-images/Education.jpg', href: `${route('about.attraction')}?category=education` },
    { title: 'Health', badge: 'Care for the community', image: '/images/carousel-images/Health.jpg', href: `${route('about.attraction')}?category=health` },
    { title: 'Attractions', badge: 'Places worth visiting', image: '/images/carousel-images/Attraction.jpg', href: route('about.attraction') },
    { title: 'Mission & vision', badge: 'Our direction', image: '/images/carousel-images/Mission-and-Vision.jpg', href: route('about') },
    { title: 'Resorts', badge: 'Stay and unwind', image: '/images/carousel-images/Resorts.jpg', href: route('stay.dine.accommodations') },
    { title: 'Local products', badge: 'Made nearby', image: '/images/carousel-images/Local-Products.jpg', href: `${route('about.attraction')}?category=shopping` },
    { title: 'Festivals', badge: 'Feel the Pulilan spirit', image: '/images/carousel-images/Festival.jpg', href: route('about.festivals') },
];

const stayCards = [
    {
        title: 'Accommodations',
        image: '/images/carousel-images/Resorts.jpg',
        href: 'stay.dine.accommodations',
        items: ['Pulilan Garden Resort', 'Heritage Inn Pulilan', 'Balatong Countryside Lodge'],
    },
    {
        title: 'Local Cuisine',
        image: '/images/carousel-images/Cuisine.jpg',
        href: 'stay.dine.restaurants',
        items: ["Aling Nena's Carinderia", 'Dulabayan Kitchen', 'Riverside Grill'],
    },
];

const barangays = [
    'Balatong A',
    'Balatong B',
    'Cutcot',
    'Dampol 1st',
    'Dampol 2nd A',
    'Dampol 2nd B',
    'Inaon',
    'Longos',
    'Lumbang',
    'Paltao',
    'Penabatan',
    'Poblacion',
    'Sta. Peregrina',
    'Santo Cristo',
    'Sto. Niño',
    'Tagucan',
    'Tibag',
    'Tinejero',
];

export default function Home() {
    const [active, setActive] = useState(0);
    const slide = heroSlides[active];

    useEffect(() => {
        const timer = window.setInterval(() => setActive((current) => (current + 1) % heroSlides.length), 7000);
        return () => window.clearInterval(timer);
    }, []);

    return (
        <PublicLayout>
            <Head title="Discover Pulilan" />

            <section className="relative isolate h-screen min-h-[600px] overflow-hidden bg-[#071827]">
                <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center transition-opacity duration-700"
                />
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,19,32,0.96)_0%,rgba(5,19,32,0.76)_36%,rgba(5,19,32,0.2)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#071827] to-transparent" />
                <div className="mx-auto flex min-h-[600px] max-w-7xl items-start px-6 pt-32 lg:px-10 lg:pt-[28vh]">
                    <div className="max-w-2xl">
                        <div className="mb-6 flex items-center gap-2">
                            <div className="h-px w-8 bg-[#d4a853]" />
                            <p className="text-sm font-medium tracking-widest text-[#d4a853] uppercase">{slide.eyebrow}</p>
                        </div>
                        <h1 className="font-display mb-6 max-w-2xl text-5xl leading-tight font-semibold whitespace-pre-line text-[#f5f0e8] lg:text-7xl">
                            {slide.title}
                        </h1>
                        <p className="mb-10 max-w-xl text-lg leading-relaxed text-[#f5f0e8]/65">{slide.description}</p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href={slide.href}
                                className="inline-flex items-center gap-2 rounded-full bg-[#d4a853] px-8 py-3.5 text-sm font-semibold text-[#0d1b2a] shadow-xl shadow-[#d4a853]/25 transition-all hover:-translate-y-0.5 hover:bg-[#e8b96a]"
                            >
                                {slide.action} <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                            <Link
                                href={route('about')}
                                className="inline-flex items-center rounded-full border border-white/20 px-8 py-3.5 font-medium text-[#f5f0e8] transition-all hover:border-white/40 hover:bg-white/5"
                            >
                                Our Heritage
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-10 z-10 flex justify-center">
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
                    <div className="absolute right-6 bottom-0 flex gap-2 lg:right-10">
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

            <section className="border-y border-white/5 bg-[#132940] px-6 py-7">
                <form action={route('about')} method="get" className="mx-auto flex max-w-5xl flex-col gap-2 md:flex-row">
                    <label className="relative flex-1">
                        <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-white/35" />
                        <input
                            name="q"
                            placeholder="Search attractions, food, events..."
                            className="h-[52px] w-full rounded-lg border border-white/10 bg-[#1a3048] px-11 text-xs text-white outline-none placeholder:text-white/35 focus:border-[#dcae4e]"
                        />
                    </label>
                    <select name="type" className="h-[52px] rounded-lg border border-white/10 bg-[#1a3048] px-4 text-xs text-white/60 outline-none">
                        <option>All Categories</option>
                        <option>Attractions</option>
                        <option>Food</option>
                        <option>Events</option>
                    </select>
                    <button className="h-[52px] rounded-lg bg-[#dcae4e] px-7 text-xs font-bold text-[#102033] hover:bg-[#edc568]">Search</button>
                </form>
                <div className="mx-auto mt-3 flex max-w-5xl flex-wrap gap-2 text-[10px] text-white/40">
                    <span className="rounded-full border border-white/10 px-3 py-1">Carabao Festival</span>
                    <span className="rounded-full border border-white/10 px-3 py-1">San Isidro Parish</span>
                    <span className="rounded-full border border-white/10 px-3 py-1">Longos Church</span>
                    <span className="rounded-full border border-white/10 px-3 py-1">Local Delicacies</span>
                </div>
            </section>

            <section className="bg-[#f3e6c9] px-6 py-16 text-[#102033] lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <p className="text-[10px] font-bold tracking-[0.25em] text-[#b7872f] uppercase">More about Pulilan</p>
                    <h2 className="font-display mt-3 text-3xl font-semibold lg:text-4xl">See what makes Pulilan special</h2>
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                        {discoveryCards.map((card) => (
                            <Link
                                key={card.title}
                                href={card.href}
                                className="group relative h-52 overflow-hidden rounded-xl shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <img src={card.image} alt={card.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#102033] via-[#102033]/25 to-transparent" />
                                <div className="absolute inset-x-3 bottom-3">
                                    <span className="inline-block rounded-full bg-[#f5bd2f] px-2 py-1 text-[9px] font-bold text-[#102033]">{card.badge}</span>
                                    <h3 className="font-display mt-2 text-sm font-semibold text-white">{card.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#164b3b]">
                <div className="mx-auto grid max-w-7xl md:grid-cols-2">
                    <img src="/images/carousel-images/Attraction.jpg" alt="Carabao Festival" className="h-full min-h-[400px] w-full object-cover" />
                    <div className="flex flex-col justify-center px-8 py-16 lg:px-16">
                        <p className="text-[10px] font-bold tracking-[0.25em] text-[#dcae4e]">— EVERY MAY 15</p>
                        <h2 className="font-display mt-4 text-4xl text-white">
                            The Carabao
                            <br />
                            <span className="text-[#e9bc5b] italic">Festival</span>
                        </h2>
                        <p className="mt-5 max-w-sm text-xs leading-6 text-white/65">
                            Witness the spectacular Carabao Festival — a UNESCO Intangible Cultural Heritage tradition where farmers parade their
                            decorated water buffaloes to honor their patron saint.
                        </p>
                        <div className="mt-6 grid max-w-sm grid-cols-3 gap-4 border-t border-white/15 pt-5 text-[10px] text-white/60">
                            <span>
                                <b className="block text-lg text-white">300+</b>Years
                            </span>
                            <span>
                                <b className="block text-lg text-white">18</b>Barangays
                            </span>
                            <span>
                                <b className="block text-lg text-white">UNESCO</b>Heritage
                            </span>
                        </div>
                        <Link
                            href={route('about.festivals')}
                            className="mt-7 w-fit rounded-full bg-[#dcae4e] px-5 py-3 text-[10px] font-bold text-[#102033]"
                        >
                            Learn About the Festival →
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-[#f3ede2] px-6 py-24 text-[#102033]">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-[10px] font-bold tracking-[0.25em] text-[#b7872f]">— STAY &amp; DINE</p>
                    <h2 className="font-display mt-3 text-4xl">
                        Where to Stay,
                        <br />
                        What to Eat
                    </h2>
                    <p className="mx-auto mt-3 max-w-md text-xs leading-5 text-slate-500">
                        Plan a comfortable overnight stay or discover local dining experiences to make your visit unforgettable.
                    </p>
                    <div className="mt-10 grid gap-4 text-left md:grid-cols-2">
                        {stayCards.map((card) => (
                            <div key={card.title} className="overflow-hidden rounded-xl border border-[#d8d0c0] bg-white">
                                <img src={card.image} alt={card.title} className="h-56 w-full object-cover" />
                                <div className="p-5">
                                    <h3 className="font-display text-lg">{card.title}</h3>
                                    {card.items.map((item) => (
                                        <p key={item} className="mt-3 border-b border-slate-100 pb-2 text-[11px] text-slate-500">
                                            • {item}
                                        </p>
                                    ))}
                                    <Link
                                        href={route(card.href)}
                                        className="mt-5 block rounded-full border border-[#dcae4e] py-2 text-center text-[10px] font-semibold text-[#9c7324]"
                                    >
                                        View All {card.title} →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#0d1b2a] px-6 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                        <div>
                            <div className="mb-4 flex items-center gap-2">
                                <div className="h-px w-6 bg-[#d4a853]" />
                                <span className="text-xs font-medium tracking-widest text-[#d4a853] uppercase">18 Barangays</span>
                            </div>
                            <h2 className="font-display mb-6 text-4xl leading-tight font-semibold text-[#f5f0e8] lg:text-5xl">
                                Explore Every
                                <br />
                                <em className="text-[#d4a853]">Corner of Pulilan</em>
                            </h2>
                            <p className="mb-8 max-w-xl text-base leading-relaxed text-[#f5f0e8]/50">
                                Pulilan is composed of 18 barangays, each with its own character, community, and contribution to the municipality&apos;s
                                rich cultural tapestry.
                            </p>
                            <div className="mb-8 grid grid-cols-2 gap-x-6 gap-y-2">
                                {barangays.map((barangay) => (
                                    <div key={barangay} className="group flex items-center gap-2 border-b border-white/5 py-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-[#d4a853]/40 transition-colors group-hover:bg-[#d4a853]" />
                                        <span className="text-xs text-[#f5f0e8]/50 transition-colors group-hover:text-[#f5f0e8]">{barangay}</span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href={route('about')}
                                className="inline-flex rounded-full border border-[#d4a853]/40 px-7 py-3 text-sm font-medium text-[#d4a853] transition-all hover:bg-[#d4a853]/10"
                            >
                                About Pulilan
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/5 bg-[#122236]">
                                <img
                                    src="https://images.unsplash.com/photo-1682724425247-f34019858601?w=600&h=600&fit=crop&auto=format"
                                    alt="Pulilan Bulacan landscape"
                                    className="h-full w-full object-cover opacity-40"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d4a853]/40 bg-[#d4a853]/20">
                                        <span className="text-3xl text-[#d4a853]">⌖</span>
                                    </div>
                                    <p className="font-display text-sm text-[#f5f0e8]/60">Interactive Map</p>
                                    <p className="text-xs text-[#f5f0e8]/30">Pulilan, Bulacan — 14.9°N 120.8°E</p>
                                    <span className="mt-2 rounded-full border border-[#d4a853]/30 bg-[#d4a853]/15 px-4 py-1.5 text-xs text-[#d4a853]">
                                        Coming Soon
                                    </span>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 grid h-24 w-24 grid-cols-5 gap-2 opacity-20">
                                {Array.from({ length: 25 }).map((_, index) => (
                                    <div key={index} className="h-1.5 w-1.5 rounded-full bg-[#d4a853]" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#122236] px-6 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.25em] text-[#dcae4e]">— LATEST UPDATES</p>
                            <h2 className="font-display mt-3 text-4xl text-white">
                                News &amp;
                                <br />
                                <span className="text-[#dcae4e] italic">Events</span>
                            </h2>
                        </div>
                        <Link
                            href={route('news.archive')}
                            className="hidden rounded-full border border-white/15 px-4 py-2 text-[10px] text-white/55 hover:border-[#dcae4e] hover:text-white sm:block"
                        >
                            View All News
                        </Link>
                    </div>
                    <div className="mt-10 grid gap-4 md:grid-cols-3">
                        {[featuredNews, ...newsItems.slice(1, 3)].map((item) => (
                            <Link
                                key={item.slug}
                                href={route('news.show', { slug: item.slug })}
                                className="group overflow-hidden rounded-2xl border border-white/5 bg-[#0d1b2a] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a853]/30"
                            >
                                <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
                                <div className="p-5">
                                    <p className="mb-2 font-mono text-xs text-white/30">{item.date}</p>
                                    <h3 className="font-display mb-2 text-base font-semibold leading-snug text-white transition-colors group-hover:text-[#dcae4e]">{item.title}</h3>
                                    <p className="text-xs leading-relaxed text-white/45">{item.excerpt}</p>
                                    <span className="mt-4 block text-xs font-medium text-[#dcae4e]">Read more →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#0d1b2a] px-6 py-24">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a2f4a] to-[#0d1b2a]" />
                <div className="relative mx-auto max-w-4xl text-center">
                    <div className="mb-4 flex items-center justify-center gap-2">
                        <div className="h-px w-8 bg-[#d4a853]" />
                        <span className="text-xs font-medium tracking-widest text-[#d4a853] uppercase">Plan Your Visit</span>
                        <div className="h-px w-8 bg-[#d4a853]" />
                    </div>
                    <h2 className="font-display mb-6 text-4xl leading-tight font-semibold text-[#f5f0e8] lg:text-6xl">
                        Ready to Experience
                        <br />
                        <em className="text-[#d4a853]">Pulilan?</em>
                    </h2>
                    <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-[#f5f0e8]/50">
                        Whether you&apos;re a traveler, historian, entrepreneur, or local — Pulilan has something extraordinary waiting for you.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href={route('contact')}
                            className="rounded-full bg-[#d4a853] px-9 py-3.5 font-semibold text-[#0d1b2a] shadow-xl shadow-[#d4a853]/20 transition-all hover:-translate-y-0.5 hover:bg-[#e8b96a]"
                        >
                            Plan Your Visit
                        </Link>
                        <Link
                            href={route('about.attraction')}
                            className="rounded-full border border-white/20 px-9 py-3.5 font-medium text-[#f5f0e8] transition-all hover:border-white/40 hover:bg-white/5"
                        >
                            Explore What to See
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}

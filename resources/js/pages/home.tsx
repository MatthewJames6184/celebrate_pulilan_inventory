import { featuredNews } from '@/data/news';
import PublicLayout from '@/layouts/public-layout';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, MapPin, Search, Sparkles, Utensils, Waves } from 'lucide-react';
import { useEffect, useRef, useState, type TouchEvent } from 'react';

const discoveryCards = [
    { title: 'Heritage & history', label: 'Walk through our story', image: '/images/carousel-images/Heritage.jpg', href: route('about.heritage') },
    { title: 'Festivals & culture', label: 'Feel the Pulilan spirit', image: '/images/carousel-images/Festival.jpg', href: route('about.festivals') },
    { title: 'Riverside escapes', label: 'Slow down by the water', image: '/images/image-4.jpg', href: route('about.attraction') },
    { title: 'Local flavors', label: 'Taste something memorable', image: '/images/carousel-images/Cuisine.jpg', href: route('about.cuisine') },
];

const stayAndDine = [
    {
        title: 'Find a place to stay',
        description: 'Rest easy in welcoming accommodations close to Pulilan’s best experiences.',
        image: '/images/carousel-images/Resorts.jpg',
        href: route('stay.dine.accommodations'),
        icon: Waves,
    },
    {
        title: 'Eat like a local',
        description: 'Discover restaurants and neighborhood favorites worth sharing.',
        image: '/images/carousel-images/Cuisine.jpg',
        href: route('stay.dine.restaurants'),
        icon: Utensils,
    },
];

const upcomingEvents = [
    { title: 'Kasedihan Festival', date: 'October 10, 2026', image: '/images/carousel-images/Festival.jpg' },
    { title: 'Heritage Night', date: 'November 8, 2026', image: '/images/carousel-images/Heritage.jpg' },
];

const businessAndTourism = [
    {
        title: 'Build your business',
        description: 'Put your accommodation, restaurant, shop, or experience in front of curious visitors.',
        label: 'For entrepreneurs',
        image: '/images/carousel-images/Local-Products.jpg',
        href: route('register'),
        action: 'Add your business',
    },
    {
        title: 'Plan your itinerary',
        description: 'Pair heritage, riverside moments, local food, and festivals into one memorable day.',
        label: 'For visitors',
        image: '/images/carousel-images/Attraction.jpg',
        href: route('about'),
        action: 'Explore experiences',
    },
    {
        title: 'Stay connected',
        description: 'Keep up with announcements, community stories, and the events that bring Pulilan together.',
        label: 'For the community',
        image: '/images/carousel-images/Festival.jpg',
        href: route('news.archive'),
        action: 'Read latest updates',
    },
];

const quickAccessSlides = [
    {
        eyebrow: 'Explore Pulilan',
        title: 'Find places worth remembering.',
        description: 'Browse attractions, heritage sites, festivals, and local stories for your next day out.',
        image: '/images/image-1.jpg',
        href: route('about'),
        action: 'Explore destinations',
    },
    {
        eyebrow: 'Plan your visit',
        title: 'Stay, dine, and enjoy the journey.',
        description: 'Find welcoming accommodations and local restaurants that make your visit feel complete.',
        image: '/images/image-2.jpg',
        href: route('stay.dine'),
        action: 'View stay & dine',
    },
    {
        eyebrow: 'Keep up with Pulilan',
        title: 'See what is happening next.',
        description: 'Check community news, upcoming events, announcements, and celebrations around town.',
        image: '/images/image-3.jpg',
        href: route('news.archive'),
        action: 'Read news & events',
    },
    {
        eyebrow: 'Find your way around',
        title: 'Explore every corner of Pulilan.',
        description: 'Use our barangay map to get familiar with the places, communities, and routes around town.',
        image: '/images/image-4.jpg',
        href: route('about.map-location'),
        action: 'Open the map',
    },
    {
        eyebrow: 'Support local',
        title: 'Discover products made nearby.',
        description: 'Meet local makers and find meaningful products to take home from your Pulilan visit.',
        image: '/images/image-5.jpg',
        href: route('about.local-products'),
        action: 'Shop local',
    },
];

export default function Home() {
    const [activeQuickAccess, setActiveQuickAccess] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const quickAccess = quickAccessSlides[activeQuickAccess];

    const moveSlide = (direction: 1 | -1) => {
        setActiveQuickAccess((current) => (current + direction + quickAccessSlides.length) % quickAccessSlides.length);
    };

    useEffect(() => {
        const timer = window.setInterval(() => {
            setActiveQuickAccess((current) => (current + 1) % quickAccessSlides.length);
        }, 6000);

        return () => window.clearInterval(timer);
    }, []);

    const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
    };

    const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
        if (touchStartX.current === null) {
            return;
        }

        const distance = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
        touchStartX.current = null;

        if (Math.abs(distance) > 45) {
            moveSlide(distance > 0 ? -1 : 1);
        }
    };

    return (
        <PublicLayout>
            <Head title="Discover Pulilan" />

            <section
                className="relative isolate min-h-[650px] overflow-hidden bg-[#0b132b] text-white sm:min-h-[720px]"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <img
                    src={quickAccess.image}
                    alt={quickAccess.title}
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_32%]"
                />
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(5,24,84,0.96),rgba(15,58,145,0.72)_52%,rgba(7,29,90,0.34))]" />
                <div className="absolute -top-40 -right-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-blue-400/20 blur-3xl" />
                <div className="mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-24 lg:px-8">
                    <div className="max-w-2xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/30 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.22em] text-blue-100 uppercase backdrop-blur">
                            <Sparkles className="h-4 w-4 text-amber-300" /> {quickAccess.eyebrow}
                        </div>
                        <button
                            type="button"
                            aria-label="Previous quick access slide"
                            onClick={() => moveSlide(-1)}
                            className="absolute top-1/2 left-4 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-blue-950/40 text-white backdrop-blur transition hover:bg-blue-950/70 sm:left-8"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next quick access slide"
                            onClick={() => moveSlide(1)}
                            className="absolute top-1/2 right-4 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-blue-950/40 text-white backdrop-blur transition hover:bg-blue-950/70 sm:right-8"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                        <h1 className="text-5xl leading-[0.98] font-black tracking-tight sm:text-7xl">{quickAccess.title}</h1>
                        <p className="mt-6 max-w-xl text-lg leading-8 text-blue-50/90">{quickAccess.description}</p>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                href={quickAccess.href}
                                className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-6 py-3.5 text-sm font-bold text-blue-950 shadow-lg shadow-blue-950/30 transition hover:bg-amber-200"
                            >
                                {quickAccess.action} <ArrowRight className="h-4 w-4" />
                            </Link>
                            <span className="text-sm font-semibold text-blue-100">Pulilan, Bulacan</span>
                        </div>
                    </div>
                </div>
                <div className="absolute right-6 bottom-8 left-6 flex justify-end gap-2 lg:right-8 lg:left-auto">
                    {quickAccessSlides.map((slide, index) => (
                        <button
                            key={slide.eyebrow}
                            type="button"
                            aria-label={`Show ${slide.eyebrow}`}
                            onClick={() => setActiveQuickAccess(index)}
                            className={`h-2 rounded-full transition-all ${activeQuickAccess === index ? 'w-12 bg-amber-300' : 'w-2 bg-white/60 hover:bg-white'}`}
                        />
                    ))}
                </div>
            </section>

            <section className="relative z-10 -mt-10 px-5 pb-8 lg:px-8">
                <form
                    action={route('about')}
                    method="get"
                    className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-blue-950/15 md:grid-cols-[170px_1fr_120px]"
                >
                    <label className="border-b border-slate-200 p-4 md:border-r md:border-b-0">
                        <span className="block text-[11px] font-bold tracking-[0.12em] text-slate-500 uppercase">Looking for</span>
                        <select name="type" className="mt-1 w-full bg-transparent text-sm font-medium text-slate-900 outline-none">
                            <option value="attractions">Attractions</option>
                            <option value="food">Food &amp; dining</option>
                            <option value="stays">Places to stay</option>
                            <option value="events">Events</option>
                        </select>
                    </label>
                    <label className="flex items-center gap-3 p-4">
                        <Search className="h-5 w-5 shrink-0 text-blue-700" />
                        <span className="w-full">
                            <span className="block text-[11px] font-bold tracking-[0.12em] text-slate-500 uppercase">Search</span>
                            <input
                                name="q"
                                placeholder="Try “ancestral houses” or “Longos”"
                                className="mt-1 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                            />
                        </span>
                    </label>
                    <button type="submit" className="bg-blue-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-800">
                        Search
                    </button>
                </form>
            </section>

            <section className="bg-[#f5f8ff] px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <p className="text-sm font-bold tracking-[0.22em] text-blue-700 uppercase">Your next stop</p>
                            <h2 className="mt-2 text-4xl font-black tracking-tight text-blue-950">See what makes Pulilan special</h2>
                        </div>
                        <Link href={route('about')} className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-950">
                            Explore all <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {discoveryCards.map((card) => (
                            <Link
                                key={card.title}
                                href={card.href}
                                className="group relative min-h-[290px] overflow-hidden rounded-3xl bg-blue-950 shadow-lg shadow-blue-950/10"
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/20 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                                    <p className="text-xs font-semibold tracking-wide text-blue-200 uppercase">{card.label}</p>
                                    <h3 className="mt-1 text-2xl font-black">{card.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white px-6 py-20 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                    <div>
                        <p className="text-sm font-bold tracking-[0.22em] text-blue-700 uppercase">Make a day of it</p>
                        <h2 className="mt-3 text-4xl font-black tracking-tight text-blue-950">Stay longer. Taste more. Feel at home.</h2>
                        <p className="mt-5 max-w-lg leading-7 text-slate-600">
                            From a comfortable overnight stay to a table filled with local flavors, find the people and places that make every visit
                            feel personal.
                        </p>
                        <Link
                            href={route('stay.dine')}
                            className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
                        >
                            View the directory <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                        {stayAndDine.map(({ title, description, image, href, icon: Icon }) => (
                            <Link
                                key={title}
                                href={href}
                                className="group overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-lg shadow-blue-950/5 transition hover:-translate-y-1"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={image}
                                        alt={title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                    <span className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-blue-700 shadow">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-black text-blue-950">{title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-blue-700">
                                        Explore <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#e8f4fb] px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 max-w-2xl">
                        <p className="text-sm font-bold tracking-[0.22em] text-blue-700 uppercase">Find your way around</p>
                        <h2 className="mt-2 text-4xl font-black tracking-tight text-blue-950">Pulilan at a glance</h2>
                        <p className="mt-3 leading-7 text-slate-600">
                            See the barangays, landmarks, and riverside communities that make every route through Pulilan feel different.
                        </p>
                    </div>
                    <div className="grid overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl shadow-blue-950/10 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="relative min-h-[360px] overflow-hidden bg-blue-100">
                            <img src="/images/image-3.jpg" alt="Map of Pulilan barangays" className="h-full w-full object-cover object-center" />
                            <div className="absolute inset-0 bg-blue-950/10" />
                            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-blue-950 shadow-lg">
                                <MapPin className="h-4 w-4 text-blue-700" /> Explore all 18 barangays
                            </div>
                        </div>
                        <div className="flex flex-col justify-center p-7 sm:p-10">
                            <p className="text-sm leading-7 text-slate-600">
                                Use the full map to discover neighborhood stories, plan your next stop, and get a better sense of how close each
                                experience is.
                            </p>
                            <Link
                                href={route('about.map-location')}
                                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-blue-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
                            >
                                Open the interactive map <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#fffaf0] px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="rounded-3xl bg-white p-7 shadow-lg shadow-blue-950/5">
                        <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
                            <div>
                                <p className="text-xs font-bold tracking-[0.2em] text-blue-700 uppercase">Stay in the know</p>
                                <h2 className="mt-1 text-2xl font-black text-blue-950">News &amp; events</h2>
                            </div>
                            <CalendarDays className="h-7 w-7 text-blue-600" />
                        </div>
                        <Link
                            href={route('news.show', { slug: featuredNews.slug })}
                            className="mt-5 block rounded-2xl bg-blue-50 p-4 transition hover:bg-blue-100"
                        >
                            <p className="text-xs font-bold tracking-wide text-blue-700 uppercase">{featuredNews.date}</p>
                            <h3 className="mt-2 text-lg font-black text-blue-950">{featuredNews.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{featuredNews.excerpt}</p>
                        </Link>
                        <div className="mt-5 space-y-3">
                            {upcomingEvents.map((event) => (
                                <div key={event.title} className="flex items-center gap-3">
                                    <img src={event.image} alt="" className="h-12 w-12 rounded-xl object-cover" />
                                    <div>
                                        <p className="text-sm font-bold text-blue-950">{event.title}</p>
                                        <p className="text-xs text-slate-500">{event.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link href={route('news.archive')} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                            Read all updates <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-blue-950 px-6 py-20 text-white lg:px-8">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-[repeating-linear-gradient(110deg,#facc15_0_16px,#2563eb_16px_32px,#60a5fa_32px_48px)]" />
                <div className="absolute -top-24 -right-12 h-72 w-72 rounded-full border-[28px] border-blue-800/40" />
                <div className="relative mx-auto max-w-7xl">
                    <div className="mb-10 max-w-2xl">
                        <p className="text-sm font-bold tracking-[0.2em] text-amber-300 uppercase">Business &amp; tourism</p>
                        <h2 className="mt-3 text-3xl font-black sm:text-4xl">There is room for every Pulilan story.</h2>
                        <p className="mt-3 leading-7 text-blue-100">
                            Whether you are visiting, building, or staying connected, start with the path that fits you.
                        </p>
                    </div>
                    <div className="grid gap-5 md:grid-cols-3">
                        {businessAndTourism.map((card) => (
                            <Link
                                key={card.title}
                                href={card.href}
                                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                            >
                                <img src={card.image} alt="" className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" />
                                <div className="p-5">
                                    <p className="text-xs font-bold tracking-[0.16em] text-amber-300 uppercase">{card.label}</p>
                                    <h3 className="mt-2 text-xl font-black">{card.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-blue-100">{card.description}</p>
                                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white">
                                        {card.action} <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}

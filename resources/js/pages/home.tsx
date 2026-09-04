import { featuredNews } from '@/data/news';
import PublicLayout from '@/layouts/public-layout';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, MapPin, Search, Sparkles, Utensils, Waves } from 'lucide-react';
import { useEffect, useRef, useState, type TouchEvent } from 'react';

const discoveryCards = [
    { title: 'Religious', label: 'Faith and tradition', image: '/images/carousel-images/Religious.jpg', href: route('about.religious') },
    { title: 'Historical', label: 'Stories from the past', image: '/images/carousel-images/Historical.jpg', href: route('about.historical') },
    { title: 'Heritage', label: 'Walk through our story', image: '/images/carousel-images/Heritage.jpg', href: route('about.heritage') },
    { title: 'Cuisine', label: 'Taste local flavors', image: '/images/carousel-images/Cuisine.jpg', href: route('about.cuisine') },
    { title: 'Shopping', label: 'Find local favorites', image: '/images/carousel-images/Shopping.jpg', href: route('about.shopping') },
    { title: 'Education', label: 'Learning in Pulilan', image: '/images/carousel-images/Education.jpg', href: route('about.education') },
    { title: 'Health', label: 'Care for the community', image: '/images/carousel-images/Health.jpg', href: route('about.health') },
    { title: 'Attractions', label: 'Places worth visiting', image: '/images/carousel-images/Attraction.jpg', href: route('about.attraction') },
    { title: 'Mission & vision', label: 'Our direction', image: '/images/carousel-images/Mission-and-Vision.jpg', href: route('about.mission-vision') },
    { title: 'Resorts', label: 'Stay and unwind', image: '/images/carousel-images/Resorts.jpg', href: route('about.resorts') },
    { title: 'Local products', label: 'Made nearby', image: '/images/carousel-images/Local-Products.jpg', href: route('about.local-products') },
    { title: 'Festivals', label: 'Feel the Pulilan spirit', image: '/images/carousel-images/Festival.jpg', href: route('about.festivals') },
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
                className="relative isolate min-h-[420px] overflow-hidden bg-[#0f1e3d] font-sans text-white"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <img
                    src={quickAccess.image}
                    alt={quickAccess.title}
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_32%]"
                />
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(15,30,61,0.94)_0%,rgba(15,30,61,0.55)_45%,rgba(15,30,61,0.25)_100%)]" />
                <div className="absolute -top-40 -right-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-blue-400/20 blur-3xl" />
                <div className="mx-auto grid min-h-[420px] max-w-[1180px] items-end gap-10 px-6 pt-[54px] pb-[70px] sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:pb-[105px]">
                    <div className="max-w-2xl">
                        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[#2f5d3a] px-3 py-1.5 text-xs font-semibold text-white">
                            <Sparkles className="h-3.5 w-3.5 text-[#f0b429]" /> {quickAccess.eyebrow}
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
                        <h1 className="font-display max-w-[460px] text-[42px] leading-[1.1] font-semibold tracking-[-0.01em]">{quickAccess.title}</h1>
                        <p className="mt-3 max-w-[400px] text-[14.5px] leading-[1.6] text-white/78">{quickAccess.description}</p>
                        <div className="mt-[22px] flex flex-wrap items-center gap-2.5">
                            <Link
                                href={quickAccess.href}
                                className="inline-flex items-center gap-2 rounded-md bg-[#f0b429] px-[18px] py-2.5 text-[13.5px] font-bold text-[#0f1e3d] shadow-lg shadow-black/20 transition hover:bg-[#d69a1e]"
                            >
                                {quickAccess.action} <ArrowRight className="h-4 w-4" />
                            </Link>
                            <span className="rounded-md border border-white/40 px-[18px] py-2.5 text-[13.5px] font-semibold text-white">Learn more</span>
                        </div>
                    </div>
                    <div className="hidden max-w-sm self-center text-[13.5px] leading-[1.7] text-white/78 lg:block">
                        <p>
                            Pulilan is a welcoming community where heritage, local flavor, and everyday celebrations come together.
                            Discover a town worth slowing down for.
                        </p>
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

            <section className="relative z-10 bg-[#efdfc0] px-5 pb-0 lg:px-8">
                <form
                    action={route('about')}
                    method="get"
                    className="mx-auto grid max-w-[1180px] -translate-y-[26px] overflow-hidden rounded-[10px] border border-[#e7e1d2] bg-white shadow-[0_14px_30px_rgba(15,30,61,0.18)] md:grid-cols-[200px_1fr_auto]"
                >
                    <label className="border-b border-slate-200 px-5 py-2.5 md:border-r md:border-b-0">
                        <span className="block text-[11px] font-bold tracking-[0.12em] text-slate-500 uppercase">Looking for</span>
                        <select name="type" className="mt-1 w-full bg-transparent text-sm font-medium text-slate-900 outline-none">
                            <option value="attractions">Attractions</option>
                            <option value="food">Food &amp; dining</option>
                            <option value="stays">Places to stay</option>
                            <option value="events">Events</option>
                        </select>
                    </label>
                    <label className="flex items-center gap-3 px-5 py-2.5">
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
                    <button type="submit" className="bg-[#16295a] px-[26px] text-sm font-bold text-white transition hover:bg-[#0f1e3d]">
                        Search
                    </button>
                </form>
            </section>

            <section className="bg-[#efdfc0] px-6 pt-11 pb-[70px] lg:px-8">
                <div className="mx-auto max-w-[1180px]">
                    <div className="mb-6">
                        <div>
                            <p className="text-[11.5px] font-bold tracking-[0.1em] text-[#d69a1e] uppercase">More about Pulilan</p>
                            <h2 className="font-display mt-2 text-[27px] font-semibold tracking-[-0.01em] text-[#0f1e3d]">See what makes Pulilan special</h2>
                        </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                        {discoveryCards.map((card) => (
                            <Link
                                key={card.title}
                                href={card.href}
                                className="group relative aspect-[3/4] overflow-hidden rounded-[10px] bg-[#0f1e3d] shadow-[0_10px_20px_rgba(15,30,61,0.18)] transition hover:-translate-y-1"
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e3d]/90 via-[#0f1e3d]/10 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                                    <p className="mb-2 inline-block rounded-full bg-[#f0b429] px-[9px] py-[3px] text-[10.5px] font-bold text-[#0f1e3d]">{card.label}</p>
                                    <h3 className="font-display text-[15.5px] font-semibold tracking-[-0.01em]">{card.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#fbf8f1] px-6 py-14 lg:px-8">
                <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                    <div>
                        <p className="text-[11.5px] font-bold tracking-[0.1em] text-[#d69a1e] uppercase">Stay &amp; get to it</p>
                        <h2 className="font-display mt-3 text-[30px] font-semibold tracking-[-0.01em] text-[#0f1e3d]">Stay longer. Taste more. Feel at home.</h2>
                        <p className="mt-3 max-w-[340px] text-[14.5px] leading-[1.7] text-[#5b6072]">
                            From a comfortable overnight stay to a table filled with local flavors, find the people and places that make every visit
                            feel personal.
                        </p>
                        <Link
                            href={route('stay.dine')}
                            className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#f0b429] px-[18px] py-2.5 text-[13.5px] font-bold text-[#0f1e3d] transition hover:bg-[#d69a1e]"
                        >
                            View the directory <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                        {stayAndDine.map(({ title, description, image, href, icon: Icon }) => (
                            <Link
                                key={title}
                                href={href}
                                className="group overflow-hidden rounded-[10px] border border-[#e7e1d2] bg-white shadow-sm transition hover:-translate-y-1"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={image}
                                        alt={title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                    <span className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-blue-700 shadow">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-[15px] font-semibold text-[#171b26]">{title}</h3>
                                    <p className="mt-2 text-xs leading-5 text-[#5b6072]">{description}</p>
                                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#16295a]">
                                        Read more <ArrowRight className="h-3.5 w-3.5" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#efdfc0] px-6 py-14 lg:px-8">
                <div className="mx-auto max-w-[1180px]">
                    <div className="mb-8 max-w-2xl">
                        <p className="text-[11.5px] font-bold tracking-[0.1em] text-[#d69a1e] uppercase">Discover at a glance</p>
                        <h2 className="font-display mt-2 text-[27px] font-semibold tracking-[-0.01em] text-[#0f1e3d]">Pulilan at a glance</h2>
                        <p className="mt-3 leading-7 text-[#5b6072]">
                            See the barangays, landmarks, and riverside communities that make every route through Pulilan feel different.
                        </p>
                    </div>
                    <div className="grid overflow-hidden rounded-[14px] border border-[#e7e1d2] bg-white shadow-[0_10px_30px_rgba(15,30,61,0.12)] lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="relative min-h-[320px] overflow-hidden bg-[#f3ecda]">
                            <img src="/images/image-3.jpg" alt="Map of Pulilan barangays" className="h-full w-full object-cover object-center" />
                            <div className="absolute inset-0 bg-[#0f1e3d]/5" />
                            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0f1e3d] shadow-lg">
                            <MapPin className="h-4 w-4 text-[#2f5d3a]" /> Explore all 18 barangays
                            </div>
                        </div>
                        <div className="flex flex-col justify-center bg-[#0f1e3d] p-7 text-white sm:p-10">
                            <h3 className="font-display text-[22px] font-semibold text-white">A community built on heritage and local industry</h3>
                            <p className="mt-3 text-[13.5px] leading-[1.7] text-white/75">
                                Use the full map to discover neighborhood stories, plan your next stop, and get a better sense of how close each
                                experience is.
                            </p>
                            <Link
                                href={route('about.map-location')}
                                className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-[#f0b429] px-[18px] py-2.5 text-[13.5px] font-bold text-[#0f1e3d] transition hover:bg-[#d69a1e]"
                            >
                                Open the interactive map <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#fbf8f1] px-6 py-14 lg:px-8">
                <div className="mx-auto max-w-[1180px]">
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-7">
                        <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
                            <div>
                                <p className="text-[11.5px] font-bold tracking-[0.1em] text-[#d69a1e] uppercase">Stay in the loop</p>
                                <h2 className="font-display mt-1 text-[22px] font-semibold tracking-[-0.01em] text-[#0f1e3d]">News &amp; Updates</h2>
                            </div>
                            <CalendarDays className="h-7 w-7 text-[#d69a1e]" />
                        </div>
                        <Link
                            href={route('news.show', { slug: featuredNews.slug })}
                            className="mt-5 block border-b border-slate-200 pb-5 transition hover:border-blue-300"
                        >
                            <p className="text-xs font-bold tracking-wide text-[#d69a1e] uppercase">{featuredNews.date}</p>
                            <h3 className="font-display mt-2 text-[15.5px] font-semibold tracking-[-0.01em] text-[#171b26]">{featuredNews.title}</h3>
                            <p className="mt-2 text-[13px] leading-[1.6] text-[#5b6072]">{featuredNews.excerpt}</p>
                        </Link>
                        <div className="mt-5 space-y-3">
                            {upcomingEvents.map((event) => (
                                <div key={event.title} className="flex items-center gap-3">
                                    <img src={event.image} alt="" className="h-12 w-12 rounded-xl object-cover" />
                                    <div>
                                        <p className="text-sm font-bold text-[#0f1e3d]">{event.title}</p>
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

            <section className="relative overflow-hidden border-t-8 border-[#f8f1df] bg-[#132347] px-6 py-14 text-white lg:px-8 lg:py-[52px]">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-[repeating-linear-gradient(110deg,#facc15_0_16px,#2563eb_16px_32px,#60a5fa_32px_48px)]" />
                <div className="absolute -top-24 -right-12 h-72 w-72 rounded-full border-[28px] border-blue-800/40" />
                <div className="relative mx-auto max-w-[1180px]">
                    <div className="mb-7 max-w-2xl">
                        <p className="text-[11.5px] font-bold tracking-[0.1em] text-[#f0b429] uppercase">Products &amp; Pulilan</p>
                        <h2 className="font-display mt-3 text-[30px] font-semibold tracking-[-0.01em]">There is room for every Pulilan story.</h2>
                        <p className="mt-2 max-w-xl text-[14.5px] leading-[1.7] text-white/72">
                            Whether you are visiting, building, or staying connected, start with the path that fits you.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        {businessAndTourism.map((card) => (
                            <Link
                                key={card.title}
                                href={card.href}
                                className="group overflow-hidden rounded-[10px] border border-white/10 bg-[#16295a] backdrop-blur transition hover:-translate-y-1 hover:bg-[#2f5d3a]"
                            >
                                <img src={card.image} alt="" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
                                <div className="p-4">
                                    <p className="text-[10.5px] font-bold tracking-[0.1em] text-[#f0b429] uppercase">{card.label}</p>
                                    <h3 className="font-display mt-2 text-[15.5px] font-semibold tracking-[-0.01em]">{card.title}</h3>
                                    <p className="mt-2 text-[13px] leading-[1.6] text-white/75">{card.description}</p>
                                    <span className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-white">
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

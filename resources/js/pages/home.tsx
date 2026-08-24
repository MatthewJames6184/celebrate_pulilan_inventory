/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import LatestNewsEvents from '@/components/latest-news-events';
import BusinessAndTourism from '@/components/business-and-tourism';
import VisitorQuickLinks from '@/components/visitor-quick-links';
import LocalInformation from '@/components/local-information';
import { useEffect, useState, useCallback } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel';

// const cards = [
//     {
//         title: 'Resorts & Lodging',
//         description: 'Discover local resorts, guesthouses, and quiet stays near Pulilan’s scenic areas.',
//         label: '01',
//     },
//     {
//         title: 'Local Cuisine',
//         description: 'Taste classic Bulacan flavors, native delicacies, and Pulilan specialties.',
//         label: '02',
//     },
//     {
//         title: 'Heritage & Festivals',
//         description: 'Experience the town’s history, traditions, and colorful community celebrations.',
//         label: '03',
//     },
// ];

const featuredCards = [
    { title: 'Religious', image: '/images/carousel-images/Religious.jpg', href: route('about.religious') },
    { title: 'Historical', image: '/images/carousel-images/Historical.jpg', href: route('about.historical') },
    { title: 'Heritage', image: '/images/carousel-images/Heritage.jpg', href: route('about.heritage') },
    { title: 'Cuisine', image: '/images/carousel-images/Cuisine.jpg', href: route('about.cuisine') },
    { title: 'Shopping', image: '/images/carousel-images/Shopping.jpg', href: route('about.shopping') },
    { title: 'Education', image: '/images/carousel-images/Education.jpg', href: route('about.education') },
    { title: 'Health', image: '/images/carousel-images/Health.jpg', href: route('about.health') },
    { title: 'Attraction', image: '/images/carousel-images/Attraction.jpg', href: route('about.attraction') },
    { title: 'Mission Vision', image: '/images/carousel-images/Mission-and-Vision.jpg', href: route('about.mission-vision') },
    { title: 'Resort', image: '/images/carousel-images/Resorts.jpg', href: route('about.resorts') },
    { title: 'Local Products', image: '/images/carousel-images/Local-Products.jpg', href: route('about.local-products') },
    { title: 'Festival', image: '/images/carousel-images/Festival.jpg', href: route('about.festivals') },
];

const heroSlides = [
    {
        title: 'PANUNUMPA SA TUNGKULIN',
        tag: '#RAMDMANASERBISYO',
        image: '/images/carousel-images/Festival.jpg',
        href: route('about.festivals'),
    },
    {
        title: 'WELCOME TO PULILAN',
        tag: '#DISCOVERLOCAL',
        image: '/images/carousel-images/Heritage.jpg',
        href: route('about.heritage'),
    },
    {
        title: 'CELEBRATE COMMUNITY',
        tag: '#GROWTOGETHER',
        image: '/images/carousel-images/Religious.jpg',
        href: route('about.religious'),
    },
];

export default function Home() {
    const [api, setApi] = useState<CarouselApi | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        const updateIndex = () => setActiveIndex(api.selectedScrollSnap());

        updateIndex();
        api.on('select', updateIndex);
        api.on('reInit', updateIndex);

        return () => {
            api.off('select', updateIndex);
            api.off('reInit', updateIndex);
        };
    }, [api]);

    useEffect(() => {
        if (!api) {
            return;
        }

        const autoplay = window.setInterval(() => {
            api.scrollNext();
        }, 5000);

        return () => window.clearInterval(autoplay);
    }, [api]);

    const scrollToFeatured = useCallback(() => {
        const el = document.getElementById('featured-destinations');
        if (!el) return;
        const header = document.querySelector('header');
        const headerHeight = header?.clientHeight ?? 64;
        const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
        window.scrollTo({ top, behavior: 'smooth' });
    }, []);

    return (
        <PublicLayout headerTransparent>
            <Head title="Home" />
            {/* HERO SECTION */}
            <div className="relative overflow-hidden text-white mb-0">
                <Carousel
                    setApi={setApi}
                    opts={{
                        loop: true,
                        align: 'center',
                        containScroll: 'trimSnaps',
                    }}
                    className="relative"
                >
                    <CarouselContent className="h-[72vh] min-h-[500px] ">
                        {heroSlides.map((slide) => (
                            <CarouselItem key={slide.title} className="basis-full">
                                <div className="relative h-full w-full overflow-hidden">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-800/45 to-slate-900/60" />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />
                                    <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                                        <div className="w-full max-w-6xl text-center">
                                            <h1 className="mx-auto max-w-5xl text-4xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-[5.2rem] lg:leading-[1.02]">
                                                {slide.title}
                                            </h1>
                                            <p className="mt-6 text-base font-semibold tracking-[0.22em] text-white/90 sm:text-xl">
                                                {slide.tag}
                                            </p>
                                            <div className="mt-8 flex items-center justify-center gap-3 sm:gap-5">
                                                <span className="h-px w-10 bg-white/70 sm:w-16" />
                                                <span className="h-px w-10 bg-white/70 sm:w-16" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-4 z-20 h-12 w-12 rounded-full border border-white/35 bg-black/20 text-white shadow-lg backdrop-blur-sm hover:bg-black/35 sm:left-8" />
                    <CarouselNext className="right-4 z-20 h-12 w-12 rounded-full border border-white/35 bg-black/20 text-white shadow-lg backdrop-blur-sm hover:bg-black/35 sm:right-8" />
                </Carousel>

                <div className="absolute z-30 left-1/2 -translate-x-1/2 bottom-20">
                    <button
                        type="button"
                        onClick={scrollToFeatured}
                        className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 backdrop-blur-sm hover:bg-white/20"
                    >
                        What to see
                    </button>
                </div>

                <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
                    {heroSlides.map((slide, index) => (
                        <button
                            key={slide.title}
                            type="button"
                            aria-label={`Go to slide ${index + 1}`}
                            onClick={() => api?.scrollTo(index)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                activeIndex === index ? 'w-9 bg-white' : 'w-2.5 bg-white/55 hover:bg-white/80'
                            }`}
                        />
                    ))}
                </div>
            </div>
            {/* HERO SECTION END */}

            {/* CAROUSEL AND CONTENT SECTION */}
            <div className="bg-white">
                {/* CAROUSEL SECTION */}
    <section id="featured-destinations" className="select-none mt-0 overflow-hidden pb-20">
        <div className="mb-8 flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-45">
            <h2 className="mt-10 ml-10 text-3xl font-semibold text-slate-950">Featured destinations</h2>
            <p className="text-sm mt-10 text-black mr-10">Swipe to explore the highlights.</p>
        </div>

        <Carousel
            opts={{
                align: 'start',
                dragFree: true,
                skipSnaps: true,
                dragThreshold: 2,
                loop: true,
            }}
            className="relative left-1/2 w-screen max-w-none -translate-x-1/2 px-4 sm:px-6 lg:px-8"
        >
            <CarouselContent className="-ml-5 touch-pan-y">
                {featuredCards.map((card, index) => (
                    <CarouselItem key={`${card.title}-${index}`} className="pl-5 basis-[340px] grow-0">
                        <Link
                            href={card.href}
                            className="group relative block h-48 overflow-hidden shadow-xl touch-pan-y"
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                draggable="false"
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-white/20" />
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <h3 className="text-right text-xl font-bold uppercase tracking-[0.2em] text-white drop-shadow-lg">
                                    {card.title}
                                </h3>
                                <div className="mt-3 flex justify-end">
                                    <span className="inline-flex items-center rounded-full border border-white/40 bg-black/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                                        Learn more
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    </section>
            </div>

   

            <section className="bg-white/50 flex justify-center py-10">
                <div className="mx-5 w-full max-w-[1200px] flex flex-col items-center gap-6">
                    <div className="w-full max-w-[980px] h-auto">
                        <LatestNewsEvents />
                    </div>
                    <div className="w-full max-w-[980px] h-auto">
                        <BusinessAndTourism />
                    </div>
                </div>
            </section>


            {/* White band for LocalInformation and VisitorQuickLinks (keep white background) */}
            <div className="bg-white">
                <section className="flex justify-center">
                    <div className="mt-10 mx-5 pb-10 flex shrink basis-[1200px] gap-4">
                        <LocalInformation />
                        <VisitorQuickLinks />
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}

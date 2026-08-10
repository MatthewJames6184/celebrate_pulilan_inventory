/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import PublicLayout from '@/layouts/public-layout';
import LatestNewsEvents from '@/components/latest-news-events';
import BusinessAndTourism from '@/components/business-and-tourism';
import VisitorQuickLinks from '@/components/visitor-quick-links';
import WhyVisitPulilan from '@/components/why-visit-pulilan';
import LocalInformation from '@/components/local-information';
import { useEffect, useMemo, useRef, useState } from 'react';
import {Carousel, CarouselContent, CarouselItem,} from '@/components/ui/carousel';

const homepageBackgrounds = [
    '/images/image-1.jpg',
    '/images/image-2.jpg',
    '/images/image-3.jpg',
    '/images/image-4.jpg',
    '/images/image-5.jpg'
];

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

export default function Home() {
    const backgroundImage = useMemo(() => {
        const index = Math.floor(Math.random() * homepageBackgrounds.length);
        return homepageBackgrounds[index];
    }, []);


    return (
        <PublicLayout
            headerTransparent
            backgroundImage={`linear-gradient(rgba(8, 64, 52, 0.45), rgba(6, 39, 30, 0.45)), url('${backgroundImage}')`}
        >
            <Head title="Home" />
            {/* HERO SECTION */}
            <div className="relative overflow-hidden text-white">
                {/* z-10 mx-auto grid min-h-[85vh] gap-10 px-4 py-20 sm:px-6 lg:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center */}
                <div className=" z-8 mx-auto grid min-h-[85vh] gap-10 px-4 py-20 sm:px-6 lg:px-50 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div className="space-y-8">
                        <span className="inline-flex rounded-full bg-amber-400/90 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-950">
                            Municipal Government of Pulilan
                        </span>
                        <div className="space-y-6">
                            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                                Celebrate Pulilan with every event, service, and visitor.
                            </h1>
                            <p className="max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
                                Find the perfect way to stay, dine, and move around Pulilan with official events, travel tips, and community services.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild>
                                <a href={route('about')} className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-amber-300">
                                    Learn more
                                </a>
                            </Button>
                            <Button variant="secondary" asChild>
                                <a href={route('stay.dine')} className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                                    Where to stay and dine
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
                        <p className="text-sm uppercase tracking-[0.35em] text-amber-200">Discover Pulilan</p>
                        <h2 className="mt-4 text-3xl font-semibold text-white">Explore local culture, hospitality, and attractions.</h2>
                        <p className="mt-5 text-base leading-7 text-white/85">
                            Browse this quick selection of destinations and local experiences, then dive deeper into the best of Pulilan.
                        </p>
                        <div className="mt-8 space-y-4">
                            <div className="rounded-3xl bg-white/10 p-5 text-white shadow-inner shadow-black/10">
                                <p className="text-sm uppercase tracking-[0.35em] text-amber-200">Events & Festivals</p>
                                <p className="mt-2 text-base leading-6 text-white/85">Stay updated on celebrations, parades, and official programs.</p>
                            </div>
                            <div className="rounded-3xl bg-white/10 p-5 text-white shadow-inner shadow-black/10">
                                <p className="text-sm uppercase tracking-[0.35em] text-amber-200">Food & Travel</p>
                                <p className="mt-2 text-base leading-6 text-white/85">Plan where to eat, stay, and discover local favorites.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* CAROUSEL AND CONTENT SECTION */}
            <div className="bg-white">
            {/* CAROUSEL SECTION */}
    <section className="select-none mt-2 overflow-hidden">
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
            {/* CONTENT SECTION */}
            {/* space-y-6 mt-10 grid lg:grid-cols-[1.2fr_0.8fr] justify-items-center */}
            {/* mt-10 mb-10 grid lg:grid-flow-col gap-4 justify-items-center */}
            <section className= "flex justify-center my-10 " >
                    <LatestNewsEvents />
            </section>
            <section className = "flex justify-center my-10">
                    <BusinessAndTourism />
            </section>
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

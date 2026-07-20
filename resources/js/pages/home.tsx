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

    const carouselRef = useRef<HTMLDivElement | null>(null);
    const dragMovedRef = useRef(false);
    const suppressClickRef = useRef(false);
    const [carouselItemSize, setCarouselItemSize] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [dragStartX, setDragStartX] = useState<number | null>(null);
    const [dragStartScroll, setDragStartScroll] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const gap = 20;
    const carouselCards = useMemo(
        () => [featuredCards[featuredCards.length - 1], ...featuredCards, featuredCards[0]],
        [],
    );

    const desiredDotCount = 5;
    const groupSize = Math.ceil(featuredCards.length/desiredDotCount);
    const dotCount = Math.ceil(featuredCards.length/groupSize);
    const activeDot = Math.floor(activeIndex/groupSize);

    useEffect(() => {
        const updateSize = () => {
            const carousel = carouselRef.current;
            const firstCard = carousel?.querySelector<HTMLDivElement>('[data-carousel-card]');
            if (firstCard) {
                setCarouselItemSize(firstCard.offsetWidth + gap);
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, [gap]);

    useEffect(() => {
        if (!carouselItemSize) {
            return;
        }

        const carousel = carouselRef.current;
        if (carousel) {
            carousel.scrollLeft = carouselItemSize;
            setActiveIndex(0);
        }
    }, [carouselItemSize]);

    const scrollToIndex = (index: number) => {
        const carousel = carouselRef.current;
        if (!carousel || !carouselItemSize) {
            return;
        }

        carousel.scrollTo({
            left: carouselItemSize * (index + 1),
            behavior: 'auto',
        });
        setActiveIndex(index);
    };

    const updateActiveIndex = (scrollLeft: number) => {
        const offset = scrollLeft - carouselItemSize;
        const index = Math.round(offset / carouselItemSize);
        setActiveIndex(Math.min(Math.max(index, 0), featuredCards.length - 1));
    };

    const handleCarouselScroll = () => {
        const carousel = carouselRef.current;
        if (!carousel || !carouselItemSize) {
            return;
        }

        const minScroll = carouselItemSize * 0.2;
        const maxScroll = carouselItemSize * (featuredCards.length + 0.8);

        if (carousel.scrollLeft <= minScroll) {
            carousel.scrollLeft = carouselItemSize * featuredCards.length;
            updateActiveIndex(carousel.scrollLeft);
            return;
        }

        if (carousel.scrollLeft >= maxScroll) {
            carousel.scrollLeft = carouselItemSize;
            updateActiveIndex(carousel.scrollLeft);
            return;
        }

        updateActiveIndex(carousel.scrollLeft);
    };

    const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        const carousel = carouselRef.current;
        if (!carousel) {
            return;
        }

        dragMovedRef.current = false;
        suppressClickRef.current = false;
        setIsDragging(false);
        setDragStartX(event.clientX);
        setDragStartScroll(carousel.scrollLeft);
        event.currentTarget.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        if (dragStartX === null) {
            return;
        }

        const carousel = carouselRef.current;
        if (!carousel) {
            return;
        }

        const delta = event.clientX - dragStartX;
        if (Math.abs(delta) > 6) {
            dragMovedRef.current = true;
            setIsDragging(true);
        }
        carousel.scrollLeft = dragStartScroll - delta;
    };

    const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
        const carousel = carouselRef.current;
        if (carousel) {
            handleCarouselScroll();
        }

        if (dragMovedRef.current) {
            suppressClickRef.current = true;
            window.setTimeout(() => {
                suppressClickRef.current = false;
            }, 0);
        }

        setDragStartX(null);
        setDragStartScroll(0);
        setIsDragging(false);
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
        }
    };

    const handlePointerCancel = (event: React.PointerEvent<HTMLDivElement>) => {
        handlePointerUp(event);
    };

    const handleCardClick = (event: React.MouseEvent) => {
        if (isDragging || dragMovedRef.current || suppressClickRef.current) {
            event.preventDefault();
        }
    };

    return (
        <PublicLayout
            headerTransparent
            backgroundImage={`linear-gradient(rgba(8, 64, 52, 0.45), rgba(6, 39, 30, 0.45)), url('${backgroundImage}')`}
        >
            <Head title="Home" />

            <div className="relative overflow-hidden text-white">
                <div className=" inset-0 bg-slate-950/35" />

                <div className="relative z-10 mx-auto grid min-h-[85vh] max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
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

            <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8 select-none">
                <div className="mb-8 flex items-center justify-between gap-4">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-emerald-100">What to See</p>
                        <h2 className="mt-3 text-3xl font-semibold text-slate-950">Featured destinations</h2>
                    </div>
                    <p className="text-sm text-white">Swipe to explore the highlights.</p>
                </div>
                <div className="-mx-4 overflow-hidden px-4 pb-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div
                        ref={carouselRef}
                        className="flex select-none gap-5 overflow-x-hidden overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3 cursor-grab active:cursor-grabbing"
                        style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}
                        onScroll={handleCarouselScroll}
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                        onPointerCancel={handlePointerCancel}
                    >
                        {carouselCards.map((card, index) => (
                            <Link
                                key={`${card.title}-${index}`}
                                href={card.href}
                                draggable={false}
                                onDragStart={(e) => e.preventDefault()}
                                onClick={handleCardClick}
                                data-carousel-card
                                className="group relative h-48 min-w-[340px] flex-none overflow-hidden rounded-3xl shadow-xl snap-start cursor-pointer"
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    draggable="false"
                                    onDragStart={(event) => event.preventDefault()}
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
                        ))}
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-center gap-3">
                    {Array.from({length: dotCount}).map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            aria-label={`Go to slide ${index + 1}`}
                            className={`h-3 w-3 rounded-full transition-colors ${
                                activeDot === index ? 'bg-emerald-900' : 'bg-slate-300'
                            }`}
                            onClick={() => scrollToIndex(Math.min(index * groupSize, featuredCards.length - 1))}
                        />
                    ))}
                </div>
            </section>

            <section className="mt-10">
                <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-2xl">
                    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="space-y-6">
                            <LatestNewsEvents />
                            <BusinessAndTourism />
                        </div>
                        <div className="space-y-6">
                            <VisitorQuickLinks />
                            <WhyVisitPulilan />
                            <LocalInformation />
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}

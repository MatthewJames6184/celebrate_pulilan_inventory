import ScrollReveal from '@/components/scroll-reveal';
import { Link } from '@inertiajs/react';
import { Clock3, MapPin, Phone, Star } from 'lucide-react';

type RelatedListing = {
    name: string;
    category: string;
    area: string;
    image: string;
    price: string;
};

type StayDineDetailProps = {
    name: string;
    type: 'accommodations' | 'restaurants';
    category: string;
    area: string;
    location: string;
    image: string;
    price: string;
    rating: number;
    reviews: number;
    description: string;
    highlights: string[];
    amenities: string[];
    hours: string;
    phone: string;
    related: RelatedListing[];
};

export default function StayDineDetail({
    name,
    type,
    category,
    area,
    location,
    image,
    price,
    rating,
    reviews,
    description,
    highlights,
    amenities,
    hours,
    phone,
    related,
}: StayDineDetailProps) {
    const listingRoute = type === 'accommodations' ? route('stay.dine.accommodations') : route('stay.dine.restaurants');

    return (
        <div className="min-h-screen bg-[#fffdf8] text-[#1f2937]" style={{ fontSize: '20px' }}>
            <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
                <img src={image} alt={name} className="h-full w-full animate-[fade-in_900ms_ease-out] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f4d]/15 via-[#0b1f4d]/20 to-[#0b1f4d]/90" />
                <Link
                    href={listingRoute}
                    className="absolute top-24 left-6 rounded-full border border-white/30 bg-[#0b1f4d]/55 px-3 py-2 text-[0.875em] text-white backdrop-blur transition hover:bg-[#0b1f4d]/80 lg:left-10"
                >
                    ← Back to listings
                </Link>
                <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-8 lg:px-10">
                    <span className="mb-3 inline-block rounded-full bg-[#d4a853] px-2.5 py-1 text-[0.75em] font-bold text-[#0b1640]">{category}</span>
                    <h1 className="font-display text-[2.25em] font-semibold lg:text-[3em]">{name}</h1>
                    <p className="mt-2 flex items-center gap-2 text-[0.875em] text-white/85">
                        <MapPin className="h-4 w-4" />
                        {area} · {location}
                    </p>
                </div>
            </section>

            <main className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
                <div className="grid gap-10 lg:grid-cols-3">
                    <div className="space-y-8 lg:col-span-2">
                        <ScrollReveal>
                            <section className="flex items-center gap-6 rounded-2xl border border-[#123b8f]/10 bg-white p-5 shadow-sm">
                                <div className="text-center">
                                    <div className="font-display text-[1.875em] font-semibold text-[#d4a853]">{rating}</div>
                                    <div className="mt-0.5 text-[0.625em] text-slate-500">out of 5</div>
                                </div>
                                <div className="flex-1">
                                    <div className="mb-1 flex gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`h-5 w-5 ${star <= Math.round(rating) ? 'fill-[#e8b84b] text-[#b7872f]' : 'text-slate-200'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-[0.875em] text-slate-500">Based on {reviews} visitor reviews</span>
                                </div>
                                <div className="text-right">
                                    <div className="font-display text-[1.25em] font-semibold text-[#123b8f]">{price}</div>
                                    <div className="text-[0.625em] text-slate-500">starting from</div>
                                </div>
                            </section>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <section>
                                <h2 className="font-display mb-4 text-[1.5em] font-semibold text-[#123b8f]">About This Place</h2>
                                <p className="text-[1em] leading-relaxed text-slate-700">{description}</p>
                            </section>
                        </ScrollReveal>
                        <ScrollReveal delay={180}>
                            <section>
                                <h2 className="font-display mb-4 text-[1.25em] font-semibold text-[#123b8f]">What to Expect</h2>
                                <div className="flex flex-wrap gap-3">
                                    {highlights.map((highlight) => (
                                        <span
                                            key={highlight}
                                            className="rounded-xl border border-[#123b8f]/10 bg-[#f7f3eb] px-4 py-2.5 text-[0.875em] text-slate-700"
                                        >
                                            • &nbsp;{highlight}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </ScrollReveal>
                        <ScrollReveal delay={260}>
                            <section>
                                <h2 className="font-display mb-4 text-[1.25em] font-semibold text-[#123b8f]">Amenities &amp; Features</h2>
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                    {amenities.map((amenity) => (
                                        <span
                                            key={amenity}
                                            className="rounded-xl border border-[#123b8f]/10 bg-white p-3 text-[0.875em] text-slate-700"
                                        >
                                            ✓ &nbsp;{amenity}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </ScrollReveal>
                    </div>

                    <aside className="space-y-5">
                        <section className="space-y-4 rounded-2xl border border-[#123b8f]/10 bg-[#f7f3eb] p-6">
                            <h2 className="font-display text-[1.125em] font-semibold text-[#123b8f]">Contact &amp; Hours</h2>
                            <div className="space-y-3 text-[0.875em] text-slate-700">
                                <p className="flex items-center gap-3">
                                    <Phone className="h-4 w-4 text-[#a27620]" />
                                    {phone}
                                </p>
                                <p className="flex items-center gap-3">
                                    <Clock3 className="h-4 w-4 text-[#a27620]" />
                                    {hours}
                                </p>
                                <p className="flex items-start gap-3">
                                    <MapPin className="mt-0.5 h-4 w-4 text-[#a27620]" />
                                    {area}
                                    <br />
                                    {location}
                                </p>
                            </div>
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, ${area}, ${location}`)}`}
                                target="_blank"
                                rel="noreferrer"
                                className="block w-full rounded-xl bg-[#123b8f] py-3 text-center text-[0.875em] font-bold text-white transition hover:bg-[#1d4ed8]"
                            >
                                Get Directions
                            </a>
                            <button className="w-full rounded-xl border border-[#123b8f]/20 py-3 text-[0.875em] font-medium text-[#123b8f] transition hover:bg-[#123b8f]/5">
                                Save to Itinerary
                            </button>
                        </section>
                        <div className="relative h-44 overflow-hidden rounded-2xl border border-[#123b8f]/10 bg-white">
                            <img
                                src="/images/other-images/pulilan-google-map.gif"
                                alt="Map showing Pulilan, Bulacan"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-[#123b8f]/90 px-4 py-2 text-white">
                                <MapPin className="h-4 w-4 text-[#f1c75b]" />
                                <span className="text-[0.75em]">{area}, Pulilan</span>
                            </div>
                        </div>
                    </aside>
                </div>

                <section className="mt-16">
                    <h2 className="font-display mb-6 text-[1.5em] font-semibold text-[#123b8f]">
                        More {type === 'accommodations' ? 'Accommodations' : 'Restaurants'}
                    </h2>
                    <div className="grid gap-5 md:grid-cols-3">
                        {related.map((item, index) => (
                            <ScrollReveal key={item.name} delay={index * 100}>
                                <Link
                                    href={route('stay.dine.detail', { type, slug: item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') })}
                                    className="group block overflow-hidden rounded-2xl border border-[#e8e1d5] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c89b33]/50 hover:shadow-lg"
                                >
                                    <div className="relative h-36 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                        <span className="absolute top-3 left-3 rounded-full bg-[#e8b84b] px-2 py-0.5 text-[0.75em] font-bold text-[#17233d]">
                                            {item.category}
                                        </span>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-display text-[0.875em] font-semibold text-[#123b8f] group-hover:text-[#a27620]">
                                            {item.name}
                                        </h3>
                                        <p className="mt-1 text-[0.75em] text-slate-500">
                                            {item.area} · {item.price}
                                        </p>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

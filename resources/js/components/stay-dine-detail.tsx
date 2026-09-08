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
        <div className="min-h-screen bg-[#0b1640] text-white">
            <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
                <img src={image} alt={name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b1640]/30 via-transparent to-[#0b1640]" />
                <Link href={listingRoute} className="absolute top-24 left-6 rounded-full border border-white/10 bg-[#0b1640]/50 px-3 py-2 text-sm text-white/70 backdrop-blur transition hover:text-white lg:left-10">
                    ← Back to listings
                </Link>
                <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-8 lg:px-10">
                    <span className="mb-3 inline-block rounded-full bg-[#d4a853] px-2.5 py-1 text-xs font-bold text-[#0b1640]">{category}</span>
                    <h1 className="font-display text-4xl font-semibold lg:text-5xl">{name}</h1>
                    <p className="mt-2 flex items-center gap-2 text-sm text-white/55"><MapPin className="h-4 w-4" />{area} · {location}</p>
                </div>
            </section>

            <main className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
                <div className="grid gap-10 lg:grid-cols-3">
                    <div className="space-y-8 lg:col-span-2">
                        <section className="flex items-center gap-6 rounded-2xl border border-white/5 bg-[#0e1c52] p-5">
                            <div className="text-center"><div className="font-display text-3xl font-semibold text-[#d4a853]">{rating}</div><div className="mt-0.5 text-xs text-white/40">out of 5</div></div>
                            <div className="flex-1"><div className="mb-1 flex gap-1">{[1, 2, 3, 4, 5].map((star) => <Star key={star} className={`h-5 w-5 ${star <= Math.round(rating) ? 'fill-[#d4a853] text-[#d4a853]' : 'text-white/10'}`} />)}</div><span className="text-sm text-white/35">Based on {reviews} visitor reviews</span></div>
                            <div className="text-right"><div className="font-display text-xl font-semibold text-[#d4a853]">{price}</div><div className="text-xs text-white/30">starting from</div></div>
                        </section>
                        <section><h2 className="font-display mb-4 text-2xl font-semibold">About This Place</h2><p className="text-base leading-relaxed text-white/55">{description}</p></section>
                        <section><h2 className="font-display mb-4 text-xl font-semibold">What to Expect</h2><div className="flex flex-wrap gap-3">{highlights.map((highlight) => <span key={highlight} className="rounded-xl border border-white/10 bg-[#0e1c52] px-4 py-2.5 text-sm text-white/70">• &nbsp;{highlight}</span>)}</div></section>
                        <section><h2 className="font-display mb-4 text-xl font-semibold">Amenities &amp; Features</h2><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{amenities.map((amenity) => <span key={amenity} className="rounded-xl border border-white/5 bg-[#0e1c52] p-3 text-sm text-white/60">✓ &nbsp;{amenity}</span>)}</div></section>
                    </div>

                    <aside className="space-y-5">
                        <section className="space-y-4 rounded-2xl border border-white/5 bg-[#0e1c52] p-6">
                            <h2 className="font-display text-lg font-semibold">Contact &amp; Hours</h2>
                            <div className="space-y-3 text-sm text-white/60"><p className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#d4a853]" />{phone}</p><p className="flex items-center gap-3"><Clock3 className="h-4 w-4 text-[#d4a853]" />{hours}</p><p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-[#d4a853]" />{area}<br />{location}</p></div>
                            <button className="w-full rounded-xl bg-[#d4a853] py-3 text-sm font-bold text-[#0b1640] shadow-lg shadow-[#d4a853]/20 transition hover:bg-[#e8b96a]">Get Directions</button>
                            <button className="w-full rounded-xl border border-[#d4a853]/30 py-3 text-sm font-medium text-[#d4a853] transition hover:bg-[#d4a853]/10">Save to Itinerary</button>
                        </section>
                        <div className="relative h-44 overflow-hidden rounded-2xl border border-white/5 bg-[#0e1c52]"><img src="https://images.unsplash.com/photo-1682724425247-f34019858601?w=500&h=300&fit=crop&auto=format" alt="Map location" className="h-full w-full object-cover opacity-25" /><div className="absolute inset-0 flex flex-col items-center justify-center gap-2"><MapPin className="h-7 w-7 text-[#d4a853]" /><span className="text-xs text-white/50">{area}, Pulilan</span></div></div>
                    </aside>
                </div>

                <section className="mt-16"><h2 className="font-display mb-6 text-2xl font-semibold">More {type === 'accommodations' ? 'Accommodations' : 'Restaurants'}</h2><div className="grid gap-5 md:grid-cols-3">{related.map((item) => <Link key={item.name} href={route('stay.dine.detail', { type, slug: item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') })} className="group overflow-hidden rounded-2xl border border-white/5 bg-[#0e1c52] transition hover:-translate-y-1 hover:border-[#d4a853]/30"><div className="relative h-36 overflow-hidden"><img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute top-3 left-3 rounded-full bg-[#d4a853] px-2 py-0.5 text-xs font-bold text-[#0b1640]">{item.category}</span></div><div className="p-4"><h3 className="font-display text-sm font-semibold group-hover:text-[#d4a853]">{item.name}</h3><p className="mt-1 text-xs text-white/35">{item.area} · {item.price}</p></div></Link>)}</div></section>
            </main>
        </div>
    );
}

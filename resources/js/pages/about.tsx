import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';

const sections = [
    {
        title: 'History of Pulilan',
        description:
            'Pulilan is known for its rich agricultural heritage and centuries-old traditions. Learn about the town’s roots, development, and community life.',
    },
    {
        title: 'What to See',
        items: ['Cuisine', 'Festivals', 'Heritage', 'Religious sites', 'Local products'],
    },
    {
        title: 'Cuisine',
        description:
            'Taste Pulilan’s native delicacies, including local sweets, fresh produce, and restaurant specialties that highlight Bulacan flavors.',
    },
    {
        title: 'Festivals',
        description:
            'Discover the annual celebrations that draw visitors from across the region, including vibrant street parades and cultural performances.',
    },
];

const topicLinks = [
    { title: 'Religious', image: '/images/carousel-images/Religious.jpg', href: route('about.religious'), description: 'Discover faith-centered places and traditions.' },
    { title: 'Historical', image: '/images/carousel-images/Historical.jpg', href: route('about.historical'), description: 'Read more about the places tied to local memory.' },
    { title: 'Heritage', image: '/images/carousel-images/Heritage.jpg', href: route('about.heritage'), description: 'Visit the landmarks and traditions that endure.' },
    { title: 'Cuisine', image: '/images/carousel-images/Cuisine.jpg', href: route('about.cuisine'), description: 'Explore local dishes and favorite flavors.' },
    { title: 'Shopping', image: '/images/carousel-images/Shopping.jpg', href: route('about.shopping'), description: 'See where to pick up practical local finds.' },
    { title: 'Education', image: '/images/carousel-images/Education.jpg', href: route('about.education'), description: 'Find schools and learning hubs in town.' },
    { title: 'Health', image: '/images/carousel-images/Health.jpg', href: route('about.health'), description: 'Locate healthcare services and wellness support.' },
    { title: 'Attraction', image: '/images/carousel-images/Attraction.jpg', href: route('about.attraction'), description: 'Discover places to visit across Pulilan.' },
    { title: 'Mission Vision', image: '/images/carousel-images/Mission-and-Vision.jpg', href: route('about.mission-vision'), description: 'Read the town goals and service direction.' },
    { title: 'Resort', image: '/images/carousel-images/Resorts.jpg', href: route('about.resorts'), description: 'Browse stay and unwind options near town.' },
    { title: 'Local Products', image: '/images/carousel-images/Local-Products.jpg', href: route('about.local-products'), description: 'Find goods made and sold by Pulilan residents.' },
    { title: 'Festival', image: '/images/carousel-images/Festival.jpg', href: route('about.festivals'), description: 'See the celebrations that bring the town together.' },
];

export default function About() {
    return (
        <PublicLayout>
            <Head title="About Pulilan" />

            <section className="space-y-6 rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm shadow-slate-200/80 md:p-10">
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">About Pulilan</p>
                    <h1 className="text-4xl font-semibold text-slate-950">History, culture, and points of interest.</h1>
                    <p className="max-w-3xl text-base leading-8 text-slate-600">
                        Pulilan is a welcoming municipality in Bulacan, known for its rich cultural heritage, historic landmarks, and local festivals. Explore the community’s
                        attractions, dining options, and traditional craftsmanship.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    {sections.map((section) => (
                        <div key={section.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                            <h2 className="text-xl font-semibold text-slate-950">{section.title}</h2>
                            {section.description ? (
                                <p className="mt-3 text-sm leading-7 text-slate-600">{section.description}</p>
                            ) : null}
                            {section.items ? (
                                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                                    {section.items.map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-700" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </div>
                    ))}
                </div>

                <div className="space-y-4 border-t border-slate-200 pt-2">
                    <div className="space-y-2">
                        <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Explore the details</p>
                        <h2 className="text-2xl font-semibold text-slate-950">Open the dedicated pages for each topic.</h2>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {topicLinks.map((topic) => (
                            <Link key={topic.title} href={topic.href} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                                <div className="mb-4 overflow-hidden rounded-2xl">
                                    <img src={topic.image} alt={topic.title} className="h-36 w-full object-cover" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-950">{topic.title}</h3>
                                <p className="mt-2 text-sm leading-7 text-slate-600">{topic.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}

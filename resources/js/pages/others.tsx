import PublicLayout from '@/layouts/public-layout';
import { Head, Link } from '@inertiajs/react';

const items = [
    { title: 'Downloads', href: route('others.downloads'), description: 'Find brochures, forms, and visitor guides for Pulilan.' },
    { title: 'FAQ', href: route('others.faq'), description: 'Answers to common questions about travel, permits, and services.' },
    { title: 'News', href: route('others.news'), description: 'Latest announcements and community bulletins.' },
    { title: 'Site Map', href: route('others.site-map'), description: 'A quick guide to the main pages and public services.' },
    { title: 'Announcements', href: route('others.announcements'), description: 'Official notices from municipal offices and tourism events.' },
    {
        title: 'Calendar of Events',
        href: route('others.calendar-of-events'),
        description: 'See upcoming festivals, celebrations, and community programs.',
    },
    { title: 'Photo Gallery', href: route('others.photo-gallery'), description: 'Browse highlights from Pulilan’s festivals and heritage sites.' },
];

export default function Others() {
    return (
        <PublicLayout>
            <Head title="Others" />

            <section
                className="text-scale mx-auto mt-24 mb-16 max-w-7xl space-y-6 rounded-3xl border border-[#123b8f]/10 bg-[#fffdf8] p-8 shadow-sm shadow-[#123b8f]/5 md:p-10"
                style={{ fontSize: '16px' }}
            >
                <div className="space-y-3">
                    <p className="text-sm font-semibold tracking-[0.3em] text-[#a27620] uppercase">More to Explore</p>
                    <h1 className="font-display text-4xl font-semibold text-[#123b8f]">Resources, announcements, and event information.</h1>
                    <p className="max-w-3xl text-base leading-8 text-slate-600">
                        Access useful municipal resources, review upcoming events, and explore photo highlights from Pulilan’s community life.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <article
                            key={item.title}
                            className="rounded-3xl border border-[#123b8f]/10 bg-[#f7f3eb] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <h2 className="font-display text-xl font-semibold text-[#123b8f]">{item.title}</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                            <Link
                                href={item.href}
                                className="mt-5 inline-flex items-center rounded-full bg-[#123b8f] px-4 py-2 text-xs font-semibold tracking-[0.15em] text-white uppercase transition hover:bg-[#1d4ed8]"
                            >
                                Learn more
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </PublicLayout>
    );
}

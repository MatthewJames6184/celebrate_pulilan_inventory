import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';

const items = [
    { title: 'Downloads', href: route('others.downloads'), description: 'Find brochures, forms, and visitor guides for Pulilan.' },
    { title: 'FAQ', href: route('others.faq'), description: 'Answers to common questions about travel, permits, and services.' },
    { title: 'News', href: route('others.news'), description: 'Latest announcements and community bulletins.' },
    { title: 'Site Map', href: route('others.site-map'), description: 'A quick guide to the main pages and public services.' },
    { title: 'Announcements', href: route('others.announcements'), description: 'Official notices from municipal offices and tourism events.' },
    { title: 'Calendar of Events', href: route('others.calendar-of-events'), description: 'See upcoming festivals, celebrations, and community programs.' },
    { title: 'Photo Gallery', href: route('others.photo-gallery'), description: 'Browse highlights from Pulilan’s festivals and heritage sites.' },
];

export default function Others() {
    return (
        <PublicLayout>
            <Head title="Others" />

            <section className="space-y-6 rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm shadow-slate-200/80 md:p-10">
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Others</p>
                    <h1 className="text-4xl font-semibold text-slate-950">Resources, announcements, and event information.</h1>
                    <p className="max-w-3xl text-base leading-8 text-slate-600">
                        Access useful municipal resources, review upcoming events, and explore photo highlights from Pulilan’s community life.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                            <Link
                                href={item.href}
                                className="mt-5 inline-flex items-center rounded-full bg-emerald-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-emerald-800"
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

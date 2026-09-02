import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';

type BreadCrumbs = {
    label: string;
    href?: string;
};

type ImageSubHeader = {
    alt: string;
    src: string;
};

type TopicSection = {
    title: string;
    description?: string;
    items?: string[];
};

interface PublicTopicPageProps {
    headTitle: string;
    title: string;
    imageSubHeader?: ImageSubHeader;
    eyebrow?: string;
    intro?: string;
    sections?: TopicSection[];
    breadcrumbs?: BreadCrumbs[];
    children?: ReactNode;
}

export default function PublicTopicPage({ headTitle, title, imageSubHeader, eyebrow, intro, sections, breadcrumbs, children }: PublicTopicPageProps) {
    const hasSections = Array.isArray(sections) && sections.length > 0;

    if (hasSections && !imageSubHeader && !children) {
        return (
            <PublicLayout>
                <Head title={headTitle} />

                <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-950/60 via-emerald-900/45 to-slate-950/70" />

                    <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/60 bg-white/92 p-6 shadow-2xl shadow-emerald-950/20 backdrop-blur-sm md:p-10">
                        <header className="text-center">
                            {eyebrow ? <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">{eyebrow}</p> : null}
                            <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">{title}</h1>
                            {intro ? <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">{intro}</p> : null}
                        </header>

                        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {sections.map((section) => (
                                <article key={section.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                                    <h2 className="text-xl font-semibold text-slate-950">{section.title}</h2>

                                    {section.description ? <p className="mt-3 text-sm leading-7 text-slate-600">{section.description}</p> : null}

                                    {section.items && section.items.length > 0 ? (
                                        <ul className="mt-4 space-y-2 text-sm text-slate-600">
                                            {section.items.map((item) => (
                                                <li key={item} className="rounded-xl border border-slate-200 bg-white px-3 py-2">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </PublicLayout>
        );
    }

    const headerImage = imageSubHeader ?? {
        src: '/images/image-2.jpg',
        alt: title,
    };

    return (
        <PublicLayout>
            <Head title={headTitle} />

            {/* subheader */}
            <section className="relative h-25 overflow-hidden">
                <img src={headerImage.src} alt={headerImage.alt} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-white/80" />
                <div className="absolute inset-0 flex items-center bg-white/5">
                    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h1 className="max-w-5xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">{title}</h1>
                    </div>
                </div>
            </section>

            <section className="min-h-screen border-emerald-200 bg-white shadow-sm shadow-slate-200/80 md:p-10 pl-0">
                {/* Breadcrumbs */}
                <section className="flex justify-center">
                    <div className="w-90 md:w-300">
                        {breadcrumbs && breadcrumbs.length > 0 && (
                            <nav aria-label="Breadcrumb" className="mb-4">
                                <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
                                    {breadcrumbs.map((crumb, index) => {
                                                                            const isLast = index === breadcrumbs.length - 1;
                                                                            return (
                                                                                <li key={crumb.label} className="flex items-center gap-1.5">
                                                                                    <span className={isLast ? 'font-medium text-slate-950' : 'text-slate-500'}>{crumb.label}</span>
                                                                                    {!isLast && <ChevronRight className="h-3.5 w-3.5 text-slate-400" />}
                                                                                </li>
                                                                            );
                                                                        })}
                                </ol>
                            </nav>
                        )}
                    </div>
                </section>

                {/* Page-specific content goes here */}
                {children}
            </section>
        </PublicLayout>
    );
}
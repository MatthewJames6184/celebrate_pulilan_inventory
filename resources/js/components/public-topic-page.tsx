import PublicLayout from '@/layouts/public-layout';
import { Head, Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';

type BreadCrumb = { label: string; href?: string };
type ImageSubHeader = { alt: string; src: string };
type TopicSection = { title: string; description?: string; items?: string[] };

type PublicTopicPageProps = {
    headTitle: string;
    title: string;
    imageSubHeader?: ImageSubHeader;
    eyebrow?: string;
    intro?: string;
    sections?: TopicSection[];
    breadcrumbs?: BreadCrumb[];
    children?: ReactNode;
};

export default function PublicTopicPage({ headTitle, title, imageSubHeader, eyebrow, intro, sections, breadcrumbs, children }: PublicTopicPageProps) {
    return (
        <PublicLayout>
            <Head title={headTitle} />
            <section className="relative h-48 overflow-hidden border-white/10">
                <img src={imageSubHeader?.src ?? '/images/image-2.jpg'} alt={imageSubHeader?.alt ?? title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[#0b1f4d]/75" />
                <div className="absolute inset-0 flex items-end justify-center pb-8 text-center">
                    <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8">
                        {eyebrow && <p className="mb-2 text-[10px] font-medium tracking-[0.3em] text-[#d4a853] uppercase">{eyebrow}</p>}
                        <h1 className="font-display text-3xl font-semibold text-white md:text-5xl">{title}</h1>
                        {intro && <p className="mt-1 text-xs text-white/55">{intro}</p>}
                    </div>
                </div>
            </section>
            <main className="min-h-screen bg-[#0b1640] py-8 md:py-10">
                <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
                    {breadcrumbs && (
                        <nav aria-label="Breadcrumb" className="mb-8">
                            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45">
                                {breadcrumbs.map((crumb, index) => (
                                    <li key={crumb.label} className="flex items-center gap-1.5">
                                        {crumb.href && index < breadcrumbs.length - 1 ? <Link href={crumb.href}>{crumb.label}</Link> : <span>{crumb.label}</span>}
                                        {index < breadcrumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-white/25" />}
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    )}
                    {sections && (
                        <section className="rounded-2xl bg-white p-6">
                            {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-emerald-700">{eyebrow}</p>}
                            <h2 className="mt-3 text-3xl font-semibold text-slate-950">{title}</h2>
                            {intro && <p className="mt-4 text-slate-600">{intro}</p>}
                            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {sections.map((section) => (
                                    <article key={section.title} className="rounded-xl bg-slate-50 p-5">
                                        <h3 className="font-semibold text-slate-950">{section.title}</h3>
                                        {section.description && <p className="mt-2 text-sm text-slate-600">{section.description}</p>}
                                        {section.items && <ul className="mt-3 space-y-2 text-sm text-slate-600">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
                                    </article>
                                ))}
                            </div>
                        </section>
                    )}
                    {children}
                </div>
            </main>
        </PublicLayout>
    );
}

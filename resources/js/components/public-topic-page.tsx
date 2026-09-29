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
            <div className="text-scale" style={{ fontSize: '16px' }}>
                <section className="relative h-48 overflow-hidden border-white/10">
                    <img
                        src={imageSubHeader?.src ?? '/images/image-2.jpg'}
                        alt={imageSubHeader?.alt ?? title}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f4d]/75 via-[#0b1f4d]/55 to-[#0b1f4d]/25" />
                    <div className="absolute inset-0 flex items-end justify-center pb-8 text-center">
                        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8">
                            {eyebrow && <p className="mb-2 text-[10px] font-semibold tracking-[0.3em] text-[#f1c75b] uppercase">{eyebrow}</p>}
                            <h1 className="font-display text-3xl font-semibold text-white md:text-5xl">{title}</h1>
                            {intro && <p className="mt-1 text-xs text-white/55">{intro}</p>}
                        </div>
                    </div>
                </section>
                <main className="min-h-screen bg-[#fffdf8] py-8 text-[#1f2937] md:py-10">
                    <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
                        {breadcrumbs && (
                            <nav aria-label="Breadcrumb" className="mb-8">
                                <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                                    {breadcrumbs.map((crumb, index) => (
                                        <li key={crumb.label} className="flex items-center gap-1.5">
                                            {crumb.href && index < breadcrumbs.length - 1 ? (
                                                <Link href={crumb.href}>{crumb.label}</Link>
                                            ) : (
                                                <span>{crumb.label}</span>
                                            )}
                                            {index < breadcrumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" />}
                                        </li>
                                    ))}
                                </ol>
                            </nav>
                        )}
                        {sections && (
                            <section className="rounded-2xl bg-white p-6">
                                {eyebrow && <p className="text-xs tracking-[0.3em] text-[#a27620] uppercase">{eyebrow}</p>}
                                <h2 className="font-display mt-3 text-3xl font-semibold text-[#123b8f]">{title}</h2>
                                {intro && <p className="mt-4 text-slate-600">{intro}</p>}
                                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                    {sections.map((section) => (
                                        <article key={section.title} className="rounded-xl border border-[#123b8f]/10 bg-[#f7f3eb] p-5">
                                            <h3 className="font-semibold text-[#123b8f]">{section.title}</h3>
                                            {section.description && <p className="mt-2 text-sm text-slate-600">{section.description}</p>}
                                            {section.items && (
                                                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                                                    {section.items.map((item) => (
                                                        <li key={item}>{item}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </article>
                                    ))}
                                </div>
                            </section>
                        )}
                        {children}
                    </div>
                </main>
            </div>
        </PublicLayout>
    );
}

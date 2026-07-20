import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';

type TopicSection = {
    title: string;
    description?: string;
    items?: string[];
};

interface PublicTopicPageProps {
    headTitle: string;
    eyebrow: string;
    title: string;
    intro: string;
    sections: TopicSection[];
    gridClassName?: string;
}

export default function PublicTopicPage({ headTitle, eyebrow, title, intro, sections, gridClassName = 'md:grid-cols-2 lg:grid-cols-3' }: PublicTopicPageProps) {
    return (
        <PublicLayout>
            <Head title={headTitle} />

            <section className="space-y-6 rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm shadow-slate-200/80 md:p-10">
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">{eyebrow}</p>
                    <h1 className="text-4xl font-semibold text-slate-950">{title}</h1>
                    <p className="max-w-3xl text-base leading-8 text-slate-600">{intro}</p>
                </div>

                <div className={`grid gap-5 ${gridClassName}`}>
                    {sections.map((section) => (
                        <article key={section.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <h2 className="text-xl font-semibold text-slate-950">{section.title}</h2>

                            {section.description ? <p className="mt-3 text-sm leading-7 text-slate-600">{section.description}</p> : null}

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
                        </article>
                    ))}
                </div>
            </section>
        </PublicLayout>
    );
}
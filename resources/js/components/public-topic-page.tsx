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

            <section className="min-h-screen border-emerald-200 bg-white p-8 shadow-sm shadow-slate-200/80 md:p-10">
                <div className="">
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">{eyebrow}</p>
                    <h1 className="text-4xl font-semibold text-slate-950">{title}</h1>
                    <p className="max-w-3xl text-base leading-8 text-slate-600">{intro}</p>
                </div>

            </section>
        </PublicLayout>
    );
}
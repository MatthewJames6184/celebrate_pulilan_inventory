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

interface PublicTopicPageProps {
    headTitle: string;
    title: string;
    imageSubHeader: ImageSubHeader;
    breadcrumbs?: BreadCrumbs[];
    children: ReactNode;
}

export default function PublicTopicPage({ headTitle, title, imageSubHeader, breadcrumbs, children }: PublicTopicPageProps) {
    return (
        <PublicLayout>
            <Head title={headTitle} />

            {/* subheader */}
            <section className="relative h-25 overflow-hidden">
                <img src={imageSubHeader.src} alt={imageSubHeader.alt} className="h-full w-full object-cover" />
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
                    <div className="w-300">
                        {breadcrumbs && breadcrumbs.length > 0 && (
                            <nav aria-label="Breadcrumb" className="mb-4">
                                <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
                                    {breadcrumbs.map((crumb, index) => {
                                        const isLast = index === breadcrumbs.length - 1;
                                        return (
                                            <li key={crumb.label} className="flex items-center gap-1.5">
                                                {crumb.href && !isLast ? (
                                                    <Link href={crumb.href} className="transition-colors hover:text-emerald-700">
                                                        {crumb.label}
                                                    </Link>
                                                ) : (
                                                    <span className={isLast ? 'font-medium text-slate-950' : ''}>{crumb.label}</span>
                                                )}
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
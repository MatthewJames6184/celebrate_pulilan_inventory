import { Head, Link } from '@inertiajs/react';
import { Download, FileText, FolderOpen } from 'lucide-react';

import PublicLayout from '@/layouts/public-layout';

type DownloadItem = {
    category: string;
    title: string;
    format: string;
    size: string;
};

const downloadItems: DownloadItem[] = [
    {
        category: 'Visitor Guide',
        title: 'Celebrate Pulilan Travel Primer',
        format: 'PDF',
        size: '2.4 MB',
    },
    {
        category: 'Public Forms',
        title: 'Tourism Inquiry Form',
        format: 'DOCX',
        size: '146 KB',
    },
    {
        category: 'Community Info',
        title: 'Municipal Services Quick Sheet',
        format: 'PDF',
        size: '980 KB',
    },
    {
        category: 'Events',
        title: 'Annual Festival Calendar Summary',
        format: 'PDF',
        size: '1.1 MB',
    },
];

export default function OthersDownloads() {
    return (
        <PublicLayout>
            <Head title="Downloads" />

            <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-950/60 via-emerald-900/45 to-slate-950/70" />

                <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/60 bg-white/92 p-6 shadow-2xl shadow-emerald-950/20 backdrop-blur-sm md:p-10">
                    <header className="text-center">
                        <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">Others</p>
                        <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">Guides, forms, and useful files.</h1>
                        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                            Access downloadable resources for visitors, residents, and partners who need official Pulilan information.
                        </p>
                    </header>

                    <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                        <section>
                            <h2 className="flex items-center gap-2 text-2xl font-semibold text-slate-950">
                                <FolderOpen className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                                Available Downloads
                            </h2>
                            <div className="mt-6 grid gap-4">
                                {downloadItems.map((item) => (
                                    <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-emerald-200 hover:bg-emerald-50/40">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">{item.category}</p>
                                        <h3 className="mt-2 text-lg font-semibold text-slate-950">{item.title}</h3>
                                        <p className="mt-1 text-sm text-slate-600">
                                            {item.format} • {item.size}
                                        </p>

                                        <button
                                            type="button"
                                            className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-emerald-800"
                                        >
                                            <Download className="h-3.5 w-3.5" aria-hidden="true" />
                                            Download
                                        </button>
                                    </article>
                                ))}
                            </div>
                        </section>

                        <aside className="space-y-4 rounded-3xl bg-emerald-50/70 p-6 lg:border lg:border-emerald-200 lg:bg-emerald-50/50">
                            <h2 className="text-xl font-semibold text-slate-950">Need a Specific Document?</h2>
                            <p className="text-sm leading-7 text-slate-600">
                                If the file you need is not listed yet, send us a request and our team will assist you with the latest available document.
                            </p>

                            <Link
                                href={route('contact')}
                                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-950 transition hover:bg-amber-300"
                            >
                                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                                Request a File
                            </Link>

                            <p className="text-xs leading-6 text-slate-500">File links are for layout preview and can be connected to real documents anytime.</p>
                        </aside>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
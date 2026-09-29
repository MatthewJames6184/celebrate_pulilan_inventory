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

            <section className="text-scale relative overflow-hidden bg-[#f7f3eb] px-4 pt-28 pb-14 sm:px-6 lg:px-8" style={{ fontSize: '16px' }}>
                <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#123b8f]/10 bg-[#fffdf8] p-6 shadow-xl shadow-[#123b8f]/5 md:p-10">
                    <header className="text-center">
                        <p className="text-sm font-semibold tracking-[0.35em] text-[#a27620] uppercase">Visitor Resources</p>
                        <h1 className="font-display mt-4 text-3xl leading-tight font-semibold text-[#123b8f] md:text-5xl">
                            Guides, forms, and useful files.
                        </h1>
                        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                            Access downloadable resources for visitors, residents, and partners who need official Pulilan information.
                        </p>
                    </header>

                    <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                        <section>
                            <h2 className="font-display flex items-center gap-2 text-2xl font-semibold text-[#123b8f]">
                                <FolderOpen className="h-5 w-5 text-[#a27620]" aria-hidden="true" />
                                Available Downloads
                            </h2>
                            <div className="mt-6 grid gap-4">
                                {downloadItems.map((item) => (
                                    <article
                                        key={item.title}
                                        className="rounded-2xl border border-[#123b8f]/10 bg-white p-5 transition hover:border-[#123b8f]/30 hover:bg-[#f7f3eb]"
                                    >
                                        <p className="text-xs font-semibold tracking-[0.2em] text-[#a27620] uppercase">{item.category}</p>
                                        <h3 className="mt-2 text-lg font-semibold text-[#123b8f]">{item.title}</h3>
                                        <p className="mt-1 text-sm text-slate-600">
                                            {item.format} • {item.size}
                                        </p>

                                        <button
                                            type="button"
                                            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#123b8f] px-4 py-2 text-xs font-semibold tracking-[0.15em] text-white uppercase transition hover:bg-[#1d4ed8]"
                                        >
                                            <Download className="h-3.5 w-3.5" aria-hidden="true" />
                                            Download
                                        </button>
                                    </article>
                                ))}
                            </div>
                        </section>

                        <aside className="space-y-4 rounded-3xl border border-[#123b8f]/10 bg-[#f7f3eb] p-6">
                            <h2 className="font-display text-xl font-semibold text-[#123b8f]">Need a Specific Document?</h2>
                            <p className="text-sm leading-7 text-slate-600">
                                If the file you need is not listed yet, send us a request and our team will assist you with the latest available
                                document.
                            </p>

                            <Link
                                href={route('contact')}
                                className="inline-flex items-center gap-2 rounded-full bg-[#e8b84b] px-4 py-2 text-xs font-semibold tracking-[0.15em] text-[#17233d] uppercase transition hover:bg-[#f2c85e]"
                            >
                                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                                Request a File
                            </Link>

                            <p className="text-xs leading-6 text-slate-500">
                                File links are for layout preview and can be connected to real documents anytime.
                            </p>
                        </aside>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}

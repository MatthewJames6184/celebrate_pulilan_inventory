import { Head, Link } from '@inertiajs/react';
import { CircleHelp, Mail, Phone } from 'lucide-react';

import PublicLayout from '@/layouts/public-layout';

type FaqItem = {
    question: string;
    answer: string;
};

const faqItems: FaqItem[] = [
    {
        question: 'What are the municipal office hours?',
        answer: 'The municipal office is open Monday to Friday, 8:00 AM to 5:00 PM, except during national holidays.',
    },
    {
        question: 'Where can I ask about tourism destinations in Pulilan?',
        answer: 'You can send an inquiry through the Contact page or visit the municipal office for tourism assistance and printed guides.',
    },
    {
        question: 'How do I request public forms or information sheets?',
        answer: 'Go to the Downloads page for available files. If your needed document is unavailable, submit a request through Contact Us.',
    },
    {
        question: 'Are event schedules updated online?',
        answer: 'Yes. Event dates and advisories are posted under Calendar of Events and Announcements, subject to official updates.',
    },
];

export default function OthersFaq() {
    return (
        <PublicLayout>
            <Head title="Frequently Asked Questions" />

            <section className="text-scale relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8" style={{ fontSize: '16px' }}>
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-950/60 via-emerald-900/45 to-slate-950/70" />

                <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/60 bg-white/92 p-6 shadow-2xl shadow-emerald-950/20 backdrop-blur-sm md:p-10">
                    <header className="text-center">
                        <p className="text-sm tracking-[0.35em] text-emerald-700 uppercase">Others</p>
                        <h1 className="mt-4 text-3xl leading-tight font-semibold text-slate-950 md:text-5xl">Answers to common concerns.</h1>
                        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                            Browse frequently asked questions about travel, public services, and municipal information in Pulilan.
                        </p>
                    </header>

                    <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                        <section>
                            <h2 className="flex items-center gap-2 text-2xl font-semibold text-slate-950">
                                <CircleHelp className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                                Frequently Asked Questions
                            </h2>

                            <div className="mt-6 space-y-4">
                                {faqItems.map((item) => (
                                    <details
                                        key={item.question}
                                        className="group rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 open:border-emerald-200 open:bg-emerald-50/40"
                                    >
                                        <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-slate-900">
                                            <span>{item.question}</span>
                                        </summary>
                                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                                    </details>
                                ))}
                            </div>
                        </section>

                        <aside className="space-y-4 rounded-3xl bg-emerald-50/70 p-6 lg:border lg:border-emerald-200 lg:bg-emerald-50/50">
                            <h2 className="text-xl font-semibold text-slate-950">Still Need Help?</h2>
                            <p className="text-sm leading-7 text-slate-600">
                                If your concern is not listed here, contact our office directly and we will guide you to the right service channel.
                            </p>

                            <div className="space-y-3 text-sm text-slate-700">
                                <p className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                                    (044) 123 4567
                                </p>
                                <p className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                                    info@pulilan.gov.ph
                                </p>
                            </div>

                            <Link
                                href={route('contact')}
                                className="inline-flex items-center rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold tracking-[0.15em] text-emerald-950 uppercase transition hover:bg-amber-300"
                            >
                                Contact Us
                            </Link>
                        </aside>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}

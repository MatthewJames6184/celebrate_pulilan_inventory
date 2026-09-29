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

            <section className="text-scale relative overflow-hidden bg-[#f7f3eb] px-4 pt-28 pb-14 sm:px-6 lg:px-8" style={{ fontSize: '16px' }}>
                <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#123b8f]/10 bg-[#fffdf8] p-6 shadow-xl shadow-[#123b8f]/5 md:p-10">
                    <header className="text-center">
                        <p className="text-sm font-semibold tracking-[0.35em] text-[#a27620] uppercase">Visitor Help</p>
                        <h1 className="font-display mt-4 text-3xl leading-tight font-semibold text-[#123b8f] md:text-5xl">
                            Answers to common concerns.
                        </h1>
                        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                            Browse frequently asked questions about travel, public services, and municipal information in Pulilan.
                        </p>
                    </header>

                    <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                        <section>
                            <h2 className="font-display flex items-center gap-2 text-2xl font-semibold text-[#123b8f]">
                                <CircleHelp className="h-5 w-5 text-[#a27620]" aria-hidden="true" />
                                Frequently Asked Questions
                            </h2>

                            <div className="mt-6 space-y-4">
                                {faqItems.map((item) => (
                                    <details
                                        key={item.question}
                                        className="group rounded-2xl border border-[#123b8f]/10 bg-white px-5 py-4 open:border-[#123b8f]/30 open:bg-[#f7f3eb]"
                                    >
                                        <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-slate-900">
                                            <span>{item.question}</span>
                                        </summary>
                                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                                    </details>
                                ))}
                            </div>
                        </section>

                        <aside className="space-y-4 rounded-3xl border border-[#123b8f]/10 bg-[#f7f3eb] p-6">
                            <h2 className="font-display text-xl font-semibold text-[#123b8f]">Still Need Help?</h2>
                            <p className="text-sm leading-7 text-slate-600">
                                If your concern is not listed here, contact our office directly and we will guide you to the right service channel.
                            </p>

                            <div className="space-y-3 text-sm text-slate-700">
                                <p className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-[#a27620]" aria-hidden="true" />
                                    (044) 123 4567
                                </p>
                                <p className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-[#a27620]" aria-hidden="true" />
                                    info@pulilan.gov.ph
                                </p>
                            </div>

                            <Link
                                href={route('contact')}
                                className="inline-flex items-center rounded-full bg-[#123b8f] px-4 py-2 text-xs font-semibold tracking-[0.15em] text-white uppercase transition hover:bg-[#1d4ed8]"
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

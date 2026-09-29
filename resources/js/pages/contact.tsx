import InputError from '@/components/input-error';
import PublicLayout from '@/layouts/public-layout';
import { Head, useForm } from '@inertiajs/react';
import { type FormEventHandler, useState } from 'react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const { data: form, setData, post, processing, errors, reset } = useForm({ name: '', email: '', subject: '', message: '' });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('contact.store'), {
            onSuccess: () => {
                setSubmitted(true);
                reset();
            },
        });
    };

    return (
        <PublicLayout>
            <Head title="Contact & Plan Your Visit" />
            <div className="text-scale min-h-screen bg-[#fffdf8] text-[#1f2937]" style={{ fontSize: '16px' }}>
                {/* Hero */}
                <div className="mx-auto max-w-3xl px-6 pt-32 pb-16 text-center">
                    <div className="mb-4 flex items-center justify-center gap-2">
                        <div className="h-px w-6 bg-[#a27620]" />
                        <span className="text-xs font-semibold tracking-widest text-[#a27620] uppercase">Get in Touch</span>
                        <div className="h-px w-6 bg-[#a27620]" />
                    </div>
                    <h1 className="font-display mb-4 text-5xl font-semibold text-[#123b8f] lg:text-6xl">
                        Contact &<br />
                        <em className="text-[#a27620]">Plan Your Visit</em>
                    </h1>
                    <p className="text-base leading-relaxed text-slate-600">
                        Have questions about visiting Pulilan, planning an event, or seeking municipal services? We're here to help.
                    </p>
                </div>

                <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
                        {/* Contact form */}
                        <div className="lg:col-span-3">
                            <div className="rounded-3xl border border-[#123b8f]/10 bg-white p-6 shadow-sm sm:p-8">
                                <h2 className="font-display mb-6 text-2xl font-semibold text-[#123b8f]">Send us a Message</h2>

                                {submitted ? (
                                    <div className="py-12 text-center">
                                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#d4a853]/30 bg-[#d4a853]/15">
                                            <svg className="h-8 w-8 text-[#d4a853]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="font-display mb-2 text-xl font-semibold text-[#123b8f]">Message Sent!</h3>
                                        <p className="text-sm text-slate-600">
                                            Thank you for reaching out. We'll get back to you within 1–2 business days.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setSubmitted(false);
                                                reset();
                                            }}
                                            className="mt-6 rounded-full border border-[#123b8f]/25 px-6 py-2.5 text-sm font-medium text-[#123b8f] transition-all hover:bg-[#123b8f]/5"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-xs font-semibold tracking-widest text-slate-600 uppercase">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={form.name}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                    placeholder="Juan dela Cruz"
                                                    className="h-[52px] w-full rounded-xl border border-slate-200 bg-[#fffdf8] px-4 text-sm text-slate-800 transition-colors placeholder:text-slate-400 focus:border-[#123b8f]/50 focus:outline-none"
                                                />
                                                <InputError message={errors.name} />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-xs font-semibold tracking-widest text-slate-600 uppercase">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={form.email}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    placeholder="juan@example.com"
                                                    className="h-[52px] w-full rounded-xl border border-slate-200 bg-[#fffdf8] px-4 text-sm text-slate-800 transition-colors placeholder:text-slate-400 focus:border-[#123b8f]/50 focus:outline-none"
                                                />
                                                <InputError message={errors.email} />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-xs font-semibold tracking-widest text-slate-600 uppercase">
                                                Subject
                                            </label>
                                            <select
                                                required
                                                value={form.subject}
                                                onChange={(e) => setData('subject', e.target.value)}
                                                className="h-[52px] w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-[#fffdf8] px-4 text-sm text-slate-700 transition-colors focus:border-[#123b8f]/50 focus:outline-none"
                                            >
                                                <option value="">Select a topic...</option>
                                                <option>Tourism Inquiry</option>
                                                <option>Festival Information</option>
                                                <option>Business & Investment</option>
                                                <option>Municipal Services</option>
                                                <option>Heritage & Culture</option>
                                                <option>Other</option>
                                            </select>
                                            <InputError message={errors.subject} />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-xs font-semibold tracking-widest text-slate-600 uppercase">
                                                Message
                                            </label>
                                            <textarea
                                                required
                                                rows={5}
                                                value={form.message}
                                                onChange={(e) => setData('message', e.target.value)}
                                                placeholder="Tell us how we can help..."
                                                className="w-full resize-none rounded-xl border border-slate-200 bg-[#fffdf8] px-4 py-3 text-sm text-slate-800 transition-colors placeholder:text-slate-400 focus:border-[#123b8f]/50 focus:outline-none"
                                            />
                                            <InputError message={errors.message} />
                                        </div>
                                        <button
                                            type="submit"
                                            className="h-[52px] w-full rounded-xl bg-[#123b8f] font-semibold text-white shadow-lg shadow-[#123b8f]/15 transition-colors hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:opacity-60"
                                        >
                                            {processing ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Contact info */}
                        <div className="space-y-5 lg:col-span-2">
                            {[
                                {
                                    icon: '📍',
                                    title: 'Address',
                                    lines: ['Municipal Hall, Poblacion', 'Pulilan, Bulacan 3005', 'Philippines'],
                                },
                                {
                                    icon: '📞',
                                    title: 'Phone',
                                    lines: ['(044) 672-0001', '(044) 672-0002', 'Mon–Fri, 8AM–5PM'],
                                },
                                {
                                    icon: '✉️',
                                    title: 'Email',
                                    lines: ['info@pulilan.gov.ph', 'tourism@pulilan.gov.ph'],
                                },
                                {
                                    icon: '🕐',
                                    title: 'Office Hours',
                                    lines: ['Monday – Friday', '8:00 AM – 5:00 PM', 'Closed on Philippine holidays'],
                                },
                            ].map((card) => (
                                <div key={card.title} className="flex gap-4 rounded-2xl border border-[#123b8f]/10 bg-white p-6 shadow-sm">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8b84b]/20 text-lg">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-display mb-2 text-xs font-semibold tracking-widest text-[#8b671e] uppercase">
                                            {card.title}
                                        </h4>
                                        {card.lines.map((line) => (
                                            <p key={line} className="text-sm text-slate-600">
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Pulilan%2C+Bulacan"
                                target="_blank"
                                rel="noreferrer"
                                className="group relative block h-48 overflow-hidden rounded-2xl border border-[#123b8f]/10 bg-white"
                            >
                                <img
                                    src="/images/other-images/pulilan-google-map.gif"
                                    alt="Map of Pulilan, Bulacan"
                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                />
                                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-[#123b8f]/90 px-4 py-3 text-sm font-semibold text-white">
                                    Pulilan, Bulacan <span className="text-[#f1c75b]">Get directions →</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}

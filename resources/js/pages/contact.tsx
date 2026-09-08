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
            <div className="min-h-screen bg-[#123b8f]">
                {/* Hero */}
                <div className="mx-auto max-w-3xl px-6 pt-32 pb-16 text-center">
                    <div className="mb-4 flex items-center justify-center gap-2">
                        <div className="h-px w-6 bg-[#d4a853]" />
                        <span className="text-xs font-medium tracking-widest text-[#d4a853] uppercase">Get in Touch</span>
                        <div className="h-px w-6 bg-[#d4a853]" />
                    </div>
                    <h1 className="font-display mb-4 text-5xl font-semibold text-[#f5f0e8] lg:text-6xl">
                        Contact &<br />
                        <em className="text-[#d4a853]">Plan Your Visit</em>
                    </h1>
                    <p className="text-base leading-relaxed text-[#f5f0e8]/50">
                        Have questions about visiting Pulilan, planning an event, or seeking municipal services? We're here to help.
                    </p>
                </div>

                <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
                        {/* Contact form */}
                        <div className="lg:col-span-3">
                            <div className="rounded-3xl border border-white/5 bg-[#173f82] p-8">
                                <h2 className="font-display mb-6 text-2xl font-semibold text-[#f5f0e8]">Send us a Message</h2>

                                {submitted ? (
                                    <div className="py-12 text-center">
                                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#d4a853]/30 bg-[#d4a853]/15">
                                            <svg className="h-8 w-8 text-[#d4a853]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="font-display mb-2 text-xl font-semibold text-[#f5f0e8]">Message Sent!</h3>
                                        <p className="text-sm text-[#f5f0e8]/50">
                                            Thank you for reaching out. We'll get back to you within 1–2 business days.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setSubmitted(false);
                                                reset();
                                            }}
                                            className="mt-6 rounded-full border border-[#d4a853]/40 px-6 py-2.5 text-sm text-[#d4a853] transition-all hover:bg-[#d4a853]/10"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-xs font-medium tracking-widest text-[#f5f0e8]/50 uppercase">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={form.name}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                    placeholder="Juan dela Cruz"
                                                    className="h-[52px] w-full rounded-xl border border-white/10 bg-[#123b8f] px-4 text-sm text-[#f5f0e8] placeholder-[#f5f0e8]/20 transition-colors focus:border-[#d4a853]/50 focus:outline-none"
                                                />
                                                <InputError message={errors.name} />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-xs font-medium tracking-widest text-[#f5f0e8]/50 uppercase">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={form.email}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    placeholder="juan@example.com"
                                                    className="h-[52px] w-full rounded-xl border border-white/10 bg-[#123b8f] px-4 text-sm text-[#f5f0e8] placeholder-[#f5f0e8]/20 transition-colors focus:border-[#d4a853]/50 focus:outline-none"
                                                />
                                                <InputError message={errors.email} />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-xs font-medium tracking-widest text-[#f5f0e8]/50 uppercase">
                                                Subject
                                            </label>
                                            <select
                                                required
                                                value={form.subject}
                                                onChange={(e) => setData('subject', e.target.value)}
                                                className="h-[52px] w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-[#123b8f] px-4 text-sm text-[#f5f0e8]/70 transition-colors focus:border-[#d4a853]/50 focus:outline-none"
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
                                            <label className="mb-2 block text-xs font-medium tracking-widest text-[#f5f0e8]/50 uppercase">
                                                Message
                                            </label>
                                            <textarea
                                                required
                                                rows={5}
                                                value={form.message}
                                                onChange={(e) => setData('message', e.target.value)}
                                                placeholder="Tell us how we can help..."
                                                className="w-full resize-none rounded-xl border border-white/10 bg-[#123b8f] px-4 py-3 text-sm text-[#f5f0e8] placeholder-[#f5f0e8]/20 transition-colors focus:border-[#d4a853]/50 focus:outline-none"
                                            />
                                            <InputError message={errors.message} />
                                        </div>
                                        <button
                                            type="submit"
                                            className="h-[52px] w-full rounded-xl bg-[#d4a853] font-semibold text-[#0d1b2a] shadow-lg shadow-[#d4a853]/20 transition-colors hover:bg-[#e8b96a] disabled:cursor-not-allowed disabled:opacity-60"
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
                                <div key={card.title} className="flex gap-4 rounded-2xl border border-white/5 bg-[#173f82] p-6">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d4a853]/10 text-lg">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-display mb-2 text-xs font-semibold tracking-widest text-[#d4a853] uppercase">
                                            {card.title}
                                        </h4>
                                        {card.lines.map((line) => (
                                            <p key={line} className="text-sm text-[#f5f0e8]/55">
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* Map placeholder */}
                            <div className="relative h-48 overflow-hidden rounded-2xl border border-white/5 bg-[#173f82]">
                                <img
                                    src="https://images.unsplash.com/photo-1601000234047-d9308ea1ed51?w=600&h=300&fit=crop&auto=format"
                                    alt="Pulilan location"
                                    className="h-full w-full object-cover opacity-30"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                                    <svg className="h-8 w-8 text-[#d4a853]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                    </svg>
                                    <p className="text-sm text-[#f5f0e8]/60">Pulilan, Bulacan</p>
                                    <p className="text-xs text-[#f5f0e8]/30">14.9022° N, 120.8367° E</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}

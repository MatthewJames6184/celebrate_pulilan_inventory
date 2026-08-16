import { Head, useForm, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';
import PublicLayout from '@/layouts/public-layout';
import { type SharedData } from '@/types';
import { FormEventHandler } from 'react';
import { Clock3, Mail, MapPin, Phone } from 'lucide-react';

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function Contact() {
    const page = usePage<SharedData>();
    const flash = page.props.flash as { success?: string } | undefined;
    const { data, setData, post, processing, errors, reset } = useForm<ContactForm>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('contact.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <PublicLayout>
            <Head title="Contact Us" />

            <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-950/60 via-emerald-900/45 to-slate-950/70" />

                <div className="mx-auto max-w-6xl">
                    <div className="rounded-[2rem] border border-white/60 bg-white/92 p-6 shadow-2xl shadow-emerald-950/20 backdrop-blur-sm md:p-10">
                        <header className="text-center">
                            <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">Contact Us</p>
                            <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">Send us a message or visit our town office.</h1>
                            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                                Our office is ready to help visitors, residents, and business owners with tourism, permits, and local services.
                            </p>
                        </header>

                        {flash?.success ? (
                            <div className="mb-8 mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-900">
                                {flash.success}
                            </div>
                        ) : null}

                        <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_0.85fr] lg:items-start">
                            <section>
                                <h2 className="text-2xl font-semibold text-slate-950">Send Us a Message</h2>
                                <p className="mt-2 text-sm leading-7 text-slate-600">Complete the form below and our team will get back to you as soon as possible.</p>

                                <form onSubmit={submit} className="mt-8 space-y-6">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div className="grid gap-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} required />
                                            <InputError message={errors.name} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} required />
                                            <InputError message={errors.email} />
                                        </div>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input id="subject" value={data.subject} onChange={(e) => setData('subject', e.target.value)} required />
                                        <InputError message={errors.subject} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea id="message" value={data.message} onChange={(e) => setData('message', e.target.value)} required />
                                        <InputError message={errors.message} />
                                    </div>

                                    <Button type="submit" disabled={processing} className="w-full bg-emerald-700 text-white hover:bg-emerald-800 md:w-auto">
                                        {processing ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </form>
                            </section>

                            <aside className="space-y-8 rounded-3xl bg-emerald-50/60 p-6 lg:self-start lg:border-l lg:border-emerald-200 lg:bg-transparent lg:pl-8">
                                <div>
                                    <h2 className="text-2xl font-semibold text-slate-950">Office Information</h2>
                                    <p className="mt-2 text-sm leading-7 text-slate-600">Visit, call, or email us for inquiries and local assistance.</p>

                                    <dl className="mt-6 space-y-5 text-sm text-slate-700">
                                        <div className="flex items-start gap-3">
                                            <span className="mt-0.5 rounded-full bg-emerald-100 p-2 text-emerald-700">
                                                <MapPin className="h-4 w-4" aria-hidden="true" />
                                            </span>
                                            <div>
                                                <dt className="font-semibold text-slate-900">Municipal Hall</dt>
                                                <dd className="mt-1 text-slate-600">Brgy. Poblacion, Pulilan, Bulacan</dd>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="mt-0.5 rounded-full bg-emerald-100 p-2 text-emerald-700">
                                                <Phone className="h-4 w-4" aria-hidden="true" />
                                            </span>
                                            <div>
                                                <dt className="font-semibold text-slate-900">Phone</dt>
                                                <dd className="mt-1 text-slate-600">(044) 123 4567</dd>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="mt-0.5 rounded-full bg-emerald-100 p-2 text-emerald-700">
                                                <Mail className="h-4 w-4" aria-hidden="true" />
                                            </span>
                                            <div>
                                                <dt className="font-semibold text-slate-900">Email</dt>
                                                <dd className="mt-1 text-slate-600">info@pulilan.gov.ph</dd>
                                            </div>
                                        </div>
                                    </dl>
                                </div>

                                <div>
                                    <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                                        <Clock3 className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                                        Visitor Hours
                                    </h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-600">Monday to Friday, 8:00 AM to 5:00 PM. Closed on national holidays.</p>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}

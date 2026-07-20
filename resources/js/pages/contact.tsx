import { Head, useForm, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';
import PublicLayout from '@/layouts/public-layout';
import { type SharedData } from '@/types';
import { FormEventHandler } from 'react';

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

            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
                <section className="rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm shadow-slate-200/80 md:p-10">
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Contact Us</p>
                    <h1 className="mt-3 text-4xl font-semibold text-slate-950">Send us a message or visit our town office.</h1>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                        Our office is ready to help visitors, residents, and business owners with tourism, permits, and local services.
                    </p>

                    {flash?.success ? (
                        <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-900">
                            {flash.success}
                        </div>
                    ) : null}

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

                        <Button type="submit" disabled={processing} className="w-full md:w-auto">
                            Send Message
                        </Button>
                    </form>
                </section>

                <aside className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm shadow-slate-200/80">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-950">Office Information</h2>
                        <dl className="mt-4 space-y-4 text-sm text-slate-600">
                            <div>
                                <dt className="font-semibold text-slate-900">Municipal Hall</dt>
                                <dd>Brgy. Poblacion, Pulilan, Bulacan</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-slate-900">Phone</dt>
                                <dd>(044) 123 4567</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-slate-900">Email</dt>
                                <dd>info@pulilan.gov.ph</dd>
                            </div>
                        </dl>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-slate-950">Visitor Hours</h2>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            Monday to Friday, 8:00 AM to 5:00 PM. Closed on national holidays.
                        </p>
                    </div>
                </aside>
            </div>
        </PublicLayout>
    );
}

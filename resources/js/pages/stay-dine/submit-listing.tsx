import PublicLayout from '@/layouts/public-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Building2, CheckCircle2, MapPin, UtensilsCrossed } from 'lucide-react';
import { type FormEventHandler } from 'react';

type ExistingSubmission = {
    status: 'pending' | 'approved' | 'rejected';
    name: string;
} | null;

export default function StayDineSubmitListing({
    businessType,
    businessName,
    businessEmail,
    existingSubmission,
}: {
    businessType: 'accommodation' | 'restaurant';
    businessName: string;
    businessEmail: string;
    existingSubmission: ExistingSubmission;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        type: businessType,
        name: existingSubmission?.name ?? businessName,
        category: '',
        area: '',
        address: '',
        email: businessEmail,
        phone: '',
        website: '',
        description: '',
    });

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault();
        post(route('stay.dine.submit.store'), {
            onSuccess: () => {
                reset();
            },
        });
    };

    if (existingSubmission && existingSubmission.status !== 'rejected') {
        return (
            <PublicLayout>
                <Head title="Business listing status" />
                <div className="min-h-screen bg-[#f5f3ee] px-5 py-32 text-slate-800">
                    <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                        <h1 className="text-2xl font-semibold text-slate-900">
                            {existingSubmission.status === 'pending' ? 'Listing under review' : 'Listing published'}
                        </h1>
                        <p className="mt-2 text-sm text-slate-600">
                            {existingSubmission.name} has been {existingSubmission.status === 'pending' ? 'submitted for admin review' : 'approved and added to the directory'}.
                        </p>
                        <Link href={route('dashboard')} className="mt-6 inline-flex rounded-full bg-[#173f82] px-5 py-3 text-sm font-semibold text-white">
                            Return to dashboard
                        </Link>
                    </div>
                </div>
            </PublicLayout>
        );
    }

    return (
        <PublicLayout>
            <Head title="Add your business listing" />

            <div className="min-h-screen bg-[#f5f3ee] text-slate-800">
                <div className="mx-auto max-w-6xl px-5 py-8 pt-28 lg:px-8">
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <Link href={route('stay.dine.index')} className="inline-flex items-center gap-2 text-sm font-medium text-[#173f82] hover:text-[#1e3a8a]">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Stay &amp; Dine
                        </Link>
                        <div className="rounded-full border border-[#d4a853]/30 bg-[#f9f5eb] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8d6b1c]">
                            {businessType === 'restaurant' ? 'Restaurant listing' : 'Accommodation listing'}
                        </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[1.1fr_1.4fr]">
                        <aside className="rounded-3xl bg-[#173f82] p-7 text-[#f7f0df] shadow-[0_18px_40px_rgba(23,63,130,0.18)]">
                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d4a853]/20 text-[#f4d27b]">
                                    {data.type === 'restaurant' ? <UtensilsCrossed className="h-5 w-5" /> : <Building2 className="h-5 w-5" />}
                                </div>
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#f4d27b]">Become visible</p>
                                    <h1 className="mt-1 text-3xl font-semibold text-white">Submit your listing</h1>
                                </div>
                            </div>

                            <p className="text-sm leading-relaxed text-white/75">
                                Your business application is approved. Add the public details for your {businessType === 'restaurant' ? 'restaurant' : 'accommodation'} listing.
                            </p>

                            <div className="mt-7 space-y-4">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <div className="mb-2 flex items-center gap-2 text-[#f4d27b]">
                                        <CheckCircle2 className="h-4 w-4" />
                                        <span className="text-sm font-semibold">Review process</span>
                                    </div>
                                    <p className="text-sm text-white/70">Submit details, wait for admin approval, and be published on the site.</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <div className="mb-2 flex items-center gap-2 text-[#f4d27b]">
                                        <MapPin className="h-4 w-4" />
                                        <span className="text-sm font-semibold">Who can apply?</span>
                                    </div>
                                    <p className="text-sm text-white/70">Any accommodation, resort, inn, café, or restaurant in Pulilan can apply.</p>
                                </div>
                            </div>
                        </aside>

                        <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] lg:p-8">
                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold text-slate-900">Business details</h2>
                                <p className="mt-1 text-sm text-slate-500">Provide the information we need for review and publication.</p>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">
                                <div className="md:col-span-2 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
                                    Listing type:{' '}
                                    <strong className="text-[#173f82]">{businessType === 'restaurant' ? 'Restaurants' : 'Accommodations'}</strong>
                                </div>

                                <div>
                                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Business name</label>
                                    <input required value={data.name} onChange={(e) => setData('name', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none focus:border-[#d4a853]" placeholder="Pulilan Garden Resort" />
                                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                                </div>

                                <div>
                                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Category</label>
                                    <input value={data.category} onChange={(e) => setData('category', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none focus:border-[#d4a853]" placeholder="Resort, Café, Hotel, etc." />
                                </div>

                                <div>
                                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Area</label>
                                    <input value={data.area} onChange={(e) => setData('area', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none focus:border-[#d4a853]" placeholder="Poblacion" />
                                </div>

                                <div>
                                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Phone</label>
                                    <input value={data.phone} onChange={(e) => setData('phone', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none focus:border-[#d4a853]" placeholder="0917 123 4567" />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Address</label>
                                    <input required value={data.address} onChange={(e) => setData('address', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none focus:border-[#d4a853]" placeholder="Street / Barangay / Municipality" />
                                </div>

                                <div>
                                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Email</label>
                                    <input type="email" readOnly value={data.email} className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-500 outline-none" />
                                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Website</label>
                                    <input type="url" value={data.website} onChange={(e) => setData('website', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none focus:border-[#d4a853]" placeholder="https://example.com" />
                                    {errors.website && <p className="mt-1 text-xs text-red-500">{errors.website}</p>}
                                </div>

                                <div className="md:col-span-2">
                                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Description</label>
                                    <textarea required value={data.description} onChange={(e) => setData('description', e.target.value)} rows={5} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none focus:border-[#d4a853]" placeholder="Tell us about your place, your specialties, and what makes it worth visiting." />
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:justify-between">
                                <div className="text-sm text-slate-500">Your request will be reviewed by the admin before publishing.</div>
                                <button type="submit" disabled={processing} className="inline-flex items-center justify-center rounded-full bg-[#173f82] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1e3a8a] disabled:cursor-not-allowed disabled:opacity-70">
                                    {processing ? 'Submitting...' : 'Submit listing request'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}

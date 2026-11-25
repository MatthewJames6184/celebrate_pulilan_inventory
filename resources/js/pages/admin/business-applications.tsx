import AppLayout from '@/layouts/app-layout';
import { Head, router } from '@inertiajs/react';
import { Building2, CheckCircle2, CircleX, Clock3, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

type BusinessApplication = {
    id: number;
    business_name: string;
    category: string;
    area: string | null;
    address: string;
    email: string;
    phone: string | null;
    website: string | null;
    description: string;
    status: 'pending' | 'approved' | 'rejected';
    created_at: string;
    applicant_name: string;
};

export default function BusinessApplications({ applications, pendingCount }: { applications: BusinessApplication[]; pendingCount: number }) {
    const [processingId, setProcessingId] = useState<number | null>(null);

    const reviewApplication = (applicationId: number, status: 'approved' | 'rejected') => {
        router.patch(
            route('admin.business-applications.review', { businessApplication: applicationId }),
            { status },
            {
                preserveScroll: true,
                onStart: () => setProcessingId(applicationId),
                onFinish: () => setProcessingId(null),
            },
        );
    };

    return (
        <AppLayout breadcrumbs={[{ title: 'Business Applications', href: '/admin/business-applications' }]}>
            <Head title="Business Applications" />
            <div className="min-h-full bg-[#f3f3f3] p-4 md:p-6">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Business Applications</h1>
                        <p className="mt-1 text-sm text-slate-500">Verify local businesses before granting business account access.</p>
                    </div>
                    <div className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold tracking-[0.18em] text-amber-800 uppercase">
                        {pendingCount} pending
                    </div>
                </div>

                <div className="grid gap-4">
                    {applications.length === 0 ? (
                        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
                            No business applications have been submitted.
                        </div>
                    ) : (
                        applications.map((application) => (
                            <article key={application.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                                    <div className="min-w-0 flex-1">
                                        <div className="mb-3 flex flex-wrap items-center gap-2">
                                            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-slate-700 uppercase">
                                                {application.category}
                                            </span>
                                            <span
                                                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] uppercase ${
                                                    application.status === 'approved'
                                                        ? 'bg-emerald-100 text-emerald-700'
                                                        : application.status === 'rejected'
                                                          ? 'bg-red-100 text-red-700'
                                                          : 'bg-amber-100 text-amber-700'
                                                }`}
                                            >
                                                {application.status === 'approved' ? (
                                                    <CheckCircle2 className="h-3 w-3" />
                                                ) : application.status === 'rejected' ? (
                                                    <CircleX className="h-3 w-3" />
                                                ) : (
                                                    <Clock3 className="h-3 w-3" />
                                                )}
                                                {application.status}
                                            </span>
                                        </div>
                                        <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
                                            <Building2 className="h-5 w-5 shrink-0 text-[#173f82]" />
                                            {application.business_name}
                                        </h2>
                                        <p className="mt-1 text-sm text-slate-500">
                                            Applied by {application.applicant_name} on {application.created_at}
                                        </p>

                                        <dl className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                                            <div className="flex gap-2">
                                                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                                <div>
                                                    <dt className="font-medium text-slate-700">Application email</dt>
                                                    <dd>{application.email}</dd>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                                <div>
                                                    <dt className="font-medium text-slate-700">Address</dt>
                                                    <dd>
                                                        {application.address}
                                                        {application.area ? `, ${application.area}` : ''}
                                                    </dd>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                                <div>
                                                    <dt className="font-medium text-slate-700">Phone</dt>
                                                    <dd>{application.phone || 'Not provided'}</dd>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                                <div>
                                                    <dt className="font-medium text-slate-700">Website</dt>
                                                    <dd>{application.website || 'Not provided'}</dd>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <dt className="font-medium text-slate-700">Business description</dt>
                                                <dd className="mt-1 whitespace-pre-wrap">{application.description}</dd>
                                            </div>
                                        </dl>
                                    </div>

                                    {application.status === 'pending' && (
                                        <div className="flex shrink-0 gap-2 lg:flex-col">
                                            <button
                                                type="button"
                                                onClick={() => reviewApplication(application.id, 'approved')}
                                                disabled={processingId !== null}
                                                className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                                            >
                                                {processingId === application.id ? 'Reviewing...' : 'Approve'}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => reviewApplication(application.id, 'rejected')}
                                                disabled={processingId !== null}
                                                className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))
                    )}
                </div>
            </div>
        </AppLayout>
    );
}

import AppLayout from '@/layouts/app-layout';
import { useForm, Head } from '@inertiajs/react';
import { CheckCircle2, CircleX, Clock3, FileText } from 'lucide-react';

type Submission = {
    id: number;
    type: string;
    name: string;
    category: string | null;
    area: string | null;
    address: string | null;
    email: string;
    phone: string | null;
    website: string | null;
    description: string | null;
    status: 'pending' | 'approved' | 'rejected';
    created_at: string;
    submitted_by: string | null;
};

export default function StayDineRequests({ submissions }: { submissions: Submission[] }) {
    const { patch, processing } = useForm({});

    const updateStatus = (submissionId: number, status: Submission['status']) => {
        patch(route('admin.stay-dine-request.update', { submission: submissionId }), {
            data: { status },
        });
    };

    return (
        <AppLayout breadcrumbs={[{ title: 'Stay & Dine Requests', href: '/admin/stay-dine-requests' }]}>
            <Head title="Stay & Dine Requests" />

            <div className="min-h-full bg-[#f3f3f3] p-4 md:p-6">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Stay &amp; Dine Requests</h1>
                        <p className="mt-1 text-sm text-slate-500">Review user-submitted accommodations and restaurants.</p>
                    </div>
                    <div className="rounded-full bg-[#173f82] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                        {submissions.filter((item) => item.status === 'pending').length} pending
                    </div>
                </div>

                <div className="grid gap-4">
                    {submissions.length === 0 ? (
                        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
                            No listing requests submitted yet.
                        </div>
                    ) : (
                        submissions.map((submission) => (
                            <div key={submission.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                                    <div className="flex-1">
                                        <div className="mb-3 flex flex-wrap items-center gap-2">
                                            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                                                {submission.type}
                                            </span>
                                            <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                                                submission.status === 'approved'
                                                    ? 'bg-emerald-100 text-emerald-700'
                                                    : submission.status === 'rejected'
                                                      ? 'bg-red-100 text-red-700'
                                                      : 'bg-amber-100 text-amber-700'
                                            }`}>
                                                {submission.status === 'approved' ? <CheckCircle2 className="h-3 w-3" /> : submission.status === 'rejected' ? <CircleX className="h-3 w-3" /> : <Clock3 className="h-3 w-3" />}
                                                {submission.status}
                                            </span>
                                        </div>

                                        <div className="mb-2 flex items-center gap-2 text-xl font-semibold text-slate-900">
                                            <FileText className="h-4 w-4 text-[#173f82]" />
                                            {submission.name}
                                        </div>

                                        <div className="grid gap-2 text-sm text-slate-600 md:grid-cols-2">
                                            <p><span className="font-medium text-slate-700">Category:</span> {submission.category || 'N/A'}</p>
                                            <p><span className="font-medium text-slate-700">Area:</span> {submission.area || 'N/A'}</p>
                                            <p><span className="font-medium text-slate-700">Address:</span> {submission.address || 'N/A'}</p>
                                            <p><span className="font-medium text-slate-700">Submitted by:</span> {submission.submitted_by || 'Guest'}</p>
                                            <p><span className="font-medium text-slate-700">Email:</span> {submission.email}</p>
                                            <p><span className="font-medium text-slate-700">Phone:</span> {submission.phone || 'N/A'}</p>
                                            <p className="md:col-span-2"><span className="font-medium text-slate-700">Website:</span> {submission.website || 'N/A'}</p>
                                            <p className="md:col-span-2"><span className="font-medium text-slate-700">Description:</span> {submission.description || 'No description provided.'}</p>
                                            <p className="md:col-span-2 text-xs text-slate-400">Requested on {submission.created_at}</p>
                                        </div>
                                    </div>

                                    <div className="flex shrink-0 gap-2 lg:flex-col">
                                        <button
                                            type="button"
                                            onClick={() => updateStatus(submission.id, 'approved')}
                                            disabled={processing || submission.status === 'approved'}
                                            className="rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                                        >
                                            Approve
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => updateStatus(submission.id, 'rejected')}
                                            disabled={processing || submission.status === 'rejected'}
                                            className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                                        >
                                            Deny
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </AppLayout>
    );
}

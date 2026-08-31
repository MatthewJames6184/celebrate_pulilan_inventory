import { Facebook, MapPin, Phone, Share2 } from 'lucide-react';

export default function LocalInformation() {
    return (
        <div className="flex-[2] rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Local Information</p>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-600">Municipality</span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="mb-3 flex items-center gap-2 text-slate-800">
                        <MapPin className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm font-semibold">Municipal Hall</span>
                    </div>
                    <p className="text-sm text-slate-600">Pulilan Municipal Hall</p>
                    <p className="mt-2 text-xs leading-6 text-slate-500">Barangay 1, Pulilan, Bulacan</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="mb-3 flex items-center gap-2 text-slate-800">
                        <Phone className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm font-semibold">Contact</span>
                    </div>
                    <p className="text-sm text-slate-600">(02) 1234-5678</p>
                    <p className="mt-2 text-xs leading-6 text-slate-500">For tourism, permits, and public assistance</p>
                </div>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-3 flex items-center gap-2 text-slate-800">
                    <Share2 className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-semibold">Social</span>
                </div>

                <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                        <Facebook className="h-4 w-4 text-emerald-600" />
                        <span>/PulilanMunicipality</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Share2 className="h-4 w-4 text-emerald-600" />
                        <span>@PulilanGov</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

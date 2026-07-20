export default function LocalInformation() {
    return (
        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">Local Information</p>
            <div className="mt-4 text-sm text-slate-700">
                <p className="mb-2">Municipal Hall</p>
                <p className="text-xs text-slate-500">Address: Pulilan Municipal Hall</p>
                <p className="text-xs text-slate-500">Phone: (02) 1234-5678</p>
                <div className="mt-4">
                    <p className="mb-2">Social</p>
                    <ul className="space-y-2">
                        <li>• Facebook: /PulilanMunicipality</li>
                        <li>• Twitter: @PulilanGov</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

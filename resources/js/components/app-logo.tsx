export default function AppLogo() {
    return (
        <>
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-emerald-200 bg-white p-1 shadow-sm">
                <img src="/images/logo-images/logo-tourism-pulilan.png" alt="Pulilan logo" className="h-full w-full object-contain" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-none font-semibold text-slate-900">Pulilan Portal</span>
            </div>
        </>
    );
}

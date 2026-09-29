export default function PublicFooter() {
    return (
        <footer className="border-t border-white/10 bg-[#0c2b68] text-white">
            <section>
                <div className="mx-auto flex max-w-7xl flex-col justify-center gap-10 px-6 py-12 sm:px-10 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-1">
                            <img
                                src="/images/logo-images/logo-republic-of-the-philippines.png"
                                alt="Republic of the Philippines seal"
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <h4 className="font-bold text-[#f1c75b]">Republic of the Philippines</h4>
                        <p className="max-w-sm text-sm leading-6 text-white/80">All content is in the public domain unless otherwise stated.</p>
                    </div>

                    <div className="grid max-w-sm gap-2 text-sm">
                        <h3 className="text-sm font-bold text-[#f1c75b] uppercase">About GOVPH</h3>
                        <p className="text-white/45">
                            Learn more about the Philippine government, its structure, how government works and the people behind it.
                        </p>
                        <a href="https://www.gov.ph/" target="_blank" rel="noreferrer" className="text-white/75 hover:text-[#f1c75b]">
                            Official Gazette
                        </a>
                        <a href="https://data.gov.ph/index/home" target="_blank" rel="noreferrer" className="text-white/75 hover:text-[#f1c75b]">
                            Open data portal
                        </a>
                        <a href="https://www.gov.ph/feedback" target="_blank" rel="noreferrer" className="text-white/75 hover:text-[#f1c75b]">
                            Send us your feedback
                        </a>
                    </div>

                    <div className="grid gap-1 text-sm">
                        <h3 className="text-sm font-semibold tracking-[0.18em] text-[#f1c75b] uppercase">Government Links</h3>
                        <a href="https://president.gov.ph/" target="_blank" rel="noreferrer" className="text-white/75 hover:text-[#f1c75b]">
                            Office of the President
                        </a>
                        <a href="https://www.ovp.gov.ph/" target="_blank" rel="noreferrer" className="text-white/75 hover:text-[#f1c75b]">
                            Office of the Vice President
                        </a>
                        <a href="https://senate.gov.ph/" target="_blank" rel="noreferrer" className="text-white/75 hover:text-[#f1c75b]">
                            Senate of the Philippines
                        </a>
                        <a href="https://www.congress.gov.ph/" target="_blank" rel="noreferrer" className="text-white/75 hover:text-[#f1c75b]">
                            House of Representatives
                        </a>
                        <a href="https://sc.judiciary.gov.ph/" target="_blank" rel="noreferrer" className="text-white/75 hover:text-[#f1c75b]">
                            Supreme Court
                        </a>
                        <a href="https://ca.judiciary.gov.ph/" target="_blank" rel="noreferrer" className="text-white/75 hover:text-[#f1c75b]">
                            Court of Appeals
                        </a>
                        <a href="https://sb.judiciary.gov.ph/" target="_blank" rel="noreferrer" className="text-white/75 hover:text-[#f1c75b]">
                            Sandiganbayan
                        </a>
                    </div>
                </div>
            </section>
            <div className="border-t border-white/10 bg-[#082250] px-4 py-4 text-sm text-white/70 md:px-6">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <p>© Copyright 2026. James Matthew Arias. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

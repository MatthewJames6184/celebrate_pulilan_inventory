import { Link } from '@inertiajs/react';

export default function PublicFooter() {
    return (
        <footer className="border-t border-slate-200 bg-[#bebebe] text-slate-700 ">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6 bg-[#bebebe]">
                <div className="space-y-3">
                    <div className="logo-container">
                       <img src ="/images/logo-images/logo-republic-of-the-philippines.png" alt='logo-republic' className="logo-img" /> 
                    </div>
                    <h4 className="font-bold text-[#333]">
                        Republic of the Philippines
                    </h4>
                    <p className="max-w-sm text-sm leading-6 text-[#333]">
                       All content is in the public domain unless otherwise stated.
                    </p>
                </div>

                <div className="grid gap-2 text-sm">
                    <h3 className="text-sm font-bold text-[#333] uppercase text-slate-900">About GOVPH</h3>
                    <p>Learn more about the Philippine government, its structure, how government works and the people behind it.</p>
                    <a href="https://www.gov.ph/" target="_blank" className="text-slate-600 hover:text-slate-900">
                        Official Gazette
                    </a>
                    <a href="https://data.gov.ph/index/home" target="_blank" className="text-slate-600 hover:text-slate-900">
                        Open data portal
                    </a >
                    <a href="https://www.gov.ph/feedback" target="_blank" className="text-slate-600 hover:text-slate-900">
                        Send us your feedback
                    </a >
                </div>

                <div className="grid gap-1 text-sm">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">Government Links</h3>
                    <a href="https://president.gov.ph/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900">
                        Office of the President
                    </a>
                    <a href="https://www.ovp.gov.ph/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900">
                        Office of the Vice President
                    </a>
                    <a href="https://senate.gov.ph/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900">
                        Senate of the Philippines 
                    </a>
                    <a href="https://www.congress.gov.ph/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900">
                        House of Representatives 
                        </a>
                    <a href="https://sc.judiciary.gov.ph/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900">
                        Supreme Court
                        </a>
                    <a href="https://ca.judiciary.gov.ph/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900">
                        Court of Appeals
                        </a>
                    <a href="https://sb.judiciary.gov.ph/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900">
                        Sandiganbayan
                        </a>
                </div>
            </div>

            <div className="border-t border-slate-200 bg-slate-200 px-4 py-4 text-sm text-slate-600 md:px-6">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <p>© Copyright 2026. James Matthew Arias. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

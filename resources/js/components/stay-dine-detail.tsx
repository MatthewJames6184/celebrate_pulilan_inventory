import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from '@inertiajs/react';

type StayDineDetailProps = {
    name: string;
    category?: string;
    area?: string;
    address?: string;
    summary?: string;
    highlights?: string[];
    hours?: string[];
    phone?: string;
    website?: string;
};

export default function StayDineDetail({
    name,
    category,
    area,
    address,
    summary,
    highlights = [],
    hours = [],
    phone,
    website,
}: StayDineDetailProps) {
    const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address ?? name)}&output=embed`;

    return (
        <div className="mx-auto w-full max-w-4xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl font-semibold text-slate-900">{name}</h1>
                            {category ? (
                                <span className="rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold uppercase text-white">{category}</span>
                            ) : null}
                        </div>

                        {area ? <p className="mt-2 text-sm text-slate-600">{area}</p> : null}

                        {address ? (
                            <div className="mt-3 flex items-start gap-2 text-sm text-slate-600">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                                <span>{address}</span>
                            </div>
                        ) : null}

                        {summary ? <p className="mt-4 text-sm leading-7 text-slate-600">{summary}</p> : null}

                        <div className="mt-4 flex flex-wrap gap-2">
                            {highlights.map((h) => (
                                <span key={h} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                                    {h}
                                </span>
                            ))}
                        </div>

                        <div className="mt-6 space-y-2 text-sm">
                            {phone ? (
                                <div>
                                    <div className="font-medium text-slate-800">Contact</div>
                                    <div className="text-slate-600">{phone}</div>
                                </div>
                            ) : null}

                            {website ? (
                                <div>
                                    <div className="font-medium text-slate-800">Website</div>
                                    <div className="text-slate-600">{website}</div>
                                </div>
                            ) : null}
                        </div>

                        <div className="mt-6 flex items-center gap-3">
                            <Link href={route('stay.dine')} className="text-sm text-emerald-700 hover:underline">
                                Back to listings
                            </Link>
                        </div>
                    </div>

                    <div className="w-96 shrink-0">
                        <div className="h-64 w-full overflow-hidden rounded-xl border border-slate-200">
                            <iframe title="map" className="h-full w-full" src={mapSrc} />
                        </div>

                        {hours.length > 0 ? (
                            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm">
                                <div className="text-xs font-semibold uppercase text-slate-600">Opening hours</div>
                                <ul className="mt-2 space-y-1">
                                    {hours.map((h) => (
                                        <li key={h} className="text-slate-700">
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

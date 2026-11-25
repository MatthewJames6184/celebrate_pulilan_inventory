import StayDineDirectoryPage, { type DirectoryItem } from '@/components/stay-dine-directory';
import { accommodationsSeed } from '@/lib/stay-dine-listings';
import { usePage } from '@inertiajs/react';

export default function StayDineAccommodations() {
    const { approvedListings = [] } = usePage<{ approvedListings?: DirectoryItem[] }>().props;
    const accommodations = [...approvedListings, ...accommodationsSeed];

    return (
        <StayDineDirectoryPage
            headTitle="Pulilan Accommodations"
            eyebrow="Where to Stay and Dine"
            title="Accommodations in Pulilan"
            intro="Accommodations, resorts, and practical overnight stays."
            imageSubHeader={{ src: '/images/other-images/stay-dine-resort.jpg', alt: 'Pulilan resort stays' }}
            breadcrumbs={[{ label: 'Where to Stay and Dine' }, { label: 'Accommodations' }]}
            stats={[
                { value: String(accommodations.length), label: 'Directory listings' },
                { value: '5', label: 'Stay categories' },
                { value: '19', label: 'Barangays in Pulilan' },
            ]}
            items={accommodations}
            type="accommodations"
            defaultView="grid"
            focusLabel="Stay guide"
            focusNote="This page is designed like a directory first: start with search, narrow by category or area, then browse the alphabetical index if you already know the name."
        />
    );
}

import { Head, usePage } from '@inertiajs/react';
import PublicTopicPage from '@/components/public-topic-page';
import StayDineDetail from '@/components/stay-dine-detail';

export default function StayDineListingDetail() {
    const { props } = usePage();
    // server returns type and slug; in future server can include the full listing data
    const { type, slug } = props;

    // For now show placeholder / derived details. A server-backed implementation would
    // return the real listing data for the requested type+slug.
    const name = slug.replace(/-/g, ' ');
    const sampleAddress = `${name}, Pulilan, Bulacan`;

    const sampleData = {
        name: name.split(' ').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
        category: type === 'restaurants' ? 'Restaurant' : type === 'accommodations' ? 'Accomodation' : undefined,
        area: 'Poblacion',
        address: sampleAddress,
        summary:
            'Details for this listing are not yet connected to a central data source. This page demonstrates the detail view, including a map and opening hours. Connect your backend to return real listing details for full functionality.',
        highlights: ['Sample highlight 1', 'Sample highlight 2', 'Sample highlight 3'],
        hours: ['Mon-Fri: 8:00 AM – 6:00 PM', 'Sat: 9:00 AM – 4:00 PM', 'Sun: Closed'],
        phone: '+63 917 000 0000',
        website: undefined,
    };

    return (
        <PublicTopicPage
            headTitle={`${sampleData.name} — Listing`}
            title={sampleData.name}
            imageSubHeader={{ src: '/images/image-1.jpg', alt: sampleData.name }}
            breadcrumbs={[
                { label: 'Where to Stay and Dine' },
                { label: type === 'restaurants' ? 'Restaurants' : 'Accommodations', href: route(`stay.dine.${type}`) },
                { label: sampleData.name },
            ]}
        >
            <Head title={`${sampleData.name} — Details`} />

            <StayDineDetail {...sampleData} />
        </PublicTopicPage>
    );
}

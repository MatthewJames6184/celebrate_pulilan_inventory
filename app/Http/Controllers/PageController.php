<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('home');
    }

    public function about(): Response
    {
        return Inertia::render('about');
    }

    public function attraction(): Response
    {
        return Inertia::render('about/attraction');
    }

    public function history(): Response
    {
        return Inertia::render('about/history');
    }

    public function festivals(): Response
    {
        return Inertia::render('about/festivals');
    }

    public function detail(string $topic, string $slug): Response
    {
        return Inertia::render('about/detail', [
            'topic' => $topic,
            'slug' => $slug,
        ]);
    }

    public function stayDine(): Response
    {
        return Inertia::render('stay-dine');
    }

    public function stayDineAccommodations(): Response
    {
        return Inertia::render('stay-dine/accommodations');
    }

    public function stayDineRestaurants(): Response
    {
        return Inertia::render('stay-dine/restaurants');
    }

    public function stayDineDetail(string $type, string $slug): Response
    {
        // Server-side can later resolve the real listing by type+slug from DB.
        // For now return the type and slug so the page can render details and map by address.
        return Inertia::render('stay-dine/detail', [
            'type' => $type,
            'slug' => $slug,
        ]);
    }

    public function contact(): Response
    {
        return Inertia::render('contact');
    }

    public function others(): Response
    {
        return Inertia::render('others');
    }

    public function othersDownloads(): Response
    {
        return Inertia::render('others/downloads');
    }

    public function othersFaq(): Response
    {
        return Inertia::render('others/faq');
    }

    public function othersNews(): Response
    {
        return Inertia::render('news/archive');
    }

    public function newsArchive(): Response
    {
        return Inertia::render('news/archive');
    }

    public function newsShow(string $slug): Response
    {
        return Inertia::render('news/show', [
            'slug' => $slug,
        ]);
    }

    public function othersSiteMap(): Response
    {
        return Inertia::render('others/site-map');
    }

    public function othersAnnouncements(): Response
    {
        return Inertia::render('others/announcements');
    }

    public function othersCalendarOfEvents(): Response
    {
        return Inertia::render('others/calendar-of-events');
    }

    public function othersPhotoGallery(): Response
    {
        return Inertia::render('others/photo-gallery');
    }
}

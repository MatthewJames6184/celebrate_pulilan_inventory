<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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

    public function education(): Response
    {
        return Inertia::render('about/education');
    }

    public function history(): Response
    {
        return Inertia::render('about/history');
    }

    public function health(): Response
    {
        return Inertia::render('about/health');
    }

    public function cuisine(): Response
    {
        return Inertia::render('about/cuisine');
    }

    public function festivals(): Response
    {
        return Inertia::render('about/festivals');
    }

    public function heritage(): Response
    {
        return Inertia::render('about/heritage');
    }

    public function historical(): Response
    {
        return Inertia::render('about/historical');
    }

    public function localProducts(): Response
    {
        return Inertia::render('about/local-products');
    }

    public function mapLocation(): Response
    {
        return Inertia::render('about/map-location');
    }

    public function missionVision(): Response
    {
        return Inertia::render('about/mission-vision');
    }

    public function religious(): Response
    {
        return Inertia::render('about/religious');
    }

    public function resorts(): Response
    {
        return Inertia::render('about/resorts');
    }

    public function shopping(): Response
    {
        return Inertia::render('about/shopping');
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
        return Inertia::render('others/news');
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

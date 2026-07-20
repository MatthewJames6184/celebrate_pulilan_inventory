<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

test('stay dine subpages are registered', function (string $routeName, string $controllerMethod, string $componentPath) {
    expect(Route::has($routeName))->toBeTrue();
    expect(route($routeName, [], false))->toContain('/stay-dine/');
    expect(method_exists(PageController::class, $controllerMethod))->toBeTrue();
    expect(file_exists(resource_path("js/pages/{$componentPath}.tsx")))->toBeTrue();
})->with([
    ['stay.dine.accommodations', 'stayDineAccommodations', 'stay-dine/accommodations'],
    ['stay.dine.restaurants', 'stayDineRestaurants', 'stay-dine/restaurants'],
]);

test('others subpages are registered', function (string $routeName, string $controllerMethod, string $componentPath) {
    expect(Route::has($routeName))->toBeTrue();
    expect(route($routeName, [], false))->toContain('/others/');
    expect(method_exists(PageController::class, $controllerMethod))->toBeTrue();
    expect(file_exists(resource_path("js/pages/{$componentPath}.tsx")))->toBeTrue();
})->with([
    ['others.downloads', 'othersDownloads', 'others/downloads'],
    ['others.faq', 'othersFaq', 'others/faq'],
    ['others.news', 'othersNews', 'others/news'],
    ['others.site-map', 'othersSiteMap', 'others/site-map'],
    ['others.announcements', 'othersAnnouncements', 'others/announcements'],
    ['others.calendar-of-events', 'othersCalendarOfEvents', 'others/calendar-of-events'],
    ['others.photo-gallery', 'othersPhotoGallery', 'others/photo-gallery'],
]);

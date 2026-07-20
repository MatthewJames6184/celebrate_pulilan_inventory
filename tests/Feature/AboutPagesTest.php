<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

test('about subpages are registered', function (string $routeName, string $controllerMethod, string $componentPath) {
    expect(Route::has($routeName))->toBeTrue();
    expect(route($routeName, [], false))->toContain('/about/');
    expect(method_exists(PageController::class, $controllerMethod))->toBeTrue();
    expect(file_exists(resource_path("js/pages/{$componentPath}.tsx")))->toBeTrue();
})->with([
    ['about.attraction', 'attraction', 'about/attraction'],
    ['about.education', 'education', 'about/education'],
    ['about.history', 'history', 'about/history'],
    ['about.health', 'health', 'about/health'],
    ['about.cuisine', 'cuisine', 'about/cuisine'],
    ['about.festivals', 'festivals', 'about/festivals'],
    ['about.heritage', 'heritage', 'about/heritage'],
    ['about.historical', 'historical', 'about/historical'],
    ['about.local-products', 'localProducts', 'about/local-products'],
    ['about.map-location', 'mapLocation', 'about/map-location'],
    ['about.mission-vision', 'missionVision', 'about/mission-vision'],
    ['about.religious', 'religious', 'about/religious'],
    ['about.resorts', 'resorts', 'about/resorts'],
    ['about.shopping', 'shopping', 'about/shopping'],
]);

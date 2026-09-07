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
    ['about.history', 'history', 'about/history'],
    ['about.festivals', 'festivals', 'about/festivals'],
]);

test('about detail page route is registered', function () {
    expect(Route::has('about.detail'))->toBeTrue();
    expect(route('about.detail', ['topic' => 'shopping', 'slug' => 'robinson-pulilan'], false))->toContain('/about/shopping/');
    expect(method_exists(PageController::class, 'detail'))->toBeTrue();
    expect(file_exists(resource_path('js/pages/about/detail.tsx')))->toBeTrue();
});

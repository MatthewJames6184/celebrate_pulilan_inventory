<?php

use Illuminate\Support\Facades\Schema;

it('loads stay and dine pages even when the submissions table is missing', function () {
    Schema::dropIfExists('stay_dine_submissions');

    $this->get(route('stay.dine.accommodations'))->assertOk();
    $this->get(route('stay.dine.restaurants'))->assertOk();
});

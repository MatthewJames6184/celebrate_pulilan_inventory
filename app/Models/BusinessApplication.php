<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class BusinessApplication extends Model
{
    protected $attributes = [
        'status' => 'pending',
    ];

    protected $fillable = [
        'user_id',
        'business_name',
        'category',
        'business_type',
        'area',
        'address',
        'email',
        'phone',
        'website',
        'description',
        'status',
        'reviewed_by',
        'reviewed_by_admin_id',
        'reviewed_at',
    ];

    protected function casts(): array
    {
        return [
            'reviewed_at' => 'datetime',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function reviewer(): BelongsTo
    {
        return $this->belongsTo(Admin::class, 'reviewed_by_admin_id');
    }

    public function stayDineSubmission(): HasOne
    {
        return $this->hasOne(StayDineSubmission::class);
    }
}

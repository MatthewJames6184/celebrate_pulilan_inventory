<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Admin extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function businessApplicationsReviewed(): HasMany
    {
        return $this->hasMany(BusinessApplication::class, 'reviewed_by_admin_id');
    }

    public function stayDineSubmissionsReviewed(): HasMany
    {
        return $this->hasMany(StayDineSubmission::class, 'reviewed_by_admin_id');
    }
}

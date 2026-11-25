<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class BusinessApplicationApproved extends Notification
{
    use Queueable;

    public function __construct(public string $businessName) {}

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Your Pulilan business application was approved')
            ->greeting('Good news!')
            ->line("Your application for {$this->businessName} has been approved.")
            ->line('Your account now has business access. Submit your business details so the admin can review your directory listing.')
            ->action('Add your business listing', route('stay.dine.submit-listing'));
    }
}

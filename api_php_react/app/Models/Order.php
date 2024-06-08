<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        "name",
        "status",
        "location_id",
        "total_price",
        "date of delivery",
        'user_id'
    ];
    public function location()
    {
        return $this->belongsTo(Location::class, 'location_id');
    }
    public function items()
    {
        return $this->hasmany(OrderItem::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}

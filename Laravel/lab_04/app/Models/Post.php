<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Storage;
use App\Models\User;
use App\Models\Comment;

class Post extends Model
{
    use SoftDeletes;
    use HasFactory;

    protected $fillable = ['title', 'content', 'user_id', 'image'];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function comments() {
        return $this->hasMany(Comment::class);
    }

    public function setImageAttribute($value)
    {
        if ($value && is_file($value)) {
            if ($this->image && Storage::disk('public')->exists($this->image)) {
                Storage::disk('public')->delete($this->image);
            }
            $this->attributes['image'] = $value->store('posts', 'public');
        } elseif ($value) {
            $this->attributes['image'] = $value;
        }
    }

    protected static function booted(): void
    {
        static::deleting(function (Post $post) {
            if ($post->image && Storage::disk('public')->exists($post->image)) {
                Storage::disk('public')->delete($post->image);
            }
        });
    }
}

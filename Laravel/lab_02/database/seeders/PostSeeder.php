<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Post;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Post::create([
        //     'title' => 'First Post',
        //     'content' => 'This is the first post content'
        // ]);

        // Post::create([
        //     'title' => 'second post',
        //     'content' => "Content of second post"
        // ]);

        Post::factory(20)->create();
    }
}

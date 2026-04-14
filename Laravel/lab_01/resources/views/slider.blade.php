@extends('home')

@section('PageTitle')
    Slider Page
@endsection

@section('content')
<div class="d-flex justify-content-center"> <!-- This centers the carousel horizontally -->
    <div id="carouselExample" class="carousel slide" style="width: 400px; height: 400px;">
        <div class="carousel-inner h-100">
            <div class="carousel-item active h-100">            
                <img src="{{ asset('storage/images/zamalek.jpg') }}" class="d-block w-100 h-100" style="object-fit: cover;" alt="Zamalek">
            </div>

            <div class="carousel-item h-100">
                <img src="{{ asset('storage/images/notion.webp') }}" class="d-block w-100 h-100" style="object-fit: cover;" alt="Notion">
            </div>

            <div class="carousel-item h-100">
                <img src="{{ asset('storage/images/women.png') }}" class="d-block w-100 h-100" style="object-fit: cover;" alt="Women">
            </div>
        </div>
        
        <!-- Controls -->
        <button class="carousel-control-prev bg-danger" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next bg-danger" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>
@endsection
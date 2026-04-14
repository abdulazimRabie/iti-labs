@extends('home')

@section('PageTitle')
    Posts
@endsection

@section('content')
    {{-- @dd($posts); --}}


    <div class='w-75 m-auto pt-5'>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Ttile</th>
                    <th scope="col">Body</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            <tbody>
    
            @foreach ($posts as $post)
                <tr>
                    
                    <td>{{ $post['title'] }}</td>
                    <td>{{ $post['body'] }}</td>
                    <td>
                        <a class="btn btn-danger" href='/posts/{{$loop->index}}'>Show</a>
                    </td>
                </tr>
            @endforeach
                
            </tbody>
        </table>
    </div>
@endsection
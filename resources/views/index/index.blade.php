@extends('layouts.main', ['title' => 'Index page'])

@section('content')

    <div id="app"></div>

    <script src={{ mix('/js/index.js') }}></script>
    
@endsection
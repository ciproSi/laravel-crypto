@extends('layouts.map-main', ['title' => 'Creating new route'])

@section('content')
    
    <div id="root"></div>
    <script src={{ mix('/js/ol-map-index.js') }}></script>  

@endsection
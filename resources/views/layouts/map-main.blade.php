<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content={{ csrf_token() }}>
    <link rel="stylesheet" href={{ mix('/css/app.css') }}>
    <title>{{ $title ?? '' }} Trek4Dog</title>
</head>
<body>
    <div class="page-container">
        @yield('content')
    </div>

</body>
</html>
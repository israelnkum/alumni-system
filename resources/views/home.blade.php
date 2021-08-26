<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'ALUMINI-SYSTEM') }}</title>

    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('/css/alumini-system.css')}}">
</head>
<body class="antialiased">
@auth
    <div id="root"></div>
    <script src="{{asset('/js/app.js')}}"></script>
@endauth
</body>
</html>

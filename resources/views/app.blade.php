<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Zuri Chat | Expenses</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

       

        <!-- Styles -->
        <style>
            .table-head{
                background-color:#00B87C;
                color:white;
            }
        </style>
    </head>
    <body class="alert-secondary py-2">
        <div class="container-fluid">
            <div id="root">
                
            </div>
        </div>
    </body>
    
    <!-- Scripts -->
    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>

</html>

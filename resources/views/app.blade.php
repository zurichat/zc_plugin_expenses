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
        <link href="{{ asset('css/style.css') }}" rel="stylesheet">
       

        <!-- Styles -->
        <style>
            .table-head{
                background-color:#00B87C;
                color:white;
            }
            .loader {
                border: 5px solid #f3f3f3;
                border-radius: 50%;
                border-top: 5px solid #00B87C;
                width: 50px;
                height: 50px;
                -webkit-animation: spin 2s linear infinite; /* Safari */
                animation: spin 2s linear infinite;
            }

            /* Safari */
            @-webkit-keyframes spin {
                0% { -webkit-transform: rotate(0deg); }
                100% { -webkit-transform: rotate(360deg); }
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            .navbar{
                background-color:#00B87C; 
                color:white;
            }
        </style>
    </head>
    <body>
        <div id="root">
            
        </div>
    </body>
    
    <!-- Scripts -->
    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>

</html>

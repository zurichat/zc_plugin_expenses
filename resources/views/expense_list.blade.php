<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       
        <link rel="stylesheet" href="{{asset('css/app.css')}}" />
        <link rel="stylesheet" href="{{asset('css/style/style.css')}}" />
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <title>Table</title>
    <style>

    </style>
    </head>
    <body>
        <div class="container">
            <div class="row justify-content-center">
            <div class="col-md-8">
            <table class="table top-146">
                <thead>
                    <tr>
                        <th scope="col">S/N</th>
                        <th scope="col">NAME</th>
                        <th scope="col">ITEMS</th>
                        <th scope="col">PRICE($)</th>
                        <th scope="col">STATUS</th>
                    </tr>
                </thead>
            </table>
        </div>
        </div>
        </div>
    </body>
</html>

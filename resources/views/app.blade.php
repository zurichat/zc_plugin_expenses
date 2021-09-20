<!doctype html>
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
            <title>Zuri Chat |Expenses</title>
            <script src="https://cdn.jsdelivr.net/npm/regenerator-runtime@0.13.7/runtime.min.js"></script>
            <meta name="importmap-type" content="systemjs-importmap"/>
            <script type="systemjs-importmap">
                {
                "imports": {
                    "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js",
                    "react": "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js",
                    "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js",
                    "@zuri/zuri-plugin-expenses":"{{asset('js/zuri-zuri-plugin-expenses.js')}}"
                    }
                }
            </script>
            <link rel="preload" href="https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js" as="script">
            <script src="https://cdn.jsdelivr.net/npm/import-map-overrides@2.2.0/dist/import-map-overrides.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/systemjs@6.8.3/dist/system.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/systemjs@6.8.3/dist/extras/amd.min.js"></script>
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
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <main></main>
            <script src="{{asset('js/zuri-root-config.js')}}">System.import('@zuri/root-config');</script>
            <import-map-overrides-full show-when-local-storage="devtools" dev-libs></import-map-overrides-full>
        </body>
        </html>
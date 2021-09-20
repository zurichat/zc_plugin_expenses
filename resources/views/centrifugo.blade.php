<html>
    <head>
        <title>Centrifugo quick start</title>
    </head>
    <body>
        <div id="counter">-</div>
        <script src="https://cdn.jsdelivr.net/gh/centrifugal/centrifuge-js@2.8.0/dist/centrifuge.min.js"></script>
        <script type="text/javascript">
            const container = document.getElementById('counter')
            const centrifuge = new Centrifuge("ws://localhost:9000/connection/websocket");
            centrifuge.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM3MjIiLCJleHAiOjE2MzI1MjU0Mzl9.SSPPrary1GU-Cm1Iz2Oh0jueIdVuiUl2jYOhncFmEZY");
            
            centrifuge.on('connect', function(ctx) {
                console.log("connected", ctx);
            });

            centrifuge.on('disconnect', function(ctx) {
                console.log("disconnected", ctx);
            });

            centrifuge.subscribe("anything", function(ctx) {
                container.innerHTML = ctx.data.value;
                document.title = ctx.data.value;
            });

            centrifuge.connect();
        </script>
    </body>
</html>
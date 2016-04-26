var net = require("net");

var port = 8000;

var server = net.createServer(function(socket){
    console.log("Connected " + socket.remoteAddress + ":" + socket.remotePort);
    socket.on('data', function(data){
        var request = String(data)
        var response = request.toLowerCase()
        process.stdout.write(request);
        socket.write(response);
    });
    socket.on("close", function(){
        console.log("Connection closed");
    });
    socket.on("error", function(err){
        console.log("Connection error");
    });
});

server.listen(port);
console.log("Listening on port: " + port);

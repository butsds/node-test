var dgram = require('dgram');
var server = dgram.createSocket("udp4");

var PORT = 8000;
var HOST = '127.0.0.1';

server.on("error", function(err){
    console.log("Server error");
    console.log(err);
});

server.on("message", function(message, info){
    //console.log("Server got message: " + message + " from: " + info.address + ":" + info.port);
    process.stdout.write(message);
});

server.on("listening", function(){
    var address = server.address();
    console.log("Server listening " + address.address + ":" + address.port);
});


server.bind(PORT, HOST);

//console.log("Listening UDP: " + port);


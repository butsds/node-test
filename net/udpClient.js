
var dgram = require('dgram');
var client = dgram.createSocket("udp4");

var PORT = 8000;
var HOST = '127.0.0.1';
//var HOST = 'localhost';

client.on("error", function(err){
    console.log("Client error");
    console.log(err);
});
/*
client.on("message", function(message, info){
    console.log("Client got message: " + message + " from: " + info.address + ":" + info.port);
});*/

var message = new Buffer("Test message");

client.send(message, 0, message.length, PORT, HOST, function(err, bytes){
    if (err) throw err;
    //process.stdout.write(message)
    console.log("UDP message send to " + HOST + ":" + PORT);
    //client.close();
});

var Writable = require("stream").Writable,
    stream = new Writable();

stream._write = function(chunk, enc, next) {
    client.send(chunk, 0, chunk.length, PORT, HOST, function(err, bytes){
        if (err) throw err;
        //console.log("UDP message send to " + HOST + ":" + PORT);
    });
    next();
}

process.stdin
    .pipe(stream)

//console.log(client);
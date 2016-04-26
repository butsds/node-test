var http = require('http');

PORT = 8000;

var server = http.createServer(function(req, res){
    //console.log(req.headers);
    console.log(req.url);
    
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    //res.write("Hello http!");
    res.end("Hello http!");
    //res.end();
});

server.listen(PORT);
console.log("Listen on port " + PORT);
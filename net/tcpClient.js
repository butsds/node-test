var net = require("net");

var client = new net.Socket();

client.connect(8000, '127.0.0.1', function(){
    console.log('Connected');
    client.write("Hello Server!");
});

client.on("error", function(){
    console.log("Connection error");
});

client.on("data", function(data){
    //console.log("Recieved data: " + data);
    
    //client.destroy();
});

process.stdin
    .pipe(client)
    .pipe(process.stdout)
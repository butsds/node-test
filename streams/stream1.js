var Readable = require("stream").Readable,
    Transform = require("stream").Transform,
    stream = new Readable();
    
    
var data = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
Laudantium, iure tempore quibusdam asperiores nostrum quo quos \
commodi omnis cumque! Quae, voluptatibus, autem consequuntur deleniti \
officia dolores voluptatum praesentium recusandae! Obcaecati, exercitationem, \
vitae voluptatibus possimus voluptate ipsam nihil repellat commodi? Necessitatibus \
repellat in facere deserunt iure deleniti qui iusto nulla natus.".split('');
      
//console.log(data);
/*
stream._read = function() {
    if (data.length) {
        
        var timeout = Math.random() * 1000;
        
        setTimeout(function(){
            stream.push(data.shift() + ' ');
        }, timeout);
        
    } else {
        stream.push(null);
    }
}*/
stream._read = function() {
    if (data.length) {
        
        var timeout = Math.random() * 300;
        
        setTimeout(function(){
            stream.push(data.shift());
        }, timeout);
        
    } else {
        stream.push(null);
    }
}

var transform = new Transform();

var word = "";

transform._transform = function(chunk, enc, callback) {
    var string = String(chunk).toUpperCase();
    if (string == " ") {
        this.push(" - Длинна слова: (" + word.length + ")\r\n");
        word = "";
    } else {
        this.push(string);
        word += string;
    }
    
    callback();
}

stream
    .pipe(transform)
    .pipe(process.stdout);


// node main.js | node transform.js



















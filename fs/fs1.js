var fs = require('fs');

var filename = "text.txt";
var content = "Текстовое содержимое";

fs.writeFile(filename, content, function(err){
    if (err) throw err;
});

fs.appendFile(filename, "\r\n" + content, function(err){
    if (err) throw err;
});

//var contentFile = fs.readFile(filename, {encoding: "utf-8"}, function(err, data){
fs.readFile(filename, 'utf-8', function(err, data){
    if (err) throw err;
    //console.log(String(data));
    console.log(data);
});


// синхронный
try {
    var contentFile = fs.readFileSync("adf", 'utf-8'); // нет коллбэков
} catch(err) {
    contentFile = "Ошибка";
}


console.log(contentFile);
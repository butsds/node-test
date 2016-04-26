var fs = require('fs');
var path = require('path');

var scriptName = path.basename(__filename);

var currentFile = process.argv[1];

//console.log(path);

console.log("Текущий скрипт: " + scriptName);

console.log("Расширение: " + path.extname(scriptName));

console.log("Имя файла без расширения: " + path.basename(__filename, path.extname(scriptName)));

console.log("Текущий путь: " + currentFile);

console.log("__filename: " + __filename);

console.log("__dirname: " + __dirname);

console.log("cwd: " + process.cwd());

// all files
fs.readdir(__dirname, function(err, files){
    
    if (err) throw err;
    
    files.forEach(function(file, index){
        console.log(file);
    });
    
});
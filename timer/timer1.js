var counter = 0;

var args = global.process.argv;
args = args.slice(2);

var interval = isNaN(args[0]) ? 1000 : args[0];
var message = args[1] || "Строка ";


setInterval(function(){
    console.log(message + " " + counter);
    counter++;
}, interval);


console.log(args);
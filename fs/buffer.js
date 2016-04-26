var buffer = new Buffer('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, corporis.', 'utf8');

//console.log(buffer);

[].slice.call(buffer).forEach(function(value, index){
    //console.log(('00000000' + value.toString(2)).slice(-8));
    process.stdout.write(('00000000' + value.toString(2)).slice(-8) + "  ");
});

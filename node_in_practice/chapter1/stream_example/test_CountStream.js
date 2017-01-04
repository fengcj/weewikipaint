var CountStream = require('./CountStream');
var countStream = new CountStream('book');
//var http = require('http');
var fs = require('fs');

/*http.get('http://www.manning.com',function(res){
	res.pipe(countStream);
})*/

fs.createReadStream('./CountStream.js').pipe(countStream);

countStream.on('total',function(count){
	console.log('Total Count is',count);
})


process.on('exit',function(){
	console.log('test is passed');
})



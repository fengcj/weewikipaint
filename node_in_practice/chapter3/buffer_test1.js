'use strict';
var fs = require('fs');
fs.readFile(__filename,function(err,data){
	console.log(data);
	console.log(Buffer.isBuffer(data));
	console.log(data.toString());
});
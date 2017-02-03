'use strict';
var EventEmitter = require('events').EventEmitter;
var fs = require('fs');
var content;

function readFileIfRequired(cb){
	if(!content){
		fs.readFile(__filename,'utf-8',function(err,data){
			content = data;
			console.log('readFileIfRequired: readFile');
			cb(err,content);
		});
	}else{
		process.nextTick(function(){
			console.log('readFileIfRequired: cached');
			cb(null,content);
		});
	}

}

readFileIfRequired(function(err,data){
	console.log('1.length',data.length);
	readFileIfRequired(function(err,data){
		console.log('2.length',data.length);
	});
	console.log('Reading File again...');
});

console.log('Reading file...');
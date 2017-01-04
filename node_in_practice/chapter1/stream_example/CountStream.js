'use strict';
var util = require('util');
var Writable = require('stream').Writable;

module.exports = CountStream;

util.inherits(CountStream,Writable);


function CountStream(matchText, options){
	Writable.call(this,options);
	this.count = 0;
	this.matcher = new RegExp(matchText,'ig');
}

// mus be overwrite
CountStream.prototype._write = function(chunk, encoding, cb){
	var matches = chunk.toString().match(this.matcher);
	if(matches){
		this.count += matches.length;
	}
	cb();
}

CountStream.prototype.end = function(){
	this.emit('total',this.count);
}

// book  
// book2
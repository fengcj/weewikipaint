'use strict';
var EventEmitter = require('events').EventEmitter;
var util = require('util');
function Pulsar(speed, times){
	EventEmitter.call(this);
	this.speed = speed;
	this.times= times;
	//  var self = this;
	this.on('newListener',function(name,listener){
		if(name === 'pulse'){
			console.log(this);
			this.start();  // self.start();
		}
	})


}
util.inherits(Pulsar,EventEmitter);

Pulsar.prototype.start = function(){
	var self = this;
	var id = setInterval(function(){
		console.log(this);
		self.emit('pulse');
		self.times--;
		if(self.times === 0){
			clearInterval(id);
		}
	},self.speed);

}


var pulsar = new Pulsar(500,5);
pulsar.on('pulse',function(){
	console.log('.');
})




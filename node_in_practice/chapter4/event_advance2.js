'use strict';
var EventEmitter = require('events').EventEmitter;
var util = require('util');
function Pulsar(speed, times){
	EventEmitter.call(this);
	this.speed = speed;
	this.times= times;
	var self = this;
	this.on('newListener',function(name,listener){
		if(name === 'pulse'){
			var id = setInterval(function(){
				self.emit('pulse');
				self.times--;
				if(self.times === 0){
					clearInterval(id);
				}
			},self.speed);
		}
	})


}
util.inherits(Pulsar,EventEmitter);

var pulsar = new Pulsar(500,5);
pulsar.on('pulse',function(){
	console.log('.');
})




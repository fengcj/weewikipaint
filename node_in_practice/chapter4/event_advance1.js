'use strict';
var EventEmitter = require('events').EventEmitter;
var util = require('util');

function EventTracker(){
	EventEmitter.call(this);
}
util.inherits(EventTracker,EventEmitter);

var eventTracker = new EventTracker();
eventTracker.on('newListener',function(name, listener){
	console.log('name:',name);
	console.log('listener:',listener);
});
eventTracker.on('test',function(){
	/*This will cause 'newListener' to fire*/
});






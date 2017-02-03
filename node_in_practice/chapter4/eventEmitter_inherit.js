var eventEmitter = require('events').EventEmitter;
var util = require('util');
console.log(eventEmitter);

function MusicPlayer() {
	eventEmitter.call(this);
}

util.inherits(MusicPlayer,eventEmitter);
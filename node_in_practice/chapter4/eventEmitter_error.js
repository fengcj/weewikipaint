'use strict';
var eventEmitter = require('events').EventEmitter;
var util = require('util');

function MusicPlayer(){
	eventEmitter.call(this);
}

util.inherits(MusicPlayer,eventEmitter);

var musicPlayer = new MusicPlayer();
musicPlayer.on('play',function(track){
	musicPlayer.emit('error','unable to play!');
});

musicPlayer.on('error',function(err){
	console.error('Error:',err);
});

setTimeout(function(){
	musicPlayer.emit('play','Song not know');
},1000);



'use strict';
var fs = require('fs');
var args = {
	'-r' : readFile,
	'-h' : help
};

function readFile(file){
	if(file && file.length){
		console.time('read');  // at begin benchmark
		var readStream = fs.createReadStream(file);
		readStream.on('end',function(){
			console.timeEnd('read'); // at end benchmark
		})
		readStream.pipe(process.stdout);
	}else{
		console.error('A file must be provided with the -r option');
		process.exit(1);
	}

}
function help(){
	console.log('Argument processor:', args);
}
if(process.argv.length > 0){
	console.log(process.argv);
	process.argv.forEach(function(arg, index){
		if(args[arg]){
			args[arg].apply(this,process.argv.splice(index + 1));	
		}
		
	});
}




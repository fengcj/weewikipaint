function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************
// The old-n-busted callback way

function getFile(file) {
	fakeAjax(file,function(text){
		// what do we do here?
		// do not find can be handlered by a method
		handlerReceived(file,text);



	});
}

var responses = {};  // had thinked this way, but not digged into it
var files = ["file1","file2","file3"];
function handlerReceived(file,text){
	if(!responses[file]){
		responses[file] = text;
	}
	for(var i=0; i < files.length; i++){
		if(files[i] in responses){
			if( responses[files[i]] !== true ){
				output(responses[files[i]]);
				responses[files[i]] = true
			}
		}
		else{
			return false;  // must have
		}
	}





}


// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");

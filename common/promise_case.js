// Promise.all()

var p1 = new Promise((resolve,reject) => {
	console.log("start after init");
	setTimeout(resolve,"from p1",1000);
	
});

var p2 = new Promise((resolve,reject) => {
	console.log("start after init");
	setTimeout(resolve,"from p2",3000);
});

var p3 = Promise.all([p1,p2]);
var p4 = p3.then((result)=>{
	console.log(result);
});


/* Per the promise spec, as soon as a promise is created, it begins executing.    */



function promiseFactory(receivedData){
	console.log("get received data", receivedData);
	console.log("create promise at", new Date());
	return new Promise((resolve,reject) => {
		setTimeout(()=>{
				console.log("start after init", new Date());
				var date = new Date();
				resolve(`from factory ${date}`);
		},1000);
	});

}

function executeSequentially(promiseFactories) {
  var result = Promise.resolve(`from begining ${new Date()}`);
  promiseFactories.forEach(function (promiseFactory) {
    result = result.then(promiseFactory);
  });
  return result;
}

var promiseFactories = Array(3).fill(promiseFactory);

executeSequentially(promiseFactories);




/*   One promise can has many then to handler the return          */


var p1 = timeout(1000);
p1.then(response => console.log(response));
p1.then(response => console.log(`another ${response}`))


  function timeout(duration = 0, shouldReject = false) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(`rejected after ${duration}ms`)
        } else {
          resolve(`resolved after ${duration}ms`)
        }
      }, duration)
    })
  }









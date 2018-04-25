let started = true;
let myPromise = new Promise(function(resolve, reject) {
	reject("New Error");
})
	.then(val => {
		console.log(val); //reject apple
	})
	.catch(e => {
        console.log("In catch");
		console.log(e); //catch被跳过
	})
	// .finally(() => {
	// 	//注意这里没有任何值
	// 	console.log('This function is always executed!');
	// 	started = false; //清除
    // })
    
    //  ,val => {console.log("In then reject handler");console.log(val)}
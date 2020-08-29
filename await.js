const timeout = (ms) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
const ajax1 = () =>
    timeout(2000).then(() => {
        console.log("1");
        return 1;
    });
const ajax2 = () =>
    timeout(1000).then(() => {
        console.log("2");
        return 2;
    });
const ajax3 = () =>
    timeout(2000).then(() => {
        console.log("3");
        return 3;
    });
const mergePromise = (ajaxArray) => {
    // 1,2,3 done [1,2,3] 此处写代码 请写出ES6、ES3 2中解法
    return new Promise(async (resolve, reject) => {
        //Promise.all(ajaxArray).then(resolve);
        let a = await ajaxArray[0]()
        let b = await ajaxArray[1]()
        let c = await ajaxArray[2]()
        resolve([a, b, c]);
    });


};
mergePromise([ajax1, ajax2, ajax3]).then((data) => {
    console.log("done");
    console.log(data); // data 为[1,2,3]
});
// 执行结果为：1 2 3 done [1,2,3]
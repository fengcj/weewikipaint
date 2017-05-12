// case 1:
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
console.log(hw.next());  //  { value: 'hello', done: false }
console.log(hw.next());  //  { value: 'world', done: false }
console.log(hw.next());  //  { value: 'ending', done: true }
console.log(hw.next());  //  { value: undefined, done: true }
console.log(hw.next());  //  { value: undefined, done: true }


// case 2:
function* lazyExe(){
	console.log("console the log when execute next() method");
}
var itero = lazyExe();
console.log("not log");
itero.next();   // log there

// case 3:
function* case3(){
	console.log("hello " + (yield "world"));
}
//  (case3()).next();  // not work
var result_case3 = case3();   
console.log(result_case3.next());  //  { value: 'world', done: false }
// then log
// hello undefined
//  console.log(result_case3.next());  // { value: undefined, done: true }

/*

 猜测执行过程：
    1) 返回 iterator
    2) 执行 next() ，进入case3 函数体
    3) 执行 console.log(),  发现有 ( yield "world"), 则返回：
            { value: 'world', done: false }
    4) 此时若不再次执行 next()， 则不会再输入任何log
    5) 若再次执行 next()， 猜测此时函数体继续执行，
           因为上次执行的状态是 console.log() 没有执行完，则直接yeild 返回了，
           那么继续执行则应该接着将 console.log() 中结果打印出来，
    6)  最后再返回 { value: undefined, done: true }

*/



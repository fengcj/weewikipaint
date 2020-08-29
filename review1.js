let currying = (fn, ...args) =>
    fn.length > args.length ?
        (...arguments) => currying(fn, ...args, ...arguments) :
        fn(...args)



let addSum = (a, b, c) => a + b + c
let add = currying(addSum)

//console.log(add.toString())

console.log(add(1)(2)(3))
console.log(add(1, 2)(3))
console.log(add(1, 2, 3))



const num = {
    a: 10,
    add() {
        return this.a + 2;
    },
    reduce: () => this.a - 2

};
console.log(num.add());
console.log(num.reduce());



var x = 1;
if (function f() { }) {
    x += typeof f;
}
console.log(x)



var a = 1;
var b = 2;
(function a() {
    a = 2;
    console.log(b)
    console.log(a);
})();



function side(arr) {
    arr[0] = arr[2];
}
function k(a, b, c = 3) {
    c = 10;
    console.log(arguments);
    side(arguments);  // 这里 a，c的值不管怎么改变都是不会改变的
    console.log(a)
    return a + b + c;
}
k(1, 1, 1);  //12



function side(arr) {
    arr[0] = arr[2];
}
function k2(a, b, c) {
    c = 10;
    console.log(arguments);
    side(arguments);  // 这里 a，c的值不管怎么改变都是不会改变的
    console.log(arguments)
    console.log(a)
    return a + b + c;
}
k2(1, 1, 1);  // 21




const proxyArray = arr => {
    const length = arr.length;
    return new Proxy(arr, {
        get(target, key) {
            console.log(typeof key);
            key = +key;
            console.log(key)
            while (key < 0) {
                key += length;
            }
            return target[key];
        }
    })
};
var a = proxyArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(a[1]);
console.log(a[-1]);



const obj = {

    myMethod: () => {
        console.log(this);
    }


}

obj.myMethod();
console.log(obj.myMethod());



function myFunction() {
    return () => {
        console.log(this)
    }
}


console.log(myFunction()());
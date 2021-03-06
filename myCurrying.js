let currying = (fn, ...args) =>
            fn.length > args.length ?
            (...arguments) => currying(fn, ...args, ...arguments) :
            fn(...args)


let addSum = (a, b, c) => a+b+c
let add = curry(addSum)
console.log(add(1)(2)(3))
console.log(add(1, 2)(3))
console.log(add(1,2,3))
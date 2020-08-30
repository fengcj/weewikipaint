
// method1 : using Infinity
console.log([1, [2, 3, [4, 5, [6, 7]]]].flat(Infinity))


// method2 : res放在了flat外面，不是一个好的method
let res = [];
const flat = (array) => {
    if (!Array.isArray(array)) return res;

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            flat(array[i])
        } else {
            res.push(array[i]);
        }
    }
    return res;
}


let arr = [1, 2, [3, 4], [5, [6, 7]]]
console.log(flat(arr))


// https://juejin.im/post/6854818587820736526
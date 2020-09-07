class FuncClass {
    constructor() { this.bar = 'bar' }
}

// 饿汉式
const HungrySingleton = (function() {
    const _instance = new FuncClass()
    
    return function() {
        return _instance
    }
})()

// 懒汉式
const LazySingleton = (function() {
    let _instance = null
    
    return function() {
        return _instance || (_instance = new FuncClass())
    }
})()

const visitor1 = new HungrySingleton()
const visitor2 = new HungrySingleton()
const visitor3 = new LazySingleton()
const visitor4 = new LazySingleton()

console.log(visitor1 === visitor2)	// true
console.log(visitor3 === visitor4)	// true
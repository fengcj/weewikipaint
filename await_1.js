var a = 0
var b = async () => {
    a = a + await 10
    console.log('2', a) // -> '2' 10
    a = (await 10) + a
    console.log('3', a) // -> '3' 20
}
b()
a++
console.log('1', a) // -> '1' 1


/*

1)首先函数 b 先执行，在执行到 await 10 之前变量 a 还是 0，
因为在 await 内部实现了 generators ，generators 会保留堆栈中东西，所以这时候 a = 0 被保存了下来

2)因为 await 是异步操作，遇到await就会立即返回一个pending状态的Promise对象，
暂时返回执行代码的控制权，使得函数外的代码得以继续执行，所以会先执行 console.log('1', a)

3) 这时候同步代码执行完毕，开始执行异步代码，将保存下来的值拿出来使用，这时候 a = 10
然后后面就是常规执行代码了

作者：yck
链接：https://juejin.im/post/6844903682455109640
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。




*/
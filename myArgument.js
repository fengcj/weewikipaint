// chrome
let obj = {
    arg: 18,
    foo: function(func) {
      func()  // 10
      arguments[0]() // undefined
    }
  }
  
  var age = 10
  function fn() {
    console.log(this.age)
  }
  
  obj.foo(fn)


/*
  先来解释一下第一个，为什么不是输出18呢，虽然func()是在foo函数里面调用的，但是并没有显式指明作用域，这时候会使用默认作用域window，
  而对于浏览器来说，在全局通过var声明的变量会自动挂载到window上面，所以var age = 10相当于window.age = 10, 而第一个func()里面的this.age相当于window.age

*/
  

  const arr = [function() {console.log(this[1])}, '我是子君']
// 输出 我是子君
console.log(arr[0]())  

  

/*
这时候回过头来看arguments,
这个其实是一个类数组，里面存的是函数传入的参数，第一项就是传入的函数，
和上面例子一样，arguments[0]的作用域就是arguments,而arguments上面并没有age属性，所以是undefined
*/

//  https://juejin.im/post/6866920515420815374
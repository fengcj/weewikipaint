1. 如何适配移动端  vw rem em
2. https://juejin.im/post/5cc543edf265da03761e9451 

    typeof instanceof

    typeof 对于原始类型来说，除了 null 都可以显示正确的类型
    typeof 1 // 'number'
    typeof '1' // 'string'
    typeof undefined // 'undefined'
    typeof true // 'boolean'
    typeof Symbol() // 'symbol'
    typeof 对于对象来说，除了函数都会显示 object，所以说 typeof 并不能准确判断变量到底是什么类型
    typeof [] // 'object'
    typeof {} // 'object'
    typeof console.log // 'function'



首先我们要知道，在 JS 中类型转换只有三种情况，分别是：

        转换为布尔值
        转换为数字
        转换为字符串


    转Boolean
        在条件判断时，除了 undefined， null， false， NaN， ''， 0， -0，其他所有值都转为 true，包括所有对象。


    对象转原始类型
        对象在转换类型的时候，会调用内置的 [[ToPrimitive]] 函数，对于该函数来说，算法逻辑一般来说如下：·
         如果已经是原始类型了，那就不需要转换了· 
         调用 x.valueOf()，如果转换为基础类型，就返回转换的值· 
         调用 x.toString()，如果转换为基础类型，就返回转换的值· 
         如果都没有返回原始类型，就会报错
         当然你也可以重写 Symbol.toPrimitive ，该方法在转原始类型时调用优先级最高。


3. vue 3个特性：
        属性
        事件: 普通事件，修饰符事件
        slot
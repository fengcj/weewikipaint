1. 前端总结

https://github.com/LinDaiDai/niubility-coding-js


2. BFC 实践
// https://github.com/LinDaiDai/niubility-coding-js/blob/master/CSS/BFC.md

1） 计算BFC的高度时，浮动子元素也参与计算（即内部有浮动元素时也不会发生高度塌陷）

// https://juejin.im/post/5e60c2c7f265da574e22a1f5
这个文章里的2个问题：

内联元素中使用块级元素会产生什么效果？
内联元素中使用插入浮动元素会产生什么效果？

需要回过头来再看！


总结： BFC解决了
  a) 子元素float，父元素高度塌陷的问题
  b)  元素外边距重叠的问题


3. 清除浮动

// https://segmentfault.com/a/1190000004237437

文章中的3个方法，
  第一个是不合适的，因为为了清除浮动，而添加了一个dom节点。
  第二个是利用了BFC特性
  第三个是通用的方法，利用了伪元素(::after)，加上clear属性

  .clearfix:after{
    content: "020"; 
    display: block; 
    height: 0; 
    clear: both; 
    visibility: hidden;  
  }

  注释 ： 
    1）CSS伪元素::after用来创建一个伪元素，作为已选中元素的最后一个子元素。通常会配合content属性来为该元素添加装饰内容。这个虚拟元素默认是行内元素。
    2）clear: both属性确保外层元素在进行高度计算时包含内部浮动元素。


4. 常见布局
 
 flex 布局 // https://juejin.im/post/58e3a5a0a0bb9f0069fc16bb

   轴
    main axis
    cross axis
   容器
    container
    item

    容器具有这样的特点：父容器可以统一设置子容器的排列方式，子容器也可以单独设置自身的排列方式，如果两者同时设置，以子容器的设置为准。

        父: justify-content(main axis)      align-items(cross axis)
        子:      flex(main axis)            align-self(cross axis)

    flex 是多个属性的缩写(flex-grow | flex-shink | flex-basic)


    flex-direction : row | row-reverse | column | column-reverse
    flex-wrap : nowrap | wrap | wrap-reverse
    justify-content : flex-start | flex-end | flex-center | space-between | space-around
    order

    align-items : flex-start | flex-end | center | baseline | stretch


5. css 查询网站
https://cssreference.io/


6. node 出来都10年了。。。

7. es6,7,8,9 常用语法 ?

8. module.exports vs exports

Initially,module.exports=exports , and the require function returns the object module.exports refers to.

if we add property to the object, say exports.a=1, then module.exports and exports still refer to the same object. So if we call require and assign the module to a variable, then the variable has a property a and its value is 1;

But if we override one of them, for example, exports=function(){}, then they are different now: exports refers to a new object and module.exports refer to the original object. And if we require the file, it will not return the new object, since module.exports is not refer to the new object.

For me, i will keep adding new property, or override both of them to a new object. Just override one is not right. And keep in mind that module.exports is the real boss.

9. node 启动流程

[
  '1. Node 源码有一坨依赖，大部分是 C/C++ 底层',
  '2. Node 启动入口是 node_main.cc 的 main 函数',
  '3. 入口函数找到 node.cc 的 3 个 Start，依次调用',
  '4. node.cc 的第一个 Start 初始化了 v8，调用第二个 Start',
  '5. 第二个 Start 让 v8 准备了引擎实例，调用第三个 Start',
  '6. 第三个 Start：',
  '   6.1 首先准备了 v8 的上下文 Context',
  '   6.2 其次准备了 Node 的启动环境，对各种需要的变量做整理',
  '   6.3 再把 Node 原生模块和我们的 JS 代码都加载进来运行',
  '   6.4 最后把主持人 libuv 请上场，执行 JS 里的各种任务',
  '7. libuv 没活干了，就一层层来退出进程、收拾场地，退出程序',
]


纸箱子 = [
  '6.3.1 Node 底层环境均已 Ready，准备装载 JS 模块',
  '6.3.2 node.cc 加载 loaders.js，对 JS 函数传入 process、binding 等 C++ 接口',
]


10. async / await ?

11. Vue面试题

 1）Vue 的单向数据流

所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。
额外的，每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。子组件想修改时，只能通过 $emit 派发一个自定义事件，父组件接收到后，由父组件修改。


  2）Vue 数组的特殊处理
  https://cn.vuejs.org/v2/guide/list.html#%E6%95%B0%E7%BB%84%E6%9B%B4%E6%96%B0%E6%A3%80%E6%B5%8B
  3）生命周期
  4) Vue 的父组件和子组件生命周期钩子函数执行顺序？ 
  
  加载渲染过程

父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted
  // 感觉答案有问题，为何是 子先mounted 再是父组件mounted ? 

  // 答案是对的， https://segmentfault.com/a/1190000015890245

  5） Vue @hook  // 这个真没用过
  6） keep-alive 的了解 // ?实战

<keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。
和 <transition> 相似，<keep-alive> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。
//https://juejin.im/post/5b6a8d04f265da0f87595670

  7） v-model 语法糖的细节  // ?https://juejin.im/post/5e7235bb51882549036961c2

text 和 textarea 元素使用 value 属性和 input 事件；
checkbox 和 radio 使用 checked 属性和 change 事件；
select 字段将 value 作为 prop 并将 change 作为事件。


如果在自定义组件中，v-model 默认会利用名为 value 的 prop 和名为 input 的事件



  8） Vue 组件间通信有哪几种方式

Vue 组件间通信只要指以下 3 类通信：父子组件通信、隔代组件通信、兄弟组件通信

  9) Vue的双向数据绑定

  Vue 主要通过以下 4 个步骤来实现数据双向绑定的：
实现一个监听器 Observer：对数据对象进行遍历，包括子属性对象的属性，利用 Object.defineProperty() 对属性都加上 setter 和 getter。这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。
实现一个解析器 Compile：解析 Vue 模板指令，将模板中的变量都替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。
实现一个订阅者 Watcher：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁 ，主要的任务是订阅 Observer 中的属性值变化的消息，当收到属性值变化的消息时，触发解析器 Compile 中对应的更新函数。
实现一个订阅器 Dep：订阅器采用 发布-订阅 设计模式，用来收集订阅者 Watcher，对监听器 Observer 和 订阅者 Watcher 进行统一管理。

 10) 

 vue 提供了 Vue.set (object, propertyName, value) / vm.$set (object, propertyName, value) 来实现为对象添加响应式属性，


Vue 源码：vue/src/core/instance/index.js


vm.$set 的实现原理是：


如果目标是数组，直接使用数组的 splice 方法触发相应式；


如果目标是对象，会先判读属性是否存在、对象是否是响应式，最终如果要对属性进行响应式处理，则是通过调用   defineReactive 方法进行响应式处理（ defineReactive 方法就是  Vue 在初始化对象时，给对象属性采用 Object.defineProperty 动态添加 getter 和 setter 的功能所调用的方法）

作者：我是你的超级英雄
链接：https://juejin.im/post/5d59f2a451882549be53b170
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


作者：我是你的超级英雄
链接：https://juejin.im/post/5d59f2a451882549be53b170
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

12. 对Vue3.0 有什么了解的地方么？

13. Vuex

14. vue-router 路由模式

vue-router 有 3 种路由模式：hash、history、abstract

hash:  使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器；
  我们可以使用 hashchange 事件来监听 hash 值的变化，从而对页面进行跳转（渲染）。

history :  依赖 HTML5 History API 和服务器配置。具体可以查看 HTML5 History 模式；

  HTML5 提供了 History API 来实现 URL 的变化。其中做最主要的 API 有以下两个：history.pushState() 和 history.repalceState()。这两个 API 可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录，如下所示：

  window.history.pushState(null, null, path);
  window.history.replaceState(null, null, path);


  history 路由模式的实现主要基于存在下面几个特性：

pushState 和 repalceState 两个 API 来操作实现 URL 的变化 ；
我们可以使用 popstate  事件来监听 url 的变化，从而对页面进行跳转（渲染）；
history.pushState() 或 history.replaceState() 不会触发 popstate 事件，这时我们需要手动触发页面跳转（渲染）。


abstract :  支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.



15. js 执行上下文
     
     变量环境     词法环境

以前还没注意到有这2个概念：

  https://stackoverflow.com/questions/15031667/clarity-on-the-difference-between-lexicalenvironment-and-variableenvironment/15054320#15054320

//  js 系列的文章
    https://limeii.github.io/tag/  *****



16. let 测试题

let myname= '极客时间'
{
  console.log(myname) 
  let myname= '极客邦'
}

<div class="_3M6kV3zb_0">



	【最终打印结果】：VM6277:3 Uncaught ReferenceError: Cannot access 'myname' before initialization<br>
	【分析原因】：在块作用域内，let声明的变量被提升，但变量只是创建被提升，初始化并没有被提升，在初始化之前使用变量，就会形成一个暂时性死区。<br>
	【拓展】
		var的创建和初始化被提升，赋值不会被提升。
		let的创建被提升，初始化和赋值不会被提升。
		function的创建、初始化和赋值均会被提升。
	
</div>


let 的 暂时性死区 https://segmentfault.com/a/1190000015603779


简单总结：

        ES6规定，let/const 命令会使区块形成封闭的作用域。若在声明之前使用变量，就会报错。
        总之，在代码块内，使用 let 命令声明变量之前，该变量都是不可用的。
        这在语法上，称为 “暂时性死区”（ temporal dead zone，简称 TDZ）。

        所以说关键在于 变量一定是要声明后再使用。

另外： TDZ 也意味着 typeof 不再是一个百分之百安全的操作。



17. es6系列网站   https://jskatas.org/

// es6详解  *****
https://juejin.im/entry/5b8e597b51882542d23a2cb1  
https://juejin.im/post/5d9bf530518825427b27639d

TD
18.  es6 测试题



8.关于数值的扩展，window.isNaN(“abc”) 和Number.isNaN(“abc”)的结果分别是：（）

A、true   false

B、false   true

C、true   true

D、false   false

答案：A

解析：window.isNaN函数会把非数值的参数转化成数值再进行判断，而Number. isNaN只对数值类型有效，非数值类型的参数一律返回false。

考点：isNaN函数从全局函数移植到Number对象后的区别。


9.关于数值扩展的Number.isInteger函数，下面说法错误的是：（）

A、用来判断是否是整数，返回布尔值。

B、Number.isInteger(3);结果为：true

C、Number.isInteger(3.0);结果为：false

D、Number.isInteger(3.01);结果为：false

答案：C

解析：在JavaScript内部对整数和浮点数采用一样的存储方式，因此小数点后如果都是0的浮点数，都会被认为是整数。

考点：Number.isInteger函数使用的注意事项。


// https://blog.csdn.net/qq_39207948/article/details/80678800



15.关于箭头函数的描述，错误的是：（）

A、使用箭头符号=>定义

B、参数超过1个的话，需要用小括号（）括起来

C、函数体语句超过1条的时候，需要用大括号{ }括起来，用return语句返回

D、函数体内的 this 对象，绑定使用时所在的对象

答案：D

解析：函数体内的 this 对象，绑定定义时所在的对象，而不是使用时所在的对象。这点很重要，连载第十节的时候还特意加了一节讲这个内容。

考点：箭头函数的使用注意事项。





19） 前端高手进阶

当渲染引擎解析 HTML 遇到 script 标签引入文件时，会立即进行一次渲染。所以这也就是为什么构建工具会把编译好的引用 JavaScript 代码的 script 标签放入到 body 标签底部，因为当渲染引擎执行到 body 底部时会先将已解析的内容渲染出来，然后再去请求相应的 JavaScript 文件。如果是内联脚本（即不通过 src 属性引用外部脚本文件直接在 HTML 编写 JavaScript 代码的形式），渲染引擎则不会渲染。


为了减少这些时间损耗，可以借助 script 标签的 3 个属性来实现。

    async 属性。立即请求文件，但不阻塞渲染引擎，而是文件加载完毕后阻塞渲染引擎并立即执行文件内容。
    defer 属性。立即请求文件，但不阻塞渲染引擎，等到解析完 HTML 之后再执行文件内容。
    HTML5 标准 type 属性，对应值为“module”。让浏览器按照 ECMA Script 6 标准将文件当作模块进行解析，默认阻塞效果同 defer，也可以配合 async 在请求完成后立即执行。


dns-prefetch。当 link 标签的 rel 属性值为“dns-prefetch”时，浏览器会对某个域名预先进行 DNS 解析并缓存。













------- TODO
2. pfd简历

3. 常见布局方式 ，flex 布局

4. vue 是重点， 实战还有面试题目

6. 面试题 https://github.com/qiu-deqing/FE-interview

7. 阅读 Vue 数据绑定原理 
  // https://juejin.im/user/5bc7de8e5188255c6c626f96/posts
  // https://juejin.im/post/5d421bcf6fb9a06af23853f1

8. Proxy Vs Object.defineProperty
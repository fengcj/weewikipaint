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

      flex-grow: 0;  //  The element will not grow if there's space available. It will only use the space it needs.
      flex-grow: 1; //   The element will grow by a factor of 1. It will fill up the remaining space if no other flexbox item has a flex-grow value.


      flex-basic : Defines the initial size of a flexbox item.
          flex-basis: auto; // The element will be automatically sized based on its content, or on any height or width value if they are defined.
          flex-basis: 80px; // You can define pixel or (r)em values. The element will wrap its content to avoid any overflow.


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


错误用法：
    {
        var a = 1;
        let a = 2; // erorr, 因为a已经声明过了
    }


    {
      let a = 1;
      let a = 2;  // error,  因为a已经声明过了
    }



    function say(word){
        let word = "hello jack"; // error， 用let重新声明word参数
        alet(word); 
    }
    say("hello lili");



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



20) es6 解构

var { b : a} = { b : 2};
console.log(a);


function demo({name="张三"}){
        console.log("姓名："+name);//结果：姓名：张三
    }
demo({});




21) unicode and utf-8
http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html



22) symbol

  //定义一个symbol类型的变量name
    let name = Symbol();

    //定义一个含有两种类型属性的对象
    let person = {
        [name]:"张三",  //symbol类型
        "age":12        //string类型
    };

    Object.keys(person);//结果：["age"]

    for(let key in person){
        console.log(key);
    }

    //打印结果：age

    //结论：
     person对象有两个属性，属性名有两种类型：symbol类型和string字符串类型，我们通过keys( )函数获取到的属性，
     只有属性age，我们通过for...in循环打印出来，也只打印出了属性age。
     以上几种方法都无法获取到symbol类型的属性。

    引出  --->  getOwnPropertySymbols( )函数

    //定义两个symbol类型的变量name，age
    let name = Symbol("name");
    let age = Symbol("age");


    let person = {
        [name]:"张三", //symbol类型
        [age]:12       //symbol类型
    };

    Object.getOwnPropertySymbols(person);
    //结果：[Symbol(name), Symbol(age)]


   上面的方法，分别获取属性，非常不方便，引出  Reflect.ownKeys( )函数
    //定义一个对象，含有两种类型的属性

    let person = {
        [Symbol('name')]:"张三",
        "age": 21

    };

    Reflect.ownKeys(person);

    //结果：["age",Symbol(name)]


 Symbol API：
    Symbol.for( )函数： 根据参数名，去全局环境中搜索是否有以该参数为名的symbol值，有就返回它，没有就以该参数名来创建一个新的symbol值。

     let n1 = Symbol.for('name');
    let n2 = Symbol.for('name');
    console.log(n1 === n2);
    //结果：true

  
  Symbol.for() vs Symbol()
    Symbol.for( )创建的symbol值会被登记在全局环境中，供以后用Symbol.for( )来搜索，而Symbol( )创建的变量就没有这样的效果了。

  所以说：
    用Symbol( )创建的symbol值，以后用Symbol.for( )去搜索，是找不到的。


   let n1 = Symbol('name');
    let n2 = Symbol.for('name');
    console.log(n1 === n2);
    //结果：false


  Symbol.keyFor( )函数： 返回一个以被登记在全局环境中的symbol值的key，没有就返回undefined。注意这句话的一个关键词：“被登记在全局环境中”，也就是说这个symbol值是被Symbol.for( )创建的，
                         不是被Symbol( )创建的。
    

  
    let n1 = Symbol('name');
    Symbol.KeyFor(n1);
    //结果：undefined


22.2) Proxy


    //定义一个对象person
    var person = {"name":"张三"};

    //创建一个代理对象pro，代理person的读写操作
    var pro = new Proxy(person,{
        get:function(target,property){
            return "李四"
        }
    });

    pro.name;//李四



    set也能拦截

     ownKeys拦截操作，拦截过滤Object.ownKeys()对对象的属性遍历。
     has( )拦截操作：拦截key in object的操作，结果会返回一个布尔值。
      apply(),函数也可以被代理。如果被代理的变量是一个函数，那么还会支持一个拦截程序：apply调用。

      Proxy.revocable() : 生成可以取消的代理
            //定义一个对象
            let person = {"name":"张三"};
            //定义一个代理处理程序
            let handle = {
                get:function(target,prop){
                    return "李四";
                }
            };

            //使用Proxy.revocable()进行代理
            let object = Proxy.revocable(person,handle);

            object.proxy.name;//结果：李四

            //调用返回对象object的revoke方法，取消代理
            object.revoke();

            object.proxy.name;//报错，代理被取消


22.3) for...of一种新的遍历方式，能遍历的对象有：数组，类数组对象，字符串，set和map结构等具有iterator接口的数据结构。而且for...in更适合用于对象的遍历。

22.4)  WeakSet结构同样不会存储重复的值，不同与Set的是，它的成员必须是对象类型的值。

22.5)  Map  WeakMap

let m = new Map([
            ["name","前端君"],
            ["gender",1]
        ]);
    
    console.log(m);
    //打印结果：Map {"name" => "前端君", "gender" => 1}


WeakMap和Map的区别
        WeakMap如果是普通的值类型则不允许。比如：字符串，数字，null，undefined，布尔类型。而Map结构是允许的，这就是两者的不同之处，谨记。
        WeakMap结构和Map结构很类似，不同点在于WeakMap结构的键名只支持引用类型的数据。哪些是引用类型的值呢？比如：数组，对象，函数。


22.6) class

  使用super有几个要注意的事项：

    子类必须在constructor方法中调用super方法

    必须先调用super( )，才可以使用this，否则报错


22.7) module

使用星号*实现整体导入：

     //使用*实现整体导入
    import * as obj from "./module-B.js";

    console.log(obj.name)
    //结果："前端君"

    console.log(obj.age)
    //结果：25

    obj.say();
    //结果：say hello


默认导出：
   默认导出，每个模块支持我们导出一个没有名字的变量，我们使用关键语句export default来实现：
  
  export default function(){
        console.log("I am default Fn");
  }
    
    我们使用export default关键字对外导出一个匿名函数，导入这个模块的时候，可以为这个匿名函数取任意的名字，我们试一下导入上面那个匿名函数：

      //取任意名字均可
    import sayDefault from "./module-B.js";

    sayDefault();
    //结果：I am default Fn

    同样是使用import关键字导入模块B，但是这次不需要使用大括号{ }。我们使用新的名字：sayDefault来代替导入的匿名函数。


    注意事项：

        1、声明的变量，对外都是只读的。  但是，如果模块导出的是对象类型的值，就可修改。




23). https://juejin.im/post/5cc543edf265da03761e9451 

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



24) 移动端适配

// https://juejin.im/post/5b6502686fb9a04fc34c2dfe   详细说明了
  
   物理像素（physical pixel）：也叫做：设备像素（device pixel）。可以理解为屏幕上的点，这个是跟硬件有关系，跟Web软件语言没一毛钱关系。
   分辨率（resolution）： 这也是一个物理概念，其实就是指一个设备上横竖的点数。iPhone手机的主屏：4.7英寸1334x750，就是指：对角线4.7英寸长，高1334个物理像素数，宽750个物理像素数。
   CSS像素（css pixel） ： 是Web编程的概念，指的是CSS样式代码中使用的逻辑像素（或者叫虚拟像素）。
                          在CSS规范中，长度单位可以分为绝对单位和相对单位，
                          比如：px 是一个 相对单位 ，相对的是 物理像素（physical pixel），
                          这也就是说到底我们平常开发中的 1px 在每个屏幕上怎么显示，完全取决于这个设备！

                       

  ！！！！！有些人把 CSS像素 又叫做 设备无关像素（dips），这是完全错误的。 ！！！！

  大家说到 设备无关像素 就是指 dip/dp ，它是以 160ppi 为基准的一个相对单位，用来解决Android上面屏幕不统一问题的。

  
  设备像素比（device pixel ratio）： 简写dpr 。 公式：物理像素数（硬件） / 逻辑像素数（软件），它是设备的属性，而不是一个单位。可以通过 window.devicePixelRatio 获取到当前设备的 dpr
    当 dpr=2 时，表示：1个CSS像素 = 4个物理像素。 像素点都是正方形，



  像素密度（pixers per inch）： 简写：ppi，当然也叫做：dpi。

    我的iphone5屏幕上每2.54厘米上有320个小灯泡~（ppi=320）
    我的iphone6屏幕上每2.54厘米上就有375个小灯泡呢！（ppi=375）

    记住：ppi 说的都是物理像素。计算 ppi 只能用对角线的物理像素数来除以对角线的实际单位


  设备独立像素（density-independent pixel）： 也叫做：密度无关像素。
    简写：dips or dp

    为何引入：

      原因是：不同的手机屏幕上 CSS像素 个数可能不一样，虽然大多数是320px!
举个栗子：

iPhone3GS，物理像素320，dpr=1，所以决定了它的CSS像素320；
iPhone4，物理像素640，dpr=2，所以，决定了它的CSS像素还是320；

假如这时候我们有个正方形是 30x30px，这是CSS像素，再上面的2个机器上看到的大小都一样，只是在iphone4上更清晰些，因为它用4个物理像素显示1个CSS像素。
换句话说，如果大家都是手机都是320的CSS像素，那么我们就只管用 px 这个单位就可以了，在每个设备上的看到的大小都一样。


如果在iphone5s之前，iOS都不需要关心这个概念，因为你能看到的手机屏幕的CSS像素都是320px。但是，随着iPhone6/plus的出现，就让我们心塞了。



举个栗子：

  你有个 160px x 160px 的元素，在iphone5s下面看起来宽度正好是 半个屏幕 大小；
  在iphone6plus下面，看起来宽度貌似只占了屏幕宽度的 不到一半屏幕 大小！Why？因为人家像素数量多啊！

  明白了吗？就是由于不同的设备屏幕，它所支持的屏幕显示的 CSS像素 个数不同（跟物理像素无关），
  所以，我们如果用 像素（px） 这个单位去WEB开发的话，在不同的手机下面就显得元素不一样大，这就是 dip 的作用，它的出现也就是为了解决这个问题的。


  那么，dip 如何解决这个问题呢？

Google规定：ppi = 160时，1px = 1dip（dip在Android下面是一个单位哦！） 那么，我们就能知道，像素数px = dip * ppi / 160

那么，回到刚才的那个栗子：

将 80px x 80px 的元素，单位换为 80dip x 80dip ，在iphone5s下宽度是 163px x 163px（由前2行公式得，163px = 80 * 326 / 160）；
而这个元素在iphone6plus下，宽度是 207px x 207px（163px = 80 * 414 / 160）；


如果我们使用 dip 作单位，那么在2台机器上，显示出来的效果，差不多都等于2台机器宽度的一半！目的就达到了。



//   https://juejin.im/post/5b6503dee51d45191e0d30d2

 页面适配主要解决的问题有：

  a.元素自适应问题
  文字rem问题
  高清图问题
  1像素问题
  横竖屏显示问题
  手机字体缩放问题

a. 元素自适应问题：
举个栗子：
在 1080px 的视觉稿中，左上角有个logo，宽度是 180px（高度问题同理可得）。
那么logo在不同的手机屏幕上等比例显示应该多大尺寸呢？
其实按照比例换算，我们大致可以得到如下的结果：

在CSS像素是 375px 的手机上，应该显示多大呢？结果是：375px * 180 / 1080 = 62.5px
在CSS像素是 360px 的手机上，应该显示多大呢？结果是：360px * 180 / 1080 = 60px
在CSS像素是 320px 的手机上，应该显示多大呢？结果是：320px * 180 / 1080 = 53.3333px


较好的解决方案：
//定义方法：calc
@function calc($val){
    @return $val / 1080;
}

.logo{
	width : calc(180rem);
}



b) 文字rem问题


文字也采用rem的单位主要有什么问题呢？

可能会出现通过rem计算，最终呈现到页面上是 23.335px 这样的奇葩的字体大小，可能还会因此出现锯齿、模糊不清等问题；
对于大屏希望一行显示的文字多一些，小屏显示的少一些，而不是一视同仁的全部显示同样多的文字。这样在大屏下显得文字特别大（下文 3.5 横竖屏显示问题 会仔细讲）。


对于以上问题，我个人的建议：

对于出现奇葩字体的问题，其实手机上表现并没那么明显，主要原因是现在屏幕显示效果统一编号，另外html对字体显示也做优化，所以，如果产品要求不严格，可以不用考虑处理；
对于横竖屏问题，看情况吧，如果要求不严格，也可以不用考虑。

如果一定要解决这个问题，那么字体就不要使用rem方案了，而是继续使用px单位。

比如：

.title {
    font-size: 12px;
}
[data-dpr="2"] .title {
    font-size: 24px;
}
[data-dpr="3"] .title {
    font-size: 36px;
}


 -- continue
c) 高清图问题

d)  1像素问题

 现象：设计稿上的1px在高清屏上显示的比较粗
 原因： devicePixelRatio 大于1 导致， css像素中的1px 会用 4个像素点（devicePixelRatio=2）或者9个像素点（devicePixelRatio = 3）来显示
        实际上，设计师只是想要1个像素点来渲染
 解决方案：http://objcer.com/2017/06/19/one-pixel-border/
      第一种： 直接设置border
         border :  0.5px
         border : 0.33px
      // 但是要注意有些 Retina 屏的浏览器可能不认识 0.5px 的边框，将会把它解析成 0px，这样就没有边框了。
      第二种： 使用scale + 伪元素， 兼容性更好 ，但是只能解决直线问题，无法解决圆角问题。

      第三种：  https://juejin.im/post/5b6503dee51d45191e0d30d2  总结起来就是使用页面缩放的方式，但是感觉实在是太怪了。
      

e)  横竖屏显示问题
https://juejin.im/post/5b6503dee51d45191e0d30d2 中说的当横屏时候，将 deviceWidth=deviceHeight 的做法是以前没接触过的。


js获取屏幕旋转方向：window.orientation

0 - 正常方向
-90 - 屏幕顺时钟旋转90度
90 - 屏幕逆时针旋转90度
180 - 屏幕旋转180度

f)  手机字体缩放问题





25.1)  width /  max-width

  The max-width property in CSS is used to set the maximum width of a specified element. The max-width property overrides the width property, but min-width will always override max-width whether followed before or after width in your declaration.

25.2) display:flex vs display:inline-flex


http://codepen.io/fcj/pen/YNYEMg
http://stackoverflow.com/questions/27418104/difference-between-displayinline-flex-and-displayflex

display: inline-flex does not make flex items display inline. It makes the flex container display inline. That is the only difference between display: inline-flex and display: flex. 


25.3)  :empty


https://egghead.io/lessons/css-target-empty-elements-using-the-empty-pseudo-class

Target empty elements using the :empty pseudo-class


You can target an element that has no child elements by using the :empty pseudo-class. 
Be aware that whitespace is considered a "child", so :empty will not work if the element has no children, but has space between the opening and closing tags.


25.4)  :only-of-type  //  https://developer.mozilla.org/en-US/docs/Web/CSS/:only-of-type
    The :only-of-type CSS pseudo-class represents an element that has no siblings of the same type.



25.5)  css  white-space : nowrap

The white-space property specifies how white-space inside an element is handled.
https://www.w3schools.com/cssref/tryit.asp?filename=trycss_text_white-space







26） 节流，防抖

//  https://juejin.im/entry/5b1d2d54f265da6e2545bfa4


总结
函数防抖：将几次操作合并为一此操作进行。
         原理是维护一个计时器，规定在delay时间后触发函数，但是在delay时间内再次触发的话，就会取消之前的计时器而重新设置。这样一来，只有最后一次操作能被触发。

函数节流：使得一定时间内只触发一次函数。原理是通过判断是否到达一定时间来触发函数。

区别： 函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，
      而函数防抖只是在最后一次事件后才触发一次函数。 
      比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现。


  防抖：
    // 关键在于延时处理callback
    var debounce = function(callback,time){
        var timeout = null;
        return function(){
            if(timeout !== null){
                cleatTimeout(timeout);
            }
            timeout = setTimeout(callback,time);
        } 
    }

    // 处理函数
function handle() {
    console.log(Math.random()); 
}
// 滚动事件
window.addEventListener('scroll', debounce(handle, 1000));



  节流：

      第一种方法是利用时间戳
        var throttle = function(func, delay) {
            var prev = Date.now();
            return function() {
                var context = this;
                var args = arguments;
                var now = Date.now();
                if (now - prev >= delay) {
                    func.apply(context, args);
                    prev = Date.now();
                }
            }
        }
        function handle() {
            console.log(Math.random());
        }
        window.addEventListener('scroll', throttle(handle, 1000));



         第二种方法是利用定时器

            var throttle = function(func, delay) {
                var timer = null;
                return function() {
                    var context = this;
                    var args = arguments;
                    if (!timer) {
                        timer = setTimeout(function() {
                            func.apply(context, args);
                            timer = null; //  // 关键在于每次执行后，置空timer
                        }, delay);
                    }
                }
            }
            function handle() {
                console.log(Math.random());
            }
            window.addEventListener('scroll', throttle(handle, 1000));

          第三种方法是利用定时器 + 时间戳
          var throttle = function(func, delay) {
          var timer = null;
          var startTime = Date.now();
          return function() {
                  var curTime = Date.now();
                  var remaining = delay - (curTime - startTime);
                  var context = this;
                  var args = arguments;
                  clearTimeout(timer);
                    if (remaining <= 0) {
                          func.apply(context, args);
                          startTime = Date.now();
                    } else {
                          timer = setTimeout(func, remaining);
                    }
            }
      }
      function handle() {
            console.log(Math.random());
      }
      window.addEventListener('scroll', throttle(handle, 1000));







27)  js 数组 常用技巧  // https://juejin.im/post/5ebc9d9be51d454def2278ad

 27.1) 数组去重
     利用es6中的set


var fruits = [“banana”, “apple”, “orange”, “watermelon”, “apple”, “orange”, “grape”, “apple”];

var uniqueFruits = Array.from(new Set(fruits));

console.log(uniqueFruits); 

var uniqueFruits2 = […new Set(fruits)];

console.log(uniqueFruits2); 

  27.2) 替换数组中的值

   let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
          

var fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"];

fruits.splice(0, 2, "potato", "tomato");

console.log(fruits); 

 27.3) map

 var friends = [
    { name: "John", age: 22 },
    { name: "Peter", age: 23 },
    { name: "Mark", age: 24 },
    { name: "Maria", age: 22 },
    { name: "Monica", age: 21 },
    { name: "Martha", age: 19 },]
    
var friendsNames = Array.from(friends, ({name}) => name);

console.log(friendsNames); 


var names = [];
friends.map(p => names.push(p.name));
console.log(names); 


28. vue 组件通信：
   1） 父组件 向子组件传递 属性，传递函数（类似于修改属性的回调）
        sync语法糖 v-model
        this.on/ this.emit 原理

        自定义dispatch方法，类似于冒泡，不停向父元素emit事件  （向上通知）
        自定义broadcast方法，递归遍历子元素，不停emit子元素上的事件 （向下广播）
        这2种方法，多用于组件库中。




29. vue文档阅读
   29.1) 不要在选项 property 或回调上使用箭头函数，比如 created: () => console.log(this.a) 或 vm.$watch('a', newValue => this.myMethod())。因为箭头函数并没有 this，this 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 Uncaught TypeError: Cannot read property of undefined 或 Uncaught TypeError: this.myMethod is not a function 之类的错误。

   29.2) 动态参数的缩写 (2.6.0+)

   29.3) 计算属性  vs watch

   29.4) v-if vs v-show
v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

  29.5） 在 v-for 块中，我们可以访问所有父作用域的 property
        在 v-for 里使用对象
        不要使用对象或数组之类的非基本类型值作为 v-for 的 key。请用字符串或数值类型的值。

  29.6） Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：

push()
pop()
shift()
unshift()
splice()
sort()
reverse()

  29.7） 注意我们不推荐在同一元素上使用 v-if 和 v-for


  当它们处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。当你只想为部分项渲染节点时，这种优先级的机制会十分有用，如下：

<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo }}
</li>
上面的代码将只渲染未完成的 todo。

  
   29.8） is 涉及到


    动态组件

    DOM 模板解析说明

      有些 HTML 元素，诸如 <ul>、<ol>、<table> 和 <select>，对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 <li>、<tr> 和 <option>，只能出现在其它某些特定的元素内部。
      需要注意的是如果我们从以下来源使用模板的话，这条限制是不存在的：

          字符串 (例如：template: '...')
          单文件组件 (.vue)
          <script type="text/x-template">

  29.9） 事件修饰符

      Vue.js 为 v-on 提供了事件修饰符：

          .stop
          .prevent
          .capture
          .self
          .once
          .passive
   
   29.10） 表单绑定

   v-model 会忽略所有表单元素的 value、checked、selected attribute 的初始值而总是将 Vue 实例的数据作为数据来源。
   你应该通过 JavaScript 在组件的 data 选项中声明初始值。

   v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：

      text 和 textarea 元素使用 value property 和 input 事件；
      checkbox 和 radio 使用 checked property 和 change 事件；
      select 字段将 value 作为 prop 并将 change 作为事件。



  <input v-model="searchText"> 等价于：

  <input
    v-bind:value="searchText"
    v-on:input="searchText = $event.target.value"
  >

  当用在组件上时，v-model 则会这样：

  <custom-input
    v-bind:value="searchText"
    v-on:input="searchText = $event"
  ></custom-input>

  为了让它正常工作，这个组件内的 <input> 必须：

将其 value attribute 绑定到一个名叫 value 的 prop 上
在其 input 事件被触发时，将新的值通过自定义的 input 事件抛出
写成代码之后是这样的：

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})
现在 v-model 就应该可以在这个组件上完美地工作起来了：

<custom-input v-model="searchText"></custom-input>


29.10）  <!-- 即便 `42` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:likes="42"></blog-post>


传入一个对象的所有 property
如果你想要将一个对象的所有 property 都作为 prop 传入，你可以使用不带参数的 v-bind (取代 v-bind:prop-name)

<blog-post v-bind="post"></blog-post>

等价于：

<blog-post
  v-bind:id="post.id"
  v-bind:title="post.title"
></blog-post>


prop验证：
  为了定制 prop 的验证方式，你可以为 props 中的值提供一个带有验证需求的对象，而不是一个字符串数组。

  注意那些 prop 会在一个组件实例创建之前进行验证，所以实例的 property (如 data、computed 等) 在 default 或 validator 函数中是不可用的。

禁用 Attribute 继承  // https://www.jianshu.com/p/ce8ca875c337
//  https://juejin.im/post/5ae4288a5188256712784787

默认情况下vue会把父作用域的不被认作 props 的特性绑定 且作为普通的 HTML 特性应用在子组件的根元素上。绑定就绑定，显示就显示，没啥大不了的，但是怕就怕遇到一些特殊的，就比如上面的input的情况，这个时候inheritAttrs:false的作用就出来啦。



vm.$attrs
    包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。


29.11) .sync

  <comp :foo.sync="bar"></comp>

  编译成：

  <comp :foo="bar" @update:foo="val => bar = val"></comp>


  当子组件需要更新 foo 的值时，它需要显式地触发一个更新事件：

  this.$emit('update:foo', newValue)




29.12)  Slot

在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 这两个目前已被废弃但未被移除且仍在文档中的 attribute。


规则：父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。


跟 v-on 和 v-bind 一样，v-slot 也有缩写，即把参数之前的所有内容 (v-slot:) 替换为字符 #。例如 v-slot:header 可以被重写为 #header



// from https://www.zhihu.com/question/37548226
结论一：插槽就是一个返回VNode的函数而已。

结论二：普通插槽和作用域插槽根本就没有区别，因为普通插槽就是作用域插槽的子集，这也是 Vue 为什么将二者合并的原因。




// 关于 Slot 的文章 ： https://segmentfault.com/a/1190000019702966



29.13) vm.$nextTick( [callback] )

将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。


eg:
    new Vue({
    // ...
    methods: {
      // ...
      example: function () {
        // 修改数据
        this.message = 'changed'
        // DOM 还没有更新
        this.$nextTick(function () {
          // DOM 现在更新了
          // `this` 绑定到当前实例
          this.doSomethingElse()
        })
      }
    }
  })



// 作为一个 Promise 使用 (2.1.0 起新增，详见接下来的提示)
Vue.nextTick()
  .then(function () {
    // DOM 更新了
  })



29.14) 异步更新队列



可能你还没有注意到，Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。

例如，当你设置 vm.someData = 'new value'，该组件不会立即重新渲染。当刷新队列时，组件会在下一个事件循环“tick”中更新。多数情况我们不需要关心这个过程，但是如果你想基于更新后的 DOM 状态来做点什么，这就可能会有些棘手。虽然 Vue.js 通常鼓励开发人员使用“数据驱动”的方式思考，避免直接接触 DOM，但是有时我们必须要这么做。为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback)。这样回调函数将在 DOM 更新完成后被调用。






Vue的核心流程大体可以分成以下几步


1. 遍历属性为其增加get，set方法，在get方法中会收集依赖(dev.subs.push(watcher))，而set方法则会调用dev的notify方法，此方法的作用是通知subs中的所有的watcher并调用watcher的update方法，我们可以将此理解为设计模式中的发布与订阅


2. 默认情况下update方法被调用后会触发queueWatcher函数，此函数的主要功能就是将watcher实例本身加入一个队列中(queue.push(watcher))，然后调用nextTick(flushSchedulerQueue)


3. flushSchedulerQueue是一个函数，目的是调用queue中所有watcher的watcher.run方法，而run方法被调用后接下来的操作就是通过新的虚拟dom与老的虚拟dom做diff算法后生成新的真实dom


4. 只是此时我们flushSchedulerQueue并没有执行，第二步的最终做的只是将flushSchedulerQueue又放进一个callbacks队列中(callbacks.push(flushSchedulerQueue))，然后异步的将callbacks遍历并执行（此为异步更新队列）


如上所说flushSchedulerQueue在被执行后调用watcher.run()，于是你看到了一个新的页面



1. 我们的同步任务的调用形成了一个栈结构
2. 除此之外我们还有一个任务队列，当一个异步任务有了结果后会向队列中添加一个任务，每个任务都对应着一个回调函数
3. 当我们的栈结构为空时，就会读取任务队列，同时调用其对应的回调函数
4. 重复

这个总结目前来说对于我们比较欠缺的信息就是队列中的任务其实是分为两种的，宏任务(macrotask)与微任务(microtask)。
当主线程上执行的所有同步任务结束后会从任务队列中抽取出所有微任务执行，当微任务也执行完毕后一轮事件循环就结束了，然后浏览器会重新渲染(请谨记这点，因为正是此原因才会导致文章开头所说的问题)。
之后再从队列中取出宏任务继续下一轮的事件循环，值得注意的一点是执行微任务时仍然可以继续产生微任务在本轮事件循环中不停的执行。所以本质上微任务的优先级是高于宏任务的



作者：o1o
链接：https://juejin.im/post/5a45fdeb6fb9a044ff31c9a8  (好好再看看这个blog中的更新流程) [./vue_nexttick.html 为blog中的例子，文章中最后一个问题，测试答案是可以的，
猜测原因是vue改变了策略，不再使用宏任务，而是统一使用微任务]
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。





30. javascript array slice()

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]


31. 加强版本dobounce/ throttle

// 代码2
const debounce = (func, wait = 0) => {
  let timeout = null
  let args
  function debounced(...arg) {
    args = arg
    if(timeout) {
      clearTimeout(timeout)
      timeout = null
    }
    // 以Promise的形式返回函数执行结果
    return new Promise((res, rej) => {
      timeout = setTimeout(async () => {
        try {
          const result = await func.apply(this, args)
          res(result)
        } catch(e) {
          rej(e)
        }
      }, wait)
    })
  }
  // 允许取消
  function cancel() {
    clearTimeout(timeout)
    timeout = null
  }
  // 允许立即执行
  function flush() {
    cancel()
    return func.apply(this, args)
  }
  debounced.cancel = cancel
  debounced.flush = flush
  return debounced
}


// 值得注意的地方：
    Promise 的使用
    将函数作为属性挂载在debounced 上
    await





const throttle = (func, wait = 0, execFirstCall) => {
  let timeout = null
  let args
  let firstCallTimestamp


  function throttled(...arg) {
    if (!firstCallTimestamp) firstCallTimestamp = new Date().getTime()
    if (!execFirstCall || !args) {
      console.log('set args:', arg)
      args = arg
    }
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
    // 以Promise的形式返回函数执行结果
    return new Promise(async(res, rej) => {
      if (new Date().getTime() - firstCallTimestamp >= wait) {
        try {
          const result = await func.apply(this, args)
          res(result)
        } catch (e) {
          rej(e)
        } finally {
          cancel()
        }
      } else {
        timeout = setTimeout(async () => {
          try {
            const result = await func.apply(this, args)
            res(result)
          } catch (e) {
            rej(e)
          } finally {
            cancel()
          }
        }, firstCallTimestamp + wait - new Date().getTime())
      }
    })
  }
  // 允许取消
  function cancel() {
    clearTimeout(timeout)
    args = null
    timeout = null
    firstCallTimestamp = null
  }
  // 允许立即执行
  function flush() {
    cancel()
    return func.apply(this, args)
  }
  throttled.cancel = cancel
  throttled.flush = flush
  return throttle
}









32. DOM 标准：


关于 DOM 事件标准
你知道下面 3 种事件监听方式的区别吗？

复制// 方式1
<input type="text" onclick="click()"/>
// 方式2
document.querySelector('input').onClick = function(e) {
  // ...
}
// 方式3
document.querySelector('input').addEventListener('click', function(e) {
  //...
})
方式 1 和方式 2 同属于 DOM0 标准，通过这种方式进行事件监会覆盖之前的事件监听函数。

方式 3 属于 DOM2 标准，推荐使用这种方式。同一元素上的事件监听函数互不影响，而且可以独立取消，调用顺序和监听顺序一致。


33. async / await  // https://yangbo5207.github.io/wutongluo/ji-chu-jin-jie-xi-lie/fu-jian-2-async-await.html


async函数是Generator的一个语法糖。如果你不知道Generator是什么函数也没有关系，我们只需要知道async函数实际上返回的是一个Promise对象即可。

async function fn() {
    return 30;
}

// 或者
const fn = async () => {
    return 30;
}
在声明函数时，前面加上关键字async，这就是async的用法。当我们用console.log打印出上面声明的函数fn，我们可以看到如下结果：

console.log(fn());

// result
Promise = {
    __proto__: Promise,
    [[PromiseStatus]]: "resolved",
    [[PromiseValue]]: 30
}
很显然，fn的运行结果其实就是一个Promise对象。因此我们也可以使用then来处理后续逻辑。

fn().then(res => {
    console.log(res);  // 30
})


await的含义为等待。意思就是代码需要等待await后面的函数运行完并且有了返回结果之后，才继续执行下面的代码。这正是同步的效果。

但是我们需要注意的是，await关键字只能在async函数中使用。并且await后面的函数运行后必须返回一个Promise对象才能实现同步的效果。

当我们使用一个变量去接收await的返回值时，该返回值为Promise中resolve出来的值（也就是PromiseValue）。


// 定义一个返回Promise对象的函数
function fn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30);
        }, 1000);
    })
}

// 然后利用async/await来完成代码
const foo = async () => {
	  console.log("not wait");
    const t = await fn();
    console.log(t);
    console.log('next code');
}

foo();

// result:
// not wait
// 30
// next code


运行这个例子我们可以看出，当在async函数中，运行遇到await时，就会等待await后面的函数运行完毕，而不会直接执行next code。


如果我们直接使用then方法的话，想要达到同样的结果，就不得不把后续的逻辑写在then方法中。

const foo = () => {
    return fn().then(t => {
        console.log(t);
        console.log('next code');    
    })
}

foo();
很显然如果使用async/await的话，代码结构会更加简洁，逻辑也更加清晰。



异常处理
在Promise中，我们知道是通过catch的方式来捕获异常。而当我们使用async时，则通过try/catch来捕获异常。

function fn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('some error.');
        }, 1000);
    })
}

const foo = async () => {
    try {
        await fn();
    } catch (e) {
        console.log(e);  // some error
    }
}

foo();




如果有多个await函数，那么只会返回第一个捕获到的异常。

function fn1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('some error fn1.');
        }, 1000);
    })
}
function fn2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('some error fn2.');
        }, 1000);
    })
}

const foo = async () => {
    try {
        await fn1();
        await fn2();
    } catch (e) {
        console.log(e);  // some error fn1.
    }
}

foo();


34. ... 运算符


// 这种方式在react中十分常用
const props = {
  size: 1,
  src: 'xxxx',
  mode: 'si'
}


const { size, ...others } = props;

console.log(others) // {  src: 'xxxx', mode: 'si'}

// 然后再利用展开运算符传递给下一个元素，再以后封装react组件时会大量使用到这种方式，正在学习react的同学一定要搞懂这种使用方式
<button {...others} size={size} />


35. es6 class

class Person {
  constructor(name, age) {  // 构造函数
    this.name = name;
    this.age = age;
  }

  getName() {   // 这种写法表示将方法添加到原型中
    return this.name
  }

  static a = 20;  // 等同于 Person.a = 20

  c = 20;   // 表示在构造函数中添加属性 在构造函数中等同于 this.c = 20

// 箭头函数的写法表示在构造函数中添加方法，在构造函数中等同于this.getAge = function() {}
  getAge = () => this.age   

}
























36. flex 布局实战


37. Promise 实战 // http://www.fly63.com/article/detial/6299



38. 经典面试：

var a = 1
function out(){
    var a = 2
    inner()
}
function inner(){
    console.log(a)
}
out()  //====>  1


作用域链
当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。
这样由多个执行上下文的变量对象构成的链表就叫做作用域链。


40. exection stack

对于每个执行上下文都有三个重要的属性，变量对象（Variable object，VO），作用域链（Scope chain）和this。这三个属性跟代码运行的行为有很重要的关系。

https://medium.com/@5066aman/lexical-environment-the-hidden-part-to-understand-closures-71d60efac0e0


http://speakingjs.com/es5/ch16.html  // greate blog



https://medium.com/@bdov_/javascript-typescript-execution-vs-lexical-vs-variable-environment-37ff3f264831

Function 的内部属性 
  [[Scope]]
  [[Environment]]



41. css 命名

这里简单补充一下 BEM 相关知识，

BEM 是 Block、Element、Modifier 三个单词的缩写，Block 代表独立的功能组件，Element 代表功能组件的一个组成部分，Modifier 对应状态信息。



对于样式文件的管理，推荐使用 7-1 模式简化后的目录结构，包括 pages/、components/、abastracts/、base/ 4 个目录。对于样式命名，可以采用 BEM 来命名组件、面向属性的方式来命名公共样式。

42. browser 

这一课时主要讲解了浏览器渲染引擎生成页面的 7 个步骤，前面 4 个步骤为 DOM 树的生成过程，后面 3 个步骤是利用 DOM 树和 CSSOM 树来渲染页面的过程。我们想要理解和记忆这些过程其实很简单，那就是以数据变化为线索，具体来说数据的变化过程为：

字节 → 字符 → 令牌 → 树 → 页面

43. v8


首先 V8 会接收到要执行的 JavaScript 源代码，不过这对 V8 来说只是一堆字符串，V8 并不能直接理解这段字符串的含义，它需要结构化这段字符串。结构化，是指信息经过分析后可分解成多个互相关联的组成部分，各组成部分间有明确的层次结构，方便使用和维护，并有一定的操作规范。

V8 源代码的结构化之后，就生成了抽象语法树 (AST)，我们称为 AST，AST 是便于 V8 理解的结构。

这里还需要注意一点，在生成 AST 的同时，V8 还会生成相关的作用域，作用域中存放相关变量，我们会在《 06 | 作用域链：V8 是如何查找变量的？》和《12 | 延迟解析：V8 是如何实现闭包的？》这两个节课中详细分析。

理解了这一点，我们就可以来深入分析 V8 执行一段 JavaScript 代码所经历的主要流程了，这包括了：
  初始化基础环境；
  解析源码生成 AST 和作用域；
  依据 AST 和作用域生成字节码；
  解释执行字节码；
  监听热点代码；
  优化热点代码为二进制的机器代码；
  反优化生成的二进制机器代码。





虽然 JavaScript 是基于对象设计的，但是它却不是一门面向对象的语言 (Object-Oriented Programming Language)，因为面向对象语言天生支持封装、继承、多态，但是 JavaScript 并没有直接提供多态的支持，因此要在 JavaScript 中使用多态并不是一件容易的事。



也就是说，函数除了可以拥有常用类型的属性值之外，还拥有两个隐藏属性，分别是 name 属性和 code 属性。

隐藏 name 属性的值就是函数名称，如果某个函数没有设置函数名，则该函数对象的默认的 name 属性值就是 anonymous，表示该函数对象没有被设置名称。

另外一个隐藏属性是 code 属性，其值表示函数代码，以字符串的形式存储在内存中。当执行到一个函数调用语句时，V8 便会从函数对象中取出 code 属性值，也就是函数代码，然后再解释执行这段函数代码。


我们也把这种将外部变量和和函数绑定起来的技术称为闭包。V8 在实现闭包的特性时也做了大量的额外的工作，关于闭包的详细实现，我们会在《12 | 延迟解析：V8 是如何实现闭包的？》这节课再介绍。



在 ECMAScript 规范中定义了数字属性应该按照索引值大小升序排列，字符串属性根据创建时的顺序升序排列。

p在这里我们把对象中的数字属性称为排序属性，在v8中被称为elements,字符串属性被称为常规属性，在v8中被称为properties.


在 V8 内部，为了有效地提升存储和访问这两种属性的性能，分别使用了两个线性数据结构来分别保存排序属性和常规属性。

分解成这两种线性数据结构之后，如果执行索引操作，那么 V8 会先从 elements 属性中按照顺序读取所有的元素，然后再在 properties 属性中读取所有的元素，这样就完成一次索引操作。


本文我们的主要目标是介绍 V8 内部是如何存储对象的，因为 JavaScript 中的对象是由一组组属性和值组成的，所以最简单的方式是使用一个字典来保存属性和值，但是由于字典是非线性结构，所以如果使用字典，读取效率会大大降低。

为了提升查找效率，V8 在对象中添加了两个隐藏属性，排序属性和常规属性，指向了 elements 对象，在 elements 对象中，会按照顺序存放排序属性。properties 属性则指向了 properties 对象，在 properties 对象中，会按照创建时的顺序保存常规属性。

通过引入这两个属性，加速了 V8 查找属性的速度，为了更加进一步提升查找效率，V8 还实现了内置内属性的策略，当常规属性少于一定数量时，V8 就会将这些常规属性直接写进对象中，这样又节省了一个中间步骤。

但是如果对象中的属性过多时，或者存在反复添加或者删除属性的操作，那么 V8 就会将线性的存储模式降级为非线性的字典存储模式，这样虽然降低了查找速度，但是却提升了修改对象的属性的速度。



上面这段就是 V8 生成的作用域，我们可以看到，作用域中包含了变量 x 和 foo，变量 x 的默认值是 undefined，变量 foo 指向了 foo 函数对象，foo 函数对象被 V8 存放在内存中的堆空间了，这些变量都是在编译阶段被装进作用域中的。

因为在执行之前，这些变量都被提升到作用域中了，所以在执行阶段，V8 当然就能获取到所有的定义变量了。我们把这种在编译阶段，将所有的变量提升到作用域的过程称为



表达式是不会在编译阶段执行的。

function foo(){
  console.log("Foo");
}

执行上面这段代码，它并没有输出任何内容，所以可以肯定，函数声明并不是一个表达式，而是一个语句。
V8 在变量提升阶段，如果遇到函数声明，那么 V8 同样会对该函数声明执行变量提升操作。


函数也是一个对象，所以在编译阶段，V8 就会将整个函数对象提升到作用域中，并不是给该函数名称赋一个 undefined，理解这一点尤为重要。

总的来说，在 V8 解析 JavaScript 源码的过程中，
如果遇到普通的变量声明，那么便会将其提升到作用域中，并给该变量赋值为 undefined，
如果遇到的是函数声明，那么 V8 会在内存中为声明生成函数对象，并将该对象提升到作用域中。



函数声明和变量声明类似，V8 在编译阶段，都会对其执行变量提升的操作，将它们提升到作用域中，在执行阶段，如果使用了某个变量，就可以直接去作用域中去查找。

不过 V8 对于提升函数和提升变量的策略是不同的，如果提升了一个变量，那么 V8 在将变量提升到作用域中时，还会为其设置默认值 undefined，如果是函数声明，那么 V8 会在内存中创建该函数对象，并提升整个函数对象。


函数表达式也是表达式的一种，在编译阶段，V8 并不会将表达式中的函数对象提升到全局作用域中，所以无法在函数表达式之前使用该函数。函数立即表达式是一种特别的表达式，主要用来封装一些变量、函数，可以起到变量隔离和代码隐藏的作用，因此在一些大的开源项目中有广泛的应用。


var n = 1;
(function foo(){
  n = 100;
  console.log(n);
})();
console.log(n);



var n = 1;
function foo(){
  n = 100;
  console.log(n);
};
console.log(n);
foo();




在这里还要注意一点，不要将原型链接和作用域链搞混淆了，作用域链是沿着函数的作用域一级一级来查找变量的，而原型链是沿着对象的原型一级一级来查找属性的，虽然它们的实现方式是类似的，但是它们的用途是不同的，关于作用域链，我会在《06 | 作用域链：V8 是如何查找变量的？》这节课来介绍。



还记得我们介绍函数时提到关于函数有两个隐藏属性吗？这两个隐藏属性就是 name 和 code，其实函数还有另外一个隐藏属性，那就是 prototype，刚才介绍构造函数时我们也提到过。一个函数有以下几个隐藏属性：




44. Function __proto__

https://juejin.im/post/5cc99fdfe51d453b440236c3

对象的__proto__属性就是指向自己的原型对象。这里要注意，因为JS内所有函数都是Function函数的实例对象，所以Person函数也有个__proto__属性指向自己的原型对象，即Function函数的prototype。至于Function函数为何有个__proto__属性指向自己（蓝色箭头）也不用解释了吧，它拿自身作为自己的构造函数，反正就是个特例，不讲道理。


var obj = new Object();
obj.__proto__ === Object.prototype


为了解释清楚这个问题，我们引入了作用域的概念。作用域就是用来存放变量和函数的地方，全局作用域中存放了全局环境中声明的变量和函数，函数作用域中存放了函数中声明的变量和函数。当在某个函数中使用某个变量时，V8 就会去这些作用域中查找相关变量。沿着这些作用域查找的路径，我们就称为作用域链。

要了解查找路径，我们需要明白词法作用域，词法作用域是按照代码定义时的位置决定的，而 JavaScript 所采用的作用域机制就是词法作用域，所以作用域链的路径就是按照词法作用域来实现的。



通俗地理解，V8 会提供了一个 ToPrimitve 方法，其作用是将 a 和 b 转换为原生数据类型，其转换流程如下：

  先检测该对象中是否存在 valueOf 方法，如果有并返回了原始类型，那么就使用该值进行强制类型转换；
  如果 valueOf 没有返回原始类型，那么就使用 toString 方法的返回值；
  如果 vauleOf 和 toString 两个方法都不返回基本类型值，便会触发一个 TypeError 的错误。



所以说，在执行加法操作的时候，V8 会通过 ToPrimitve 方法将对象类型转换为原生类型，最后就是两个原生类型相加，如果其中一个值的类型是字符串时，则另一个值也需要强制转换为字符串，然后做字符串的连接运算。在其他情况时，所有的值都会转换为数字类型值，然后做数字的相加。


在 JavaScript 中，数字和字符串相加会返回一个新的字符串，这是因为 JavaScript 认为字符串和数字相加是有意义的，V8 会将其中的数字转换为字符，然后执行两个字符串的相加操作，最终得到的是一个新的字符串。

在 JavaScript 中，类型系统是依据 ECMAScript 标准来实现的，所以 V8 会严格根据 ECMAScript 标准来执行。在执行加法过程中，V8 会先通过 ToPrimitive 函数，将对象转换为原生的字符串或者是数字类型，在转换过程中，ToPrimitive 会先调用对象的 valueOf 方法，如果没有 valueOf 方法，则调用 toString 方法，如果 vauleOf 和 toString 两个方法都不返回基本类型值，便会触发一个 TypeError 的错误。


1 + "2" //"12"

1 - "2" // -1


问题：你认为作用域和执行上下文是什么关系？欢迎你在留言区与我分享讨论。

  作用域是逻辑概念，只要函数确定，作用域就确定了。执行上下文其实就是“栈帧”。作用域和子作用域有从属关系，是静态的。
  执行上下文是函数的调用关系，是动态的。

  1. 作用域是静态的，函数定义的时候就已经确定了。
  2. 执行上下文是动态的，调用函数时候创建，结束后还会释放。


// 细看 《图解V8》 09）运行时环境：运行JavaScript代码的基石



消息队列中的任务类型有哪些。你可以参考下Chromium 的官方源码，这里面包含了很多内部消息类型，如输入事件（鼠标滚动、点击、移动）、微任务、文件读写、WebSocket、JavaScript 定时器等等。

除此之外，消息队列中还包含了很多与页面相关的事件，如 JavaScript 执行、解析 DOM、样式计算、布局计算、CSS 动画等。

以上这些事件都是在主线程中执行的，所以在编写 Web 应用时，你还需要衡量这些事件所占用的时长，并想办法解决单个任务占用主线程过久的问题。




浏览器怎么实现 setTimeout
要了解定时器的工作原理，就得先来回顾下之前讲的事件循环系统，我们知道渲染进程中所有运行在主线程上的任务都需要先添加到消息队列，然后事件循环系统再按照顺序执行消息队列中的任务。下面我们来看看那些典型的事件：

    当接收到 HTML 文档数据，渲染引擎就会将“解析 DOM”事件添加到消息队列中，
    当用户改变了 Web 页面的窗口大小，渲染引擎就会将“重新布局”的事件添加到消息队列中。
    当触发了 JavaScript 引擎垃圾回收机制，渲染引擎会将“垃圾回收”任务添加到消息队列中。
    同样，如果要执行一段异步 JavaScript 代码，也是需要将执行任务添加到消息队列中。
以上列举的只是一小部分事件，这些事件被添加到消息队列之后，事件循环系统就会按照消息队列中的顺序来执行事件。


问题：今天我们介绍了 setTimeout，相信你现在也知道它是怎么工作的了，不过由于使用 setTimeout 设置的回调任务实时性并不是太好，所以很多场景并不适合使用 setTimeout。比如你要使用 JavaScript 来实现动画效果，函数 requestAnimationFrame 就是个很好的选择。

那么今天留给你的作业是：你需要网上搜索了解下 requestAnimationFrame 的工作机制，并对比 setTimeout，然后分析出 requestAnimationFrame 实现的动画效果比 setTimeout 好的原因。

使用 requestAnimationFrame 不需要设置具体的时间，由系统来决定回调函数的执行时间，requestAnimationFrame 里面的回调函数是在页面刷新之前执行，它跟着屏幕的刷新频率走，保证每个刷新间隔只执行一次，内如果页面未激活的话，requestAnimationFrame 也会停止渲染，这样既可以保证页面的流畅性，又能节省主线程执行函数的开销




同步回调就是在当前主函数的上下文中执行回调函数，这个没有太多可讲的。下面我们主要来看看异步回调过程，异步回调是指回调函数在主函数之外执行，一般有两种方式：

第一种是把异步函数做成一个任务，添加到信息队列尾部；
第二种是把异步函数添加到微任务队列中，这样就可以在当前任务的末尾处执行微任务了。


对比上一篇文章，setTimeout 是直接将延迟任务添加到延迟队列中，而 XMLHttpRequest 发起请求，是由浏览器的其他进程或者线程去执行，然后再将执行结果利用 IPC 的方式通知渲染进程，之后渲染进程再将对应的消息添加到消息队列中。如果你搞懂了 setTimeout 和 XMLHttpRequest 的工作机制后，再来理解其他 WebAPI 就会轻松很多了，因为大部分 WebAPI 的工作逻辑都是类似的。



浏览器的应用领域越来越广泛，消息队列中这种粗时间颗粒度的任务已经不能胜任部分领域的需求，所以又出现了一种新的技术——微任务。微任务可以在实时性和效率之间做一个有效的权衡。

从目前的情况来看，微任务已经被广泛地应用，基于微任务的技术有 MutationObserver、Promise 以及以 Promise 为基础开发出来的很多其他的技术。



宏任务
前面我们已经介绍过了，页面中的大部分任务都是在主线程上执行的，这些任务包括了：

渲染事件（如解析 DOM、计算布局、绘制）；
用户交互事件（如鼠标点击、滚动页面、放大缩小等）；
JavaScript 脚本执行事件；
网络请求完成、文件读写完成事件。
为了协调这些任务有条不紊地在主线程上执行，页面进程引入了消息队列和事件循环机制，渲染进程内部会维护多个消息队列，比如延迟执行队列和普通的消息队列。然后主线程采用一个 for 循环，不断地从这些任务队列中取出任务并执行任务。我们把这些消息队列中的任务称为宏任务。



微任务和宏任务是绑定的，每个宏任务在执行时，会创建自己的微任务队列。
微任务的执行时长会影响到当前宏任务的时长。比如一个宏任务在执行过程中，产生了 100 个微任务，执行每个微任务的时间是 10 毫秒，那么执行这 100 个微任务的时间就是 1000 毫秒，也可以说这 100 个微任务让宏任务的执行时间延长了 1000 毫秒。所以你在写代码的时候一定要注意控制微任务的执行时长。
在一个宏任务中，分别创建一个用于回调的宏任务和微任务，无论什么情况下，微任务都早于宏任务执行。



《浏览器工作原理与实践 》之 19丨Promise：使用Promise，告别回调函数
第一是嵌套调用，下面的任务依赖上个任务的请求结果，并在上个任务的回调函数内部执行新的业务逻辑，这样当嵌套层次多了之后，代码的可读性就变得非常差了。
第二是任务的不确定性，执行每个任务都有两种可能的结果（成功或者失败），所以体现在代码中就需要对每个任务的执行结果做两次判断，这种对每个任务都要进行一次额外的错误处理的方式，明显增加了代码的混乱程度。
原因分析出来后，那么问题的解决思路就很清晰了：

第一是消灭嵌套调用；
第二是合并多个任务的错误处理。
这么讲可能有点抽象，不过 Promise 已经帮助我们解决了这两个问题。


是因为 Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被 onReject 函数处理或 catch 语句捕获为止。具备了这样“冒泡”的特性后，就不需要在每个 Promise 对象中单独捕获异常了。



问题：（自己想）
  Promise 中为什么要引入微任务？
Promise 中是如何实现回调函数返回值穿透的？
Promise 出错后，是怎么通过“冒泡”传递给最后那个捕获异常的函数？




 DOMContentLoaded 和 Load 两个事件，以及这两个事件的完成时间。

DOMContentLoaded，这个事件发生后，说明页面已经构建好 DOM 了，这意味着构建 DOM 所需要的 HTML 文件、JavaScript 文件、CSS 文件都已经下载完成了。
Load，说明浏览器已经加载了所有的资源（图像、样式表等）。





Promise 通过回调函数延迟绑定、回调函数返回值穿透和和错误“冒泡”技术 // Promise 的 core




我在两段 div 中间插入了一段 JavaScript 脚本，这段脚本的解析过程就有点不一样了。<script>标签之前，所有的解析流程还是和之前介绍的一样，但是解析到<script>标签时，渲染引擎判断这是一段脚本，此时 HTML 解析器就会暂停 DOM 的解析，因为接下来的 JavaScript 可能要修改当前已经生成的 DOM 结构。



因为JavaScript 文件的下载过程会阻塞 DOM 解析，而通常下载又是非常耗时的，会受到网络环境、JavaScript 文件大小等因素的影响。

不过 Chrome 浏览器做了很多优化，其中一个主要的优化是预解析操作。当渲染引擎收到字节流之后，会开启一个预解析线程，用来分析 HTML 文件中包含的 JavaScript、CSS 等相关文件，解析到相关文件之后，预解析线程会提前下载这些文件。


async 和 defer 虽然都是异步的，不过还有一些差异，使用 async 标志的脚本文件一旦加载完成，会立即执行；而使用了 defer 标记的脚本文件，需要在 DOMContentLoaded 事件之前执行。

执行 JavaScript 之前，需要先解析 JavaScript 语句之上所有的 CSS 样式。所以如果代码里引用了外部的 CSS 文件，那么在执行 JavaScript 之前，还需要等待外部的 CSS 文件下载完成，并解析生成 CSSOM 对象之后，才能执行 JavaScript 脚本。


而 JavaScript 引擎在解析 JavaScript 之前，是不知道 JavaScript 是否操纵了 CSSOM 的，所以渲染引擎在遇到 JavaScript 脚本时，不管该脚本是否操纵了 CSSOM，都会执行 CSS 文件下载，解析操作，再执行 JavaScript 脚本。

 JavaScript 脚本是依赖样式表的，


 JavaScript 会阻塞 DOM 生成，而样式文件又会阻塞 JavaScript 的执行，所以在实际的工程中需要重点关注 JavaScript 文件和样式表文件，使用不当会影响到页面性能的。



 和 DOM 一样，CSSOM 也具有两个作用，第一个是提供给 JavaScript 操作样式表的能力，第二个是为布局树的合成提供基础的样式信息。



 在解析 DOM 的过程中，如果遇到了 JavaScript 脚本，那么需要先暂停 DOM 解析去执行 JavaScript，因为 JavaScript 有可能会修改当前状态下的 DOM。

不过在执行 JavaScript 脚本之前，如果页面中包含了外部 CSS 文件的引用，或者通过 style 标签内置了 CSS 内容，那么渲染引擎还需要将这些内容转换为 CSSOM，因为 JavaScript 有修改 CSSOM 的能力，所以在执行 JavaScript 之前，还需要依赖 CSSOM。也就是说 CSS 在部分情况下也会阻塞 DOM 的生成。



不管 CSS 文件和 JavaScript 文件谁先到达，都要先等到 CSS 文件下载完成并生成 CSSOM，然后再执行 JavaScript 脚本，最后再继续构建 DOM，构建布局树，绘制页面。 !!!!!!!!



主要问题是白屏时间，如果白屏时间过久，就会影响到用户体验。为了缩短白屏时间，我们来挨个分析这个阶段的主要任务，包括了解析 HTML、下载 CSS、下载 JavaScript、生成 CSSOM、执行 JavaScript、生成布局树、绘制页面一系列操作。

通常情况下的瓶颈主要体现在下载 CSS 文件、下载 JavaScript 文件和执行 JavaScript。


所以要想缩短白屏时长，可以有以下策略：

通过内联 JavaScript、内联 CSS 来移除这两种类型的文件下载，这样获取到 HTML 文件之后就可以直接开始渲染流程了。
但并不是所有的场合都适合内联，那么还可以尽量减少文件大小，比如通过 webpack 等工具移除一些不必要的注释，并压缩 JavaScript 文件。
还可以将一些不需要在解析 HTML 阶段使用的 JavaScript 标记上 sync 或者 defer。
对于大的 CSS 文件，可以通过媒体查询属性，将其拆分为多个不同用途的 CSS 文件，这样只有在特定的场景下才会加载特定的 CSS 文件。
通过以上策略就能缩短白屏展示的时长了，不过在实际项目中，总是存在各种各样的情况，这些策略并不能随心所欲地去引用，所以还需要结合实际情况来调整最佳方案。






渲染流水线。关于其中任意一帧的生成方式，有重排、重绘和合成三种方式。

这三种方式的渲染路径是不同的，通常渲染路径越长，生成图像花费的时间就越多。比如重排，它需要重新根据 CSSOM 和 DOM 来计算布局树，这样生成一幅图片时，会让整个渲染流水线的每个阶段都执行一遍，如果布局复杂的话，就很难保证渲染的效率了。而重绘因为没有了重新布局的阶段，操作效率稍微高点，但是依然需要重新计算绘制信息，并触发绘制操作之后的一系列操作。

相较于重排和重绘，合成操作的路径就显得非常短了，并不需要触发布局和绘制两个阶段，如果采用了 GPU，那么合成的效率会非常高。

所以，关于渲染引擎生成一帧图像的几种方式，按照效率我们推荐合成方式优先，若实在不能满足需求，那么就再退后一步使用重绘或者重排的方式。

本文我们的焦点在合成上，所以接下来我们就来深入分析下 Chrome 浏览器是怎么实现合成操作的。Chrome 中的合成技术，可以用三个词来概括总结：分层、分块和合成。


合成操作是在合成线程上完成的，这也就意味着在执行合成操作时，是不会影响到主线程执行的。这就是为什么经常主线程卡住了，但是 CSS 动画依然能执行的原因。


在写 Web 应用的时候，你可能经常需要对某个元素做几何形状变换、透明度变换或者一些缩放操作，如果使用 JavaScript 来写这些效果，会牵涉到整个渲染流水线，所以 JavaScript 的绘制效率会非常低下。

这时你可以使用 will-change 来告诉渲染引擎你会对该元素做一些特效变换，CSS 代码如下：

.box {
    will-change: transform, opacity;
}
这段代码就是提前告诉渲染引擎 box 元素将要做几何变换和透明度变换操作，这时候渲染引擎会将该元素单独实现一帧，等这些变换发生时，渲染引擎会通过合成线程直接去处理变换，这些变换并没有涉及到主线程，这样就大大提升了渲染的效率。这也是 CSS 动画比 JavaScript 动画高效的原因。




好了，今天就介绍到这里，下面我来总结下今天的内容。

首先我们介绍了显示器显示图像的原理，以及帧和帧率的概念，然后基于帧和帧率我们又介绍渲染引擎是如何实现一帧图像的。通常渲染引擎生成一帧图像有三种方式：重排、重绘和合成。其中重排和重绘操作都是在渲染进程的主线程上执行的，比较耗时；而合成操作是在渲染进程的合成线程上执行的，执行速度快，且不占用主线程。
然后我们重点介绍了浏览器是怎么实现合成的，其技术细节主要可以使用三个词来概括：分层、分块和合成。
最后我们还讲解了 CSS 动画比 JavaScript 动画高效的原因，以及怎么使用 will-change 来优化动画或特效。



通过前面文章的讲解，你应该已经知道了并非所有的资源都会阻塞页面的首次绘制，比如图片、音频、视频等文件就不会阻塞页面的首次渲染；而 JavaScript、首次请求的 HTML 资源文件、CSS 文件是会阻塞首次渲染的，因为在构建 DOM 的过程中需要 HTML 和 JavaScript 文件，在构造渲染树的过程中需要用到 CSS 文件。




/浏览器工作原理与实践/06-浏览器中的页面 (8讲)/25丨页面性能：如何系统地优化页面？.html  *****



DOM 的缺陷
通过前面一系列文章的学习，你对 DOM 的生成过程应该已经有了比较深刻的理解，并且也知道了通过 JavaScript 操纵 DOM 是会影响到整个渲染流水线的。另外，DOM 还提供了一组 JavaScript 接口用来遍历或者修改节点，这套接口包含了 getElementById、removeChild、appendChild 等方法。

比如，我们可以调用document.body.appendChild(node)往 body 节点上添加一个元素，调用该 API 之后会引发一系列的连锁反应。首先渲染引擎会将 node 节点添加到 body 节点之上，然后触发样式计算、布局、绘制、栅格化、合成等任务，我们把这一过程称为重排。除了重排之外，还有可能引起重绘或者合成操作，形象地理解就是“牵一发而动全身”。另外，对于 DOM 的不当操作还有可能引发强制同步布局和布局抖动的问题，这些操作都会大大降低渲染效率。因此，对于 DOM 的操作我们时刻都需要非常小心谨慎。



/浏览器工作原理与实践/05-浏览器中的页面循环系统%20(6讲)/20丨async-await：使用同步的方式去写异步代码.html




HTTP/1.1 的主要问题
虽然 HTTP/1.1 采取了很多优化资源加载速度的策略，也取得了一定的效果，但是 HTTP/1.1对带宽的利用率却并不理想，这也是 HTTP/1.1 的一个核心问题。

带宽是指每秒最大能发送或者接收的字节数。我们把每秒能发送的最大字节数称为上行带宽，每秒能够接收的最大字节数称为下行带宽。

之所以说 HTTP/1.1 对带宽的利用率不理想，是因为 HTTP/1.1 很难将带宽用满。比如我们常说的 100M 带宽，实际的下载速度能达到 12.5M/S，而采用 HTTP/1.1 时，也许在加载页面资源时最大只能使用到 2.5M/S，很难将 12.5M 全部用满。


HTTP/2 的解决方案可以总结为：一个域名只使用一个 TCP 长连接和消除队头阻塞问题。


HTTP/2 添加了一个二进制分帧层，那我们就结合图来分析下 HTTP/2 的请求和接收过程。

首先，浏览器准备好请求数据，包括了请求行、请求头等信息，如果是 POST 方法，那么还要有请求体。
这些数据经过二进制分帧层处理之后，会被转换为一个个带有请求 ID 编号的帧，通过协议栈将这些帧发送给服务器。
服务器接收到所有帧之后，会将所有相同 ID 的帧合并为一条完整的请求信息。
然后服务器处理该条请求，并将处理的响应行、响应头和响应体分别发送至二进制分帧层。
同样，二进制分帧层会将这些响应数据转换为一个个带有请求 ID 编号的帧，经过协议栈发送给浏览器。
浏览器接收到响应帧之后，会根据 ID 编号将帧的数据提交给对应的请求。
从上面的流程可以看出，通过引入二进制分帧层，就实现了 HTTP 的多路复用技术。




HTTP/3 选择了一个折衷的方法——UDP 协议，基于 UDP 实现了类似于 TCP 的多路数据流、传输可靠性等功能，我们把这套功能称为QUIC 协议。


// 这个说的挺有见解
我的看法：这些年但凡觉得TCP不满足自己需求的人，基本都是在UDP上重新“发明”一套自己的流控和包顺序控制算法。说白了吧，就是重新造轮子再做一个（自己认为）更好的TCP。只是这类型的协议，目前没有一个能真的威胁到TCP的，固然有老师说的TCP协议僵化存在的原因，但是我也在想：TCP就真的这么不堪吗

XSS 全称是 Cross Site Scripting，为了与“CSS”区分开来，故简称 XSS，翻译过来就是“跨站脚本”。XSS 攻击是指黑客往 HTML 文件中或者 DOM 中注入恶意脚本，从而在用户浏览页面时利用注入的恶意脚本对用户实施攻击的一种手段。

通常情况下，主要有存储型 XSS 攻击、反射型 XSS 攻击和基于 DOM 的 XSS 攻击三种方式来注入恶意脚本。


Web 服务器不会存储反射型 XSS 攻击的恶意脚本，这是和存储型 XSS 攻击不同的地方。




CSRF 英文全称是 Cross-site request forgery，所以又称为“跨站请求伪造”，是指黑客引诱用户打开黑客的网站，在黑客的网站中，利用用户的登录状态发起的跨站请求。简单来讲，CSRF 攻击就是黑客利用了用户的登录状态，并通过第三方的站点来做一些坏事。



和 XSS 不同的是，CSRF 攻击不需要将恶意代码注入用户的页面，仅仅是利用服务器的漏洞和用户的登录状态来实施攻击




首先假设你发出登录InfoQ的站点请求，然后在InfoQ返回HTTP响应头给浏览器，InfoQ响应头中的某些set-cookie字段如下所示：
set-cookie: a_value=avalue_xxx; expires=Thu, 21-Nov-2019 03:53:16 GMT; path=/; domain=.infoq.com; SameSite=strict
set-cookie: b_value=bvalue_xxx; expires=Thu, 21-Nov-2019 03:53:16 GMT; path=/; domain=.infoq.com; SameSite=lax
set-cookie: c_value=cvaule_xxx; expires=Thu, 21-Nov-2019 03:53:16 GMT; path=/; domain=.infoq.com; SameSite=none
set-cookie: d_value=dvaule_xxxx; expires=Thu, 21-Nov-2019 03:53:16 GMT; path=/; domain=.infoq.com;


我们可以看出，
a_value的SameSite属性设置成了strict，
b_value的SameSite属性设置成了lax
c_value的SameSite属性值设置成了none
d_value没有设置SameSite属性值


好，这些Cookie设置好之后，当你再次在InfoQ的页面内部请求InfoQ的资源时，这些Cookie信息都会被附加到HTTP的请求头中，如下所示：
cookie: a_value=avalue_xxx;b_value=bvalue_xxx;c_value=cvaule_xxx;d_value=dvaule_xxxx;

但是，假如你从time.geekbang.org的页面中，通过a标签打开页面，如下所示：
<a href="https://www.infoq.cn/sendcoin?user=hacker&number=100">点我下载</a>
当用户点击整个链接的时候，因为InfoQ中a_vaule的SameSite的值设置成了strict，那么a_vaule的值将不会被携带到这个请求的HTTP头中。

如果time.geekbang.org的页面中，有通过img来加载的infoq的资源代码，如下所示：
 <img src="https://www.infoq.cn/sendcoin?user=hacker&number=100">
那么在加载infoQ资源的时候，只会携带c_value,和d_value的值。


这样写不知道你明白没有，如果还有疑惑欢迎继续提问。



我们知道浏览器被划分为两个核心模块，其中浏览器内核是由网络进程、浏览器主进程和 GPU 进程组成的，渲染内核就是渲染进程。那如果我们在浏览器中打开一个页面，这两个模块是怎么配合的呢？


所有的网络资源都是通过浏览器内核来下载的，下载后的资源会通过 IPC 将其提交给渲染进程（浏览器内核和渲染进程之间都是通过 IPC 来通信的）。然后渲染进程会对这些资源进行解析、绘制等操作，最终生成一幅图片。但是渲染进程并不负责将图片显示到界面上，而是将最终生成的图片提交给浏览器内核模块，由浏览器内核模块负责显示这张图片。



浏览器工作原理与实践/08-浏览器安全%20(5讲)/35丨安全沙箱：页面和系统之间的隔离墙.html  // 更高的维度讲解的浏览器架构





44. 观察者模式


45. node
  1) 资源压缩 zlib
  2) 文件读取 fs
      同步/异步
  3）DNS域名解析
  4）http 模块是基于stream 模块


//  https://stackoverflow.com/questions/59750976/what-are-primordials-in-node-js


46. 又一道坑爹的js题目：

https://www.zhihu.com/question/41220520



let a = {n: 1};
let b = a;
a.x = a = {n: 2};
console.log(a.x);
console.log(b);



JS引擎是怎样计算一般的赋值表达式 A = B的呢？简单地说，按如下步骤：

   1） 计算表达式A，得到一个引用refA；

   2）  计算表达式B，得到一个值valueB；

   3）  将valueB赋给refA指向的名称绑定；

   4）  返回valueB。


window.requestAnimationFrame 应该是在每一帧的开始就执行吧？
作者回复: 应该说raf的回调任务会在每一帧的开始执行




47.  p标签 包含div 是不合法的。也就是说block元素不一定能包含block元素
  因为inline元素一般不能包含block元素
  特殊情况是 a标签是可以包含block元素的，因为这个时候browser是将a标签当做透明元素，即不存在

48. js中的坑

NaN == NaN // false
typeof NaN // number


除了特殊的几个值 ‘’ 、 undefined 、 NAN 、 null 、 false 、 0 转化为 Boolean 为 false
之外，其他类型值都转化为 true 。



Boolean('') // false 
Boolean(undefined) // false 
Boolean(null) // false 
Boolean(NaN) // false 
Boolean(false) // false 
Boolean(0) // false 
Boolean({}) // true 
Boolean([]) // true




转化原始类型分为两种情况：转化为字符串类型或其他原始类型。
    如果已经是原始类型，不需要再进行转化。
    如果转字符串类型，就调用内置函数中的 toString() 方法。
    如果是其他基本类型，则调用内置函数中的 valueOf() 方法。
    如果返回的不是原始类型，则会继续调用 toString() 方法。
    如果还没有返回原始类型，则报错。



一共有四种数据类型检测：
typeof ：
instanceof
constructor
Object.prototype.toString.call()




面试官：为什么 typeof null 等于 Object?
不同的对象在底层原理的存储是用二进制表示的，在 javaScript 中，如果二进制的前三位都为 0 的
话，系统会判定为是 Object 类型。 null 的存储二进制是 000 ，也是前三位，所以系统判定 null 为 Object 类型。
扩展：
这个 bug 个第一版的 javaScript 留下来的。俺也进行扩展一下其他的几个类型标志位：
000 ：对象类型。
1 ：整型，数据是31位带符号整数。
010 ：双精度类型，数据是双精度数字。
100 ：字符串，数据是字符串。
110 ：布尔类型，数据是布尔值。



四则运算法则中，除了加法之外，其余都是数学计算。在 JS 中只有【加法】可能存在字符串拼接（一
旦遇到字符串，则不是数学运算，而是字符串拼接）

其他算术运算符（比如减法、除法和乘法）都不会发生重载。它们的规则是：所有运算子一
律转为数值，再进行相应的数学运算。




赋值操作

A && B
  首先看 A 的真假， A 为假，返回 A 的值， A 为真返回 B 的值。（不管 B 是啥）
  console.log(0 && 1) // 0 
  console.log(1 && 2) // 2 

A || B
  首先看 A 的真假， A 为真返回的是 A 的值， A 为假返回的是 B 的值（不管 B 是啥）
  console.log(0 || 1) // 1 
  console.log(1 || 2) // 1




0.1 + 0.2 // 0.30000000000000004
出现这种情况的原因在于计算的时候，JavaScript 引擎会先将十进制数转换为二进制，然后进行加法运算，再将所得结果转换为十进制。在进制转换过程中如果小数位是无限的，就会出现误差。


[undefined, null, true, '', 0, Symbol(), {}].map(it => typeof it)// ["undefined", "object", "boolean", "string", "number", "symbol", "object"]


// 在遍历 Object 类型数据时，我们需要把 Symbol 数据类型也考虑进来，所以不能通过 Object.keys 获取键名或 for...in 方式遍历，而是通过 getOwnPropertyNames 和 getOwnPropertySymbols 函数将键名组合成数组，然后进行遍历。对于键数组长度为 0 的非 Object 类型的数据可直接返回，然后再遍历递归，最终实现拷贝。


function clone(data) {
  let result = {}
  const keys = [...Object.getOwnPropertyNames(data), ...Object.getOwnPropertySymbols(data)]
  if(!keys.length) return data
  keys.forEach(key => {
    let item = data[key]
    if (typeof item === 'object' && item) {
      result[key] = clone(item)
    } else {
      result[key] = item
    }
  })
  return result
}


// 针对变量互相引用的改进版本
function clone(obj) {
  let map = new WeakMap()
  function deep(data) {
    let result = {}
    const keys = [...Object.getOwnPropertyNames(data), ...Object.getOwnPropertySymbols(data)]
    if(!keys.length) return data
    const exist = map.get(data)
    if (exist) return exist
    map.set(data, result)
    keys.forEach(key => {
      let item = data[key]
      if (typeof item === 'object' && item) {
        result[key] = deep(item)
      } else {
        result[key] = item
      }
    })
    return result
  }
  return deep(obj)
}






let b = '10';
 switch(b){ case 10: b++; break; default: b--; }
console.log(b); // 9

//if （==）和 switch （===）的区别




手写call：

  
    首先 context 为可选参数，如果不传的话默认上下文为 window ；
    接下来给 context 创建一个 fn 属性，并将值设置为需要调用的函数；
    因为 call 可以传入多个参数作为调用函数的参数，所以需要将参数剥离出来；
    然后调用函数并将对象上的函数删除。
// this 为调用的函数 
// context 是参数对象 
Function.prototype.myCall = function(context){ 
  // 判断调用者是否为函数 if(typeof this !== 'function'){ throw new TypeError('Error') }
  // 不传参默认为 window 
   context = context || window 
  // 新增 fn 属性,将值设置为需要调用的函数 
   context.fn = this 
  // 将 arguments 转化为数组将 call 的传参提取出来 [...arguments] 
  const args = Array.from(arguments).slice(1) 
  // 传参调用函数 
    const result =  context.fn(...args) 
  // 删除函数 
  delete context.fn 
  // 返回执行结果 
  return result; 
  }


规定 变量和函数 的可使用范围叫做作用域


49. css基础

iconfont 原理是自定义字体
line-height 垂直居中
img 3px 问题 （默认按照base-line对齐） // https://stackoverflow.com/questions/2402761/is-img-element-block-level-or-inline-level 
img 是 inline元素，所以会按照base-line对齐，故存在3px 像素问题，但是又可以设置其宽高。


预处理器：嵌套，变量，mixin，extend,import

css 如何实现三角形  边框斜切


flex : flex-grow/flex-shrink/flex-basic

flex : 1   是 flex: 1 1 0 的缩写



       flex-wrap


       

 wwww.cnblogs.com/best/p/8093144.html (很好的css总结)

 三、特殊性（优先级）
a)、同类型，同级别的样式后者先于前者
b)、ID > 类样式 > 标签 > *
c)、内联>ID选择器>伪类>属性选择器>类选择器>标签选择器>通用选择器(*)>继承的样式
d)、具体 > 泛化的，特殊性即css优先级
e)、近的 > 远的 (内嵌样式 > 内部样式表 > 外联样式表)

内嵌样式：内嵌在元素中，<span style="color:red">span</span>

内部样式表：在页面中的样式，写在<style></style>中的样式

外联样式表：单独存在一个css文件中，通过link引入或import导入的样式
f)、!important 权重最高，比 inline style 还要高




3.2、计算特殊性值
important > 内嵌 > ID > 类 > 标签 | 伪类 | 属性选择 > 伪对象 > 继承 > 通配符
权重、特殊性计算法：
CSS样式选择器分为4个等级，a、b、c、d
1.如果样式是行内样式（通过Style=“”定义），那么a=1，1,0,0,0
2.b为ID选择器的总数 0,1,0,0
3.c为属性选择器，伪类选择器和class类选择器的数量。0,0,1,0

4.d为标签、伪元素选择器的数量 0,0,0,1

5.!important 权重最高，比 inline style 还要高

 比如结果为：1093比1100，按位比较，从左到右，只要一位高于则立即胜出，否则继续比较。


 chrome浏览器限制了最小字体大小为12px


CSS3新增伪类有那些?
p:first-of-type 选择属于其父元素的首个元素
p:last-of-type 选择属于其父元素的最后元素
p:only-of-type 选择属于其父元素唯一的元素
p:only-child 选择属于其父元素的唯一子元素
p:nth-child(2) 选择属于其父元素的第二个子元素
:enabled :disabled 表单控件的禁用状态。
:checked 单选框或复选框被选中。


CSS优化、提高性能的方法有哪些？？？ google


CSS动画CSS 中的 transform，transition 和 animation 是分开的三部分内容，其中 transfrom 主要是控制元素变形，并没有一个时间控制的概念，而 transition 和 animation 才是动画的部分，它们可以控制在一个时间段里，元素在两个或以上的状态切换的效果。


transition 相关的事件transitionend 事件会在 transition 动画结束的时候触发。通常我们会在动画结束后执行一些方法，例如继续下一个动画效果或者其他。Zepto.js 中的动画方法都是使用 CSS 动画属性来处理，而其中动画运行后的回调便应该是使用这个事件来处理。





animation example:

  div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 10;
}

  @keyframes example {
    from {background-color: red;}
    to {background-color: yellow;}
  }




怎样才能形成BFC根元素或其它包含它的元素；
浮动 (元素的float不为none)；
绝对定位元素 (元素的position为absolute或fixed)；
行内块inline-blocks(元素的 display: inline-block)；
表格单元格(元素的display: table-cell，HTML表格单元格默认属性)；
overflow的值不为visible的元素；
弹性盒 flex boxes (元素的display: flex或inline-flex)；但其中，最常见的就是overflow:hidden、float:left/right、position:absolute。也就是说，每次看到这些属性的时候，就代表了该元素以及创建了一个BFC了。

浏览器对BFC区域的约束规则：

生成BFC元素的子元素会一个接一个的放置。
垂直方向上他们的起点是一个包含块的顶部，两个相邻子元素之间的垂直距离取决于元素的margin特性。在BFC中相邻的块级元素的外边距会折叠(Mastering margin collapsing)。
生成BFC元素的子元素中，每一个子元素左外边距与包含块的左边界相接触（对于从右到左的格式化，右外边距接触右边界），即使浮动元素也是如此（尽管子元素的内容区域会由于浮动而压缩），除非这个子元素也创建了一个新的BFC（如它自身也是一个浮动元素）。BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然。我们可以利用BFC的这个特性来做很多事。


//  https://juejin.im/post/5909db2fda2f60005d2093db#heading-18

visibility:hidden和display:none
display:none  隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，
就当他从来不存在。

visibility:hidden  隐藏对应的元素，但是在文档布局中仍保留原来的空间。
使用CSS display:none属性后，HTML元素（对象）的宽度、高度等各种属性值都将“丢失”;而使用visibility:hidden属性后，HTML元素（对象）仅仅是在视觉上看不见（完全透明），而它所占据的空间位置仍然存在。



我们可以从业界一些热门可靠的 CSS 框架中寻找参考答案，例如 [Bulma](https://bulma.io/)，其采用的「样式断点」有 5 个：

| 断点名称   | 断点描述）                           |
| :--------- | :----------------------------------- |
| mobile     | 移动设备断点，视窗宽度 ≤ 768 px      |
| tablet     | 平板电脑设备断点，视窗宽度 ≥ 769 px  |
| desktop    | 桌面电脑断点，视窗宽度 ≥ 1024 px     |
| widescreen | 宽屏电脑断点，视窗宽度 ≥ 1216 px     |
| fullhd     | 高清宽屏电脑断点，视窗宽度 ≥ 1408 px |

在实际工作中，「样式断点」的制定需要我们同视觉设计师一起沟通确认，因为视觉设计师可能需要根据不同的断点为页面设计不同的视觉表现。




动画






50. vue 源码

//https://juejin.im/post/5ecf0abc6fb9a047ab2c1720  // 很好的源码分析文章
Object.setPrototypeOf(obj, prototype)


51. es6 generator 协程

Generator 函数是协程在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）。

function* gen(x){
  var y = yield x + 2;
  return y;
}

上面代码就是一个 Generator 函数。它不同于普通函数，是可以暂停执行的，所以函数名之前要加星号，以示区别。

整个 Generator 函数就是一个封装的异步任务，或者说是异步任务的容器。异步操作需要暂停的地方，都用 yield 语句注明。Generator 函数的执行方法如下。


var g = gen(1);
g.next() // { value: 3, done: false }
g.next() // { value: undefined, done: true }


上面代码中，调用 Generator 函数，会返回一个内部指针（即遍历器 ）g 。这是 Generator 函数不同于普通函数的另一个地方，即执行它不会返回结果，返回的是指针对象。调用指针 g 的 next 方法，会移动内部指针（即执行异步任务的第一段），指向第一个遇到的 yield 语句，上例是执行到 x + 2 为止。

换言之，next 方法的作用是分阶段执行 Generator 函数。每次调用 next 方法，会返回一个对象，表示当前阶段的信息（ value 属性和 done 属性）。value 属性是 yield 语句后面表达式的值，表示当前阶段的值；done 属性是一个布尔值，表示 Generator 函数是否执行完毕，即是否还有下一个阶段。

Generator 函数可以暂停执行和恢复执行，这是它能封装异步任务的根本原因。除此之外，它还有两个特性，使它可以作为异步编程的完整解决方案：函数体内外的数据交换和错误处理机制。

next 方法返回值的 value 属性，是 Generator 函数向外输出数据；next 方法还可以接受参数，这是向 Generator 函数体内输入数据。


function* gen(x){
  var y = yield x + 2;
  return y;
}

var g = gen(1);
g.next() // { value: 3, done: false }
g.next(2) // { value: 2, done: true }
上面代码中，第一个 next 方法的 value 属性，返回表达式 x + 2 的值（3）。第二个 next 方法带有参数2，这个参数可以传入 Generator 函数，作为上个阶段异步任务的返回结果，被函数体内的变量 y 接收。因此，这一步的 value 属性，返回的就是2（变量 y 的值）。

Generator 函数内部还可以部署错误处理代码，捕获函数体外抛出的错误。


function* gen(x){
  try {
    var y = yield x + 2;
  } catch (e){ 
    console.log(e);
  }
  return y;
}

var g = gen(1);
g.next();
g.throw（'出错了'）; // 出错了
上面代码的最后一行，Generator 函数体外，使用指针对象的 throw 方法抛出的错误，可以被函数体内的 try ... catch 代码块捕获。这意味着，出错的代码与处理错误的代码，实现了时间和空间上的分离，这对于异步编程无疑是很重要的。



yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。

function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }



//  https://github.com/frontend9/fe9-interview/issues/6


//  https://www.jianshu.com/p/f8ae14a3ebff
async function test(){
  await readFile('a'); 
  console.log('b');
  console.log('c')
}
test(); 
console.log('d');   //d a b c
// d的打印没有被await阻塞住，先打印了d。await只会影响async函数内部的执行顺序。




52. flutter vs cordova
https://waverleysoftware.com/blog/flutter-vs-cordova/




53. es6 module 

const a = 1;
export defalut a;
// 等价于
export { a as default }


es6和 commonjs的区别  // https://juejin.im/post/5e4cb5e7f265da576c24c2f3

// https://juejin.im/post/5e5f10176fb9a07cd443c1e2 (未读)


54. Vue vs React

a) react 没有 vue 中内置的各种v-指令
b) vue中有slot ，而在react中则是 this.props.children 


55. arrow function

箭头函数和普通函数相比，有以下几个区别，在开发中应特别注意：

不绑定 arguments 对象，也就是说在箭头函数内访问 arguments 对象会报错；
不能用作构造器，也就是说不能通过关键字 new 来创建实例；
默认不会创建 prototype 原型属性；
不能用作 Generator() 函数，不能使用 yeild 关键字。


function fn(){
    let arr = [1,2,3];
    arr.map(function(){
        console.log(this); // undefined 
    });
    arr.map(() => console.log(this)) //{a:100}
}

fn.call({a:100});


this 问题？

56. flutter


  Ionic/Cordova（Hybrid），在技术原理上的核心是，将原生的一些能力通过 JSBridge 封装给 Web 来调用，扩充了 Web 应用能力。但是这种方法有两个不足，一是依赖客户端，二是在性能和体验上都非常依赖于 Web 端。因此，整体上的体验不可预知。目前这个技术还经常被应用到，例如，当前 App 内会提供白名单域名和可调用的 JSBridge 方法，由此来增强 H5 与客户端交互能力，从而提升 App 内 H5 的灵活性。


  React Native/Weex，在原来的 Hybrid 的 JSBridge 基础上进行改进，将 JavaScript 的界面以及交互转化为 Native 的控件，从而在体验上和原生界面基本一致。但因为是 JIT 模式，因此需要频繁地在 JavaScript 与 Native 之间进行通信，从而会有一定的性能损耗影响，导致体验上与原生会有一些差异。

  Flutter，取长补短，结合了之前的一些优点，解决了与 Native 之间通信的问题，同时也有了自渲染模式（框架自身实现了一套 UI 基础框架，与原来的渲染模式基本一致）。从而在体验和性能上相对之前的两种框架表现都较好，具体是如何做到的，我会在接下来的第 22 课时中详细介绍。



Hybrid 其实是一个 H5 页面，在每个 APP 中包了一个 H5 的 Web 页面，只是在需要原生功能的地方，通过原生封装一些 JSAPI 给到页面去调用，看起来就像是 H5 拥有了原生 APP 交互功能。所以文章里面说的依赖 Web 的性能就是这个原因。 React Native 以及 Weex ，就改变了用 H5 实现的方式，使用的是原生的界面，但是用户的各类事件操作，都是需要与 JS 进行操作，而 JS 操作后，需要将响应反馈到原生 Native 中，所以需要一个交互过程（ JIT 意思就是运行时编译，就像在运行的时候将 JS 编译为原生界面的过程 ）。



57.  vuex vs redux

https://lq782655835.github.io/blogs/react/diff-vuex-redux.html


// redux 核心概念

Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。

Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。

Reducer 函数最重要的特征是，它是一个纯函数。也就是说，只要是同样的输入，必定得到同样的输出。

Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。



// 参考 http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
       http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html
       http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html


// 作为开发只是想要一个集中的状态管理组件，为何redux搞的那么复杂？

// 个人觉得redux 使用起来更复杂些，有各种中间件的概念，同时redux将store中的各个状态分散在不同的reducer中








Vuex使用

import Vue from 'vue'
import Vuex from 'vuex'

// 初始化
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})


// commit
store.commit('increment')
console.log(store.state.count) // -> 1

// 注入
new Vue({
  el: '#app',
  store: store,
})



// vuex中的getter
Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。


// 使用常量替代 Mutation 事件类型

    // mutation-types.js
    export const SOME_MUTATION = 'SOME_MUTATION'
    // store.js
    import Vuex from 'vuex'
    import { SOME_MUTATION } from './mutation-types'

    const store = new Vuex.Store({
      state: { ... },
      mutations: {
        // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
        [SOME_MUTATION] (state) {
          // mutate state
        }
      }
    })


// mutation 必须是同步函数


// action
Action 类似于 mutation，不同在于：

Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作。


const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) { // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个                       //  mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
      context.commit('increment')
    }
  }
})


Action 通过 store.dispatch 方法触发：

store.dispatch('increment')




58.  异步队列优先级

常见的异步函数优先级如下，从上到下优先级逐层降低：

process.nextTick(Node.js) > 
MutationObserver(浏览器)/promise.then(catch、finnally)>
setImmediate(IE) > 
setTimeout/setIntervalrequestAnimationFrame >
其他 I/O 操作 / 浏览器 DOM 事件




假设现在要按照顺序执行调用 asyncF 函数 n 次，该怎么实现呢？

对于这种场景可以通过数组函数 reduce 来实现，而不是简单地使用 for 循环或数组的 forEach 函数，比如像下面这样：

[1...n].reduce(async (lastPromise, i) => {
  try {
    await lastPromise
    console.log(await asyncF())
  } catch(e) {
    console.error(e)
  }
}, Promise.resolve())





现在需要延迟打印数组 [1,2,3,4,5]，每一次打印的初始延迟为 1000ms，增长延迟为 500ms。打印结果如下所示：

0s:    1
1s:    2
2.5s: 3
4.5s: 4
7s:    5
这道题也是将多个异步函数改为串行执行的典型例子，所以也可以通过 reduce 函数来实现。由于引入了递增的延迟执行，所以都需要得到上一次执行的延迟时间。具体代码如下：

const arr = [1, 2, 3, 4, 5]
arr.reduce(async (prs, cur, index) => {
  const t = await prs
  const time = index === 0 ? 0 : 1000 + (index - 1) * 500
  return new Promise((res) => {
    setTimeout(() => {
      console.log(cur);
      res(time)
    }, time)
  })
}, Promise.resolve(0))


59. es6 复习

a）对象结构

let person = {
    name : "beijing"
}

let {name : key} = person

key // "beijing"

name // name is not define


b) String API

startWith/endWith/includes

c) 定义对象

let a = 10;
let b = "name";


let obj = {

  a,
  b,
  add(){
    this.a + this.b
  }
};


d) Object.is()

Object.is(NaN,NaN) //true
Object.is(+0,-0) //false

e) Object.assign() // 浅拷贝

f) Object.setPrototypeOf/Object.getPrototypeOf

g) super关键字 // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super
在构造函数中使用时，super关键字将单独出现，并且必须在使用this关键字之前使用。super关键字也可以用来调用父对象上的函数。

h) iterator

{value : xxx , done : true/false}

function chef(foods){

    let i = 0;
    return {

        next(){
            let done = i === foods.length ? true : false;
            let value = done ? void 0 : foods[i++] ;
            
            return {
                value,
                done,
            }
        }


    }

}

let foods = [1,2,3,4];
let iterator = chef(foods);
console.log(iterator.next()); //?
console.log(iterator.next()); //?
console.log(iterator.next()); //?
console.log(iterator.next()); //?
console.log(iterator.next()); //?

i) generator

function* chef(foods){

    for(let i=0;i<foods.length;i++){
        yield foods[i];
    }
}

let iterator = chef([1,2,3,4]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


j) Class 中的getter/setter


class Chef{

    constructor(){
        this.dish = [];
    }

    // get 是关键字
    get menu(){
        return this.dish
    }
    // set 是关键字
    set menu(food){
        this.dish.push(food);
    }

}

let chef1 = new Chef();
chef1.menu = "apple";
chef1.menu = "milk";

console.log(chef1.menu); //["apple","milk"] 


k) Set

new Set([iterable]);

let s1 = new Set("123")
console.log(s1); // Set {1,2,3}


let s2 = new Set([1,2,3,3,3,4,4])
console.log(s2); // Set {1,2,3,4}
l)



m)

n)


60. css background-orgin

https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_background-origin

// 这个属性是设置背景图片的位置， 其value 可以是
    background-origin: padding-box;
    background-origin: border-box;
    background-origin: content-box;
    


61. npx

// https://www.ruanyifeng.com/blog/2019/02/npx.html

目前看主要就是2点：
 1） 执行本地node_modules中的可执行脚本
 2） 当使用npx安装某个modules时候，会临时下载，用完后再删除



62. js 原型：


> 题目：如何理解 JavaScript 的原型


对于这个问题，可以从下面这几个要点来理解和回答，**下面几条必须记住并且理解**

- **所有的引用类型（数组、对象、函数），都具有对象特性，即可自由扩展属性（`null`除外）**
- **所有的引用类型（数组、对象、函数），都有一个`__proto__`属性，属性值是一个普通的对象**
- **所有的函数，都有一个`prototype`属性，属性值也是一个普通的对象**
- **所有的引用类型（数组、对象、函数），`__proto__`属性值指向它的构造函数的`prototype`属性值**



63. react example

// https://codesandbox.io/s/6n20nrzlxz




64. tcp

https://blog.csdn.net/qzcsu/article/details/72861891
https://dy.163.com/article/EENRSF0705315U6Q.html;NTESwebSI=58406168E255F8FF033F5090B80686E7.hz-subscribe-web-docker-cm-online-rpqqn-8gfzd-flemn-cbf955mzll9-8081

65. 


class PrimitiveString {
    static [Symbol.hasInstance](x) {
      return typeof x === 'string'
    }
  }
  console.log('hello world' instanceof PrimitiveString)



你可能不知道 `Symbol.hasInstance` 是什么东西，其实就是一个能让我们自定义 `instanceof` 行为的东西，以上代码等同于 `typeof 'hello world' === 'string'`，所以结果自然是 `true` 了。这其实也侧面反映了一个问题， `instanceof` 也不是百分之百可信的。



### 对象转原始类型

对象在转换类型的时候，会调用内置的 `[[ToPrimitive]]` 函数，对于该函数来说，算法逻辑一般来说如下：

- 如果已经是原始类型了，那就不需要转换了
- 调用 `x.valueOf()`，如果转换为基础类型，就返回转换的值
- 调用 `x.toString()`，如果转换为基础类型，就返回转换的值
- 如果都没有返回原始类型，就会报错

当然你也可以重写 `Symbol.toPrimitive` ，该方法在转原始类型时调用优先级最高。

let a = {
  valueOf() {
    return 0
  },
  toString() {
    return '1'
  },
  [Symbol.toPrimitive]() {
    return 2
  }
}
1 + a // => 3



### 四则运算符

加法运算符不同于其他几个运算符，它有以下几个特点：

- 运算中其中一方为字符串，那么就会把另一方也转换为字符串
- 如果一方不是字符串或者数字，那么会将它转换为数字或者字符串

```js
1 + '1' // '11'
true + true // 2
4 + [1,2,3] // "41,2,3"
```

如果你对于答案有疑问的话，请看解析：

- 对于第一行代码来说，触发特点一，所以将数字 `1` 转换为字符串，得到结果 `'11'`
- 对于第二行代码来说，触发特点二，所以将 `true` 转为数字 `1`
- 对于第三行代码来说，触发特点二，所以将数组通过 `toString` 转为字符串 `1,2,3`，得到结果 `41,2,3`

另外对于加法还需要注意这个表达式 `'a' + + 'b'`

```js
'a' + + 'b' // -> "aNaN"
```

因为 `+ 'b'` 等于 `NaN`，所以结果为 `"aNaN"`，你可能也会在一些代码中看到过 `+ '1'` 的形式来快速获取 `number` 类型。

那么对于除了加法的运算符来说，只要其中一方是数字，那么另一方就会被转为数字

4 * '3' // 12
4 * [] // 0
4 * [1, 2] // NaN


### 比较运算符

1. 如果是对象，就通过 `toPrimitive` 转换对象
2. 如果是字符串，就通过 `unicode` 字符索引来比较

```js
let a = {
  valueOf() {
    return 0
  },
  toString() {
    return '1'
  }
}
a > -1 // true
```

在以上代码中，因为 `a` 是对象，所以会通过 `valueOf` 转换为原始类型再比较值。




那么最后我们总结下这小节的内容：

- 函数提升优先于变量提升，函数提升会把整个函数挪到作用域顶部，变量提升只会把声明挪到作用域顶部
- `var` 存在提升，我们能在声明之前使用。`let`、`const` 因为暂时性死区的原因，不能在声明前使用
- `var` 在全局作用域下声明变量会导致变量挂载在 `window` 上，其他两者不会
- `let` 和 `const` 作用基本一致，但是后者声明的变量不能再次赋值


66.


## 缓存策略

通常浏览器缓存策略分为两种：**强缓存**和**协商缓存**，并且缓存策略都是通过设置 HTTP Header 来实现的。


### 强缓存

强缓存可以通过设置两种  HTTP Header 实现：`Expires` 和 `Cache-Control` 。强缓存表示在缓存期间不需要请求，`state code` 为 200。

#### Expires

```http
Expires: Wed, 22 Oct 2018 08:41:00 GMT
```

`Expires` 是 HTTP/1 的产物，表示资源会在  `Wed, 22 Oct 2018 08:41:00 GMT`  后过期，需要再次请求。并且 `Expires` **受限于本地时间**，如果修改了本地时间，可能会造成缓存失效。


#### Cache-control

```http
Cache-control: max-age=30
```

`Cache-Control` 出现于 HTTP/1.1，**优先级高于 `Expires`** 。该属性值表示资源会在 30 秒后过期，需要再次请求。

`Cache-Control` **可以在请求头或者响应头中设置**，并且可以组合使用多种指令




### 协商缓存

如果缓存过期了，就需要发起请求验证资源是否有更新。协商缓存可以通过设置两种  HTTP Header 实现：`Last-Modified` 和 `ETag` 。

当浏览器发起请求验证资源时，如果资源没有做改变，那么服务端就会返回 304 状态码，并且更新浏览器缓存有效期。



#### ETag 和 If-None-Match

`ETag` 类似于文件指纹，`If-None-Match` 会将当前 `ETag` 发送给服务器，询问该资源 `ETag` 是否变动，有变动的话就将新的资源发送回来。并且 `ETag` 优先级比 `Last-Modified` 高。


### 频繁变动的资源

对于频繁变动的资源，首先需要使用 `Cache-Control: no-cache` 使浏览器每次都请求服务器，然后配合 `ETag` 或者 `Last-Modified` 来验证资源是否有效。这样的做法虽然不能节省请求数量，但是能显著减少响应数据大小。




67. Vue 源码分析

https://github.com/AnnVoV/blog/issues/7



68.  es9 for await of



69. vue面试

a) computed 是具有缓存的，当被依赖的date未被改变的时候，computed是不会被计算的

b) watch 深度监听， 设置    deep: true


注意，不应该使用箭头函数来定义 watcher 函数 (例如 searchQuery: newValue => this.updateAutocomplete(newValue))。理由是箭头函数绑定了父级作用域的上下文。所以 this 将不会按照期望指向 Vue 实例，this.updateAutocomplete 将是 undefined。

c) v-show 当条件不满足的时候，对应 display:none。 而v-if 条件不满足，则是不生成对应的组件

d) v-if 和 v-for 不能在同一个tag中使用

e) vue中的event是原生的事件对象，且事件监听被挂载在设置监听的element上。

f) 事件修饰符 .stop .prevent .capture .self
   按键修饰符 .ctrl .exact
   v-modle 修饰符  .number .lazy .trim
      <textarea v-modle="desc">
      下面这种是不对的       <textarea >{{desc}}</textarea>

g) 组件通信
    props $emit 
    基于new Vue()的自定义事件发布订阅,同时需要注意监听的销毁  on/emit/off

h) 生命周期
     挂载阶段 beforeCreate create beforeMounted mounted
     更新阶段 beforeUpdate updated
     销毁阶段 beforeDestory destoryed


  父子组件
     创建时是从父到子
     挂载时是从子到父

     更新时, 先调用父 beforeUpdate ,再调用子 beforeUpdate, 再调用子的updated, 最后调用父的updated


h) 自定义组件的v-model

Vue.component('base-checkbox', {
  model: { // 关键是 model 属性
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})

i) $nextTick(callback)  异步渲染

  当DOM更新后,callback被调用

j) slot // 其实可以当做父组件传递到子组件的callback

？？？作用域slot

具名slot


在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。
它取代了 slot 和 slot-scope 这两个目前已被废弃但未被移除且仍在文档中的 attribute。新语法的由来可查阅这份 RFC。  

k) 动态组件

<component :is="dynamicComponentName">

l) 异步组件
  import("/componentURI")

m) keep-alive
  缓存组件，避免重复渲染

n) mixin

  exprot default {
    mixins : [mixin1,mixin2]
  }

o) vdom
根本原因是操作dom太耗时，而操作js则效率更高。相当于是增加了一层，把能用js做的工作全在js这边给做了。

diff 算法  h / vnode / patch / updateChildren

p) 模板编译

with语法
  with(this){ // this 是 vue实例

  }

编译后是生成一个render函数，该函数执行后返回vnode，再渲染，更新。

所以可以直接使用render代替template


q) watcher 具体在干什么


r)  vue router

location.href = "#test" // 会在url上添加#test

location.href = "http://www.google.com" // 会redirect到google

当改变url上的hash时候，浏览器的前进/后退按钮也会跟着改变。

关键是 window.onhashchange = (event) => {...}



h5 history:

  window.onpopstate = () => {...}
  history.pushState = () => {...}

  在支持H5的浏览器中，有一个window.onpopstate事件，该事件可以监听如下操作：

      点击浏览器的前进按钮/后退按钮
      执行js代码:history.go(n) / history.forward() /

  history.pushState(state, title[, url])

// 参考： https://www.renfei.org/blog/html5-introduction-3-history-api.html 
关键： 浏览器不会刷新页面，甚至不会检测目标页面是否存在。


s)

t)


70. es6以后的新feature



a) es10

// Object.fromEntries()
let arr = [["a",1],["b",2]]

Object.fromEntries(arr) // {a:1,b:2}



let res = Object.entries(obj).filter( 
  ([key,value]) => { console.log(value); return new String(value).length > 3}
  )





// try catch 增强
try{

}catch{ // 无需添加 (exception)

}


// bigInt

let a = 111111111n;

typeof a // "bigint"



b) es6

// Reflect

Reflect.apply/Reflect.construct

console.log(Reflect.apply(Math.floor,null,[3,17]))

console.log(Math.floor.apply(null,[3.17]))

let date = Reflect.construct(Date,[])

一些Object上的方法也会迁移到Reflect上去

Reflect.defineProperty() // 和Object.defineProperty() 不同在于返回值不一样。前者返回true/false，后者返回对象
Reflect.deleteProperty()
Reflect.get()
Reflect.set()
Reflect.getOwnPropertyDescriptor()
Reflect.getPrototypeOf()
Reflect.has()
Reflect.isExtensible()
Reflect.ownKeys()
Reflect.preventExtensions()
Reflect.setPrototypeOf()

// https://wangdoc.com/es6/reflect.html#reflectsettarget-name-value-receiver



// Proxy

let obj = {
  a : 100,
  b : 100
}

let proxy = new Proxy(obj,{
  get(target,key){
    if(key === "a") return target[key] + 10;
    return target[key]
  }
})

proxy.a  // 110
proxy.b  // 100

可撤销Proxy :  
  let res = Proxy.revocable({
    a : 1
  },{
    get(){

    }
    set(){
      
    }
  })


// Promise


 ？？ then中传入的一个promise
查看MDN文档：
onFulfilled 可选
    当 Promise 变成接受状态（fulfilled）时调用的函数。该函数有一个参数，即接受的最终结果（the fulfillment  value）。如果该参数不是函数，则会在内部被替换为 (x) => x，即原样返回 promise 最终结果的函数
onRejected 可选
    当 Promise 变成拒绝状态（rejected）时调用的函数。该函数有一个参数，即拒绝的原因（rejection reason）。  如果该参数不是函数，则会在内部被替换为一个 "Thrower" 函数 (it throws an error it received as argument)。

也就是说当传入的参数不是function，而是表达式的情况下，会忽略该表达式，用 x => x 来替换。但是传入的是一个表达式，那么就会执行。




返回值
当一个 Promise 完成（fulfilled）或者失败（rejected）时，返回函数将被异步调用（由当前的线程循环来调度完成）。具体的返回值依据以下规则返回。如果 then 中的回调函数：

    返回了一个值，那么 then 返回的 Promise 将会成为接受状态，并且将返回的值作为接受状态的回调函数的参数值。

    没有返回任何值，那么 then 返回的 Promise 将会成为接受状态，并且该接受状态的回调函数的参数值为 undefined。

    抛出一个错误，那么 then 返回的 Promise 将会成为拒绝状态，并且将抛出的错误作为拒绝状态的回调函数的参数值。

    返回一个已经是接受状态的 Promise，那么 then 返回的 Promise 也会成为接受状态，并且将那个 Promise 的接受状态的回调函数的参数值作为该被返回的Promise的接受状态回调函数的参数值。

    返回一个已经是拒绝状态的 Promise，那么 then 返回的 Promise 也会成为拒绝状态，并且将那个 Promise 的拒绝状态的回调函数的参数值作为该被返回的Promise的拒绝状态回调函数的参数值。

    返回一个未定状态（pending）的 Promise，那么 then 返回 Promise 的状态也是未定的，并且它的终态与那个 Promise 的终态相同；同时，它变为终态时调用的回调函数参数与那个 Promise 变为终态时的回调函数的参数是相同的。



then/catch/finally

71. React

{}  // 插值是使用一个大括号，而vue是使用{{}}

className

key不能是index // https://segmentfault.com/a/1190000019961419

bind(this) , 可用arrow function 规避

event 非原生， react是定制化了组合event，且绑定到了document上。

受控组件/非受控组件

函数组件（无state）

setState: 
  不可变值
  可能会异步更新
  可能会被合并

class组件/函数组件

Context API // 抽取公共属性 <Provider> <Consumer>

异步组件：
  React.lazy
  React.suspense

性能优化：
  shouldComponentUpdate()

React 默认父组件更新，子组件无条件更新。

PureComponent 在scu中实现了浅比较。

高阶组件（HOC） // 类似工程模式

Render Props

Vue 如何使用高阶组件？？？

React 动画： react-transition-group

UI组件/容器组件

无状态组件 // 只有render函数


// react16 的新特性 https://zhuanlan.zhihu.com/p/52016989


Redux
  创建store -> createStore()
  store 有三个重要方法：
    getState() // 获取state
    dispatch(action)  // 派发action
    subscribe(() => {...}) // 组件用来订阅state的变化

  reducer(preState,action) // pure function,根据action和preState产生新的state

react-redux
  <Provider>
  connect


React CSS 解决方法：
  inine-style // 无法使用伪元素，伪类，无法复用style
  lib styled-components
  css-module // 依赖webpack打包

  // https://juejin.im/post/5b39e63ae51d4562aa017c81

React 事务机制

dirtyComponent

合成事件

setState batchUpdate

PureComponent // 对数据进行浅层次比较


react-router:
  withRouter


redux:
  bindActionCreators
// https://egghead.io/lessons/react-redux-implementing-combinereducers-from-scratch

72. "use strict 中的this

// https://segmentfault.com/a/1190000010108912

简单来说：
  1. 全局作用域中,this指向window
  2. 函数作用域中， this指向undefined


73. let const

var me = 'xiuyan';

{
	me = 'bear';
	let me;
}
// 运行出错 

// why ?

这是因为 ES6 中有明确的规定：如果区块中存在 let 和 const 命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。假如我们尝试在声明前去使用这类变量，就会报错。

这一段会报错的危险区域，有一个专属的名字，叫”暂时性死区“。

74.  vue中watcher的创建时机



75. node中的event loop

https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

Node 清空微任务队列的手法比较特别。在浏览器中，我们只有一个微任务队列需要接受处理；但在 Node 中，有两类微任务队列：next-tick 队列和其它队列。其中这个 next-tick 队列，专门用来收敛 process.nextTick 派发的异步任务。在清空队列时，优先清空 next-tick 队列中的任务，随后才会清空其它微任务。




76. http 队头阻塞

// https://cloud.tencent.com/developer/article/1509279

1、首先我们厘清了一个概念，那就是http长连接其实指的是tcp长连接。

2、队头阻塞是一种现象，http因为请求-响应模型会有队头阻塞的现象出现，队头阻塞指的是在同一个tcp链接中，如果先发送的http请求如果没有响应的话，后面的http请求也不会响应。

3、解决队头阻塞的第一个方案就是并发长连接，浏览器默认是6-8个长连接，我们可以用域名分片的技术突破这个数值。

4、并发长连接虽然在一定程度上解决了http的队头阻塞，但是会对服务器的性能有较高的要求。


补充：https://http3-explained.haxx.se/zh/why-quic/why-h2



77. webpack/babel



78. jest
亮点: 支持各种命令模式，加快了测试效率。
异步测试: done




79. js this


new 绑定
    函数如果作为构造函数使用 new 调用时， this 绑定的是新创建的构造函数的实例。

    function Foo() {
        console.log(this)
    }

    var bar = new Foo()       // 输出: Foo 实例，this 就是 bar
    实际上使用 new 调用构造函数时，会依次执行下面的操作：

    创建一个新对象；
    构造函数的 prototype 被赋值给这个新对象的 __proto__；
    将新对象赋给当前的 this；
    执行构造函数；
    如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象，如果返回的不是对象将被忽略；


80. Virual DOM 的思考:

// https://www.zhihu.com/question/318928283
// https://www.zhihu.com/question/59953136/answer/170980510


81. React lifecycle

 https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


82. React 面试题:

https://juejin.im/post/5d5f44dae51d4561df7805b4#heading-12



83. web2020 roadmap

https://coggle.it/diagram/XfeRbWj7xy3dsEX8/t/web-development-in-2020



84. babel原理
ES6、7代码输入 -> babel parse 进行解析 -> 得到AST（抽象语法树）-> plugin用babel-traverse对AST树进行遍历转译 ->得到新的AST树->用babel-generator通过AST树生成ES5代码

85. 《React技术揭秘》

https://react.iamkasong.com/

让我们从“响应自然”的角度考虑：当输入字符时，用户是否在意下拉框能在一瞬间就更新？

事实是：并不在意。

如果我们能稍稍延迟下拉框更新的时间，为浏览器留出时间渲染UI，让输入不卡顿。这样的体验是更自然的。

为了实现这个目标，需要将同步的更新变为可中断的异步更新。

在浏览器每一帧的时间中，预留一些时间给JS线程，React利用这部分时间更新组件（可以看到，在源码中，预留的初始时间是5ms）。

当预留的时间不够用时，React将线程控制权交还给浏览器使其有时间渲染UI，React则等待下一帧时间到来继续被中断的工作。


对于React的更新来说，由于递归执行，所以更新一旦开始，中途就无法中断。当层级很深时，递归更新时间超过了16ms，用户交互就会卡顿。

解决办法——用可中断的异步更新代替同步的更新。那么React15的架构不支持异步更新么！！！




React16架构可以分为三层：

Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入Reconciler
Reconciler（协调器）—— 负责找出变化的组件
Renderer（渲染器）—— 负责将变化的组件渲染到页面上
可以看到，相较于React15，React16中新增了Scheduler（调度器），让我们来了解下他


我们知道，在React15中Reconciler是递归处理虚拟DOM的。让我们看看React16的Reconciler。

我们可以看见，更新工作从递归变成了可以中断的循环过程。


那么React16是如何解决中断更新时DOM渲染不完全的问题呢？

在React16中，Reconciler与Renderer不再是交替工作。当Scheduler将任务交给Reconciler后，Reconciler会为变化的虚拟DOM打上代表增/删/更新的标记，类似这样：

export const Placement = /*             */ 0b0000000000010;
export const Update = /*                */ 0b0000000000100;
export const PlacementAndUpdate = /*    */ 0b0000000000110;
export const Deletion = /*              */ 0b0000000001000;

整个Scheduler与Reconciler的工作都在内存中进行。只有当所有组件都完成Reconciler的工作，才会统一交给Renderer。


JSX在编译时会被Babel编译为React.createElement方法。


86. react setState 源码分析

https://juejin.im/post/5aa25967518825558251f61f


87. react hook

useEffect // 依赖数组使用的细节

https://www.youtube.com/watch?v=RnwqU9dqTr4

useCallback // 仔细理解使用场景
useMemo

88. react forwardRef ?



89. 浏览器相关  // https://juejin.im/post/5f184aade51d4534aa4ad7c0



浏览器是多进程的，一个进程中包含多个线程。js线程和ui线程互斥。浏览器的线程还有浏览器事件触发线程、定时触发器线程、异步HTTP请求线程。



Load事件 vs  DOMContentLoaded 事件

DOMContentLoaded事件触发时：仅当DOM解析完成后，不包括样式表，图片等资源。
onload 事件触发时,页面上所有的 DOM,样式表,脚本,图片等资源已经加载完毕。
那么也就是先DOMContentLoaded -> load




90. react css
1） 正常导入css文件，使用 className 属性
2） 使用style变量。 <com style = { styleVal } />
3)  使用 react-script ，xxx.mudole.css ，像使用js变量一样使用css中的class
4） css-in-js lib, such as style-component


91. http://www.vorlonjs.io/   || https://www.browsersync.io/



92. Tailwind CSS 

93. fastclick



event.stopPropagation，event​.stop​Immediate​Propagation的区别你真的知道吗 🧐，event.stopPropagation 阻止捕获和冒泡阶段中当前事件的进一步传播。如果有多个相同类型事件的事件监听函数绑定到同一个元素，当该类型的事件触发时，它们会按照被添加的顺序执行。如果其中某个监听函数执行 event.stopImmediatePropagation 方法，则当前元素剩下的监听函数将不会被执行。


作者：创宇前端
链接：https://juejin.im/post/6844903850160160782
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

94. CSR、SSR、Prerender 原理全解密


https://juejin.im/post/6844903971664953352


95. react 事件机制

https://juejin.im/post/6844903939092348936


96. html li 4px 间隔

http://www.yzktw.com.cn/post/156.html

所以还是用flex布局搞定所有问题


97. https://juejin.im/post/6855468132186882055#heading-0
https://juejin.im/post/6844903939092348936


98. book
https://www.worldswithoutend.com/lists_fantasy100.asp


99. https://github.com/iuap-design/blog/issues

100. vue 递归组件

111. ***** https://github.com/Advanced-Frontend/Daily-Interview-Question

  137) window.performance.timing // 记录各种加载时间
  145) chrome performance tool


112. 
   Array.from()
    Array.from(document.body.querySelector("*"))


   Array.flat()


   Array.flatMap()

   Array.fill()




113. Vue 优化 https://juejin.im/post/6857856269488193549#heading-1

114. Vue 总结  https://juejin.im/post/6844903953969184775#heading-9

115. https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/140

116. https://zhuanlan.zhihu.com/p/181731816?utm_source=wechat_timeline&utm_medium=social&utm_oi=789809800245551104 (关于模块设计的思考)


117. 能冒泡的事件：  https://www.cnblogs.com/rubylouvre/p/5080464.html


118. js 类型判断


// 输出 function
console.log(typeof (() => {}))

// 输出 object
console.log(typeof ['前端有的玩','公众号'])

// 输出 object
console.log(typeof null)

// 输出 undefined
console.log(typeof undefined)

// 输出 function 
console.log(typeof Function.prototype)

// 输出 false
console.log('子君' instanceof String)

// 输出 true
console.log(new Date() instanceof Date)


118. https://juejin.im/post/6859121743869509646 （有意思的题目）


119. react-redux 源码分析  （https://juejin.im/post/6861538848963461133）


120. BFC (https://zhuanlan.zhihu.com/p/25321647)


121. Vue 图解生命周期 （https://juejin.im/post/6857669921166491662）

  从 new Vue 开始，首先通过 get、set 监听 Data 中的数据变化，同时创建 Dep 用来搜集使用该 Data 的 Watcher。

  编译模板，创建 Watcher，并将 Dep.target 标识为当前 Watcher。

 编译模板时，如果使用到了 Data 中的数据，就会触发 Data 的 get 方法，然后调用 Dep.addSub 将 Watcher 搜集起来。

 数据更新时，会触发 Data 的 set 方法，然后调用 Dep.notify 通知所有使用到该 Data 的 Watcher 去更新 DOM。


122. Vue nextTick(userCallback)  https://juejin.im/post/6861737267426394125

简单来说的，就是当数据更新的时候，相对应的watcher不会马上执行，而是被push到一个queue中，

随后该queue则会在一个Vue_function中使用，首先是 排序(排序，先渲染父节点，再渲染子节点,这样可以避免不必要的子节点渲染，如：父节点中 v-if 为 false 的子节点，就不用渲染了),然后取出watcher执行。 【注意，此时该Vue_function并未执行，本段文字只是在描述Vue_function的功能】

而该Vue_function 同样会被当作callback传入nextTick中。

而nextTick的code非常简单：



const callbacks = [];
let timerFunc;

function nextTick(cb?: Function, ctx?: Object) {
  let _resolve;
  // 1.将传入的 flushSchedulerQueue 方法添加到回调数组
  callbacks.push(() => {
    cb.call(ctx);
  });
  // 2.执行异步任务
  // 此方法会根据浏览器兼容性，选用不同的异步策略
  timerFunc();
}


同样是将传入的callback放入数组中，在timerFunc()中遍历执行。
其中会先执行Vue_function,也就是watcher中的update方法，随后执行userCallback。这也是为什么userCallback中能
拿到最新的更新数据。

值得注意的是timeFunc() 是根据浏览器的支持的不同而使用不用的异步方法。目前绝大多数都支持Promise,所以用的就是
Promise.resolve().then(flushCallbacks)的方式。




123. 
typeof Symbol()    //"symbol"
typeof Number()    //"number"
typeof String()    //"string"
typeof Function()    //"function"
typeof Object()    //"object"
typeof Boolean()    //"boolean"
typeof null    //"object"
typeof undefined    //"undefined"


124. js 垃圾回收  https://juejin.im/post/6861967094318284814

？？？ weakmap weakset 

125. 浏览器渲染 https://juejin.im/post/6860088295905296397


面试题 8：event loop + GUI 执行顺序

  顺序：宏任务 -> 微任务 -> GUI渲染 -> 宏任务 -> ..


  document.body.style = 'background:blue'
  console.log(1);
  Promise.resolve().then(()=>{    console.log(2);    document.body.style = 'background:pink'});
  console.log(3);

  答案：1、 3、 2

  页面的背景直接变成粉色。

126. vuex mapState 源码分析(https://juejin.im/post/6844903599764406286)

127. js 常用function (https://juejin.im/post/6862591794312560647)


128. 简易Vue-router (https://segmentfault.com/a/1190000020172729)



129. babel 知识 （https://juejin.im/post/6863705400773083149）



130. react PureComponent (https://segmentfault.com/a/1190000006741060)



131. react17 (https://juejin.im/post/6862493682252283912)


132. redux-react 知识点


133. vue 递归组件 （https://www.jianshu.com/p/84eb67487113）

134. 性能优化 具体指标 （https://juejin.im/post/6850037270729359367）

135. Vue 面试题 
    （https://github.com/lgwebdream/FE-Interview/issues/904）
     （https://github.com/lgwebdream/FE-Interview/issues/905）keep-alive 源码分析
     （https://github.com/lgwebdream/FE-Interview/issues/906） react-hooks 使用及源码简单实现
    (https://github.com/lgwebdream/FE-Interview/issues/46)  (函数声明写在运算符中，其为true，但放在运算符中的函数声明在执行阶段是找不到的。另外，对未声明的变量执行typeOf不会报错，会返回undefined)
    (https://github.com/lgwebdream/FE-Interview/issues/45)  (命名函数表达式函数只能在函数体内有效)
    (https://github.com/lgwebdream/FE-Interview/issues/44) delete
    (https://github.com/lgwebdream/FE-Interview/issues/41) 类型转换
    https://github.com/lgwebdream/FE-Interview/issues/40
    https://github.com/lgwebdream/FE-Interview/issues/39
    https://github.com/lgwebdream/FE-Interview/issues/38 ？？？？

    https://github.com/lgwebdream/FE-Interview/issues/36  proxy的使用

    https://github.com/lgwebdream/FE-Interview/issues/35  简单算法
    https://github.com/lgwebdream/FE-Interview/issues/34 发布订阅

    https://www.cnblogs.com/Wayou/p/requestIdleCallback.html (requestIdelCallback)


    https://github.com/lgwebdream/FE-Interview/issues/33 （react fiber ）
        https://www.youtube.com/watch?v=ALenYXLjsPI&list=PL3Q5d1VRpOyH5B6MeH-kDTdFGJhDJwAU9&index=46
        https://www.cnblogs.com/Wayou/p/requestIdleCallback.html
        https://www.dazhuanlan.com/2019/10/20/5dabc56a750fd/


    https://github.com/lgwebdream/FE-Interview/issues/555  node.js 集群管理

    https://github.com/lgwebdream/FE-Interview/issues/210 数组


    https://github.com/lgwebdream/FE-Interview/issues/303  以前见过，当时想明白了，现在又忘了。(https://www.zhihu.com/question/41220520)

    https://github.com/lgwebdream/FE-Interview/issues/944 webpack  (这篇文章很好 https://juejin.im/post/6867797346550284296)


    https://github.com/lgwebdream/FE-Interview/issues/64 

    https://github.com/lgwebdream/FE-Interview/issues/361  HTTP2.0
    https://github.com/lgwebdream/FE-Interview/issues/156  数组
    

    https://github.com/lgwebdream/FE-Interview/issues/139 Vue set
    https://github.com/lgwebdream/FE-Interview/issues/30 Promise.all()
    https://github.com/lgwebdream/FE-Interview/issues/29 Promise 实现
    https://github.com/lgwebdream/FE-Interview/issues/26 event loop
    https://github.com/lgwebdream/FE-Interview/issues/25 webpack 优化  (复习)
    https://github.com/lgwebdream/FE-Interview/issues/24 array
    https://github.com/lgwebdream/FE-Interview/issues/23 react 事件
    https://github.com/lgwebdream/FE-Interview/issues/20
    https://github.com/lgwebdream/FE-Interview/issues/19 贪心问题

    https://github.com/lgwebdream/FE-Interview/issues/17 闭包
    https://github.com/lgwebdream/FE-Interview/issues/16 安全
    https://github.com/lgwebdream/FE-Interview/issues/242  Array.flat()
    https://github.com/lgwebdream/FE-Interview/issues/241 react 实现dialog
    https://github.com/lgwebdream/FE-Interview/issues/66  类数组   

    https://github.com/lgwebdream/FE-Interview/issues/532  事件循环
    https://github.com/lgwebdream/FE-Interview/issues/548  组件状态管理，私有放组件内部，公共状态vuex,redux

    https://github.com/lgwebdream/FE-Interview/issues/455  js垃圾回收
    https://github.com/lgwebdream/FE-Interview/issues/461  跨域

    https://github.com/lgwebdream/FE-Interview/issues/896  react 特性  *****
        https://libin1991.github.io/2019/10/23/%E7%90%86%E8%A7%A3-React-Fiber-%E6%9E%B6%E6%9E%842/


    https://github.com/lgwebdream/FE-Interview/issues/388  3sum 问题 简单算法 思路是两两相加，并用map记录结果，再遍历数组。
            ？？？？ 先排序后有更优解法 


    https://github.com/lgwebdream/FE-Interview/issues/622  js string 不可变
    https://github.com/lgwebdream/FE-Interview/issues/445  事件代理



    https://github.com/lgwebdream/FE-Interview/issues/935  es import require（detail : https://juejin.im/post/6844904159385239566 / https://juejin.im/post/6844904052841512973）
        在本文件夹下的es6.html中，测试了es import
          验证了传言有误的地方：
          import 是引用传递，这个表述是不准确的，因为使用 default export出去的也是值传递，详情可见测试用例
            
           另外， 
           import 进来的变量，是没办法再赋值的。在转换成es5的过程中，这些变量都是使用Object.defineProperty()，类似Vue，但是只有get()方法，没有set()方法，所以无法负责。


    https://github.com/lgwebdream/FE-Interview-Planet/issues/943  Deep Clone
        正确情况下，JSON.parse() JSON.stringify() 基本就可以满足需求了。
        但是无法解决循环引用的问题，要解决循环引用的话，得使用 weakmap<原对象引用，新对象引用> 来保存已经deep clone 过的数据



    https://github.com/lgwebdream/FE-Interview/issues/939  js安全


    https://github.com/lgwebdream/FE-Interview/issues/786  react组件通信  context API 忘记了

    https://github.com/lgwebdream/FE-Interview/issues/34 EventEmit
    https://github.com/lgwebdream/FE-Interview/issues/189  按需加载

    https://github.com/lgwebdream/FE-Interview/issues/878  react 组件通信



    https://github.com/lgwebdream/FE-Interview/issues/64  异步 很好的题目  *****


    https://github.com/lgwebdream/FE-Interview/issues/273  ****

    https://github.com/lgwebdream/FE-Interview/issues/789  简单算法



    https://github.com/lgwebdream/FE-Interview/issues/869  Node 性能优化 *****


    https://github.com/lgwebdream/FE-Interview/issues/614 webpack 打包

    https://github.com/lgwebdream/FE-Interview/issues/876 react fiber

    https://github.com/lgwebdream/FE-Interview/issues/354  this 

    https://github.com/lgwebdream/FE-Interview/issues/15  节流/防抖 ******


    https://github.com/lgwebdream/FE-Interview/issues/157 简单算法  洗牌



    https://github.com/lgwebdream/FE-Interview/issues/719   arguments  ???

    https://github.com/lgwebdream/FE-Interview/issues/71  catch 作用域


    https://github.com/lgwebdream/FE-Interview/issues/931 单点登录

    https://github.com/lgwebdream/FE-Interview/issues/78  ++ 在前在后的问题

    https://github.com/lgwebdream/FE-Interview/issues/361  http2

    https://github.com/lgwebdream/FE-Interview/issues/633 generator  google
        // https://juejin.im/post/6844903902849007624
        // https://juejin.im/post/6844903652445044749
        // http://www.alloyteam.com/2016/02/generators-in-depth/


    https://github.com/lgwebdream/FE-Interview/issues/313  类型转换
    https://github.com/lgwebdream/FE-Interview/issues/62   类型转换 优先级


    https://github.com/lgwebdream/FE-Interview/issues/430  css 高度自适应


    https://github.com/lgwebdream/FE-Interview/issues/763 常见设计模式 复习


    https://github.com/lgwebdream/FE-Interview/issues/368 常见异步方法 xhr promise generator async/await


    https://github.com/lgwebdream/FE-Interview/issues/111  +0 -0 判断

    https://github.com/lgwebdream/FE-Interview/issues/179  TCP/IP


    https://github.com/lgwebdream/FE-Interview/issues/151  css动画

    https://github.com/lgwebdream/FE-Interview/issues/166  浏览器渲染  复习

    https://github.com/lgwebdream/FE-Interview/issues/117  正则表达式

    https://github.com/lgwebdream/FE-Interview/issues/306  Promise使用


    https://github.com/lgwebdream/FE-Interview/issues/100 flat array

    https://github.com/lgwebdream/FE-Interview/issues/827  Vuex

    https://github.com/lgwebdream/FE-Interview/issues/782  React

    https://github.com/lgwebdream/FE-Interview/issues/808  callback


    https://github.com/lgwebdream/FE-Interview/issues/899  算法 未解决 （ Longest Substring Without Repeating Characters）  1维DP的复杂度n2  更优解法  https://www.youtube.com/watch?v=EbemoR4LooA

    https://github.com/lgwebdream/FE-Interview/issues/573 客户端缓存

    https://github.com/lgwebdream/FE-Interview/issues/599  webpack hash计算  google

    https://github.com/lgwebdream/FE-Interview/issues/916  细看


    https://github.com/lgwebdream/FE-Interview/issues/910  ***

    https://github.com/lgwebdream/FE-Interview/issues/737 

    https://github.com/lgwebdream/FE-Interview/issues/628  css 动画复习

    https://github.com/lgwebdream/FE-Interview/issues/498  清除浮动

    https://github.com/lgwebdream/FE-Interview/issues/234  算法，判断标签闭合

    https://github.com/lgwebdream/FE-Interview/issues/110  算法技巧

    https://github.com/lgwebdream/FE-Interview/issues/654   Vue mixin extends
        https://juejin.im/post/6844904015495446536


    https://github.com/lgwebdream/FE-Interview/issues/715  textarea


    https://github.com/lgwebdream/FE-Interview/issues/787  HTTP2.0


    https://github.com/lgwebdream/FE-Interview/issues/889  lodash get


    https://github.com/lgwebdream/FE-Interview/issues/437  Https
      https://blog.csdn.net/wangjun5159/article/details/51510594
      https://cloud.tencent.com/developer/article/1017988



    https://github.com/lgwebdream/FE-Interview/issues/283   redux

    https://github.com/lgwebdream/FE-Interview/issues/134  array list ???


    https://github.com/lgwebdream/FE-Interview/issues/80 array reduce


    https://github.com/lgwebdream/FE-Interview/issues/109  Function.length === 1 ???   Function.prototype.length === 0


    https://github.com/lgwebdream/FE-Interview/issues/8  归并排序

    https://github.com/lgwebdream/FE-Interview/issues/53 let const

    https://github.com/lgwebdream/FE-Interview/issues/149  赋值


136. arrow function this 
https://juejin.im/post/6864737961188163598


137. build 增量打包构建 （https://juejin.im/post/6865101730166767623）

139. react Children API

140. curry


let currying = (fn, ...args) =>
            fn.length > args.length ?
            (...arguments) => currying(fn, ...args, ...arguments) :
            fn(...args)


let addSum = (a, b, c) => a+b+c
let add = curry(addSum)
console.log(add(1)(2)(3))
console.log(add(1, 2)(3))
console.log(add(1,2,3))


// https://juejin.im/post/6855129007852093453#heading-5


141. css 伪元素 vs  伪类

https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements
常见的有 ::before ::after ::first-line ::first-letter


https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes
常见的有  :hover :active :focus :nth-child()



142. vue 属性透传  render 函数
https://juejin.im/post/6865451649817640968

143. 西瓜视频
https://juejin.im/post/6844904196689379335

144. vue 测试 （未看完）

https://juejin.im/post/6865477717220851720 


145. 高频面试题：
https://juejin.im/post/6855129007852093453#heading-5

146. 从规范角度理解闭包（https://juejin.im/post/6858052418862235656）

147. 

  Scopes and Closures In-depth 10 - Compilation and Interpretation



148. react setState batch  
https://stackoverflow.com/questions/33613728/what-happens-when-using-this-setstate-multiple-times-in-react-component

149. 性能监控

https://juejin.im/post/6865908266199842824

150. iphoneX 适配
https://juejin.im/post/6865873665104773128

151. js执行上下文

https://juejin.im/post/6865320800473088007


152. DevTool 使用

https://juejin.im/post/6854573212412575757#heading-32

153. 防抖和节流

PS：防抖和节流的作用都是防止函数多次调用。
区别在于，假设一个用户一直触发这个函数，且每次触发函数的间隔小于wait，防抖的情况下只会调用一次，
而节流的 情况会每隔一定时间（参数wait）调用函数。


154. cookie


value
如果用于保存用户登录态，应该将该值加密，不能使用明文的用户标识


http-only
不能通过 JS 访问 Cookie，减少 XSS 攻击


secure
只能在协议为 HTTPS 的请求中携带


same-site
规定浏览器不能在跨域请求中携带 Cookie，减少 CSRF 攻击




155. cache-control

https://www.imperva.com/learn/performance/cache-control/


156. Pormise (https://juejin.im/post/6866372840451473415)

1) 判断resolve和reject未传入的情况，解决空值透传问题


 then(resolve, reject) {
    // 判断resolve和reject未传入的情况，解决空值透传问题
    // then()情况
    typeof resolve !== 'function' ? resolve = value => value : resolve
    typeof reject !== 'function' ? reject = reason => throw new Error(reason instanceof Error ? reason.message : reason )

    .....
 
 }  
 
 
 2) catch 的实现

 catch(errorFn) {
    // 这里只需注册执行下then，传入callback就能实现
    this.then(null, errorFn);
  }




157. E-tag 生成方式

https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/383


158. Promise.retry()

https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/387



159. ToyReact

https://juejin.im/post/6864843574148923406#heading-21


要仔细看看


160. Flex 计算

https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/382



https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/381 （以前不知道如何计算）

https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/380



161. Flex 布局


https://juejin.im/post/6866914148387651592




flex作用规则

三个属性的简写，是flex-grow  flex-shrink flex-basis的简写
常用简化写法👇
flex:1 —>  flex:1 1 0%;
flex:3 —> flex:3 1 0%;
注意:flexbox布局和原来的布局是两个概念，部分css属性在flexbox盒子里面不起作用，eg：float， clear， column,vertical-align 等等




flex-basic : 

 1) 在不伸缩的情况下，flex-basis给子容器设置大小才有作用。
     
  2)   当主轴为横向时，即👇
        flex-direction：row | row-reverse
        flex-basis设置的大小为宽度，并且会覆盖witdh值

  3) 当主轴为纵向时，即👇

        flex-direction：column | column-reverse
        flex-basis设置的大小为高度，并且会覆盖height值




162. 封装 PerfectScrollbar 为vue 中的指令 

https://segmentfault.com/a/1190000014821207



163. vue 总结
https://juejin.im/post/6850037277675454478





------- TODO
2. pfd简历

3. 常见布局方式 ，flex 布局

4. vue 是重点， 实战还有面试题目

6. 面试题 https://github.com/qiu-deqing/FE-interview

7. 阅读 Vue 数据绑定原理 
  // https://juejin.im/user/5bc7de8e5188255c6c626f96/posts
  // https://juejin.im/post/5d421bcf6fb9a06af23853f1

8. Proxy Vs Object.defineProperty

9. posts:

    1) https://github.com/sunmaobin/sunmaobin.github.io/issues
    2) https://juejin.im/post/5eb0eca1f265da7bfd7f6cb3
    3) https://juejin.im/post/5ebb85c4f265da7bc1696f89 (interview)
    4) https://juejin.im/post/5eba66f95188253c2a564d87  (interview)
    5) https://juejin.im/post/5ebaa4c9e51d454d90751617  (alg)


    js面：
     1） https://juejin.im/post/5eb40b616fb9a0435749c83c
     2) https://juejin.im/post/5eb800ee5188256d9353afc3
     3) https://juejin.im/post/5eb8f5cdf265da7bd44254b4 

     4)https://juejin.im/post/5ecc0cbef265da770274b2a5 

    5） https://github.com/frontend9/fe9-interview/issues

     https://leohxj.gitbooks.io/front-end-database/javascript-asynchronous/use-promise.html  (all)



     java面：
     1） https://juejin.im/post/5ec0ff4a6fb9a043271c76e9


     js blog:
     1) http://dmitrysoshnikov.com/ // 有些看上去nb的课程。
     2) https://javascript.info/js  // core js
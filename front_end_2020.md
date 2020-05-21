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


     https://leohxj.gitbooks.io/front-end-database/javascript-asynchronous/use-promise.html  (all)
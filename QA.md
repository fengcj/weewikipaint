1. css会阻塞网页渲染吗

https://segmentfault.com/q/1010000009162836

  1.浏览器开始解析目标HTML文件,执行流的顺序为自上而下。
  2.HTML解析器将HTML结构转换为基础的DOM(文档对象模型),构建DOM树完成后,触发DomContendLoaded事件。
  3.CSS解析器将CSS解析为CSSOM(层叠样式表对象模型),一棵仅含有样式信息的树。
  4.CSSOM和DOM开始合并构成渲染树,每个节点开始包含具体的样式信息。
  5.计算渲染树中个各个节点的位置信息,即布局阶段。
  6.将布局后的渲染树显示到界面上。



2.  Keep-alive

http://51write.github.io/2014/04/09/keepalive/
https://www.byvoid.com/zhs/blog/http-keep-alive-header
在以下的场景，不建议开启keep-alive：服务器提供的是一个接口服务，除了动态内容，几乎没有引用任何静态内容；而建议在服务器提供Web站点服务时(一个页面除了动态内容，还包含非常多的JS、图片、css文件等)开启keep-alive。

大多数时候，是否能保存长连接以及设定长连接的时间，并不由服务器决定，有时浏览器(比如火狐等)，其默认60秒后自动断开任何长连接。这时服务器的tomeout时间将失效。

3. webpack与browser-sync热更新原理深度讲解

https://segmentfault.com/a/1190000009127661

  1) EventSouce  :  https://developer.mozilla.org/en-US/docs/Web/API/EventSource




4. 浏览器上传文件
      FileReader



5. JS 图片懒加载
  http://www.cnblogs.com/52fhy/p/5344182.html

  <img class="lazy" src="loading.png" data-src="img/example.jpg">
页面打开时首先会加载src里的图片，即很小的加载图；通过监听scroll事件，当图片在可视区域时，使用data-src替换src，加载真正的图片。

6. JS图片预加载
  http://www.cnblogs.com/v10258/p/3376455.html

 其实预加载的技术就是不管用什么方法先把可能会用到的图片先下载下来，当再次使用的时候，根据浏览器的缓存策略，则会使用已经
 下载过的图片

 至于懒加载技术，则是将图片的url存放在某个地方，必须说对应img的data属性上，当满足某个条件的时候，再改变对应img的src属性。


7. Ajax 技术总结

  http://louiszhai.github.io/2016/11/02/ajax/

8. 瀑布流布局

  http://www.imooc.com/learn/101


9.  淘宝博客：
  http://taobaofed.org/tags/midway/


10. node做中间层是什么意思

https://segmentfault.com/q/1010000009133095

很多项目中后端应用往往不止一个服务，而是一群各司其职的服务，比如nginx的存在就是因为服务器上运行着多个服务，而不同的网络请求由不同的服务处理，需要在这些服务前假设一层nginx做为代理，将请求分发给不同的服务，nginx在这里的角色就相当于中间层。

对于一个比较复杂的web站点，页面中的请求通常分为两种，请求页面与请求数据(ajax)。如果后端是个单体应用，当发现所有请求量太多应付不过来的时候就可以考虑做这样的分离，将处理页面渲染的请求分给另一个服务，挡在前面，自己只负责数据相关的请求。nodejs擅长处理io密集型任务，很适合做处理页面渲染的服务，于是很多人选择了nodejs。淘宝也是类似的架构，据说现在所有淘宝的页面都是由node服务渲染的。



11.   BFC (Block Formatting Contexts, 块级格式化上下文)


12.  clear:both

http://stackoverflow.com/questions/16080073/why-clear-right-doesnt-work-as-intended

去回答问题还是很有效果的，至少让自己在回答的时候写测试code，确保自己的回答正确。

http://www.cnblogs.com/iyangyuan/archive/2013/03/27/2983813.html
https://codepen.io/fcj/pen/JNRRrv
http://stackoverflow.com/questions/12871710/what-does-the-css-rule-clear-both-do

13. Data structures

https://techiedelight.quora.com/500-Data-structures-and-algorithms-interview-questions-and-their-solutions


14.  Array join vs Array concat

自己记错了 concat 的API， The concat() method is used to merge two or more arrays.
以为是join  The join() method joins all elements of an array (or an array-like object) into a string.

15. ES6 workshop

npm run test:watch


String new API:
  a)  prototype.includes
  b)  prototype.repeat
Array new API:
  c)  Array.from


16. text-align vs div 0 auto

以前有研究过的，不过不复习很快就忘了
text-align 是针对container 内部元素
div 0 auto 是指container 相对于父元素的位置居中


17. CSS3 element1~element2 Selector

不复习，很快就忘了。
The element1~element2 selector matches occurrences of element2 that are preceded by element1.

Both elements must have the same parent, but element2 does not have to be immediately preceded by element1.

18. CSS element+element Selector

The element+element selector is used to select elements that is placed immediately after (not inside) the first specified element.


19.
 letter-spacing: 5px;   // 设置字符之间的空白间距
 z-index  


20. css position absolute

absolute
Do not leave space for the element. Instead, position it at a specified position relative to its closest positioned ancestor if any, or otherwise relative to the initial containing block. Absolutely positioned boxes can have margins, and they do not collapse with any other margins.

21. 取消Button的边框是：
border : transparent

22. 发现在父元素上使用text-aligin:center，再在其某个字元素上使用margin : 0 auto 会存在叠加效果，不会完全居中
css 属性太多，未发现到底是因为哪个造成的。。。


23. 因为export default本质是将该命令后面的值，赋给default变量以后再默认


24. prevent bugs in js
  first using static types (Flow)
  second using JSLint
  third is wirte testing

  25. Great https://github.com/gothinkster/realworld



26.    当设置parent 的高度在某个确定值后，即使子元素的高度加起来超过该固定高度，parent高度也不会变。
https://codepen.io/fcj/pen/LyyGpp

27.

Absolute

The box’s position (and possibly size) is specified with the top, right, bottom, and left properties. These properties specify offsets with respect to the box’s containing block. Absolutely positioned boxes are taken out of the normal flow. This means they have no impact on the layout of later siblings. Though absolutely positioned boxes may have margins, those margins do not collapse with any other margins.


28.  margin collapsing    // margin 合并

http://stackoverflow.com/questions/7579000/why-margin-top-of-the-top-div-would-apply-to-body

http://geekplux.com/2014/03/14/collapsing_margins.html

https://codepen.io/fcj/pen/bWWEvx

https://www.w3cplus.com/css/understanding-bfc-and-margin-collapse.html    BFC

29. du -sh file_path   // get the folder size

30. The for...in statement iterates over the enumerable properties of an object, in original insertion order.
//  老是忘记。。。。
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties


31. ⌘ + t：新建标签页


32. css  border:
     border-top-style : solid;
     border-top-width : 1px;
     border-top-color : #e7e7e7;



33. play the sound

http://stackoverflow.com/questions/18826147/javascript-audio-play-on-click

34. 单元测试关注的是输入和输出，输入什么，得到的输出是不是想要的。
而不应该测试具体的逻辑，比如说是否执行了某一个 if 语句之类的，这是因为重构之后这些语句就可能
变化，而重构则不应该影响测试。

更对的要考虑 user case, 那些是我们必须support的.

某个函数的单元测试中assert通过了，不一定表示该assert一定是执行了，比如说放在try catch 中的catch 中，就不会执行。
所以，在写测试的时候，最好是先让测试失败，这样能确保其中的assert是一定执行了的，再将其改正过来。
再想想TDD的流程，也是类似的，先写测试，测试失败，再写对应的函数，测试通过，再重构。
都有测试失败这个流程在里面。

35. clone an object

var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }


36. 还可以监听  transitionend 事件
key.addEventListener('transitionend', removeTransition));

https://developer.mozilla.org/en-US/docs/Web/Events/transitionend


37. css 片段

.keys {
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}
keys 中元素居中显示（上下/左右）

38. background-size : cover
Scale the background image to be as large as possible so that the background area is completely covered by the background image. Some parts of the background image may not be in view within the background positioning area


https://www.w3schools.com/cssref/playit.asp?filename=playcss_background-size&preval=cover

   background-position : center bottom   // 图片放置的位置，是在中间，底部
                       //  还有 left ,right 可选


39.  nodeList has forEach API
https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach

40. addEventListener  this

addEventListener的this总是当前正在处理事件的那个DOM对象。
addEventListener的事件处理函数中this不一定指向事实上被点击的元素， 但事件处理函数的参数Event对象提供了target和currentTarget属性来区分这当前对象与目标对象。

currentTarget总是和this相同，而target指向事实上被点击的目标DOM对象。

http://harttle.com/2015/08/14/event-and-this.html

41.

The Element.getElementsByTagName() method returns a live `HTMLCollection` of elements with the given tag name.
he returned list is live, meaning that it updates itself with the DOM tree automatically.

Document.querySelectorAll() , returns a list of the elements within the document (using depth-first pre-order traversal of the document's nodes) that match the specified group of selectors. The object returned is a `NodeList`.

 所以，对getElementsByTagName返回的值无法使用forEach，而querySelectorAll则可以。真想对getElementsByTagName后的数据使用forEach，可以
 再用Array.from 处理下。


42.  css 片段， 背景填充：

html {
  font-size: 10px;
  background: url(http://i.imgur.com/b9r5sEL.jpg) bottom center;
  background-size: cover;
}

43.   flex : 1

The flex property specifies the length of the item, relative to the rest of the flexible items inside the same container.

The flex property is a shorthand for the flex-grow, flex-shrink, and the flex-basis properties.


Default value:  0 1 auto

https://www.w3schools.com/cssref/css3_pr_flex.asp


flex: <positive-number>
Equivalent to flex: <positive-number> 1 0.
Makes the flex item flexible and sets the flex basis to zero, resulting in an item that receives the specified proportion of the free space in the flex container. If all items in the flex container use this pattern, their sizes will be proportional to the specified flex factor.
Therefore flex:1 it is equivalent to flex: 1 1 0

http://zhoon.github.io/css3/2014/08/23/flex.html
https://css-tricks.com/flex-grow-is-weird/
https://css-tricks.com/almanac/properties/f/flex-shrink/
https://www.youtube.com/watch?v=CFgeJq4l1YM



44. https://astexplorer.net/


45.  ES& parameter


function destructureWithDefaultParams() {
  return [
    computeCircleArea(),
    computeCircleArea({r: 2}),
    computeCircleArea({r: 3, x: 8, y: 6}),
  ]
  // TODO: Make sure the function takes an object as input
  // This object, would ideally contain radius (r)
  // the x-coordinate (x), and y-coordinate(y)
  // Not all of these fields would always be provided
  // When not provided, r defaults to 1, while x and y defaults to 0
  function computeCircleArea( {
    r = 1.0,
    x = 0.0,
    y = 0.0
  } = {}) {
    /* Uncomment this to test what you are actually passing to the function*/
     console.log(arguments);

    // TODO: Remove all references to obj,
    // using param destructuring
/*    const radius = obj.r || 1.0
    const xCoordinate = obj.x || 0.0
    const yCoordinate = obj.y || 0.0*/

   // const {r , x , y } = obj;

    const area = Math.PI * r * r

    return `Circle at (${x}, ${y}), with radius ${r}, has area = ${area.toFixed(2)}`
  }
}

 log(destructureWithDefaultParams())



46.  div height not work

one way to solve this is add  min-height


https://codepen.io/fcj/pen/LyjVZb


47.    ...  operator

var b = "abcdefg";
...b   //  Uncaught SyntaxError: Unexpected token ...
[...b]  // ["a", "b", "c", "d", "e", "f", "g"]



48.   util function using for concat Arrays


function concatArrays() {
  // TODO: flatten nested arrays of arbitrary levels of nesting
  // arr can be typically like this: [8, 9, [6, [5, [7], [45, 34, [2]]]]]
  // output shold be [8, 9, 6, 5, 7, 45, 34, 2]
  // use spread operator in place of Array.prototype.concat()
  const arr = [8, 9, [6, [5, [7], [45, 34, [[[2]]], [[[[[[[[7]]]]], 90]]]]]]]
  return flatter(arr)

  function flatter(arg) {
    return arg.reduce((acc, item) => {
      if (Array.isArray(item)) {
        return acc.concat(flatter(item))
      }
      return acc.concat([item])
    }, [])
  }
}

  const arr = [8, 9, [6, [5, [7], [45, 34, [[[2]]], [[[[[[[[7]]]]], 90]]]]]]]
  return flatter(arr)


49.  Arrow function

//  作者提到，对于 arrow function 的使用也是一个tradeoff, 举出一个例子：



function curryAdd() {

  const curryAddition = a => () => c => {
      throw new Error("Hi");  // 抛出异常，但是在stack log 中，根本无法看出到底哪个函数出了问题, 因为在提示的是 ` Object.<anonymous>` , 所以在使用arrow function 的时候要考虑清楚，作者也说大部分时候是使用 `命名 function?`
      return a + c ;
  }


  return curryAddition(9)(3)(5)

/*  function curryAddition(a) {
    return function(b) {
      return function(c) {
        return a + b + c
      }
    }
  }*/


  //  const curryAddition = a => b => c => a + b + c
}
 log(curryAdd())



50.  css transform-origin

Default value:  50% 50% 0
2D transformations can change the x- and y-axis of an element. 3D transformations can also change the z-axis of an element.



The transform-origin property allows you to change the position of transformed elements.

51. css transition-timing-function

transition : transition-property  transition-duration transition-timing-function  transition-delay


52. https://cssanimation.rocks


53.  ES6  arrow function

使用注意点
箭头函数有几个使用注意点。

（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。

（4）不可以使用yield命令，因此箭头函数不能用作Generator函数。

上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。


this指向的固定化，并不是因为箭头函数内部有绑定this的机制，
实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。



54.  查看2篇关于 js scope/this的文章。


55. java 的知识基本忘关了。。。。


Overloading occurs when two or more methods in one class have the same method name but different parameters. Overriding means having two methods with the same method name and parameters (i.e., method signature). One of the methods is in the parent class and the other is in the child class.

56. https://placehold.it/

57. img is inline-block

http://stackoverflow.com/questions/2402761/is-img-element-block-level-or-inline-level

The <img> tag is empty, it contains attributes only, and does not have a closing tag.


58. chrome snippets

ES6 workshop  time: 03:56



59.  remove duplicate elements in array

function removeDuplicates() {
  // given an array
  // we have to remove duplicate entries
  const arr = [6, 8, 3, 9, 6, 5, 8, 2, 3, 9, 7, 7, 2, 1, 0, 8]

  // TODO: use a Set to do this
  // refactor the following
  const uniqueArr = arr.filter((elem, index) => arr.indexOf(elem) === index)

  return uniqueArr
}


60.  ES6  weakmap  vs map

最大的区别在垃圾回收的时候，  当发现某个对象只被weakmap 引用的时候，会回收该对象。



function weakMapInfo() {
  // what will this return?
  var obj = {iHaveYouNow: true}
  const weakMap = new WeakMap([
    [{iDoNotHaveYouEver: true}, true],
    [obj, 'saweet'],
  ])
  /*obj = null;*/     // 如果去掉注释，则是 objValue: weakMap.get(obj) 的值为 undefined
  return {
    size: weakMap.size,
    objValue: weakMap.get(obj),
    values: weakMap.values,
    keys: weakMap.keys,
    entries: weakMap.entries,
  }
}
 console.log(weakMapInfo())

weakmap 无法取到size，values，keys，entries ，因为无法保证weakmap中的内容在垃圾回收的时候是否会被改变。




61. 看过最好的 promise 文章：


https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html


62.  可以使用 console.table(array) 来打印 array



63.  Array.prototype.reduce  

https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce?v=control


64. 文章之状态机： https://zhuanlan.zhihu.com/p/26524390

作者观点：

新老前端框架最大的三个区别的点（以致于出现新老交替这种划时代技术浪潮）：

状态机的更优管理方式
组件局部化的更优编写方式
响应式思想(实际上也就是 data driven view)


对于我参与开发过的 electron 客户端应用其实就是一个 spa 系统，据我所知大部分的 electron 客户端都是 spa 的，所以 spa 系统其实更像是 C/S 架构。




65. ES6 Promise  可视化网站：

https://bevacqua.github.io/promisees/

66. Youtube  :  https://www.youtube.com/watch?v=8aGhZQkoFbQ  (Philip Roberts: What the heck is the event loop anyway? | JSConf EU 2014)


67. HTML5  new input type

HTML5 added several new input types:

color
date
datetime-local
email
month
number
range
search
tel
time
url
week
New input types that are not supported by older web browsers, will behave as <input type="text">.


68.  change event  vs input event  // still need more investigation

https://www.w3.org/TR/html5/forms.html#event-input-input

The input event fires whenever the user has modified the data of the control. The change event fires when the value is committed, if that makes sense for the control, or else when the control loses focus.
In all cases, the input event comes before the corresponding change event (if any).




The oninput is useful if you want to detect when the contents of a textarea, input:text, input:password or input:search element have changed, because the onchange event on these elements fires when the element loses focus, not immediately after the modification.

// 实例可见：
http://jsfiddle.net/AtvtZ/

点击进入输入框 ，触发 onfocus
    case A):没有输入任何数据，直接离开 ， 触发 onblur
    case B): 输入数据，触发 oninput , 每次输入数据都会触发 oninput
                 离开，触发 onchange, onblur

69. Css Variable

https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables

// 应该是个实验性质的feature，看文档发现：
Chrome 34.0 removed this feature due to performance issues.

70.

document.documentElement.style.setProperty("name","value");


71.  great article

http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/
http://davidshariff.com/blog/javascript-scope-chain-and-closures/


72.  blog  http://latentflip.com/


73.  blog  https://www.chenhuijing.com


74.  flex : https://flexbox.io/
JavaScript30/05 - Flex Panel Gallery


75.   Event  change keyup


76. Babel  https://babeljs.io/learn-es2015/

77. JsConf

78. javascript execution context
  https://simpleprogrammer.com/2016/06/06/javascript-execution-stack-key-learning-language/

Running Your Code:
 - The Creation Phase
 -  The Execution Phase

  Lexical Environment


 can be related with #71

 79.  function expression  vs function declaration


 80.

 case1 :
  var callback = () => {
      console.log(this);
      console.log(b);

  };
  var a = () => {

    var b = 1;
    setTimeout(callback, 1000 );   // Uncaught ReferenceError: b is not defined
  }

  a();

 case2 :

  var a = () => {

    var b = 1;
    setTimeout(() => {
      console.log(this);
      console.log(b);

    }, 1000 );   // 1
  }

  a();

 //  different scope chain/ Lexical Environment


 81. 移动端开发
     js 原生幻灯片效果/瀑布流效果


 82. spread opread on string

 let a = "heoolo";
 let [...b] = a;

 83. website : node.green

84. ES6  Generator

Generator 函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。不同的是，调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是上一章介绍的遍历器对象（Iterator Object）。
1. css会阻塞网页渲染吗

https://segmentfault.com/q/1010000009162836

  1.浏览器开始解析目标HTML文件,执行流的顺序为自上而下。
  2.HTML解析器将HTML结构转换为基础的DOM(文档对象模型),构建DOM树完成后,触发DomContendLoaded事件。
  3.CSS解析器将CSS解析为CSSOM(层叠样式表对象模型),一棵仅含有样式信息的树。
  4.CSSOM和DOM开始合并构成渲染树,每个节点开始包含具体的样式信息。
  5.计算渲染树中个各个节点的位置信息,即布局阶段。
  6.将布局后的渲染树显示到界面上。



2.  Keep-alive

http://51write.github.io/2014/04/09/keepalive/
https://www.byvoid.com/zhs/blog/http-keep-alive-header
在以下的场景，不建议开启keep-alive：服务器提供的是一个接口服务，除了动态内容，几乎没有引用任何静态内容；而建议在服务器提供Web站点服务时(一个页面除了动态内容，还包含非常多的JS、图片、css文件等)开启keep-alive。

大多数时候，是否能保存长连接以及设定长连接的时间，并不由服务器决定，有时浏览器(比如火狐等)，其默认60秒后自动断开任何长连接。这时服务器的tomeout时间将失效。

3. webpack与browser-sync热更新原理深度讲解

https://segmentfault.com/a/1190000009127661

  1) EventSouce  :  https://developer.mozilla.org/en-US/docs/Web/API/EventSource




4. 浏览器上传文件
      FileReader



5. JS 图片懒加载
  http://www.cnblogs.com/52fhy/p/5344182.html

  <img class="lazy" src="loading.png" data-src="img/example.jpg">
页面打开时首先会加载src里的图片，即很小的加载图；通过监听scroll事件，当图片在可视区域时，使用data-src替换src，加载真正的图片。

6. JS图片预加载
  http://www.cnblogs.com/v10258/p/3376455.html

 其实预加载的技术就是不管用什么方法先把可能会用到的图片先下载下来，当再次使用的时候，根据浏览器的缓存策略，则会使用已经
 下载过的图片

 至于懒加载技术，则是将图片的url存放在某个地方，必须说对应img的data属性上，当满足某个条件的时候，再改变对应img的src属性。


7. Ajax 技术总结

  http://louiszhai.github.io/2016/11/02/ajax/

8. 瀑布流布局

  http://www.imooc.com/learn/101


9.  淘宝博客：
  http://taobaofed.org/tags/midway/


10. node做中间层是什么意思

https://segmentfault.com/q/1010000009133095

很多项目中后端应用往往不止一个服务，而是一群各司其职的服务，比如nginx的存在就是因为服务器上运行着多个服务，而不同的网络请求由不同的服务处理，需要在这些服务前假设一层nginx做为代理，将请求分发给不同的服务，nginx在这里的角色就相当于中间层。

对于一个比较复杂的web站点，页面中的请求通常分为两种，请求页面与请求数据(ajax)。如果后端是个单体应用，当发现所有请求量太多应付不过来的时候就可以考虑做这样的分离，将处理页面渲染的请求分给另一个服务，挡在前面，自己只负责数据相关的请求。nodejs擅长处理io密集型任务，很适合做处理页面渲染的服务，于是很多人选择了nodejs。淘宝也是类似的架构，据说现在所有淘宝的页面都是由node服务渲染的。



11.   BFC (Block Formatting Contexts, 块级格式化上下文)


12.  clear:both

http://stackoverflow.com/questions/16080073/why-clear-right-doesnt-work-as-intended

去回答问题还是很有效果的，至少让自己在回答的时候写测试code，确保自己的回答正确。

http://www.cnblogs.com/iyangyuan/archive/2013/03/27/2983813.html
https://codepen.io/fcj/pen/JNRRrv
http://stackoverflow.com/questions/12871710/what-does-the-css-rule-clear-both-do

13. Data structures

https://techiedelight.quora.com/500-Data-structures-and-algorithms-interview-questions-and-their-solutions


14.  Array join vs Array concat

自己记错了 concat 的API， The concat() method is used to merge two or more arrays.
以为是join  The join() method joins all elements of an array (or an array-like object) into a string.

15. ES6 workshop

npm run test:watch


String new API:
  a)  prototype.includes
  b)  prototype.repeat
Array new API:
  c)  Array.from


16. text-align vs div 0 auto

以前有研究过的，不过不复习很快就忘了
text-align 是针对container 内部元素
div 0 auto 是指container 相对于父元素的位置居中


17. CSS3 element1~element2 Selector

不复习，很快就忘了。
The element1~element2 selector matches occurrences of element2 that are preceded by element1.

Both elements must have the same parent, but element2 does not have to be immediately preceded by element1.

18. CSS element+element Selector

The element+element selector is used to select elements that is placed immediately after (not inside) the first specified element.


19.
 letter-spacing: 5px;   // 设置字符之间的空白间距
 z-index  


20. css position absolute

absolute
Do not leave space for the element. Instead, position it at a specified position relative to its closest positioned ancestor if any, or otherwise relative to the initial containing block. Absolutely positioned boxes can have margins, and they do not collapse with any other margins.

21. 取消Button的边框是：
border : transparent

22. 发现在父元素上使用text-aligin:center，再在其某个字元素上使用margin : 0 auto 会存在叠加效果，不会完全居中
css 属性太多，未发现到底是因为哪个造成的。。。


23. 因为export default本质是将该命令后面的值，赋给default变量以后再默认


24. prevent bugs in js
  first using static types (Flow)
  second using JSLint
  third is wirte testing

  25. Great https://github.com/gothinkster/realworld



26.    当设置parent 的高度在某个确定值后，即使子元素的高度加起来超过该固定高度，parent高度也不会变。
https://codepen.io/fcj/pen/LyyGpp

27.

Absolute

The box’s position (and possibly size) is specified with the top, right, bottom, and left properties. These properties specify offsets with respect to the box’s containing block. Absolutely positioned boxes are taken out of the normal flow. This means they have no impact on the layout of later siblings. Though absolutely positioned boxes may have margins, those margins do not collapse with any other margins.


28.  margin collapsing    // margin 合并

http://stackoverflow.com/questions/7579000/why-margin-top-of-the-top-div-would-apply-to-body

http://geekplux.com/2014/03/14/collapsing_margins.html

https://codepen.io/fcj/pen/bWWEvx

https://www.w3cplus.com/css/understanding-bfc-and-margin-collapse.html    BFC

29. du -sh file_path   // get the folder size

30. The for...in statement iterates over the enumerable properties of an object, in original insertion order.
//  老是忘记。。。。
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties


31. ⌘ + t：新建标签页


32. css  border:
     border-top-style : solid;
     border-top-width : 1px;
     border-top-color : #e7e7e7;



33. play the sound

http://stackoverflow.com/questions/18826147/javascript-audio-play-on-click

34. 单元测试关注的是输入和输出，输入什么，得到的输出是不是想要的。
而不应该测试具体的逻辑，比如说是否执行了某一个 if 语句之类的，这是因为重构之后这些语句就可能
变化，而重构则不应该影响测试。

更对的要考虑 user case, 那些是我们必须support的.

某个函数的单元测试中assert通过了，不一定表示该assert一定是执行了，比如说放在try catch 中的catch 中，就不会执行。
所以，在写测试的时候，最好是先让测试失败，这样能确保其中的assert是一定执行了的，再将其改正过来。
再想想TDD的流程，也是类似的，先写测试，测试失败，再写对应的函数，测试通过，再重构。
都有测试失败这个流程在里面。

35. clone an object

var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }


36. 还可以监听  transitionend 事件
key.addEventListener('transitionend', removeTransition));

https://developer.mozilla.org/en-US/docs/Web/Events/transitionend


37. css 片段

.keys {
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}
keys 中元素居中显示（上下/左右）

38. background-size : cover
Scale the background image to be as large as possible so that the background area is completely covered by the background image. Some parts of the background image may not be in view within the background positioning area


https://www.w3schools.com/cssref/playit.asp?filename=playcss_background-size&preval=cover

   background-position : center bottom   // 图片放置的位置，是在中间，底部
                       //  还有 left ,right 可选


39.  nodeList has forEach API
https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach

40. addEventListener  this

addEventListener的this总是当前正在处理事件的那个DOM对象。
addEventListener的事件处理函数中this不一定指向事实上被点击的元素， 但事件处理函数的参数Event对象提供了target和currentTarget属性来区分这当前对象与目标对象。

currentTarget总是和this相同，而target指向事实上被点击的目标DOM对象。

http://harttle.com/2015/08/14/event-and-this.html

41.

The Element.getElementsByTagName() method returns a live `HTMLCollection` of elements with the given tag name.
he returned list is live, meaning that it updates itself with the DOM tree automatically.

Document.querySelectorAll() , returns a list of the elements within the document (using depth-first pre-order traversal of the document's nodes) that match the specified group of selectors. The object returned is a `NodeList`.

 所以，对getElementsByTagName返回的值无法使用forEach，而querySelectorAll则可以。真想对getElementsByTagName后的数据使用forEach，可以
 再用Array.from 处理下。


42.  css 片段， 背景填充：

html {
  font-size: 10px;
  background: url(http://i.imgur.com/b9r5sEL.jpg) bottom center;
  background-size: cover;
}

43.   flex : 1

The flex property specifies the length of the item, relative to the rest of the flexible items inside the same container.

The flex property is a shorthand for the flex-grow, flex-shrink, and the flex-basis properties.


Default value:  0 1 auto

https://www.w3schools.com/cssref/css3_pr_flex.asp


flex: <positive-number>
Equivalent to flex: <positive-number> 1 0.
Makes the flex item flexible and sets the flex basis to zero, resulting in an item that receives the specified proportion of the free space in the flex container. If all items in the flex container use this pattern, their sizes will be proportional to the specified flex factor.
Therefore flex:1 it is equivalent to flex: 1 1 0

44. https://astexplorer.net/


45.  ES& parameter


function destructureWithDefaultParams() {
  return [
    computeCircleArea(),
    computeCircleArea({r: 2}),
    computeCircleArea({r: 3, x: 8, y: 6}),
  ]
  // TODO: Make sure the function takes an object as input
  // This object, would ideally contain radius (r)
  // the x-coordinate (x), and y-coordinate(y)
  // Not all of these fields would always be provided
  // When not provided, r defaults to 1, while x and y defaults to 0
  function computeCircleArea( {
    r = 1.0,
    x = 0.0,
    y = 0.0
  } = {}) {
    /* Uncomment this to test what you are actually passing to the function*/
     console.log(arguments);

    // TODO: Remove all references to obj,
    // using param destructuring
/*    const radius = obj.r || 1.0
    const xCoordinate = obj.x || 0.0
    const yCoordinate = obj.y || 0.0*/

   // const {r , x , y } = obj;

    const area = Math.PI * r * r

    return `Circle at (${x}, ${y}), with radius ${r}, has area = ${area.toFixed(2)}`
  }
}

 log(destructureWithDefaultParams())



46.  div height not work

one way to solve this is add  min-height


https://codepen.io/fcj/pen/LyjVZb


47.    ...  operator

var b = "abcdefg";
...b   //  Uncaught SyntaxError: Unexpected token ...
[...b]  // ["a", "b", "c", "d", "e", "f", "g"]



48.   util function using for concat Arrays


function concatArrays() {
  // TODO: flatten nested arrays of arbitrary levels of nesting
  // arr can be typically like this: [8, 9, [6, [5, [7], [45, 34, [2]]]]]
  // output shold be [8, 9, 6, 5, 7, 45, 34, 2]
  // use spread operator in place of Array.prototype.concat()
  const arr = [8, 9, [6, [5, [7], [45, 34, [[[2]]], [[[[[[[[7]]]]], 90]]]]]]]
  return flatter(arr)

  function flatter(arg) {
    return arg.reduce((acc, item) => {
      if (Array.isArray(item)) {
        return acc.concat(flatter(item))
      }
      return acc.concat([item])
    }, [])
  }
}

  const arr = [8, 9, [6, [5, [7], [45, 34, [[[2]]], [[[[[[[[7]]]]], 90]]]]]]]
  return flatter(arr)


49.  Arrow function

//  作者提到，对于 arrow function 的使用也是一个tradeoff, 举出一个例子：



function curryAdd() {

  const curryAddition = a => () => c => {
      throw new Error("Hi");  // 抛出异常，但是在stack log 中，根本无法看出到底哪个函数出了问题, 因为在提示的是 ` Object.<anonymous>` , 所以在使用arrow function 的时候要考虑清楚，作者也说大部分时候是使用 `命名 function?`
      return a + c ;
  }


  return curryAddition(9)(3)(5)

/*  function curryAddition(a) {
    return function(b) {
      return function(c) {
        return a + b + c
      }
    }
  }*/


  //  const curryAddition = a => b => c => a + b + c
}
 log(curryAdd())



50.  css transform-origin

Default value:  50% 50% 0
2D transformations can change the x- and y-axis of an element. 3D transformations can also change the z-axis of an element.



The transform-origin property allows you to change the position of transformed elements.

51. css transition-timing-function

transition : transition-property  transition-duration transition-timing-function  transition-delay


52. https://cssanimation.rocks


53.  ES6  arrow function

使用注意点
箭头函数有几个使用注意点。

（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。

（4）不可以使用yield命令，因此箭头函数不能用作Generator函数。

上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。


this指向的固定化，并不是因为箭头函数内部有绑定this的机制，
实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。



54.  查看2篇关于 js scope/this的文章。


55. java 的知识基本忘关了。。。。


Overloading occurs when two or more methods in one class have the same method name but different parameters. Overriding means having two methods with the same method name and parameters (i.e., method signature). One of the methods is in the parent class and the other is in the child class.

56. https://placehold.it/

57. img is inline-block

http://stackoverflow.com/questions/2402761/is-img-element-block-level-or-inline-level

The <img> tag is empty, it contains attributes only, and does not have a closing tag.


58. chrome snippets

ES6 workshop  time: 03:56



59.  remove duplicate elements in array

function removeDuplicates() {
  // given an array
  // we have to remove duplicate entries
  const arr = [6, 8, 3, 9, 6, 5, 8, 2, 3, 9, 7, 7, 2, 1, 0, 8]

  // TODO: use a Set to do this
  // refactor the following
  const uniqueArr = arr.filter((elem, index) => arr.indexOf(elem) === index)

  return uniqueArr
}


60.  ES6  weakmap  vs map

最大的区别在垃圾回收的时候，  当发现某个对象只被weakmap 引用的时候，会回收该对象。



function weakMapInfo() {
  // what will this return?
  var obj = {iHaveYouNow: true}
  const weakMap = new WeakMap([
    [{iDoNotHaveYouEver: true}, true],
    [obj, 'saweet'],
  ])
  /*obj = null;*/     // 如果去掉注释，则是 objValue: weakMap.get(obj) 的值为 undefined
  return {
    size: weakMap.size,
    objValue: weakMap.get(obj),
    values: weakMap.values,
    keys: weakMap.keys,
    entries: weakMap.entries,
  }
}
 console.log(weakMapInfo())

weakmap 无法取到size，values，keys，entries ，因为无法保证weakmap中的内容在垃圾回收的时候是否会被改变。




61. 看过最好的 promise 文章：


https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html


62.  可以使用 console.table(array) 来打印 array



63.  Array.prototype.reduce  

https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce?v=control


64. 文章之状态机： https://zhuanlan.zhihu.com/p/26524390

作者观点：

新老前端框架最大的三个区别的点（以致于出现新老交替这种划时代技术浪潮）：

状态机的更优管理方式
组件局部化的更优编写方式
响应式思想(实际上也就是 data driven view)


对于我参与开发过的 electron 客户端应用其实就是一个 spa 系统，据我所知大部分的 electron 客户端都是 spa 的，所以 spa 系统其实更像是 C/S 架构。




65. ES6 Promise  可视化网站：

https://bevacqua.github.io/promisees/

66. Youtube  :  https://www.youtube.com/watch?v=8aGhZQkoFbQ  (Philip Roberts: What the heck is the event loop anyway? | JSConf EU 2014)


67. HTML5  new input type

HTML5 added several new input types:

color
date
datetime-local
email
month
number
range
search
tel
time
url
week
New input types that are not supported by older web browsers, will behave as <input type="text">.


68.  change event  vs input event  // still need more investigation

https://www.w3.org/TR/html5/forms.html#event-input-input

The input event fires whenever the user has modified the data of the control. The change event fires when the value is committed, if that makes sense for the control, or else when the control loses focus.
In all cases, the input event comes before the corresponding change event (if any).




The oninput is useful if you want to detect when the contents of a textarea, input:text, input:password or input:search element have changed, because the onchange event on these elements fires when the element loses focus, not immediately after the modification.

// 实例可见：
http://jsfiddle.net/AtvtZ/

点击进入输入框 ，触发 onfocus
    case A):没有输入任何数据，直接离开 ， 触发 onblur
    case B): 输入数据，触发 oninput , 每次输入数据都会触发 oninput
                 离开，触发 onchange, onblur

69. Css Variable

https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables

// 应该是个实验性质的feature，看文档发现：
Chrome 34.0 removed this feature due to performance issues.

70.

document.documentElement.style.setProperty("name","value");


71.  great article

http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/
http://davidshariff.com/blog/javascript-scope-chain-and-closures/


72.  blog  http://latentflip.com/


73.  blog  https://www.chenhuijing.com


74.  flex : https://flexbox.io/
JavaScript30/05 - Flex Panel Gallery


75.   Event  change keyup


76. Babel  https://babeljs.io/learn-es2015/

77. JsConf

78. javascript execution context
  https://simpleprogrammer.com/2016/06/06/javascript-execution-stack-key-learning-language/

Running Your Code:
 - The Creation Phase
 -  The Execution Phase

  Lexical Environment


 can be related with #71

 79.  function expression  vs function declaration


 80.

 case1 :
  var callback = () => {
      console.log(this);
      console.log(b);

  };
  var a = () => {

    var b = 1;
    setTimeout(callback, 1000 );   // Uncaught ReferenceError: b is not defined
  }

  a();

 case2 :

  var a = () => {

    var b = 1;
    setTimeout(() => {
      console.log(this);
      console.log(b);

    }, 1000 );   // 1
  }

  a();

 //  different scope chain/ Lexical Environment


 81. 移动端开发
     js 原生幻灯片效果/瀑布流效果


 82. spread opread on string

 let a = "heoolo";
 let [...b] = a;

 83. website : node.green

84. ES6  Generator

Generator 函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。不同的是，调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是上一章介绍的遍历器对象（Iterator Object）。



85. spread opread on string

 let a = "heoolo";
 let [...b] = a;

 83. node.green



 86.  mousedown /  mouseup / mousedown / mouseout


87. console.log(" %c this is a styled log","background : red ;font-size : 20px");



88.    time log
	console.time("timing");
	console.timeEnd("timing");



89. vertical-align : top



90.  offsetX  

The offsetX read-only property of the MouseEvent interface provides the offset in the X coordinate of the mouse pointer between that event and the padding edge of the target node.

offsetX and offsetY are relative to the parent container, whereas pageX and pageY are relative to the document.


91. offsetWidth

The HTMLElement.offsetWidth read-only property returns the layout width of an element. Typically, an element's offsetWidth is a measurement which includes the element borders, the element horizontal padding, the element vertical scrollbar (if present, if rendered) and the element CSS width.

http://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively  (to be read)


92. css linear gradient


93. css  中 使用 vh， 记得是Browser的高度

94.  span, i 都可以使用bootstrap的 icon

95.  实现视频中的进度条效果：

.player__controls {
    display: flex;
    position: absolute;
    bottom: 0;   // 先将整个进度条靠在底部
    width: 100%;
    transform: translateY(100%) translateY(-5px);  // 再将其整个向下移动本身的高度， 再向上移动5px
    transition: all .3s;
    flex-wrap: wrap;
    background: rgba(0,0,0,0.1);
}

.player:hover .player__controls {
  transform: translateY(0);   // 当鼠标放到video上时，恢复到初始位置
}

.player:hover .progress {
  height:15px;  // 并将进度条变高
}

96. flex-wapper  

https://codepen.io/fcj/pen/vmjRVK


97. flex-basis

和 width 的区别

https://segmentfault.com/a/1190000005077709
http://gedd.ski/post/the-difference-between-width-and-flex-basis/
http://stackoverflow.com/questions/34352140/what-are-the-differences-between-flex-basis-and-width


98.

    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

99. copy an array

var array = [1,2,3,4];

var array2 = array.slice();
array2 = [].concat(array);
array2 = [...array];  // ES6
array2 = Array.from(array);


100. using spread on object ?


101. form  reset() method


102. https://www.producthunt.com
     https://dribbble.com/
     http://calltoidea.com/
     https://uimovement.com/
     http://goodui.org/
     https://www.awwwards.com/
     http://xclient.info/
     https://coolors.co/
http://colorhunt.co/
https://www.flickr.com/
https://www.pexels.com/
https://unsplash.com/
https://unsplash.it/
https://thenounproject.com/
https://iconstore.co/
https://uigradients.com/#Alive


http://fontawesome.io/
chrome plugin  :  fontface ninja


103. css letter-spacing



104.  jQuery



$("div.rightMenu span").mouseenter(function(){
  var left = $(this).position().left;
  var top = $(this).position().top;
  var width = $(this).css("width");
  var destLeft = parseInt(left) + parseInt(width)/2;
  $("img#catear").css("left",destLeft);
  $("img#catear").css("top",top-20);
  $("img#catear").fadeIn(500);
});

$("div.rightMenu span").mouseleave(function(){
  $("img#catear").hide();
});



105.   13 - Slide In on Scroll   （more about calculate position）




106.   offsetHeight offsetWidth  offsetLeft  offsetTop

       offsetX  offsetY


       The offsetX read-only property of the MouseEvent interface provides the offset in the X coordinate of the mouse pointer between that event and the padding edge of the target node.
// 关键是如何理解  event and the padding edge of the target node.
// 并不是直接相对于整个文档的。

http://help.dottoro.com/ljjqvtaf.php






107. css text-shadow


text-shadow: h-shadow v-shadow blur-radius color|none|initial|inherit;







108. New HTML5 API

avigator.mediaDevices.getUserMedia


video.src = window.URL.createObjectURL(localMediaStream);
video.play();


function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })               
    .then(localMediaStream => {
      console.log(localMediaStream);
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(err => {
      console.error(`OH NO!!!`, err);
    });
}


const width = video.videoWidth;
const height = video.videoHeight;


Canvas:
  drawImage
  getImageData
  putImageData

setInterval(() => {
  ctx.drawImage(video, 0, 0, width, height);
  // take the pixels out
  let pixels = ctx.getImageData(0, 0, width, height);
  // mess with them
  // pixels = redEffect(pixels);

  pixels = rgbSplit(pixels);
  // ctx.globalAlpha = 0.8;

  // pixels = greenScreen(pixels);
  // put them back
  ctx.putImageData(pixels, 0, 0);
}, 16);

function takePhoto() {
  // played the sound
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
  strip.insertBefore(link, strip.firsChild);
}

109.  https://segmentfault.com/p/1210000009358832/read  （very useful）




110.      navigator.geolocation.watchPosition((data) => {
      console.log(data);
      speed.textContent = data.coords.speed;
      arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    }, (err) => {
      console.error(err);
    });

 navigator.geolocation.watchPosition
 data.coords.speed
 data.coords.heading


 111.  mouseover vs mouseenter

 http://stackoverflow.com/questions/1104344/what-is-the-difference-between-the-mouseover-and-mouseenter-events


 Mouseenter and mouseleave do not react to event bubbling, while mouseover and mouseout do.

 https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_mouseenter_mouseover


 112.  getBoundingClientRect();


eg.

ClientRect {top: 3, right: 244.03125, bottom: 60, left: 174, width: 70.0312}




113.  open_source/JavaScript30/23 - Speech Synthesis


const msg = new SpeechSynthesisUtterance();



  speechSynthesis.addEventListener('voiceschanged', populateVoices);


  function populateVoices() {
    voices = this.getVoices();  // API of speechSynthesis
    voicesDropdown.innerHTML = voices
      .filter(voice => voice.lang.includes('en'))
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');
  }



114.  open_source/JavaScript30/24 - Sticky Nav


这个video 得好好思考下：

1） 当某个元素变动时候，会引起其他元素一起变动（动画等）， 可添加 class 放到共有的parent Element,如
    body ，再根据css
       A{

       }
       B{

       }

       bodyClass A{

       }
       bodyClass B{

       }

      达到效果

2） 当某个元素脱离普通文档流后，会导致页面回流，导致视觉效果不好，卡顿之类的。
此时可以增加对应元素的padding之类的属性，占据脱离文档的元素的空间。

google  html 文档 重绘



115.   Sass

http://sass-lang.com/guide

112. website
http://developer.telerik.com/category/topics/web-development/



116. let const (temporal dead zone) in ES6

In ECMAScript 2015, let will hoist the variable declaration to the top of the block, but not the initialization. Referencing the variable in the block before the initialization results in a

117.  Object.assgin()



118.  重绘  重排

https://dancon.gitbooks.io/git-books/content/css/concept/redraw_reflow.html


在操作DOM元素的时候，一定要考虑性能问题，重绘和重排一定要时刻记着。

119.  CSS  white-space

其实在平时的开发中，我们使用这个属性时，最常使用的属性值是nowrap, 并配合text-overflow和overflow来实现文本超长不折行，并自动隐藏超出部分，并转换为...

.no-wrap{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}


120.  domElement.getBoundingClientRect() vs  window.getComputedStyle()

其中的差别在于getComputedStyle 会获取所有相关的CSS 属性
而getBoundingClientRect() 则只会获取 宽高，位置信息。


bottom
height
left
right
top
width


121. review es6-workshop
module grammar :  {}  const


122. Object.getPrototypeOf()

//  The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.


123.  phoneGap

onDeviceReady

124.  https://bootswatch.com/



125. Framework7

126. generate random string for div id



http://stackoverflow.com/questions/6860853/generate-random-string-for-div-id


function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random()) * 0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}




127. webSql


看到有人在phoneGap 中使用websql 存储数据，但是网上查过说是一种被deprecated 技术。
那么想到，可以用的替换技术首先就是 localstroage
接下来，想到localstroage也可能存在清除缓存的过程中清理掉，
那更进一步则是使用google 的FireBase




https://softwareengineering.stackexchange.com/questions/220254/why-is-web-sql-database-deprecated


http://stackoverflow.com/questions/20653418/why-is-cordova-using-web-sql-api-which-has-been-deprecated



128. ES6 class define property out of Constructor ???


129.  Mock server data

d
https://jsonplaceholder.typicode.com/


130.  Flow  static check of JS  (Vue using this)


131. ES6
  Import create immutable Binding


暴露文件夹下的所有接口：

index.js 文件中：

  export * from "./folder/moduleA"
  export * from "./folder/moduleB"
  export * from "./folder/moduleC"

132.  Implement of Array.prototype.map


133.  
//  Cannot read property 'sum' of undefined
let adder = {
  sum : 0,
  add(numbers){
    numbers.forEach(function(n){
      this.sum += n;
    });
  }
}
console.log(adder.add([1,2,3]));


// work with arrow function

let adder = {
  sum : 0,
  add(numbers){
    numbers.forEach( n => this.sum += n);
  }
}

adder.add([1,2,3])
console.log(adder.sum);


// compiled
"use strict";

var adder = {
  sum: 0,
  add: function add(numbers) {
    var self = this;
    numbers.forEach(function (n) {
      return self.sum += n;
    });
  }
};

adder.add([1, 2, 3]);
console.log(adder.sum);


134. bradtraversy/loginapp  github


135. https://ponyfoo.com/articles/understanding-javascript-async-await


136. Margin Collapse


op and bottom margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins.

This does not happen on left and right margins! Only top and bottom margins!


margin : 0 auto

it also won’t work with floated and inline elements and by itself, it also cannot work in absolute and fixed positioned elements (we will however see how to make those work).


137.  CSS background-size

https://css-tricks.com/almanac/properties/b/background-size/


138. multi checkBox

http://www.wastedpotential.com/html-multi-checkbox-set-the-correct-way-to-group-checkboxes/


<input type="checkbox" name="chk_group[]" value="value1" />Value 1<br />
<input type="checkbox" name="chk_group[]" value="value2" />Value 2<br />
<input type="checkbox" name="chk_group[]" value="value3" />Value 3<br />



139.  Parallel  vs Async  vs Concurrency  (not solved)



140.  JS  callback
作者提供了一个很好的视角，callback 的缺点，
当使用第三方库的时候，传入callback， 无法确认Lib是如何使用这个callback的，是不是自己所期望的。


141.  http://latentflip.com/loupe/


142.  https://dev.to/sanjsanj/optimising-the-front-end-for-thebrowser?utm_content=buffer78be3&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer


143.
<meta http-equiv="Content-Security-Policy">



144. phoneGap
a) 使用Framework7 作为基础框架
b) 注释
<!--<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *">-->
c) 对应页面

html file name : "get-city.html"
in html file : <div data-page="get-city" class="page">
in js file :
myApp.onPageInit("get-city",function(){

  })


145.  大纲

HTML&CSS：  对Web标准的理解、浏览器内核差异、兼容性、hack、CSS基本功：布局、盒子模型、选择器优先级及使用、HTML5、CSS3、移动端适应。

JavaScript：   数据类型、面向对象、继承、闭包、插件、作用域、跨域、原型链、模块化、自定义事件、内存泄漏、事件机制、异步装载回调、模板引擎、Nodejs、JSON、ajax等。

其他：  HTTP、安全、正则、优化、重构、响应式、移动端、团队协作、可维护、SEO、UED、架构、职业生涯


146.  https://www.ecma-international.org/ecma-262/6.0/


147. chrome 技巧

https://www.youtube.com/watch?v=UURZFzk92bU
a) 选中某个元素，在console 中输入 $0 , 得到对应的选中元素。
b) PageSpeed to Analyse the website
3) Local map
4) Async // great
5) debug(lib.function);
6) monitor()   // test not work
   monitorEvents(window,"resize")
7) Elements Panel : scroll into view
8) Elements Panel : select an element, then press `h` on keyboadr,
    the element will be hidden
9) Elements Panel : select "Computed" to get css which is really work,
   then click the css property to go to the css line
10)Network Panel : shift + click to check the relate

148.  ES6

  function computeCircleArea({r = 1, x = 0, y = 0} = {}) {
    console.log(arguments);
  }
  computeCircleArea();
  computeCircleArea({r: 2});
  computeCircleArea({r: 3, x: 8, y: 6});


149.  CSS  will-change

http://tobiasahlin.com/

http://tobiasahlin.com/blog/


150. git reset
   git remote set-url origin git://new.url.here


151. offsetLeft   scrollLeft

152. Chrome Dev Tools

https://www.youtube.com/watch?v=x8u0n4dT-WI

a lot of not know before

1) must enable Developer Tools experiments
2) CMD + Shift + P  // inspire from sublime


153. Article

https://github.com/amfe/article


155. Progressive Web APP
1) Service Worker  (HTTPS)
  chrome://serviceworker-internals/
2) Web App Manifest File
3) App shell


156. https://www.webpagetest.org/

157. HTML cloneNode
The Node.cloneNode() method returns a duplicate of the node on which this method was called.



158.  website

http://caniuse.com/   // web browser 兼容性



159. flex

 display : flex
 display : inline-flex

 flex-directoin : row/column

 flex-wrap : nowrap/ wrap

 order : 1    // default is 0, also could be nagative


160. video about PWA

https://www.youtube.com/watch?v=aCMbSyngXB4

a)https://hnpwa.com/   // all the demo PWA using different framework
b) <link rel="dns-prefetch" href="//api.twitter.com">
c) <link rel="preload" as="script" crossorigin="anonymous" href="balabala.js">
d) https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3
   https://developers.google.com/web/showcase/2017/twitter
e) https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback
f) https://github.com/facebookincubator/create-react-app
g) example using PWA:  https://www.treebo.com/
h) preact and cli
i) https://github.com/developit/preact
j) https://medium.com/elemefe/upgrading-ele-me-to-progressive-web-app-2a446832e509
k) vue init pwa
l) https://houssein.me/progressive-angular-applications
m) do it, do it right, do it better



161.  Cordova
https://cordova.apache.org/docs/en/latest/guide/overview/index.html


162. Input  
https://developers.google.com/web/fundamentals/design-and-ui/input/forms/#choose_the_best_input_type

https://developers.google.com/web/fundamentals/design-and-ui/?hl=en

https://www.slideshare.net/greenido/web-forms-the-right-way


datalist


<form action="/action_page.php" method="get">
  <input list="browsers" name="browser">
  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
  <input type="submit">
</form>

https://www.html5rocks.com/en/tutorials/geolocation/trip_meter/

label  placeholder


163.  http://todomvc.com/




164. form
就应该简单粗暴，要一直去做减法，减少到不能再少的输入。
form 扮演的应该是对话的角色。

一个手机号，一个验证码完成一次登录，一次购物。。。。


Mobile  First


165. geolocation

if ("geolocation" in navigator) {
  // geolocation is available
} else {
  // geolocation IS NOT available
}


165. https://www.polymer-project.org/

https://www.upwork.com/hiring/development/polymer-vs-react/


167.  Form 组件 Vue, React



168.  Mobile Touch Event

DOM element change its status

https://developers.google.com/web

https://developers.google.com/web/fundamentals/design-and-ui/input/touch/?hl=en#stateful-elements-respond-to-touch


https://www.youtube.com/watch?v=Rwc4fHUnGuU&feature=youtu.be


1)  :active / :foucs pseudo class

当设计的时候，考虑元素的 default/active/focus 时候的style


2)  Touch Event

Life cycle of a gesture:
touchstart -> touchmove -> touchend/touchcancel

3) Best Practices

 a)binding low : bind the element user touch not the entrie document


 to touch rather than the entire document. The reason for this is that it helps the browser's performance, since the browser will only hop on to the main thread and execute JavaScript when a touch falls in an element with a listener, so the one you care about.

 Otherwise if you add the touch event listeners to the document body, we're always going to execute JavaScript on the main thread, even though the touch may occur on an element we just simply don't care about. So binding low means binding to the element itself.


 b) binding late  

 Binding late is referring to binding the touchmove, touchend, and touchcancel event to the element as late as possible.

ele.addEventListener("touchstart",function(e){
    ele.addEventListener("touchmove", ...)
    ele.addEventListener("touchend", ...)
    ele.addEventListener("touchcancel", ...)
  });


// 可以使用chrome dev tool 中 rendering 来查看
如勾选 Scrolling Performance Issues


c) doing little thing in callback

Because a callback is going to be running on the main thread.

So if you do lots of work inside of it you can really hurt your site's frame rate, which nobody wants. So always try to be as quick as possible inside the callback.

But this raises the question of, if I get the touch's x- and y-coordinates inside the event, how can I do anything with those values

without blocking the main thread? And that's where requestAnimationFrame comes in.

  ele.addEventListener("touchmove", function(e){
      window.requestAnimationFrame(onAimaFrame_callback);
    })



4) using  requestAnimateFrames

requestAnimationFrame is a technique of batching changes you want to make to the UI at a time that works with the browser rather than against it.
You would call requestAnimationFrame
and pass in a function which basically asks the browser to execute that function at a suitable point in its render
When the animation frame call back is executed you can update the UI based on the last known touch event.



So the overall flow is you request an animation frame,

you wait while touchmove events fire, and then when the browser's ready it will call your method and you can alter the UI. The important thing with this is that rather than change the element styles for every touch move, where you might see multiple events fire between render frames, you make changes based on the last known touch move, which is really the only important bit of work that needs to happen.







API:

The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. The method takes as an argument a callback to be invoked before the repaint.




https://www.html5rocks.com/en/mobile/touch/
https://developer.mozilla.org/en-US/docs/Web/API/Touch_events




169. Build Tools
对于Build Tool， 自己的态度是够用就好，最好是code 而不是confifuration.
某种意义上都是黑盒，给输入（entry）, build后输出(dist)


至于不同build tool各自的feature,对于自己的项目够用就好。
难道一个build 花费5s,一个花费8s,就一定要换么？当然如果是前端页面因为framework有这么大的差别，打死也要换。

https://jaysoo.ca/2014/01/27/gruntjs-vs-gulpjs/


watch 的基本工作原理：

watch 某个文件夹，当有改动时候，执行某个任务（提前定义好）。


browsersync

var browserSync = require('browser-sync').create();
 browserSync.init({
     server: "./"
 });
 browserSync.stream();


gulp is a task runner, what this means is that it can define tasks which can easily be run just by calling with a name.


Webpack does not have this concept baked in mainly because it is not a task runner, but a module bundler. To make up for it, you can use npm scripts in conjunction with node to have the same effect.


170. Number.prototype.toFixed

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

var numObj = 12345.6789;

numObj.toFixed();       // Returns '12346': note rounding, no fractional part
numObj.toFixed(1);      // Returns '12345.7': note rounding
numObj.toFixed(6);      // Returns '12345.678900': note added zeros
(1.23e+20).toFixed(2);  // Returns '123000000000000000000.00'
(1.23e-10).toFixed(2);  // Returns '0.00'
2.34.toFixed(1);        // Returns '2.3'
2.35.toFixed(1);        // Returns '2.4'. Note that it rounds up in this case.
-2.34.toFixed(1);       // Returns -2.3 (due to operator precedence, negative number literals don't return a string...)
(-2.34).toFixed(1);     // Returns '-2.3' (...unless you use parentheses)


171. Devops
也一直在思考什么是Devops？
课程中的提了一个很好的例子：
当我们举行一个会议，会用到google calendar,通知与会人员。
但是定制这个calendar,并不能保证所有人都会参加会议。


Google Calendar is a great tool for helping you get to meetings on time.

But putting your meetings on a calendar doesn't make you show up on time.
 And it doesn't cause you to want to show up on time, either.
 If you're like me, you'll want to show up to meetings on time because you respect your coworkers and you want to get things done with them. And if you had a meeting conflict, or show up late because you forgot about a meeting, you'd feel like you failed to meet up to that.

 But using a calendar program is a tool to help you accomplish a goal you already had.



 So DevOps is kind of like showing up to meetings on time.


It's not a matter of using particular tools, even though tools can help you do it. It's an organizational change that's supported by those tools.

But, at the same time, it would be basically impossible to organize large meetings without some sort of calendar. And likewise, it's not practical to scale software deployment without some tools to do that.




某种意义上说，它是一个文化，一种手段。





 services is not just server

 // 其实对监控(mointer) ，收集各种数据，在现实里，组里做的都很少，更没有分析出有效的东西出来。





 What is Packer?

 Packer is an open source tool for creating identical machine images for multiple platforms from a single source configuration. Packer is lightweight, runs on every major operating system, and is highly performant, creating machine images for multiple platforms in parallel. Packer does not replace configuration management like Chef or Puppet. In fact, when building images, Packer is able to use tools like Chef or Puppet to install software onto the image.

 A machine image is a single static unit that contains a pre-configured operating system and installed software which is used to quickly create new running machines. Machine image formats change for each platform. Some examples include AMIs for EC2, VMDK/VMX files for VMware, OVF exports for VirtualBox, etc.



// Import Note
Packer does not replace configuration management like Chef or Puppet. In fact, when building images, Packer is able to use tools like Chef or Puppet to install software onto the image.





Vagrant is a tool for building and managing virtual machine environments in a single workflow. With an easy-to-use workflow and focus on automation, Vagrant lowers development environment setup time, increases production parity, and makes the "works on my machine" excuse a relic of the past.




172. git


git log
  git log --stat

  git log --graph --oneline master

  git log -n 1  // show only one commit log

git diff  id1  id2

  eg:
    git diff  4139bf8452eff0e13e17283cee99a9f9c949f224   4574f043f48a2d5e47c47fe3247e58fd77453d14


git diff  // compare workspace and stage area

git diff --staged   // compare stage area with repostory(after run git add)



git reset --hard   // revert uncommited change
git reset --hard  id  // revert to a special commit




git branch newBranch
git checkout newBranch

git branch -d deleteBranch  // delete a branch

git checkout id   // back to a special commit, maybe use for create a new branch




"git reset" vs "git checkout"
https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting


git merge master anotherBranch  // merge anotherBranch to master branch




git show commitId  // show the diff of the commit and its parent


// this is changed in gittest branch


173.  Backbone

https://addyosmani.com/blog/understanding-mvc-and-mvp-for-javascript-and-backbone-developers/



174. REg
https://regex101.com/
http://regexr.com/


175. HTML  Custom Events

// create the custom `partyTime` event
var myCustomEvent= new CustomEvent( 'partyTime', {timeToParty: true, partyYear: 1999} );

// listen to the `document` for the `partyTime` event
document.addEventListener('partyTime', function(evt) {
    if (evt.partyYear) {
        console.log( "Partying like it's " + evt.partyYear + "!");
    }

    document.body.style.backgroundImage = 'linear-gradient(90deg, orange, blue)';
});

// trigger the custom event
document.dispatchEvent( myCustomEvent );




176.  css flex

align-items default value  is stretch  cross axis

align-content , It only applies if flex-wrap: wrap is present, and if there are multiple lines of flexbox items.  cross axis


177. autocomplete

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete

178. input pattern

<form action="/action_page.php">
Country code: <input type="text" name="country_code"
pattern="[A-Za-z]{3}" title="Three letter country code">
<input type="submit">
</form>

179. input required

<form action="/action_page.php">
  Username: <input type="text" name="usrname" required>
  <input type="submit">
</form>


180. 表单check的组件
a) 接口如何设计，传入哪些参数？
b) error message 的显示？

https://classroom.udacity.com/courses/ud890/lessons/5247541854/concepts/53883552300923




181. flex tools
https://autoprefixer.github.io/


182. Font icon
http://fontawesome.io/icons/



183. Browser Event

https://www.youtube.com/watch?v=GUTHPn3p_s8

click/mousedown/mouseup event is work on PC browser,

touchstart/touchmove/touchend/touchend event is work on mobile,
The touch event contains an array of all touchsf as well as scale and rotation values.


184. ES6 In Node


1) Node v6 full support ES6

2) node.green

3) Arrow Functoin  
    -  this

4) default value of param

5) ...  operator

6) class

7) let/const is block-scoped, var is not block-scoped

8) destructuring, worked on object ({}) and array ([])

9) es6-shortended object properties

  let a = 1;
  let b = 2;
  let c = 3;
  let obj = {
    a,
    b,
    c,
    fun(){

    }
  };

10) computed property Name

 let key = "key1";
 let obj = {
   [key] : value
 }


11) Template String  ``


12) Promise  

var promise = new Promise( (resovle, reject) => {
    console.log("in promise");
    let result = "this is the result";
    resovle(result);
});

var handler = result => {   
    console.log("in handler");
    console.log(result)
}

promise.then(handler);

console.log("end of the program");


// result is:

in promise
end of the program
in handler
this is the result

13) Set  Map

set can be conver to an array

let pizzaSet = new Set();

const pizzaArray = [...pizzaSet];


14) for of  

15) Generator


function* generator(){

    var count = 1;
    yield;
    console.log(count);

    count++;
    yield;
    console.log(count);

    count++;
    console.log(count);

}

var iter = generator();
iter.next(); // nothing print

iter.next(); // 1

iter.next(); // 2 , 3



function* generator2(){

    var obj =  {
        "name" : yield,
        "age" : yield,
        "address" : yield
    };

    return obj;
}

var iter2 = generator2();
console.log(iter2.next());    //   { value: undefined, done: false }
console.log(iter2.next("igt"));  //  { value: undefined, done: false }
console.log(iter2.next(37));  //  { value: undefined, done: false }
console.log(iter2.next("USA"));  //   { value: { name: 'igt', age: 37, address: 'USA' }, done: true }


16) async / wait

async function asyncLog(){
    var result = await Promise.resolve("this is the value return from promise");
    console.log(result);
}

asyncLog();

console.log("can this be print first??");

end


185. http://webanimationweekly.com/


186. CSS transation

1)写transation 的best pratice 就是，先写好transation完成后的效果，再写初始时的效果
2)最好不要使用 transation : all 这种，对performance不好。
3）250ms~300ms 最佳动画时间


187. CSS

1）void/self-closing element

  input
  hr
  img
  meta



2）canvas 获取事件


3) https://tympanus.net/codrops/css_reference/

https://tympanus.net/codrops/

188. fixture vs mock





188) HTML  
    document.createDocumentFragment();


// 当获取到某段html文档后，想将其放到fragment中，则是：
// 其中自己从来不知道的是，当将某个节点取到，并放到fragment中后，该
// 节点则不会再保存在原来的父节点中。

node2Fragment: function(el) {
    var fragment = document.createDocumentFragment(),
        child;

    // 将原生节点拷贝到fragment
    while (child = el.firstChild) {  
        fragment.appendChild(child);
    }

    return fragment;
},


189） CSS selector

从右往左起作用的

input:focus{
  outeline : solid 1px blue;
}

有人喜欢将id只用在page link上（页面内跳转）


http://colours.neilorangepeel.com/  (css color resource)
https://coolors.co/
https://randoma11y.com/#/?_k=ew6fii
http://cssspecificity.com/
https://specificity.keegan.st/
http://www.cssfontstack.com/
https://typekit.com/

@font-face{
  font-family: "Mouseo Sans";
  src: url(../fonts/museo-sans.ttf)
}

body{
  font-family: "Mouseo Sans"
}


font size : px em rem

font-weight font-style

https://codepen.io/fcj/pen/PjqrbK  // inline element 只有水平轴上的margin

https://codepen.io/fcj/pen/awvoEQ  // inline element 的 overlapping

https://codepen.io/fcj/pen/vZOoBp  // max-width

h1~h6 是有default style， 尤其是margin属性 // https://www.w3schools.com/tags/tag_hn.asp  https://codepen.io/fcj/pen/qjdeop


css float  clearfix   // https://codepen.io/fcj/pen/JJYmwx
https://codepen.io/fcj/pen/QgjJjO


min-height

tools:
https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/
https://www.browserstack.com/
https://crossbrowsertesting.com/
http://wave.webaim.org/

190） underscore.assign  deep and more than one args


191) CSS transation

 css transation will not change the document flow;

 transform is relative to the element its self, not its parent.

 transform : translateX(100%);  // relative to its own width

 // transform 的各种函数: scale(), rotate(), skew() 顺序不同，效果也不同。它们是依次叠加的。

 rotateY  效果：
  https://codepen.io/fcj/pen/OgVZZe


192) CSS animation

  @keyframes slide {

    from {
      transform : translateX(0);
    }

    to {
      transform : translateX(100px);
    }

  }

  https://codepen.io/fcj/pen/WOvJqw


以前没有注意的一个属性：
  animation-fill-mode  // 也就是动画开始前，结束后，element的位置。


Value	Description
  none ：	Default value. The animation will not apply any styles to the target element before or after it is executing

  forwards ：	After the animation ends (determined by animation-iteration-count), the animation will apply the property values for the time the animation ended

  backwards ：	The animation will apply the property values defined in the keyframe that will start the first iteration of the animation, during the period defined by animation-delay. These are either the values of the from keyframe (when animation-direction is "normal" or "alternate") or those of the to keyframe (when animation-direction is "reverse" or "alternate-reverse")

  both：	The animation will follow the rules for both forwards and backwards. That is, it will extend the animation properties in both directions




http://cubic-bezier.com/#.17,.67,.83,.67




section {
  animation: slideIn .8s linear, fadeIn .2s ease-in;  // 不同动画分别专注不同的属性(transform,opacity)
}
// 每个节点单独使用animation-timing-function
@keyframes slideIn {
  0% {
    transform: translateY(400px);
    animation-timing-function: ease-out;
  }
  60% {
    transform: translateY(-50px);
    animation-timing-function: ease-in;
  }
  80% {
    transform: translateY(10px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-in;
  }
}

@keyframes fadeIn {
  from {opacity:0;}
  to {opacity: 1;}
}





css rotate:
https://www.impressivewebs.com/alternative-units-css3-rotate-transforms/
https://developer.mozilla.org/en-US/docs/Web/CSS/angle






animation-play-state   // https://codepen.io/fcj/pen/xrwXPy


transform-origin
  transform-origin : 50% 50%


193) Node microservices

a)  websocket vs http2.0

// 各个service 之间如何处理共享数据？也做成service?




194) HTML  nodetype

isElementNode: function(node) {
    return node.nodeType == 1;
},

isTextNode: function(node) {
    return node.nodeType == 3;
}


195)  Node util.inherit


function A(){

}

function B(){

}

Object.setPrototypeOf(A.prototype,B.prototype);

console.log(A.prototype.__proto__ === B.prototype);


196） Bootstrap4

 a) https://css-tricks.com/rems-ems/


197) Docker

  build ship run

  docker container run -it jboss/wildfly
  docker container run -it --name web jboss/wildfly bash

  docker container run -d jboss/wildfly
  docker container run -d --name web jboss/wildfly
  docker container ls
  docker container stop NAME
  docker container rm   NAME





  docker container run -d -P --name web jboss/wildfly

  docker container run -d --name web -p8080:8080 jboss/wildfly


  docker container run -d --name web -p 8080:8080 -v `pwd`/webapp.war:/opt/jboss/wildfly/standalone/deployments/webapp.war jboss/wildfly


  Docker Image:
    Dockerfile

    docker image build -t hellojava:2 .
    docker container run hellojava:2


  COPY

  ADD
    COPY
    tar auto-extraction
    Download from remote (curl/wget)

  only one CMD is effect


  FROM openjdk:jdk-alpine

  COPY myapp/target/myapp-1.0-SNAPSHOT.jar /deployments/

  CMD java -jar /deployments/myapp-1.0-SNAPSHOT.jar

  RUN  // used for isntalling software package
    RUN apt-get update && apt-get install
  CMD  // default for executing container; can be overrided from CLI
    CMD ["/opt/jboss/wildfly/bin/standalone.sh","-b","0.0.0.0","-bmanagement","0.0.0.0"]
    docker run mywildfly bash

  EXPOSE // network prots on which container is listening
    EXPOSE 9990

  VOLUME  // create a mount point which the specified name
    VOLUME /opt/couchbase/var
    docker container run ... -v ~/data:/opt/couchbase/var



  docker image rm -f $(docker image ls -qa)
  docker container rm -f $(docker container ls -aq)

198） JS
   NaN === NaN // false
   NaN !== NaN // true
   isNaN(NaN)  // true

199)  Node

  http://fem-node-api.netlify.com/


200)  JS ES6

 a) Arrow functions
  make the code more  readable and debug is more important than write the code;
  // 当写code的时候，时刻要问自己，过一个礼拜后，自己还能看得懂么？一个月后呢？
  // team 的人能在review的时候看懂么？是不是更便于debug

  // 对于简单的几行code就能完成功能的，自己倾向于使用arrow function,但是对于nested在一起的
  // 复杂logic,自己更喜欢使用normal function。


  do not code today what you can not debug tomorrow

  var bar = () => ({ x : 2});   // return object must have ()

  // debug 的时候，named function 更方便

  p.then( v => v.id);
  p.then(function extractID(v){return v.id});


  // 使用arrow function, 考虑其scope，也就是this


https://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname


function expression :   var a = function(){}
function declaration :  function a(){}   // function hoisting


  b)  let

  // 对于let的使用，并不是简单的var的替换，也不要极端的全部使用var;
  //  目前，仅仅使用let，告诉compile，该变量只是在当前block生效。

  // 大部分时候还是会使用var，表示自己知道在干什么，告诉其他人会将该
  // 变量全局使用(function scope)

  // let 不会被hoisting

 e) const 也是 block scope
  // 什么时候使用const，作者认为很多人再滥用， 如
    const a = [1,2,3,4];
  // const的根本意思是说，不再对变量名字重新赋值，并不关心值是什么。
  // 最佳的使用场景是 ，如
    const PI = 3.14  

 f) default params
  // ver useful in some case for default value

 g) ... operator
  // 在使用ES6的时候，想到的是这个feature能做什么？能提高什么？能更好的communicate to reader?
  // 在使用新的framework,lib也应该是这种思维。

  ... 实际上是操作的Iterator, string/array 都是。
  array destructuring, object destructuring 都是一种pattern,赋值的左边 明确想要的是什么样的结构。
 h)  New Data Type in js   ---> Symbol

 i)  for of  操作是Iterator
     for in  操作是Key

     var str1 = "hello";
      for(let key in str1){
          console.log(key,str1[key]);
      }
      for(let value of str1){
          console.log(value);
      }

          var numbers = {
          *[Symbol.iterator](star = 0,end=100){
              for(let i= star; i < end; i++){
                  yield i;
              }
          }
      };

      for(let num of numbers){
          console.log(num);
      }

      for(let num of numbers[Symbol.iterator](30,60)){
          console.log(num);
      }


201)  refactor Node fs readFile to promise

202) Mobile Web
http://am-team.github.io/amg/dev-exp-doc.html

  onscroll 事件



203) front-end-frameworks collection

https://usablica.github.io/front-end-frameworks/

204) You do not know JS

注意： 唯一比不知道为什么代码不好用更糟糕的是，从一开始就不知道为什么代码好用！这是一种经典的“纸牌屋”心理：“它好用，但不知为什，所以大家都别碰！”你可能听说过，“他人即地狱”（萨特），而程序员们模仿这种说法，“他人的代码即地狱”。我相信：“不明白我自己的代码才是地狱。”而回调正是肇事者之一。



205) ES6 browser support
https://kangax.github.io/compat-table/es6/

206) Make a game
   a) canvas
   b) createjs (module)
   c) handler event
      http://jsfiddle.net/BmeKr/
      https://stackoverflow.com/questions/9880279/how-do-i-add-a-simple-onclick-event-handler-to-a-canvas-element

      There are many libraries that keep track of the position of your objects that were drawn on canvas and handle all of the complexities of handling mouse interactions. See EaselJS, KineticJS, Paper.js or Fabric.js and this comparison of canvas libraries for more.
   e) device

   retinalize() {
     this.stage.width = this.canvas.width;
     this.stage.height = this.canvas.height;

     let ratio = window.devicePixelRatio;
     if (ratio === undefined) {
       return;
     }

     this.canvas.setAttribute('width', Math.round( this.stage.width * ratio ));
     this.canvas.setAttribute('height', Math.round( this.stage.height * ratio ));

     this.stage.scaleX = this.stage.scaleY = ratio;

     // Set CSS style
     this.canvas.style.width = this.stage.width + "px";
     this.canvas.style.height = this.stage.height + "px";
    }




207)  Node on production
  a) Sequelize:
    Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.


208)  Mobile design

  https://modernweb.design/courses/mobile-web-design/

  a)  The first step is not make your website fit in mobile. The first thing you should do is make your content fits in the mobile device.

  Remember, people don’t consume website. They consume content.

  <section>  <article>

  b)  Mobile first approach

We talk about mobile first. Mobile first means that during our website planning, we plan the content and layout for the mobile first.

Planning for mobile first ensures us to consider the most important thing of our website.

A screenshot showing how mobile-friendly web makes use of large buttons and list view.


Mobile devices are often in narrow size and most of the users hold the device in portrait. So when we provides information or options for mobile device, we may use list view. In iOS, it's called table view.



  c) Yoga
  https://github.com/facebook/yoga
  oga is a cross-platform layout engine which implements Flexbox.


209)   Object.keys()  vs Object.getOwnpropertiesName()

https://stackoverflow.com/questions/22658488/object-getownpropertynames-vs-object-keys

There is a little difference. Object.getOwnPropertyNames(a) returns all own properties of the object a. Object.keys(a) returns all enumerable own properties.

210)  Grunt  Glup Webpack
Grunt  Glup 都是task runner
Webpack 能做的更多？


211)  HTML5  Facades
// 直接使用canvas,localstroage 的API 可能会导致问题，比如说某些browser更新了API之类的，
// 最好在其上添加一层Facades

session stroage based on tab session


212) CSS Framework

http://getskeleton.com/

grid system


223) HTML5 Game Engine
https://html5gameengine.com/

224) jQuery

https://stackoverflow.com/questions/236073/why-split-the-script-tag-when-writing-it-with-document-write

document.write('<script src="jquery-3.0.0.min.js"><\/script>')


https://learn.jquery.com/using-jquery-core/faq/how-do-i-pull-a-native-dom-element-from-a-jquery-object/
$( "#foo" )[ 0 ]; // Equivalent to document.getElementById( "foo" )
$( "#foo" ).get( 0 ); // Identical to above, only slower.


Select and style every <p> element that are placed immediately after <div> elements:
div + p {
    background-color: yellow;
}


http://api.jquery.com/Types/#jQuery

The jQuery function always returns a jQuery object (that is based on an array), even if there are no elements that matches the selector.

That way you can always call a method that is supposed to affect the elements found, even if there are no elements that matched. If the jQuery object contains no elements, it will simply do nothing.

If you need to know if a jQuery object contains any elements, you can use the length property.


innerHTML vs outerHTML  //  outerHTML 会带上tag


225)  Webview

Content Security Policy 使用
img 的使用，不同手机分辨率上。
#perfmatters twitter

// 当GC时候，会停止Javascript and render

// 如何处理mobile click delay
https://www.polymer-project.org/2.0/docs/devguide/feature-overview

226)  Viewport
https://stackoverflow.com/questions/22777734/what-is-initial-scale-user-scalable-minimum-scale-maximum-scale-attribute-in

227) Node debug
https://www.alexkras.com/simple-guide-to-finding-a-javascript-memory-leak-in-node-js/


228) Favicon
http://www.favicomatic.com/

229) CSS  gradient

http://www.colorzilla.com/gradient-editor/
http://www.cssmatic.com/

230) HTML figure
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure

231) Vue

放在 v-bind等指令中的都是视为js code ,可执行语句。


232) HTML label tag

label 的使用方式：
a)  <label>Click me <input type="text"></label>  // more like this way

b)
<label for="username">Click me</label>
<input type="text" id="username">


233) Data structures
https://medium.freecodecamp.org/10-common-data-structures-explained-with-videos-exercises-aaff6c06fb2b

234) freecodecamp
https://beta.freecodecamp.com/en/map

235)  CSS margin nagative value
https://www.smashingmagazine.com/2009/07/the-definitive-guide-to-using-negative-margins/
http://css-101.org/negative-margin/index.php

Negative top and left margins move the element up and left while negative right and bottom margins make following siblings move left and up.

236)  https://medium.freecodecamp.org/my-giant-javascript-basics-course-is-now-live-on-youtube-and-its-100-free-9020a21bbc27

Many things can be learn from.



236) check css grid system

237) css
    对于伪元素，某些属性是不能使用的。比如说
    a:hover{
      background : #fff; // 不能使用RGBA
    }  

238) HTML tag  

<blockquote>

239) Viewport

Instead of using em or px to size text, you can use viewport units for responsive typography. Viewport units, like percentages, are relative units, but they are based off different items. Viewport units are relative to the viewport dimensions (width or height) of a device, and percentages are relative to the size of the parent container element.

The four different viewport units are:

vw: 10vw would be 10% of the viewport's width.
vh: 3vh would be 3% of the viewport's height.
vmin: 70vmin would be 70% of the viewport's smaller dimension (height vs. width).
vmax: 100vmax would be 100% of the viewport's bigger dimension (height vs. width).

240） React
http://andrewhfarmer.com/getting-started-tutorials/
https://app.pluralsight.com/library/courses/react-js-getting-started/table-of-contents

241)  Design pattern
https://app.pluralsight.com/player?course=javascript-practical-design-patterns

242) Node Advance
https://app.pluralsight.com/player?course=nodejs-advanced


243)  为何ES6中不能
    export  {
        object.method
    }

https://reactarmory.com/guides/learn-react-in-browser-with-animated-fractal/introducing-react

244） React
https://reactarmory.com/guides/learn-react-in-browser-with-animated-fractal/introducing-react


245)  Vue
https://egghead.io/lessons/vue-update-attributes-classes-and-styles-in-vue-js-with-v-bind


review:
  <template>
  v-on:submit:prevent
  select v-model
  v-bind:is  keep-alive
  <router-view>  <router-link>

246)

https://www.reddit.com/r/dailyprogrammer/


247)

https://www.youtube.com/watch?v=oxoFVqetl1E
https://www.youtube.com/watch?v=0fFYacBQPbA



248） React Native

https://github.com/facebook/react-native/issues/14461


static defaultProps


249)  HTML5 interview  react/vue/angular

  DOM
  this key word
  closure  缺点。 内存泄漏
  event loop
  prototype chain
  event bubbling
  Mobile

  HTTP/S  状态码，get,post
  auth
  "use strict" not global / this
  isNaN()
  nodejs handler child thread???


250)  High Performance
Browser Networking

https://hpbn.co/

251) Scale Node
https://www.youtube.com/watch?v=Ogjb60Fg10A



252) https://bytesized.tv/

docker run -i -t --name nodejs ubuntu:latest /bin/bash

docker commit -m "install nodejs" b489081de36e nodejs

docker start nodejs


253) Build a browser engine

https://limpet.net/mbrubeck/2014/08/08/toy-layout-engine-1.html


254) DOM  Node.insertBefore

var insertedNode = parentNode.insertBefore(newNode, referenceNode);
If referenceNode is null, the newNode is inserted at the end of the list of child nodes.

Note that referenceNode is not an optional parameter -- you must explicitly pass a Node or null. Failing to provide it or passing invalid values may behave differently in different browser versions.

255)  JS Parse

http://esprima.org/demo/parse.html#
http://int3.github.io/metajs/

256)  Web site performance
https://www.youtube.com/watch?v=GSLTbV9D0vg&list=PLAwxTw4SYaPmKmNX-INgcxQWf30KuWa_A&index=18


257） CSS
https://codeburst.io/clearing-your-front-end-job-interview-css-95bdd82871f2

258) JS

https://github.com/denysdovhan/wtfjs

https://www.youtube.com/watch?v=nX0ajFKB2E0
https://www.youtube.com/watch?v=Fg7niTmNNLg
https://www.youtube.com/watch?v=n1cKlKM3jYI
https://www.youtube.com/watch?v=zRZNb4GDOPI
https://www.youtube.com/watch?v=F_BYg2QGsC0

259)  Css
https://www.youtube.com/watch?v=RfoDuM_XilE

style{
  dispaly : none
}
// 浏览器默认是不显示style的，要是改成
style{
  dispaly : block;
}
则是会显示的，挺好玩的。




260)  MVVM

http://hcysun.me/2016/04/28/JavaScript%E5%AE%9E%E7%8E%B0MVVM%E4%B9%8B%E6%88%91%E5%B0%B1%E6%98%AF%E6%83%B3%E7%9B%91%E6%B5%8B%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%8F%98%E5%8C%96/

// 简单实现了MVVM，关键是使用了
Object.defineProperty()
// 同时对数组类型的数据做了特殊处理


261)  Vue 源码分析
http://hcysun.me/2017/03/03/Vue%E6%BA%90%E7%A0%81%E5%AD%A6%E4%B9%A0/


262)  VueX 源码分析
https://zhuanlan.zhihu.com/p/24104410

Vue.util.defineReactive


end

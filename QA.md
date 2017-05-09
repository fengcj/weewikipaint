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


Default value:	0 1 auto

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

Default value:	50% 50% 0
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



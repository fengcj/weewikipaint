1. 在bs4中使用的是flex布局，如 row ,column 
      .col-md-8 {
	    -webkit-box-flex: 0;
	    -webkit-flex: 0 0 66.666667%;
	        -ms-flex: 0 0 66.666667%;
	            flex: 0 0 66.666667%;   //  flex: flex-grow flex-shrink flex-basis|auto|initial|inherit;
	    max-width: 66.666667%;
  }

  .row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

  http://www.w3schools.com/cssref/css3_pr_flex.asp

  2.  width /  max-width

  The max-width property in CSS is used to set the maximum width of a specified element. The max-width property overrides the width property, but min-width will always override max-width whether followed before or after width in your declaration.

  http://www.w3schools.com/css/css_max-width.asp
  https://css-tricks.com/almanac/properties/m/max-width/

  4. 在bs4中不再使用col-xs了，而是直接使用.col , 通识添加了.col-xl- 表示极大col

	.col {
  -webkit-flex-basis: 0;
      -ms-flex-preferred-size: 0;
          flex-basis: 0;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  max-width: 100%;
}

  http://developer.telerik.com/featured/whats-new-whats-changed-bootstrap-4/
  https://v4-alpha.getbootstrap.com/layout/grid/


5. left  vs margin-left

http://stackoverflow.com/questions/3859801/difference-between-margin-left-and-left
简单说， left 是只会影响自己， 而margin-left 则会带动其他元素一起移动


6. sass vs scss
bs4中扩展名名.scss，

There are two syntaxes available for Sass. The first, known as SCSS (Sassy CSS) and used throughout this reference, is an extension of the syntax of CSS. This means that every valid CSS stylesheet is a valid SCSS file with the same meaning. This syntax is enhanced with the Sass features described below. Files using this syntax have the .scss extension.

The second and older syntax, known as the indented syntax (or sometimes just “Sass”), provides a more concise way of writing CSS. It uses indentation rather than brackets to indicate nesting of selectors, and newlines rather than semicolons to separate properties. Files using this syntax have the .sass extension.

7. hidden vs aria-hidden

http://stackoverflow.com/questions/31107040/whats-the-difference-between-html-hidden-and-aria-hidden-attributes

ARIA (Accessible Rich Internet Applications) defines a way to make Web content and Web applications more accessible to people with disabilities.

The hidden attribute is new in HTML5 and tells browsers not to display the element. The aria-hidden property tells screen-readers if they should ignore the element. Have a look at the w3 docs for more details:

8. .sr-only

http://stackoverflow.com/questions/19758598/what-is-sr-only-in-bootstrap-3

 the class is used to hide information intended only for screen readers from the layout of the rendered page.

9.  es6  in bs4


10. bootstrap.js 的工作原理
在bootstrap.js 中，是分成各个组件的，有Dropdown，Modal 等。
而每个组件中，绑定事件则是通过：

	$(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler)

	也就是说会将DOM中的所有element绑定bs自定义的事件。

	// 这里有个问题，各种例子中，bootstrap.js文件是放在header中，当js执行的时候DOM中没有元素的时候，但是事件
	   是绑定成功的，这里面的逻辑是：使用jQuery.on方法内部实现了事件委托，所有的事件都委托父元素document来处理，
	   这样就算添加新的元素也没问题。

http://stackoverflow.com/questions/41820906/what-is-different-between-document-on-and-element-on
http://www.it610.com/article/2172709.htm


on方法是专门用来处理事件委派机制的，笼统的说就是解决在你Ajax或者Pjax之后事件无法绑定到新添加的元素上的问题的

11. jQuery的delegate机制

https://segmentfault.com/a/1190000005353456

Element.addEventListener(event,function,useCapture);  // 老是忘记第三个参数
Optional. A Boolean value that specifies whether the event should be executed in the capturing or in the bubbling phase. 

Possible values:
true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase

http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_addeventlistener_capture



12. DOM1 DOM2 DOM3
http://www.qdfuns.com/notes/11861/e21736a0b15bceca0dc7f76d77c2fb5a.html

13. jQuery on

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},



http://www.cnblogs.com/aaronjs/p/3444874.html


总的来说对于JQuery的事件绑定

在绑定的时候做了包装处理

在执行的时候有过滤器处理

http://www.imooc.com/code/5067    // 这个教程很好的解释了jQuery的事件机制

1. 通过 on 绑定事件，分析传递的数据，加工变成 add 能够识别的数据
2. 通过 add 把数据整理放到数据缓存中保存，通过 addEventListener 绑定事件
3. 触发事件执行 addEventListener 回调 dispatch 方法
4. 修正事件对象存在的问题，通过 fix 生成一个可写的事件对象
5. 引入 handlers 把委托和原生事件（例如"click"）绑定区分对待
6. 执行数据缓存的事件回调，传入内部产生的事件对象


jQuery 的事件与数据其实是没有直接关联的关系，而且通过数据缓存去存储事件数据的。jQuery 从1.2.3版本引入数据缓存系统贯穿内部，为整个服务事件体系也引入了这个缓存机制，所以 jQuery 并没有将事件处理函数直接绑定到 DOM 元素上，而是通过 .data 存储在缓存 .cahce 上，所以事件的机制都是依赖之前的数据缓存模块的。

14. jQuery模块

	// 核心方法
	// 回调系统
	// 异步队列
	// 数据缓存
	// 队列操作
	// 选择器引
	// 属性操作
	// 节点遍历
	// 文档处理
	// 样式操作
	// 属性操作
	// 事件体系
	// AJAX交互
	// 动画引擎

	jQuery按我的理解分为五大块，选择器、DOM操作、事件、AJAX与动画，那么为什么有13个模块？因为jQuery的设计中最喜欢的做的一件事，就是抽出共同的特性使之“模块化”，当然也是更贴近S.O.L.I.D五大原则的“单一职责SRP”了，遵守单一职责的好处是可以让我们很容易地来维护这个对象，比如，当一个对象封装了很多职责的时候，一旦一个职责需要修改，势必会影响该对象的其它职责代码。通过解耦可以让每个职责更加有弹性地变化。

	我们在深入内部看看Ajax的高层方法其实都是统一调用了一个静态的jQuery.ajax方法，
在jQuery.ajax的内部实现是非常复杂的，首先ajax要考虑异步的处理与回调的统一性，所以就引入了异步队列模块（Deferred）与回调模块（Callbacks）, 所以要把这些模块方法在ajax方法内部再次封装成、构建出一个新的jQXHR对象，针对参数的默认处理，数据传输的格式化等等。


主流的库一般都有对 AMD 和 CommonJS 的支持代码，看看jQuery的代码：

( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

DOM文档加载的步骤：
要想理解为什么ready先执行，load后执行就要先了解下DOM文档加载的步骤：

(1) 解析HTML结构。
(2) 加载外部脚本和样式表文件。
(3) 解析并执行脚本代码。
(4) 构造HTML DOM模型。//ready
(5) 加载图片等外部文件。
(6) 页面加载完毕。//load
从上面的描述中大家应该已经理解了吧，ready在第（4）步完成之后就执行了，但是load要在第（6）步完成之后才执行。

jQuery对象的构建如果在性能上考虑，所以就必须采用原型式的结构。


通过new操作符构建一个对象，一般经过四步：

  A.创建一个新对象

  B.将构造函数的作用域赋给新对象（所以this就指向了这个新对象）

  C.执行构造函数中的代码

  D.返回这个新对象



画龙点睛的一处init.prototype = jQuery.fn，把jQuery.prototype原型的引用赋给jQuery.fn.init.prototype的原型，这样就把2个构造器的原型给关联起来了。

$('.div').__proto__ ===  $.prototype   //  true


DSL是指Domain Specific Language，也就是用于描述和解决特定领域问题的语言。



所以一般来说，jQuery插件的开发分为两种：

  ☑  一种是挂在jQuery命名空间下的全局函数，也可称为静态方法；

  ☑  另一种是jQuery对象级别的方法，即挂在jQuery原型下的方法，这样通过选择器获取的jQuery对象实例也能共享该方法。



 jQuery的主体框架就是之前提到的那样，通过工厂模式返回一个内部的init构造器生成的对象。


jQuery.extend = jQuery.fn.extend = function() {

从jQuery的源码中可以看到，jQuery.extend和jQuery.fn.extend其实是同指向同一方法的不同引用。

        这里有一个设计的重点，通过调用的上下文，我们来确定这个方法是作为静态还是实例处理，在javascript的世界中一共有四种上下文调用方式：方法调用模式、函数调用模式、构造器调用模式、apply调用模式：

    ☑  jQuery.extend调用的时候上下文指向的是jQuery构造器

    ☑  jQuery.fn.extend调用的时候上下文指向的是jQuery构造器的实例对象了



在jQuery对象中有个prevObject对象，这个是干嘛用的呢？

如果你想知道prevObject是做什么的，咱们首先得先来了解一下jQuery对象栈，jQuery内部维护着一个jQuery对象栈。每个遍历方法都会找到一组新元素（一个jQuery对象），然后jQuery会把这组元素推入到栈中。

而每个jQuery对象都有三个属性：context、selector和prevObject，其中的prevObject属性就指向这个对象栈中的前一个对象，而通过这个属性可以回溯到最初的DOM元素集中。



总的来说：end方法就是回溯到上一个Dom合集,因此对于链式操作与优化，这个方法还是很有意义的。



	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},



同样是返回元素，那么eq与get有什么区别呢？

eq返回的是一个jQuery对象，get返回的是一个DOM对象



内存泄露是指一块被分配的内存既不能使用，又不能回收，直到浏览器进程结束



常见内存泄露的几种情况

1.循环引用
2.Javascript闭包
3.DOM插入
一个DOM对象被一个Javascript对象引用，与此同时又引用同一个或其它的Javascript对象，这个DOM对象可能会引发内存泄漏。这个DOM对象的引用将不会在脚本停止的时候被垃圾回收器回收。要想破坏循环引用，引用DOM元素的对象或DOM对象的引用需要被赋值为null。

其实绝大部分内存泄漏都不是由Javascript引起的，浏览器的回收机制已经做的相当好了，多数的泄漏都是由于与DOM交互而产生的。

所以这里的总结：

  ☑  JS的内存泄露，无怪乎就是从DOM中remove了元素，但是依然有变量或者对象引用了该DOM对象。然后内存中无法删除。使得浏览器的内存占用居高不下。这种内存占用，随着浏览器的刷新，会自动释放。
  ☑  而另外一种情况，就是循环引用，一个DOM对象和JS对象之间互相引用，这样造成的情况更严重一些，即使刷新，内存也不会减少。这就是严格意义上说的内存泄露了



  所以在平时实际应用中, 我们经常需要给元素缓存一些数据，并且这些数据往往和DOM元素紧密相关。由于DOM元素(节点)也是对象, 所以我们可以直接扩展DOM元素的属性，但是如果给DOM元素添加自定义的属性和过多的数据可能会引起内存泄漏，所以应该要尽量避免这样做。 因此更好的解决方法是使用一种低耦合的方式让DOM和缓存数据能够联系起来。

所以我们必须有一种机制，避免引用数据直接依附在DOM对象上，这样尽量避免内存泄漏的产生。jQuery的缓存系统就很好的解决了这一问题。




jQuery缓存系统的真正魅力在于其内部应用中，动画、事件等都有用到这个缓存系统。试想如果动画的队列都存储到各DOM元素的自定义属性中，这样虽然可以方便的访问队列数据，但也同时带来了隐患。如果给DOM元素添加自定义的属性和过多的数据可能会引起内存泄漏，所以要尽量避免这么干。

A.允许我们在DOM元素上附加任意类型的数据,避免了循环引用的内存泄漏风险
B.用于存储跟dom节点相关的数据，包括事件，动画等
C.一种低耦合的方式让DOM和缓存数据能够联系起来
 

对于jQuery来说，数据缓存系统本来就是为事件系统服务而分化出来的，到后来，它的事件克隆乃至后来的动画列队实现数据的存储都是离不开缓存系统，所以数据缓存也算是jQuery的一个核心基础了。



1.jQuery.data()可以实现为dom元素或js对象添加缓存
2.$("ele").data()实是对前者的扩展，其目的是可以方便的通过选择器为多个dom元素添加缓存数据






15. display:flex vs display:inline-flex


http://codepen.io/fcj/pen/YNYEMg
http://stackoverflow.com/questions/27418104/difference-between-displayinline-flex-and-displayflex

display: inline-flex does not make flex items display inline. It makes the flex container display inline. That is the only difference between display: inline-flex and display: flex. 


13.   :empty


https://egghead.io/lessons/css-target-empty-elements-using-the-empty-pseudo-class

Target empty elements using the :empty pseudo-class


You can target an element that has no child elements by using the :empty pseudo-class. 
Be aware that whitespace is considered a "child", so :empty will not work if the element has no children, but has space between the opening and closing tags.



14. css first-of-type

http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_first-of-type

Specify a background color for the first <p> element of its parent:

p:first-of-type {
    background: red;
}


only-of-type

only-of-type selector matches every element that is the only child of its type, of its parent.




15. html blockquote
http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_blockquote_test












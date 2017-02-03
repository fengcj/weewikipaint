1.  (function(window,document,undefined){    // 显示将undefined作为参数，是防止出现edge case: undfined = true 这类SB 写法
											 // 同时还在函数体内出现  if(foo == undefined)
	})(window,document)



2.   setInterval/setTimeout 的用法：

setInterval(function(){
	doStuff();
},100);

(function Loop(){
	doStuff();
	setTimeout(Loop,100);
})()

// 要是doStuff执行的时间超过100ms,下面一种则更make sense , 更为实用的则是不停的fetch：

(function updateEveryMinuts(){

	doStuff();
	$("#update").load("awsome.php",function(){
		updateEveryMinuts();
	})


})()

3. jQuery.noConflict()

工作原理很简单，加载jQuery时候缓存已经定义过的 $, jQuery
  	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,


等到用的时候，再赋值回去：

	noConflict: function( deep ) {
		window.$ = _$;

		if ( deep ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},


4.  jQuery.props

jQuery.props = {
	"for": "htmlFor",
	"class": "className",
	readonly: "readOnly",
	maxlength: "maxLength",
	cellspacing: "cellSpacing",
	rowspan: "rowSpan",
	colspan: "colSpan",
	tabindex: "tabIndex",
	usemap: "useMap",
	frameborder: "frameBorder"
};

在attr function中用到了：	
	// Try to normalize/fix the name
		name = notxml && jQuery.props[ name ] || name;

原因是当利用DOM获取属性的时候，更方便，如：
$(element).attr('class')


更可以自己去添加新的map到jQuery.props中去，方便获取attribute

5. Animation  speeds

	speeds: {
		slow: 600,
 		fast: 200,
 		// Default speed
 		_default: 400
	},

6.  在Jquery.ajax 方法的基础上，有一堆方便使用的API，getJSON,getScript 等。
    用一句话说在ajax中是搞定一切case,get shit done

7. $('#id').find('tag.thing')  vs  $(#id tag.thing)
 作者说，前面的会比后面的快。关键在：

 	// A simple way to check for HTML strings or ID strings
	// (both of which we optimize for)
	quickExpr = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,

	前面会立刻判断出来是  ID strings

	然后：
					// HANDLE: $("#id")
				} else {
					elem = document.getElementById( match[2] );
	快速找到元素，
	而后面一种则要利用Sizzle。


8. filters  
很简单：
		password: function(elem){
			return "password" === elem.type;
		},
		submit: function(elem){
			

10.  new Function() 
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments and returns the sum of those arguments
var adder = new Function('a', 'b', 'return a + b');

// Call the function
adder(2, 6);
// > 8

在Jquery中：
			// Try to use the native JSON parser first
			return window.JSON && window.JSON.parse ?
				window.JSON.parse( data ) :
				(new Function("return " + data))();

11.  jQuery中的unique是取自Sizzle。只会对DOM ELement 起作用。
作者用jQuery的API 写了个对普通数值也起作用的：
 $.grep(arr,function(v,k){
 	return $.inArray(v,arr) === k;
 })
 //  其中 greo 的作用是便利数组，返回符合cb的元素
 //  inArray 则是封装了Array.indexOf 方法，因为如果有重复元素，indexOf 只会返回头一个

那么自己写的话则是：
var a = [1,2,3,3,2,1];
a.filter(function(v,k){
	return a.indexOf(v) === k;
});

12.  getElementsByTagName  vs  querySelectorAll

div.getElementsByTagName('i')  //  live nodelist
document.querySelectorAll('i')  // static nodelist


Returns an HTMLCollection of elements with the given tag name. The complete document is searched, including the root node. 
The returned HTMLCollection is live, meaning that it updates itself automatically to stay in sync with the DOM tree without 
having to call document.getElementsByTagName() again.

https://developer.mozilla.org/en/docs/Web/API/Document/getElementsByTagName
http://stackoverflow.com/questions/32486199/whats-the-difference-between-live-and-not-live-collection-in-javascript-selecto
https://www.nczonline.net/blog/2010/09/28/why-is-getelementsbytagname-faster-that-queryselectorall/

https://www.paulirish.com/blog/archives/


13. https://wohugb.gitbooks.io/promise/content/what/indexmd.html






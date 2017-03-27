[871ed9126639c9128c18bb2f19e6afd42c0c5ad9]
 init project, 名为Element , 使用的是grunt,component,

 在运行 grunt task的过程中，碰到问题：
 	1） Fatal error: failed to lookup "Element"'s dependency "component-emitter"

	解决方法是：
	 全局安装component, 并在项目目录下 运行 component install

	Link:
	https://github.com/zhenyong/notebook/blob/master/vue_notebook/build_challenge.md
	https://github.com/noflo/noflo/issues/71  （key）

	// 该问题的本质原因，是自己不了解component,都没听说过。该项目也已经停止维护了。。。

	2)  test code 始终不执行，没找到问题的解决方法，不知道是配置的不对，还是依赖有问题。[*]


源码分析：
1）
利用component添加了依赖 `component/emitter`, 这是一个简单的Event Emitter ,和nodejs中的Event Lib很类似。
但是在目前的code中并没有用到。

其中有意思的方法：
Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;  // why???
  this.on(event, on);
  return this;
};
没理解为什么要 
	on.fn = fn;

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);   // 使用()的小技巧
  return this;
};

2）
在explorations folder 下的2个html 文件中，就能看到现在vue的一点影子了。
在 getset.html 中，实现了template解析（用词准确么？），binding.

内部逻辑还是挺简单的：
   a)  使用id获取对应的template, 得到innerHTML
   b)  使用String.prototype.replace(Reg,callback) 获取对应的绑定变量,bindings



3）API：
	String.prototype.replace
	Document.querySelectorAll

https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors



  
[a5e27b1174e9196dcc9dbb0becc487275ea2e84c]  naive implementation

1. 改了不少东西， 引入了 filter ,directive
其中filter.js 中的code还是挺简单的，只有一个capitalize function,实现方法也很简单。
    capitalize: function (value) {
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    }

2. 大致流程：
a) 获取template
b) 上一个版本是使用innerHTML 得到内部的template，而在当前版本中，则是根据添加的元素attribute name 
时候含有prefix（“sd”）来获取的：

root.querySelectorAll(selector)

selector  = Object.keys(Directives).map(function (d) {
        return '[' + prefix + '-' + d + ']'
    }).join()

3） function call stack:

	processNode
		cloneAttributes  // 根据元素上的attribute,返回一个新的数组，里面的每个object是有 attribute name,attribute value, 
						 // {
					            name: attr.name,
					            value: attr.value
        					} , 此后的操作都在这个新的数组上进行。保证不会修改元素上的attribute,因为后面会根据这些属性行进操作（remove这些属性）
		parseDirective  // 根据属性解析出directive, 结构为：
						//  {
					            attr: attr,
					            key: key,
					            filters: filters,
					            definition: def,
					            argument: arg,
					            update: typeof def === 'function'
					                ? def
					                : def.update
        					}
		bindDirective
			bindAccessors
				applyFilters









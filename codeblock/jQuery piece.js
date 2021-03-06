//事件缓存
//用来代替jquery的data缓存
var eventCache = {};

var $$ = ajQuery = function(selector) {
	return new ajQuery.fn.init(selector);
}
ajQuery.fn = ajQuery.prototype = {
	name: 'aaron',
	init: function(selector) {
		this.selector = selector;
		this[0] = document.querySelectorAll(selector)[0]
		return this;
	},
	constructor: ajQuery
}
ajQuery.fn.init.prototype = ajQuery.fn

ajQuery.event = {
	//增加事件
	add:function(elem, types, handler){
		var eventHandle = function(e) {
			return ajQuery.event.dispatch.apply(elem, arguments)
		};
		//把用户的回调，放到缓存中
		eventCache['handler'] = handler
		if (elem.addEventListener) {
			elem.addEventListener(types, eventHandle, false);
		}
	},

	//派发事件
	dispatch:function(event){
		//修正事件对象
		event = ajQuery.event.fix(event);
		//var handlerQueue = ajQuery.event.handlers.call(this, event, eventCache['handler']);
		eventCache['handler'].call(this,event)
	},

	//执行事件句柄
	handlers: function(event, handlers) {
		var handlerQueue = [];
		handlerQueue.push({
			elem: this,
			handlers: handlers.slice(delegateCount)
		});
	},
	//修正事件对象
	fix:function(event){
		//原始事件引用
		var originalEvent = event;
		//鼠标事件对象的属性
		var props= "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" ");

		//创建事件对象
		var event = new ajQuery.Event(originalEvent);

		//混入事件属性
		i = props.length;
		while (i--) {
			prop = props[i];
			event[prop] = originalEvent[prop];
		}
		return event
	}
}

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

//模拟出事件对象
//增加调用判断方法
ajQuery.Event = function(src, props) {
	if (src && src.type) {
		this.originalEvent = src;
		this.type = src.type;
		this.isDefaultPrevented = src.defaultPrevented ||
			src.defaultPrevented === undefined &&
		src.returnValue === false ?
			returnTrue :
			returnFalse;
	} else {
		this.type = src;
	}
	this.timeStamp = src && src.timeStamp || jQuery.now();
	this[jQuery.expando] = true;
};

ajQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	preventDefault: function() {
		var e = this.originalEvent;
		this.isDefaultPrevented = returnTrue;
		if (e && e.preventDefault) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;
		this.isPropagationStopped = returnTrue;
		if (e && e.stopPropagation) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;
		this.isImmediatePropagationStopped = returnTrue;
		if (e && e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		this.stopPropagation();
	}
};


ajQuery.fn.on = function(types, fn) {
	//参数过滤
	//...............
	ajQuery.event.add(this[0], types, fn);
}


$$('#aarontest').on('click',function(){
	alert('通过click绑定，慕课网')
})
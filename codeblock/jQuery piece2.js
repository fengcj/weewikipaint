////////////////////
//事件on接口的内部直接绑定方法 //
////////////////////
add: function(elem, types, handler, data, selector) {

    var handleObjIn, eventHandle, tmp,
		events, t, handleObj,
		special, handlers, type, namespaces, origType,
		//事件缓存
		elemData = data_priv.get(elem);

	// 检测状态，若为空数据、text或comment节点时，阻止绑定事件
	if (!elemData) {
		return;
	}

    // 一般在第一运行的时候，handler为事件处理函数,后面jQuery对handler做了一些包装
    // 检测handler是包含handler和selector的对象，包含说明handler是一个事件处理函数包
	if (handler.handler) {
		handleObjIn = handler;
		handler = handleObjIn.handler;
		selector = handleObjIn.selector;
	}

    //检测handler是否存在ID （guid），如果没有那么传给他一个ID
    //添加ID的目的是 用来寻找或者删除handler
	if (!handler.guid) {
		handler.guid = jQuery.guid++;
	}

	//给缓存增加事件处理空间
	//elemData = {
	//   events:
	//   handle:	
	//}
	//同一个元素，不同事件，不重复绑定
	if (!(events = elemData.events)) {
		events = elemData.events = {};
	}
	if (!(eventHandle = elemData.handle)) {
		eventHandle = elemData.handle = function(e) {
			// Discard the second event of a jQuery.event.trigger() and
			// when an event is called after a page has unloaded
			return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
				jQuery.event.dispatch.apply(elem, arguments) : undefined;
		};
	}

	// Handle multiple events separated by a space
	// 通过空格分隔的多事件
	types = (types || "").match(rnotwhite) || [""];
	t = types.length;
	while (t--) {
		// 如"mouseover.a.b" → ["mouseover.a.b", "mouseover", "a.b"]
		tmp = rtypenamespace.exec(types[t]) || [];
		type = origType = tmp[1];
		//取出事件命名空间，如a.b，并根据"."分隔成数组
		namespaces = (tmp[2] || "").split(".").sort();

		// There *must* be a type, no attaching namespace-only handlers
		//检测状态，若为空数据、text或comment节点时，阻止绑定事件
		if (!type) {
			continue;
		}

		// If event changes its type, use the special event handlers for the changed type
		// 事件是否会改变当前状态，如果会则使用特殊事件
		// click beforeunload blur 
		special = jQuery.event.special[type] || {};

		// If selector defined, determine special event api type, otherwise given type
		// 根据是否已定义selector，决定使用哪个特殊事件api，如果没有非特殊事件，则用type
		// focus -> delegateType:focusin
		// blur -> delegateType:focusout
		type = (selector ? special.delegateType : special.bindType) || type;

		// Update special based on newly reset type
		special = jQuery.event.special[type] || {};

		// handleObj is passed to all event handlers
		handleObj = jQuery.extend({
			type: type,
			origType: origType,
			data: data,
			handler: handler,
			guid: handler.guid,
			selector: selector,
			needsContext: selector && jQuery.expr.match.needsContext.test(selector),
			namespace: namespaces.join(".")
		}, handleObjIn);

		// Init the event handler queue if we're the first
		if (!(handlers = events[type])) {
			handlers = events[type] = [];
			handlers.delegateCount = 0;

			// Only use addEventListener if the special events handler returns false
			// 如果获取特殊事件监听方法失败，则使用addEventListener进行添加事件
			if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
				if (elem.addEventListener) {
					elem.addEventListener(type, eventHandle, false);
				}
			}
		}

		if (special.add) {
			special.add.call(elem, handleObj);

			if (!handleObj.handler.guid) {
				handleObj.handler.guid = handler.guid;
			}
		}

		// Add to the element's handler list, delegates in front
		//有委托元素 ，增加委托标记
		if (selector) {
			handlers.splice(handlers.delegateCount++, 0, handleObj);
		} else {
			handlers.push(handleObj);
		}

		// Keep track of which events have ever been used, for event optimization
		jQuery.event.global[type] = true;
	}

}
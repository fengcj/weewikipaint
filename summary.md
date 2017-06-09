1. node

a)node是什么？

  v8 加上各种 c++ lib
  内建的js是对这些lib的一种wrapper

  v8提供hook

b)node解决/完善了什么？
  CommonJS 模块化编程 server端  （对应client端的AMD,requirejs实现了该标准） es6
  处理文件  fs模块
  连接数据库 tcp?
  网络 http
  task
  流 stream

c) 核心
  no-blocking IO  
  event loop

e) 源码 js lib部分
  最关键的是 wrapper 每一个module

    function(exports,require,module,__filename,__dirname){

      // Module
      module.exports = // what you want return;
    }

    code:
    lib/internal/bootstrap_node.js
    NativeModule.wrapper = [
      '(function (exports, require, module, __filename, __dirname) { ',
      '\n});'
    ];


    lib/module.js:
    var compiledWrapper = vm.runInThisContext(wrapper, {
      filename: filename,
      lineOffset: 0,
      displayErrors: true
    });
    result = compiledWrapper.call(this.exports, this.exports, require, this,
                              filename, dirname);

f) 目前使用版本是v8.0.0


g)  Event
  system events (c++ core libuv)
  custom events (javaScript core Event Emitter)
    {
      "eventName1" : [handler1,handler2]
      "eventName2" : [handler1,handler2]

    }

    Node dose things async, V8 does not.




2. JavaScript

 a) 特性
    first-class function

 b)基础类型
    undefined
    null,
    Boolean,
    String,
    Number,
    Object,

    ========

    Functoin,
    Array,
    RegExp

 c) "use strict"


 b) es6



2.  AMD requireJS  API




end

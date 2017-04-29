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



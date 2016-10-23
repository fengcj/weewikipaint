
1.  史上最全Html和CSS布局技巧
http://www.imooc.com/article/2235



1) vertical-align:middle 


只有一个元素属于inline或是inline-block（table-cell也可以理解为inline-block水平）水平，其身上的vertical-align属性才会起作用。


2) overflow:hidden 
触发bfc

3)absolute



========================



2.  30个提高Web程序执行效率的好经验

12） 当你对对象的成员（属性或方法）进行反复操作时，先存储对它们的引用。例如var getTags = document.getElementsByTagName; getTags(‘div’);
//  存在this劫持的问题。

资料  http://yuiblog.com/blog/2007/04/11/performance-research-part-4/

// 建议都很不错，有些知道，有些在实践中用到却没意识到。多实践，用到代码实处。





==============================

3. http://softwareengineering.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before

1)  工具之测试网页兼容性
http://browsershots.org/
直接选择浏览器版本，即可。

http://www.kuqin.com/web/20110609/91796.html

2）翻译版本更好：
http://www.kuqin.com/web/20111207/315835.html


==============================

4.

前端路由的两种实现原理

https://segmentfault.com/a/1190000007238999

1） History API

//  作者博客： http://orangexc.xyz/


2）hash
 window.addEventListener('hashchange', this.refresh.bind(this), false);


==============================

合理设置响应式设计的响应点

http://mxd.tencent.com/%E5%90%88%E7%90%86%E8%AE%BE%E7%BD%AE%E5%93%8D%E5%BA%94%E5%BC%8F%E8%AE%BE%E8%AE%A1%E7%9A%84%E5%93%8D%E5%BA%94%E7%82%B9?f=http://blogread.cn/

5. 

1）优先默认设置

我们需要确认的第一件事不一定是小尺寸屏幕的样式，而是默认设置：各个地方浏览网站时的样式，无论屏幕大小。这些样式包括字号、留白、品牌风格如边框和背景之间的关系。由于这些样式是每个终端都会用到，则不应该放在媒体查询里。需要在媒体查询里定义的内容应该是在基础样式上的一些例外（比如更小号的字体）或是补充（比如栅格）。

这就意味着只有当某个特定的元素在小尺寸屏幕上显示有差异时，我们才使用媒体查询。这样想想你就会发现这种情况有很多：页头、导航以及其他复杂的元素在小尺寸屏幕上常常是根本不一样的。像我举的例子一样，把这些元素的代码放在一个媒体查询里是正确的，因为它相对于默认设置来说是个例外。


2）细节方面

上面的例子是很基本的，我也没有说明太多细节。有两点是至关重要的，所以我在这里加上。一个是关于媒体查询中的长度单位ems，另一个则是响应点。


===================

6.一次完整的 HTTP 请求过程

http://www.codeceo.com/article/http-process.html

1)
WEB Server都是基于Socket编程，

==========================

7.http://www.codeceo.com/article/http-long-connect.html
HTTP长连接和短连接原理浅析


1)  
4. 长连接和短连接的优点和缺点

由上可以看出，长连接可以省去较多的TCP建立和关闭的操作，减少浪费，节约时间。对于频繁请求资源的客户来说，较适用长连接。不过这里存在一个问题，存活功能的探测周期太长，还有就是它只是探测TCP连接的存活，属于比较斯文的做法，遇到恶意的连接时，保活功能就不够使了。在长连接的应用场景下，client端一般不会主动关闭它们之间的连接，Client与server之间的连接如果一直不关闭的话，会存在一个问题，随着客户端连接越来越多，server早晚有扛不住的时候，这时候server端需要采取一些策略，如关闭一些长时间没有读写事件发生的连接，这样可 以避免一些恶意连接导致server端服务受损；如果条件再允许就可以以客户端机器为颗粒度，限制每个客户端的最大长连接数，这样可以完全避免某个蛋疼的客户端连累后端服务。

短连接对于服务器来说管理较为简单，存在的连接都是有用的连接，不需要额外的控制手段。但如果客户请求频繁，将在TCP的建立和关闭操作上浪费时间和带宽。

长连接和短连接的产生在于client和server采取的关闭策略，具体的应用场景采用具体的策略，没有十全十美的选择，只有合适的选择。

5. 什么时候用长连接，短连接？

长连接多用于操作频繁，点对点的通讯，而且连接数不能太多情况，。每个TCP连接都需要三步握手，这需要时间，如果每个操作都是先连接，再操作的话那么处理速度会降低很多，所以每个操作完后都不断开，次处理时直接发送数据包就OK了，不用建立TCP连接。例如：数据库的连接用长连接， 如果用短连接频繁的通信会造成socket错误，而且频繁的socket 创建也是对资源的浪费。

而像WEB网站的http服务一般都用短链接，因为长连接对于服务端来说会耗费一定的资源，而像WEB网站这么频繁的成千上万甚至上亿客户端的连接用短连接会更省一些资源，如果用长连接，而且同时有成千上万的用户，如果每个用户都占用一个连接的话，那可想而知吧。所以并发量大，但每个用户无需频繁操作情况下需用短连好。

// 作者博客： http://www.cnblogs.com/0201zcr/



========================================

8. http://www.codeceo.com/article/browser-http-cache.html
浏览器 HTTP 缓存原理分析
1）缓存配置的一些注意事项

① 只有get请求会被缓存，post请求不会

② Etag 在资源分布在多台机器上时，对于同一个资源，不同服务器生成的Etag可能不相同，此时就会导致304协议缓存失效，客户端还是直接从server取资源。可以自己修改服务器端etag的生成方式，根据资源内容生成同样的etag。

③ 系统上线，更新资源时，可以在资源uri后边附上资源修改时间、svn版本号、文件md5 等信息，这样可以避免用户下载到缓存的旧的文件

④ 观察chrome的表现发现，通过链接或者地址栏访问，会先判断缓存是否过期，再判断缓资源是否更新；F5刷新，会跳过缓存过期判断，直接请求服务器，判断资源是否更新。

// 作者博客： http://www.cnblogs.com/tzyy/

==========================================


9. 

1) &:first-child  (scss) 

好好想想absolute 
http://www.cnblogs.com/coco1s/p/5955631.html
http://codepen.io/Chokcoco/pen/mAxQBv

作者博客 ： http://www.cnblogs.com/coco1s/



查：
1. Promise MDN
https://github.com/camsong/blog/issues/2
2. 看http://www.cnblogs.com/coco1s/






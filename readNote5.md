1.前端技术体系大局观

https://zhuanlan.zhihu.com/p/23185351


1)
第三方库的组织构成：

样式框架：Bootstrap Material design
UI框架：React Vue
第三方功能库：Fetch Modernizr Sentry GA 
第三方基础库：jQuery Zetpo Underscore Lodash

// Sentry 是用来记录异常，并提交到server进行分析
// GA  是google analytice ,用于分析网站 （https://developers.google.com/analytics/devguides/collection/gajs/，使用 Cookie 来衡量网站上的用户互动）


2)

静态检查 - Eslint JSCS
Unit Test - Karma Jasmine Mocha
End to End Test - Protractor Nightwatch Selenium
持续集成 - TravisCI CircleCI


========================================

2. 架构选型之道：如何选择靠谱的JavaScript应用架构？

http://www.infoq.com/cn/presentations/how-to-choose-a-reliable-javascript-application-architecture
（dylans/dojo）

1) what we need from the framework?

2) 关注的几点：
      模块化，便于重用，测试，如何分离出不同的模块呢？每个模块应该有自己的目的。


3）Typescript


4) 写code的时候，假设自己什么都不知道，而不是什么都知道。在以为自己是专家，到自己真的是专家之间，有
长长的一段路要走。






==============================
1. 单点登录与消息队列
 https://segmentfault.com/a/1190000003758029

1） SSO的核心要素
共享同一个身份认证系统，也就是说所有站点的身份验证操作在同一个系统下完成
每个子系统从共同的身份认证系统中取得用户凭证，包含用户的身份、权限信息等


下面以采用Cookie的一种方案为例来解释：

我们首先定义授信服务器A，受信服务器B，客户C；当前的业务是B需要验证C的身份。需要注意的是B和C都会保有session来记录C的登录状态，均会向C 的Header中写入对应自己域名的Cookie以存储凭证信息。Cookie中含有tokenId来标示C，也就是说对于A和B他们的Cookie中对应于同一个C，其tokenId应该一致。

C向B发起请求后，会有以下几种情形：

a.B含有session，C含有Cookie，且session和Cookie中的token一致，那么不需要向A求助
b.C中对于B无Cookie或Cookie过期或session与Cookie不一致，将向A发起请求。之后根据A的情形，有以下情况：
	A中session与C中Cookie的token一致，重新生成凭证信息返回给B，B重新写入Cookie与session
	A中Cookie过期或信息不一致，将重定向到登录页面
c.对于登录情形，A将更新Cookie与session，然后C再向B发起请求，这时就会变成2中第一种情况，导致A和B的信息完成同步。

// 不能理解c. google 单点登录。


2）消息队列

消息队列本身是简单的，可以直接看做一个队列，重点是如何定义存储在队列中的数据格式，以满足我们对应的操作需求。MQ常常应用于那些并发量大而对于实时性要求不高的情况。举个例子，比如一个用户量较大的社交网站的评论发布。

消息队列在WEB开发中主要有两种模式：

生产者/消费者模式：对于一则消息，只有一个消费者线程会去处理它，适用于我们上面所说的评论系统
发布者/订阅者模式：对于所有订阅者，它可以读取所有在它加入之后发布的消息

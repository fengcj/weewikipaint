1. volatile 的作用了，前面在学习 volatile 关键字的时候，知道了它适用于两种场景，其中一种场景就是，当对基本类型的变量进行直接赋值时，如果加了 volatile 就可以保证它的线程安全。注意，这是 volatile 的非常典型的使用场景。

2. 复习AQS的讲解

//  <并发编程核心78讲>

3. hbase 教程 // http://www.nosqlnotes.com/technotes/hbase/hbase-overview-concepts/


4. 分布式锁

前段时间在想，为何一定要分布式锁，java serveice 去 操作db, 不用分布式锁，直接在db层面兜底不行么？

google了半天，找到一篇文章中的例子，解决了这个困惑。

// https://segmentfault.com/a/1190000016351095

设有一个进程A，每小时准点给用户发送一条短信"Hello world"，为了高可用，就必须在多台机器上面部署多个进程，避免宕机的情况；
假设部署在两台机器，那么问题来了，用户每个小时就会收到两条"Hello world"，信息就重复了；
我们希望只发送一条"Hello world"，那么就可以引入分布式锁的概念了；
进程A和进程B发送短信前先去注册一个锁，假设进程A抢到了锁，进程B就等待结果，如果发送成功了，那么B就放弃此次任务，等待下一个小时。

说到底就是锁去操作共享资源，不一定就只有db，还有其他的资源也算。


Google的四大基础设施，分别是GFS、MapReduce、BigTable、Chubby，其中Chubby用于提供分布式的锁服务。





// https://juejin.im/post/5bbb0d8df265da0abd3533a5 分布式锁的三种实现(db, redis, zk)


5. 发现了一个很不错的网站：  https://www.w3cschool.cn/architectroad/architectroad-distributed-lock-2.html



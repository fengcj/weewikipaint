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


6. java8 collectors


        //  https://github.com/shekhargulati/java8-the-missing-tutorial
        
        // https://blog.csdn.net/yangyangye/article/details/98489749
        // https://juejin.im/post/5e0df8475188253a6772b6e2

        ConcurrentHashMap<String, Long> map = LongStream.rangeClosed(1, 10)
                .boxed()
                .collect(Collectors.toConcurrentMap(i -> UUID.randomUUID().toString(), Function.identity(),
                        (o1, o2) -> o1, ConcurrentHashMap::new));

        // 关键在于Collectors.toConcurrentMap， 四个入参 API doc如下:

            * @param keyMapper a mapping function to produce keys
            * @param valueMapper a mapping function to produce values
            * @param mergeFunction a merge function, used to resolve collisions between
            *                      values associated with the same key, as supplied
            *                      to {@link Map#merge(Object, Object, BiFunction)}
            * @param mapFactory a supplier providing a new empty {@code ConcurrentMap}
            *                   into which the results will be inserted


7. 设计一个朋友圈系统


8. 高效延时环形队列


9. 不同业务比较

QQ业务
微博业务
秒杀业务，12306业务

由数据层的锁冲突决定的。
        降读：缓存
        降写：把请求拦截在系统的上游


10. https://draven.co/whys-the-design/

11. LinkedHashMap  // https://juejin.im/post/6844903544152129550

12. 幂等

13. 数据库扩容  https://developer.aliyun.com/article/714174




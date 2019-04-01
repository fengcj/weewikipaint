https://www.jianshu.com/p/4df5f2356de9
1. use scan not keys

http://www.cnblogs.com/mafly/p/redis_cluster.html
2. 集群
Redis 集群采用了P2P的模式，完全去中心化。Redis 把所有的 Key 分成了 16384 个 slot，每个 Redis 实例负责其中一部分 slot 。集群中的所有信息（节点、端口、slot等），都通过节点之间定期的数据交换而更新。
Redis 客户端可以在任意一个 Redis 实例发出请求，如果所需数据不在该实例中，通过重定向命令引导客户端访问所需的实例。

由于 Redis 集群需要使用 ruby 命令，所以我们需要安装 ruby 和相关接口。

redis-trib.rb是redis官方推出的管理redis集群的工具，集成在redis的源码src目录下，是基于redis提供的集群命令封装成简单、便捷、实用的操作工具。redis-trib.rb是redis作者用ruby完成的

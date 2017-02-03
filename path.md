2014.07.08
	入职第一天，当天记录是：
		1）申请新的gmail邮箱，用于FackBook平台的接入
		2）设置Eclipse字符集为'UTF_8'
2014.07.21
	入职三周：
		1） 设置Tomcat   // 为什么第三周才设置呢？我前两周干什么去呢？
		2） 设置Mysql，安装MySqlWorkbench // Mysql的知识基本忘光了！！！需要复习！！！
		3） 根据Confluence上的文档，连接上VM中的数据库  // 文档已经没权限查看了，关键点应该是端口映射
2014.07.11
	入职第三天：
		1）设置TortoiseHg,配置好bitbucket地址，开始疯狂pull code // 想想，还是P4，git用的顺手，常用的命令也就几个。
		2)  解决安装Maven时候出现问题：
			`Please set the JAVA_HOME variable in your environment to match the location of your Java installation.`
		    折腾半天发现是自己习惯性在设置完JAVA_HOME后加了个';' 真是自己坑自己。// 
			//  大部分环境问题，都是在自己在坑自己，就跟bug死活找不到，各种逻辑都没问题，就是错，一定是
			拼写问题，反正在自己身上是没跑的。
			//  现在想想，还是node爽，装完就能跑，npm都自带了，几行code就能跑个hello world的server。各种配置全不用。怪不得能火。
		3） Eclipse设置proxy，设置字体，设置自动补全，设置显示行数  //估计每份工作的前一周都在设置环境，申请账号中度过吧。。。
	// 另，写总结，工作日志还是标注上时间节点比较好。这份总结（07.11）是根据文档的创建时间才确定的。
2014.07.15）
	入职第二周(Android学习)：
		1）Android  // 为什么会折腾到android上了呢？当时的项目和这个没一毛钱的关系啊。我当时是闲的么？？？
			// 在做过某个项目后，我对android的碎片化表示'呵呵'，对中国的android定制厂商表示'你们开心就好'，然后毅然决然决定
			//  自废android开发，尽管没正经的写过几个APP，要是不算使用PhoneGap写的某个Demo的APP的话。
		// 但是要说的是，系统之间总是相通的，估计android面试时候一定会问'Activity的生命周期'，在React中也是一样，只不过换成了组件；
		    在android中的系统布局，在web上用css实现也是差不多的思路。
		    再去想想android整个系统结构，node也和它是挺类似（好的系统，一定会分层分的特别明确，一直认为从工程的角度理解，解耦是最重要的）
		    最底层是OS(linux/linux,win)，上一层是C/C++提供的各种lib,再上层是对应的基本组件(Activity,Service.../event,fs,stream,http)，最上层是APP。

2014.07.17
	入职第二周：
		1）Eclipse更换workspace  //  这个自己都写文档记录下来了，那时候自己是有多菜啊！不过已经很久没碰Eclipse了。
2014.07.18
	入职第三周：
		1） Learn OSGI   //当时是因为Team觉得整个架构不好还是某个Module不好，想将其换成OSGI试试，最后也没换成。当时自己还去图书大厦找了些书看看，当时没能理解其思想及优势，现在更是忘光。也不知道有没有公司在大规模使用？自己关注的公众号上是没看见相应的文章。
2014.07.21
	入职第三周：
		1）Mysqldump with permission denied on VM
		// 问题记录不详细，现在都无法回忆起来当时为什么要做这个以及问题的详细log,不过现在
		// 记录问题以及google的功力要比刚工作强上不少。

		// 敲一遍这个命令，唉，mysql真实忘光了：
			`mysqldump -u root -p casino > casino.sql`  (Mysql bin dir)
2014.07.28
	入职第四周：
		1）Mockito 学习  // 在学习写code从来没有对应的unit test,现在在SKB项目(JS)里面，则是丧心病狂的要求覆盖到95%
				   //  各种Mock，使用的是jasmine + Squire , 不过一直不爱写测试倒是没变这两年，不好的习惯！

2014.07.29
	入职第四周：
		1）折腾VM  // continue...
/*  好像这个月什么正经事都没干的样子，现在想想刚入职这几个月的时候大斌哥给了好长时间来适应，小伙伴们也是各种帮助。  */
2014.08.01
	入职第二月初：
		1）总结了一份文档，里面全是修改word配置，pfd调色什么的，真是各种折腾环境，到现在还是，没事就试试新的IDE。
2014.08.27
	入职第二个末：
		1） Android学习线路图。。。  // 难道这个月都在折腾android么？我怎么记得是一直在弄VM(Puppet,Vagrant)，学习Scala啊！！！
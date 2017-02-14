1. DNS  / TCP/ IP



2. web performance test site:

http://www.webpagetest.org/

3. browser 处理HTML 文档
  a) 下载完成后，开始解析
  b) dom数生成（包含所有文档中的节点）
  c) render数生成 (关注可见级别/显示级别)
  d) 逐级解析dom数：
  		p,ol 等一般不引入外部资源标签
  		link,javascript,img等引用标签:
  				link->css 尽量减少页面的reflow
  				javascript->js  js绘制dom节点会阻塞其他标签的解析  （document.write 会阻塞下载通道以及js执行）



4. chrome 使用技巧

http://www.cnblogs.com/AloneSword/p/4546935.html
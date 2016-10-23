
http://varnull.cn/css-vertical-align-middle/

css 实现竖直居中的 N 种场景及 N 种方法

a) 单行文本
1. 设置padding top/buttom 大小相等。

2. 通过给元素设置ine-height，使其等于父容器的高度，从而实现竖直居中。注意，此时记得要考虑父容器的 padding 和 border 带来的高度变化。

b) 多行文本
1. 给元素上下添加相同大小的 padding 值
2. 是借助 table 的属性：将父容器设置成 table，需要竖直居中的元素设置为 table-cell，然后就可以使用 vertical-align 属性来居中了。

c) 块级元素

通常借助 绝对定位 和 translate 等手段，在已知或者未知块级元素高度时，分别使用不同的方法。

1. 块级元素高度已知
此时可以使用绝对定位的方法，并借助 margin 可以为负值的特性，实现绝对定位居中：

/* 已知元素高度为 100px (也可以是百分比，如 80%)*/
height: 100px;

/* 先使用绝对定位，将元素的上边界置于竖直的中间*/
position: absolute;  
top: 50%;

/* 再使用margin-top，将元素向上移动自身高度的一半*/
margin-top: -50px;  

2.  块级元素高度不固定

与上面提到的使用绝对定位居中的方法原理类似，只不过在元素高度不确定的情况下，借助 translateY 使元素向上移动自身高度的一半，进而实现竖直居中。

/* 先将元素的上边界置于竖直的中间*/
position: relative;  
top: 50%;

/* 再使用 translateY，将元素向上移动自身高度的一半*/
transform: translateY(-50%);  




====================================================


提升你的CSS

https://medium.freecodecamp.com/leveling-up-css-44b5045a2667
http://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651223373&idx=1&sn=1a17b691964b0545547051bf5d01184c&chksm=bd49acc98a3e25df55e119059466bbf4bee71d8c555af280895b3f98f49675b62cb5ded8f25e&scene=0#wechat_redirect

1.  css和html 都要语义化

你应该可以像阅读一本书一样去阅读HTML和CSS，就像它们应该呈现一个个故事一样。一个故事会有主角和他们之间错综复杂的关系。许多语义化的CSS最终是会让你的代码变得可维护的。


等进一步阅读，你可以看看 What Makes for Semantic Class Names，Naming CSS Stuff is Really Hard， Semantics and Sensibility。再深度阅读 About HTML semantics and front-end architecture


2. 模块化

当模块化你的CSS时，首先要把你的设计解构成组件。在纸上画或者用AI和Sketch都可以。标识组件可以给你命名类名的方向，也让你明晰它们之间的关系。

阅读更多关于组件驱动CSS，可以看看 CSS Architectures: Scalable and Modular Approaches， Writing Modular CSS with Sass，Modularizing Your Front-End Code for Long Term Maintainability and Sanity

3. 选择一个良好的命名规范

这里有一些人们常用的命名规范：
Object oriented CSS OOCSS
Block element modifier (BEM)
Scalable and modular architecture for CSS (SMACSS)
Atomic

有一点需要记住：你有可能会接手使用不同命名规范的项目。不管你喜欢哪一种命名方式，不要拘泥于自己所喜欢的，尝试去多学习其他的命名规范，换一种角度去思考CSS。

你可以通过Getting your head ’round BEM syntax，BEM 101，Intro to BEM来了解更多关于BEM的知识，如果想大体了解主要的命名规范，可以尝试OOCSS, ACSS, BEM, SMACSS: what are they? What should I use?


4. 遵循单一功能的原则

在CSS领域，单一功能意味着某段代码，某个类或者某个模块只应该做一件事情。当应用到CSS文件组织结构时，意味像carousels以及navigation这样的可独立的组件应该拥有自己的CSS文件。

不管你采用哪一种文件组织方式，记住要符合单一功能原则。如果一个文件开始变得臃肿，可以采用使文件更具逻辑性的方式将其拆分开来。

更多关于文件目录以及css技巧，可以阅读Aesthetic Sass 1: Architecture and Style Organization以及Scalable and Maintainable CSS Architecture。

spalsh类名不仅包含展示，还包含定位等逻辑，其子类名也是如此。为了解决这个问题，我们考虑把代码分拆，用两个不同的类名来组织代码。（见文章截图）

现在我们有splash以及splash__content两个类名。我们可以把splash当做父级类名，其子级类名可以采用splash当做前缀。所有的子级类名都是从父级类名延伸出来的，如splash__content。

如果你想了解更多关于单一功能原则在css领域的应用，可以阅读The single responsibility principle applied to CSS以及Single Responsibility

5. 简单到复杂
css 同样是进化而来的。



==============================

https://github.com/camsong/blog/issues/2

传统 Ajax 已死，Fetch 永生

1. 由于 Fetch API 是基于 Promise 设计，有必要先学习一下 Promise，推荐阅读 MDN Promise 教程。旧浏览器不支持 Promise，需要使用 polyfill es6-promise 。

本文不是 Fetch API 科普贴，其实是讲异步处理和 Promise 的。Fetch API 很简单，看文档很快就学会了。推荐 MDN Fetch 教程 和 万能的WHATWG Fetch 规范。

2. XMLHttpRequest 是一个设计粗糙的 API，不符合关注分离（Separation of Concerns）的原则，配置和调用方式非常混乱，而且基于事件的异步模型写起来也没有现代的 Promise，generator/yield，async/await 友好。







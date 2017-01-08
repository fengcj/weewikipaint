Automated Testing & Inversion of Control - Creative Commons
a) 单元测试的几个目的，最重要的是回归测试，其次是更好的document code.
b) 单元测试的套路，首先是选择合适的测试框架（junit,jasime）;
   当具体到test code的时候，先是设置好测试环境,该mock的mock，该fake的fake;
   再是最重要的Act code 部分，也就是将会运行到被测试code的 test code;
   最后则是assert部分，当然会有不同的assert lib

Environment Management (It's a Thing!)
a) 环境包括Language,Server,Database,Libs
b) 如何管理环境呢？首先是Document；接下来是包管理工具，如maven,npm等；单独环境（Docker,Puppet,Chef,Vagrant）

// 好好思考当时在DD做的事情：
  a)  Development = Production
  b)  Provisioning

https://code.tutsplus.com/tutorials/vagrant-what-why-and-how--net-26500

Source Control
Use for:
a) history
b) collaborat
c) branching

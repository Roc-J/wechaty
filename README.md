![](http://i.imgur.com/3CYTsmS.png)

# wechaty聊天机器人 #

随着微信业务的不断扩大，可以看到在微信事务处理中，我们不得不处理一些朋友请求验证，拉人入群等简单却很繁琐的工作，随着AI技术的不断深入，我们越来越更愿意将这些交给程序或者小机器人来帮我们实现。

而wechaty是我在李佳芮师姐带领下，开始学习，并觉得确实有一些用处，特此，为这个事情做一些demo学习，并将自己的经验分享给大家。

# 项目说明 #

wechaty是一个简单的chatbot机器人，通过使用wechaty的API接口，可以实现一些简单的功能。  
该仓库下目录结构是:

* examples  里面包含的是WeChaty的实例
	* room_manage_wechaty  [https://github.com/Roc-J/wechaty/tree/master/examples/room_manage_wechaty](https://github.com/Roc-J/wechaty/tree/master/examples/room_manage_wechaty)  
* notes  里面是一些学习的笔记
	* API文档总结[https://github.com/Roc-J/wechaty/blob/master/notes/API%20documents.md](https://github.com/Roc-J/wechaty/blob/master/notes/API%20documents.md "wechaty API")  
	* Chat bot开发流程 [https://github.com/Roc-J/wechaty/blob/master/notes/summary.md](https://github.com/Roc-J/wechaty/blob/master/notes/summary.md)  
* photo  相关的图片
* README.md 说明文档

# 运行环境 #

* Windows10  
* node 版本v8.0.0  
* npm 版本5.0.0  
* mongodb 版本3.4.4

# 编写的架构设计 #
实例room_manage_wechaty采用的架构是Express框架+MongoDB数据库以及和wechaty API接口开发的一个简单的群通讯录功能。

主要内容的包括：

1. 入群，填写基本的信息，通过就可以拉入群  
2. 退群  
3. 群通讯录查看

# Get Start #

> 确保已经安装好node环境和MongoDB数据库，因为测试时在一个局域网内测试，因此给出的服务器网址可能在运行时会有错误。

	git clone git@github.com:Roc-J/wechaty.git
	cd wechaty  
	cd examples
	node server.js

![](http://i.imgur.com/3H0E55T.png)

运行后会出现一个二维码，扫描即可登录。

# 运行结果 #

## 入群 ##

![](http://i.imgur.com/sZZ0KoJ.png)

## 填写表单 ##

![](http://i.imgur.com/aVqr4jY.png)

## 填写成功 ##

![](http://i.imgur.com/vw1Yi2O.png)

## 群通讯录 ##

![](http://i.imgur.com/koD9Tas.png)

# Reference API #

https://github.com/chatie/wechaty  
https://github.com/chatie/wechaty/issues  
https://github.com/chatie/wechaty/wiki
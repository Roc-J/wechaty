# Chat bot的开发流程 #

## 任务 ##
设计并且实现一个群通讯录，管理客户入群信息  
简单地实现一个group customer profile（客户配置文件，客户概况）

## 学习总结 ##
### 微信号实现自动拉人进群的功能 ###
主要使用了三个关键函数：  

**message**、**room**  

* 通过message.from()获取联系人contact  
* 通过room.find()找到群  
* 使用room.add(contact)就可以实现自动拉人  

### 微信机器人检测自己是否还是某个联系人的好友 ###
* contact 有一个Contact.findAll()的函数，返回一个contact数组，会找到所有的联系人  
* 遍历这个数组，使用contact.say()给所有的好友群发消息，判断回复的类型和内容，回复消息的类型可以通过message.type()获取，如果返回的是10000就是系统消息，一旦判断出返回的是一个 “对方不是你的好友”的系统消息，那就可以判断出这个联系人不是好友

Wechaty基本的实现原理，是通过Chrome实时监听微信网页版的各类信息，然后将抓取的信息封装成接口，供开发者使用。 有9个基本的事件，基本上涵盖了我们Web微信上的所有事件，分别是：  

* scan事件会在需要扫码登陆微信的被触发
* login事件会在机器人成功登陆后被触发  
* logout事件会在机器人掉线以后被触发    
* message事件会在有新消息的时候被触发  
* error事件会在程序出现error的时候被触发  
* friend事件会在有好友请求的时候被触发  
* room-join事件会在有人加入群时被触发  
* room-leave事件会在群主移好友出群时被触发  
* room-topic事件会在群名称被修改时被触发

另外，Wechaty将机器人、联系人、微信群、好友请求封装成类，分别是Wechaty、Contact、Message、和FriendRequest，这样只要import这些包，就可以直接使用这些类里面的函数模拟微信的各种操作了。比如给指定的人发送消息，我只要用contact.say(‘hello’) 就可以了。
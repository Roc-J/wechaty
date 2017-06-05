# wechaty——API Reference #

## Wechaty Events   
  
* scan事件会在需要扫码登陆微信的被触发  
* login事件会在机器人成功登陆后被触发  
* logout事件会在机器人掉线以后被触发  
* message事件会在有新消息的时候被触发  
* error事件会在程序出现error的时候被触发  
* friend事件会在有好友请求的时候被触发  
* room-join事件会在有人加入群时被触发  
* room-leave事件会在群主移好友出群时被触发  
* room-topic事件会在群名称被修改时被触发

## Wechaty ##
* instance（setting:PuppetSetting):promise<Wechaty> 得到机器人实例
	
	在使用的时候一般直接使用.instance()得到实例,这是自己使用时常用的 
  
* init():Promise<void> 初始化机器人  
* say(content:String):Promise<void> 发送消息给filehelper，仅仅是方便你的日志记录和报告信息  

## Message ##

> Message 是wechaty所包装的一个实体类对象，可以直接通过Meassge来获取到这个对应，自己的理解是这个可以监听到所有的信息  

* from():Contact 返回的信息的发送者  
* from(Contact:Contact):void 设置信息的发送者  
* to():Contact 得到信息的目的地  
* to(contact:Contact):string 设置一个联系人作为信息的目的地  
* content():String 得到发送内容的内容  
* content(content:string):string 设置内容作为信息  
* room()：Room|null 从message中得到群  
* room(room:Room):void 设置信息的群  
* type():MsgType 得到信息的类型   
* say(content:string):Promise 给发送信息的人回复  
* self():boolean 自检信息是否是自己发送给自己的  

## Contact ##
> contact也是wechaty内部的一个对象实体，通过contact可以得到联系人的相关信息

1. name():String 得到联系人的名字  
2. remark():string  得到联系人的备注名字  
3. remark(remark:string):Promise 给联系人设置备注  
4. weixin()：string 得地联系人的微信id  
5. star():boolean 标记是否是星级朋友  
6. say(content:string):promise 给联系人发消息

## Room ##

const { Wechaty ,MediaMessage } = require('wechaty')
const bot = Wechaty.instance()

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.use(express.static('public'));
 
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
 
app.post('/result', urlencodedParser, function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "name":req.body.name,
       "age":req.body.age,
       "number":req.body.number
   };
   console.log(response);
   res.redirect('http://192.168.1.125:8081/result.html');
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})

bot
.on('scan', (url, code)=>{
    let loginUrl = url.replace('qrcode', 'l')
    require('qrcode-terminal').generate(loginUrl)
    console.log(url)
})

.on('login', user=>{
    console.log(`welcome ${user} login!`)
})

.on('logout',user=>{
    console.log(`${user} logout!`)
})

.on('message', message =>{
    try{
        const room = message.room()
        console.log((room?'['+room.topic()+']':'') + '<'+ message.from().name() + '>' +': ' + message.content())
        if (/^(ding|ping|code|bing)$/i.test(message.content()) && !message.self()) {
            message.say('dong')
            console.log(message.to()+' reply "dong"')
        }
        if (/^入群$/i.test(message.content()) && !message.self()) {
            message.say('完善你的个人信息，审核通过后可以拉你入群')
            message.say('http://192.168.1.125:8081/')
        }
    } catch(error) {
        console.log('error: '+error)
    }
})

.init()
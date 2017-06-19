const { Wechaty, Room } = require('wechaty')

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/qjk';
var path = require('path');
//插入
var insertData = function(db, data, callback) {
    var collection = db.collection('site');

    //插入数据
    collection.insert(data, function(err, result) {
        if (err) {
            console.log('Error : ', err);
            return;
        }

        callback(result);
    });
}

//查询
var selectData = function(db, whereStr, callback) {
    //连接列表
    var collection = db.collection('site');
    collection.find(whereStr).toArray(function(err, result) {
        if (err) {
            console.log('Error :' + err);
            return;
        }

        callback(result);
    });
}

const bot = Wechaty.instance()

var express = require('express');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');

var response = "";
var person = "";
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

bot
    .on('scan', (url, code) => {
        let loginUrl = url.replace('qrcode', 'l')
        require('qrcode-terminal').generate(loginUrl)
        console.log(url)
    })

.on('login', user => {
    console.log(`welcome ${user} login!`)
})

.on('logout', user => {
    console.log(`${user} logout!`)
})

.on('message', async function(message) {
    const contact = message.from()
    const content = message.content()
    const room = message.room()

    if (/out/.test(content)) {
        let keyroom = await Room.find({ topic: "test" })
        if (keyroom) {
            await keyroom.say("Remove from the room", contact)
            await keyroom.del(contact)
        }
    }
    try {
        const room = message.room()

        /*const room = message.room()
        console.log((room ? '[' + room.topic() + ']' : '') + '<' + message.from().name() + '>' + ': ' + message.content())
        if (/^(ding|ping|code|bing)$/i.test(message.content()) && !message.self()) {
            message.say('dong')
            console.log(message.to() + ' reply "dong"')
        }*/
        if (/^入群$/i.test(message.content()) && !message.self()) {
            person = message.from().name;
            sex = message.from().gender();
            if (sex == 1) {
                message.say('王子，请完善您的个人信息，审核通过后可以拉您入群')
            } else {
                message.say('公主，请完善您的个人信息，审核通过后可以拉您入群')
            }

            message.say('http://192.168.1.111:8081/')
            app.use(express.static('public'));

            app.get('/index.html', function(req, res) {
                res.sendFile(__dirname + "/" + "index.html");
            })

            app.post('/result', urlencodedParser, function(req, res) {
                response = {
                    "name": req.body.name,
                    "age": req.body.age,
                    "number": req.body.number
                };
                //console.log(response);
                res.redirect('http://192.168.1.111:8081/result.html');
                if (sex == 1) {
                    message.say('王子，请确认您的个人信息，正确回复【确认】，否则回复【错误】');
                    message.say('姓名：' + response.name + '\n' + '年龄：' + response.age + '\n' + '电话号码：' + response.number);
                } else {
                    message.say('公主，请确认您的个人信息，正确回复【确认】，否则回复【错误】');
                    message.say('姓名：' + response.name + '\n' + '年龄：' + response.age + '\n' + '电话号码：' + response.number);
                }

            })

        }
        if (/^确认$/i.test(message.content()) && !message.self()) {
            message.say('恭喜您，审核通过');
            MongoClient.connect(DB_CONN_STR, function(err, db) {
                console.log("连接成功！");
                console.log(response)
                insertData(db, response, function(result) {
                    console.log(result);
                    db.close();
                });
            });
            const contact = message.from();
            let joinroom = await Room.find({ topic: "test" });
            if (joinroom) {
                await joinroom.add(contact);
                joinroom.say("welcome!", contact);
            }

        }
        if (/^错误$/i.test(message.content()) && !message.self()) {
            sex = message.from().gender();
            if (sex == 1) {
                message.say('王子，对不起，服务器开了个小差，请重新填写吧~');
            } else {
                message.say('公主，对不起，服务器开了个小差，请重新填写吧~');
            }
            message.say('http://192.168.1.111:8081/');
        }

        if (/^查看$/i.test(message.content()) && message.self()) {

        }

    } catch (error) {
        console.log('error: ' + error)
    }
})

.init()

var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log('连接成功');
    var whereStr = {}
    selectData(db, whereStr, function(result) {
        console.log(result);
        
        //message.say('http://192.168.1.111:8081/info');
        app.get('/info', function(req, res) {
            res.render('index', {
                arrs: result
            });
        })
        db.close();
    });
});

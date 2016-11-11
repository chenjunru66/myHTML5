var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer'),
    fs = require('fs'),
    template = require('art-template')
//实例化对象
var app = express(),
    form = multer()

app.engine('.html',template.__express)
app.set('view engine','html')

template.config('cache','false')

//设置文件存储
//var storage = multer.diskStorage({
//        destination: 'www/uploads',
//        filename: function(req, file, callback){
//            var petname = req.cookies.petname
//            callback(null, petname + '.jpg')
//        }
//    }),
//    uploads = multer({storage})

//设置中间件
app.use(express.static('www'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())
//注册
app.use(require('./routers/register'))
/*-------------------- 注册  --------------------*/


app.use(require('./routers/login'))
/*----------------  登录请求  -------------------*/


app.use(require('./routers/signout'))
///*---------------- 退出请求 ---------------------------*/

app.use(require('./routers/photo'))

/*--------------------文件上传处理 --------------------*/

app.use(require('./routers/ask'))
/*------------------------提问请求---------------------*/

app.use(require('./routers/questions'))
/*----------------- 首页获取提问的内容信息 ---------------*/


app.use(require('./routers/answers'))
//回答数据处理

app.use(require('./routers/index'))
//模板处理--首页


app.use(require('./routers/loginhtml'))

app.use(require('./routers/register.html'))


app.use(require('./routers/answer.html'))

app.use(require('./routers/ask.html'))


app.use(require('./routers/user.html'))





app.listen(4000, function(){
    console.log( 'ask-answer is runnig' )
})




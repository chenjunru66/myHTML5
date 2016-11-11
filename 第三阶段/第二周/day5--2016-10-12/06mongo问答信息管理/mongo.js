var express = require('express')
var bodyParser = require('body-parser')
var template = require('art-template')
var cookieParser = require('cookie-parser'),
    multer = require('multer')
var app = express(),
form = multer()



app.use(express.static('www'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())


app.engine('.html',template.__express)
app.set('view engine','html')
template.config('cache',false)

//app.use(require('./routers/messdb'))

//注册模块
app.use(require('./routers/register'))

//登录模块
app.use(require('./routers/login'))

//首页显示模块
app.use(require('./routers/index'))

//退出模块
app.use(require('./routers/signout'))

//图片上传模块
app.use(require('./routers/photo'))

//提问模块
app.use(require('./routers/ask'))

//s首页获取提问内容
//app.use(require('./routers/ques'))
//回答模块
app.use(require('./routers/answer'))



app.listen(3000,function(){
    console.log('system is running!!')
})
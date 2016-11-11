//引入所需模块
var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')
var fs = require('fs')
var cookieParser = require('cookie-parser')
var template = require('art-template')

//创建实例化对象
var app = express()
var form = multer()

// 设置模块格式
app.engine('.html',template.__express)
// 设置视图引擎，使用html渲染模板
app.set('view engine','html')
// 禁止本地缓存
template.config('cache',false)

//设置中间件
app.use( express.static('wwwroot') )
app.use( bodyParser.urlencoded( { extended:false } ))
app.use(cookieParser())

//处理注册的请求
app.use( require('./routes/register') )

//处理登录的请求
app.use( require('./routes/login') )

//退出请求处理--清除cookie
// app.use( require('./routes/quit') )

//文件上传请求
// app.use( require('./routes/photo') )

//处理提问请求
app.use( require('./routes/saveAsk') )

//回答数据处理
app.use( require('./routes/saveAnswer') )

// 首页处理
app.use( require('./routes/index') )

app.get('/login.html',function(req,res){
    console.log('现在开始渲染登录页面了')
    res.render('login',{
        title:'登录页面',
        name:'login'
    })
})
app.get('/register.html',function(req,res){
    console.log('现在开始渲染注册页面了')
    res.render('register',{
        title:'注册页面',
        name:'register'
    })
})
app.get('/ask.html',function(req,res){
    console.log('现在开始渲染提问页面了')
    res.render('ask',{
        title:'提问页面',
        name:'ask'
    })
})
app.get('/answers.html',function(req,res){
    console.log('现在开始渲染回答页面了')
    res.render('answers',{
        title:'回答页面',
        name:'answers'
    })
})
app.get('/user.html',function(req,res){
    console.log('现在开始渲染个人资料页面了')
    res.render('user',{
        title:'个人资料',
        name:'user'
    })
})

template.helper('dateFormate',function(date){
    var time = new Date(date)

    var year = time.getFullYear()
    var month = time.getMonth() + 1
    var date = time.getDate()
    var hour = time.getHours()
    var minute = time.getMinutes()
    var second = time.getSeconds()

    month = month < 10 ? '0' + month : month
    date = date < 10 ? '0' + date : date
    hour = hour < 10 ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute
    second = second < 10 ? '0' + second : second
    var str = year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
    return str
})

app.listen(4000,function(){
    console.log('Hello everyone')
});
var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')
var cookieParser = require('cookie-parser')
var template = require('art-template')
//var fs = require('fs')
var app = express()
//var form = multer()
app.engine('.html',template.__express)
app.set('view engine','html')
template.config('cache',false)

app.use(express.static('www'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())



//app.use(require('./routers/messdb'))

//注册模块
app.use(require('./routers/register'))

//登录模块
app.use(require('./routers/login'))
//退出模块
app.use(require('./routers/signout'))


//图片上传模块
app.use(require('./routers/photo'))




//提问模块
app.use(require('./routers/ask'))


//回答模块
app.use(require('./routers/answer'))
//首页显示模块
app.use(require('./routers/index'))


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
app.get('/answer.html',function(req,res){
    console.log('现在开始渲染回答页面了')
    res.render('answer',{
        title:'回答页面',
        name:'answer'
    })
})
app.get('/user.html',function(req,res){
    console.log('现在开始渲染个人资料页面了')
    res.render('user',{
        title:'个人资料',
        name:'user'
    })
})


app.listen(3000,function(){
    console.log('system is running!!')
})











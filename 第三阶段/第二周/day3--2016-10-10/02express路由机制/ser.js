var express = require('express')
var app = express()

//方法一
//app.get('/',function(req,res){
//    res.send('网站首页')
//})
//app.post('/',function(req,res){
//    res.send('发起post请求')
//})

//路由 ---由路径和HTTP请求方法组成，处理浏览器发起的请求（含路径），以及返回的响应请求
//路由结构---app.METHOD(url,callback)   ex:app.get('/login',function(req,res){})


//方法二
//all方法处理所有的请求类型，all存在执行时，浏览器发起的请求该类型会根据all方法的排序判断哪个方法处理请求，谁在前谁处理按顺序进行执行；all不存在时，根据请求类型进行匹配
app.route('/').all(function(req,res,next){
    console.log('all')
    res.send('all处理过的请求')
}).get(function(req,res,next){
    console.log('get')
    res.send('get请求处理的首页')
}).post(function(req,res,next){
    console.log('post')
    res.send('post请求处理的首页')
}).put(function(req,res,next){
    console.log('put')
    res.send('put请求处理的首页')
})
//方法一和方法二的比较：方法一中的所有请求方法处理比较分散，当处理同一个路径的时候，不便于管理和查询；方法二是把对同一个路径的所有请求处理绑定在固定的app.route(url),便于管理和查询





app.get('/login',function(req,res){
    res.send('登录页面')
})
app.get('/zhuce',function(req,res){
    res.send('注册页面')
})
app.listen(1000,function(){
    console.log('router is running')
})
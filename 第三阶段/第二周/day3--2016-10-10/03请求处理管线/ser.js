var express = require('express')
var app = express()

function first(req,res,next){
    console.log('我是第一个请求处理')
    next()
}

function second(req,res,next){
    console.log('我是第二个请求处理')
    next()
}

function third(req,res,next){
    console.log('我是第三个请求处理')
    res.send('第三个请求已开始返回响应数据')
    //next()
}

function four(req,res,next){
    console.log('我是第四个请求处理')
    //res.send('第四个请求已开始返回响应数据')
    //next()
}
//next():一个请求对应多个处理方法，直到方法中有响应数据请求停止，如果方法中没有响应数据，会执行下一个方法,没有next()就不往下执行
app.get('/',first,third,second,four,function(req,res){
    console.log('我正在访问当前这个页面')
    res.send('依然在访问中')
})

app.get('/user/:age',function(req,res){
    var age= req.params.age
    res.send(age)
})
//通过get发起的请求数据显示在url路径上，显示的方式：url?name=value&name=value
//通过某种方法可获取路径中的对象的值  req.query.name =value
app.get('/login',function(req,res){
    var name = req.query.name
    res.send(name)
})
app.get('/user/:age/:male',function(req,res){
    var age = req.params.age
    var male = req.params.male
    res.send(age + ',' + male)
})


app.listen(3000,function(){
    console.log('请求处理管线 is running ')
})

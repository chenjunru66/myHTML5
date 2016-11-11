var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    template = require('art-template')
//实例化对象
var app = express()

app.engine('.html', template.__express)
app.set('view engine', 'html')

template.config('cache', false)

//设置文件存储


//设置中间件
app.use(express.static('www'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())
/*-------------------- 注册  --------------------*/
app.use(require('./routers/register'))

/*----------------  登录请求  -------------------*/
app.use(require('./routers/login'))

/*---------------- 退出请求 ---------------------------*/
app.use(require('./routers/signout'))
/*--------------------文件上传处理 --------------------*/
app.use(require('./routers/upload'))
/*------------------------提问请求---------------------*/
app.use(require('./routers/ask'))
/*---------------- 回答数据处理  --------------------*/
app.use(require('./routers/answer'))

// 首页处理
app.use(require('./routers/index'))


app.get('/user.html', function(req, res){
    res.render('user', {
        title:'用户资料页面'
    })
})

app.listen(3000, function(){
    console.log( 'ask-answer is runnig' )
})

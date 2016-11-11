var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer'),
    template = require('art-template')

var app = express(),
    form = multer()
app.engine('.html',template.__express)
app.set('view engine','html')
template.config('cache',false)

app.use(express.static('www'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())

//app.use(require('./routers/db/dbuser'))
//注册模块
app.use(require('./routers/register'))
//登录模块
app.use(require('./routers/login'))
//退出模块
app.use(require('./routers/signout'))
//管理员添加商品模块
app.use(require('./routers/addpro'))
//管理员删除商品模块
app.use(require('./routers/delete'))
//管理员修改商品模块
app.use(require('./routers/update'))
//消费者选定到购物车模块
app.use(require('./routers/indexcart'))

//删除购物车
app.use(require('./routers/deletecart'))
//首页显示模块
app.use(require('./routers/index'))

//购物车显示模块
app.use(require('./routers/cart'))


app.listen(2000,function(){
    console.log('jdSystem is running')
})
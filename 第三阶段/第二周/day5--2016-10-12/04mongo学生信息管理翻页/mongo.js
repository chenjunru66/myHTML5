var express = require('express'),
    bodyParser = require('body-parser'),
    template = require('art-template')

var app = express()

app.use(express.static('www'))
app.use(bodyParser.urlencoded({extended:false}))

app.engine('.html',template.__express)//高级编码功能解析
app.set('view engine','html')
template.config('cache','false')
//数据添加模块
app.use(require('./routers/add'))
//数据显示模块
app.use(require('./routers/index'))
//数据删除模块
app.use(require('./routers/delete'))
//数据更新模块
app.use(require('./routers/update'))

app.use(require('./routers/loginhtml'))









app.listen(2000,function(){
    console.log('mongo is running ')
})
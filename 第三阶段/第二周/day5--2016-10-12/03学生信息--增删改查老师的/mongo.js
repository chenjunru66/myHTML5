var express = require('express'),
    bodyParser = require('body-parser'),
    template = require('art-template')

var app = express()

app.engine('.html', template.__express)
app.set('view engine', 'html')
template.config('cache', false)

app.use(express.static('www'))
app.use(bodyParser.urlencoded({extended:false}))

//数据添加模块
app.use(require('./routers/add'))
//数据显示模块
app.use(require('./routers/index'))
//数据删除模块
app.use(require('./routers/remove'))
//数据更新模块
app.use(require('./routers/update'))
app.listen(2000, function(){
    console.log('mongo is running')
})
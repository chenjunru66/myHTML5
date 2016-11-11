var express = require('express'),
    bodyParser = require('body-parser'),
    template = require('art-template')

var app = express()
app.use(express.static('www'))
app.use(bodyParser.urlencoded({extended:false}))

app.engine('.html',template.__express)
app.set('view engine','html')
template.config('cache','false')

app.use(require('./routers/loginhtml'))
//数据添加模块
app.use(require('./routers/add'))

//数据显示模块
app.use(require('./routers/index'))


//数据删除模块
app.use(require('./routers/delete'))

//数据修改模块
app.use(require('./routers/update'))

//数据查询模块
app.use(require('./routers/find'))




app.listen(4000,function(){
    console.log('system is running')
})
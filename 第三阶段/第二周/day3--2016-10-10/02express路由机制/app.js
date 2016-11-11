var express = require('express')




var app = express()

////导入所使用的路由模块
//var index = require('./routers/index')//  ./找到子目录
////使用当前模块，路径拼接 localhost:2000/web/web
//app.use('/web',index)

app.use(require('./routers/index'))
app.use(require('./routers/login'))
app.use(require('./routers/register'))

app.listen(2000,function(){
    console.log('router is running')
})
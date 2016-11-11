var express = require('express')

//express.Router()
var router = express.Router()

//console.log(router)
router.get('/web',function(req,res){
    res.send('通过get请求处理的网站首页')
})

module.exports = router

//app.engine('.html',template.__express)
//app.set('view engine','html')
//template.config('cache',false)
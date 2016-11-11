var express = require('express')
var router = express.Router()

router.get('/login.html',function(req,res){
    console.log('现在开始渲染信息页面了')
    res.render('login',{
        title:'信息填写页面',
        name:'login'
    })
})


module.exports = router
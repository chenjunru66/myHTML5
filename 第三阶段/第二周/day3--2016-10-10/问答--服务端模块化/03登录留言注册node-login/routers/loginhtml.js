var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer'),
    fs = require('fs'),
    template = require('art-template')
var router = express.Router()

router.get('/login.html',function(req,res){
    console.log('现在开始渲染登录页面了')
    res.render('login',{
        title:'登录页面',
        name:'login'
    })
})

module.exports = router
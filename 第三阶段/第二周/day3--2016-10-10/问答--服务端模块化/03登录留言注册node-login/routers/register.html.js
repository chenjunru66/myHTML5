var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer'),
    fs = require('fs'),
    template = require('art-template')
var router = express.Router()

router.get('/register.html',function(req,res){
    console.log('现在开始渲染注册页面了')
    res.render('register',{
        title:'注册页面',
        name:'register'
    })

})

module.exports = router
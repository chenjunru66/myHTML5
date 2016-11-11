var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer'),
    fs = require('fs'),
    template = require('art-template')
var router = express.Router()

router.get('/user.html',function(req,res){
    console.log('现在开始渲染用户页面了')
    res.render('user',{
        title:'用户页面',
        name:'user'
    })
})

module.exports = router
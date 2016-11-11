var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer'),
    fs = require('fs'),
    template = require('art-template')
var router = express.Router()

router.get('/ask.html',function(req,res){
    console.log('现在开始渲染提问页面了')
    res.render('ask',{
        title:'提问页面',
        name:'ask'
    })
})

module.exports = router
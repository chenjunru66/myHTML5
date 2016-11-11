var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer'),
    fs = require('fs'),
    template = require('art-template')
var router = express.Router()

router.get('/answer.html',function(req,res){
    console.log('现在开始渲染回答页面了')
    res.render('answer',{
        title:'回答页面',
        name:'answer'
    })
})

module.exports = router
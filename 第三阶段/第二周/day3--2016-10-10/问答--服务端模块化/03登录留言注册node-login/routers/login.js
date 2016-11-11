/**
 * Created by Administrator on 2016/10/10.
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer'),
    fs = require('fs'),
    template = require('art-template')
var router = express.Router()
router.post('/user/login',function(req,res){
    //console.log(req.body)
//    判断用户是否存在，如果存在，判断密码是否正确 登录错误提示密码错误，不存在则提示用户未注册
    function send(code, message){
        res.status(200).json( {code, message} )
    }
    var fileName = 'user/' + req.body.petname + '.txt'
    fs.exists(fileName, function(ex){
        if( !ex ){
            send('register', '该用户未注册')
        } else {
            fs.readFile(fileName,  function(err, data){
                if( err ){
                    send('file error', '系统错误哦！')
                } else {
                    var user = JSON.parse(data)
                    if( user.password == req.body.password ){
                        res.cookie('petname', req.body.petname)
                        send('success', '用户登录成功')
                    } else {
                        send('failed', '用户名或密码错误')
                    }
                }
            })
        }
    })
})

module.exports = router
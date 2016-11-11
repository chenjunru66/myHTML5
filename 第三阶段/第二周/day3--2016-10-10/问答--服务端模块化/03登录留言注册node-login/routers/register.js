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

router.post('/user/register',function(req,res){
    //console.log(req.body)
    req.body.ip = req.ip
    req.body.date = new Date()
    //将用户名作为文件名保存，判断用户名是否存在，如果存在，返回用户已注册，否则添加文件
    /*前提是判断文件夹是否存在，如果存在，直接保存文件，否则，添加文件夹后保存文件*/
    var fileName = 'user/' + req.body.petname + '.txt'
    function send(code, message){
        res.status(200).json({code, message})
    }
    function saveFile(){
        fs.exists(fileName, function(ex){
            if(ex){
                send('registered', '该用户已注册')
            } else {
                fs.appendFile(fileName, JSON.stringify(req.body),  function(err){
                    if(err){
                        send('file error', '系统错误哦')
                    } else {
                        send('success', '恭喜，注册成功，请登录')
                    }
                })
            }
        })
    }
//    文件夹是否存在
    fs.exists('user', function(ex){
        if( !ex ){
            fs.mkdirSync('user')
            saveFile()
        } else {
            saveFile()
        }
    })
})

module.exports = router
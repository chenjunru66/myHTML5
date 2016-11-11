var express = require('express')
var cookieParser = require('cookie-parser')
var userModel = require('../db/user')
var router = express.Router()

var app = express()
app.use(cookieParser())

router.post("/user/login", function (req, res) {
    //验证当前用户名是否存在，如果不存在，提示未注册，如果存在，提示密码错误
    function send(code,message){
        res.status(200).json({code,message})
    }
    console.log(req.body)
    // 判断用户名是否存在，存在---判断密码是否匹配， 不存在---注册
    userModel.find({username:req.body.username}).count(function(err, count){
        if(!err){
            console.log(count)
            if( count == 0){
                console.log('该用户不存在')
            } else {
                console.log('该用户存在')
                userModel.find({username:req.body.username}).exec(function(err, data){
                    console.log(data)
                    var pwd = req.body.pwd
                    if( pwd == data[0].pwd ){
                        console.log('密码匹配')
                        res.cookie('username', req.body.username)
                        send('success', '用户登录成功')
                    } else {
                        console.log('密码不匹配')
                        send('fail', '密码错误')
                    }
                })
            }
        } else {
            console.log('数据库失败')
        }
    })
})

module.exports = router
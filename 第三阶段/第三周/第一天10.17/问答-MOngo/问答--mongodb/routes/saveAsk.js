var express = require('express')
var cookieParser = require('cookie-parser')
var askModel = require('../db/ask'),
    userModel = require('../db/user')

var router = express.Router()

router.post('/saveAsk', function (req, res) {
    
    function send(code,message){
        res.status(200).json({code,message})
    } 
    // 保存提问的内容至数据库
    console.log(req.body) 
    // 用户-----ObjectId，所知数据---用户名
    var uname = req.cookies.username
    // console.log(uname)
    
    userModel.find({username:uname}).exec(function(err, data){
        if(!err){
            console.log('找到用户信息')
            // console.log(data)
            var id = data[0].id
            req.body.createUser = id
            req.body.createTime = new Date()
            req.body.ip = req.ip
            // 实例化所存储的提问信息
            var asks = new askModel(req.body)
            asks.save(function(err, data){
                if(!err){
                    console.log('提问数据保存成功')
                    send('success', '提问保存成功')
                } else {
                    console.log('提问保存失败')
                }
            })
        } else {
            console.log('没有该用户信息')
        }
    })
})

module.exports = router
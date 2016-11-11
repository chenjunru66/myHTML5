// 导入所需要的模块
var express = require('express'),
// 导入所需要数据库模块
    userModel = require('../db/user')  
var router = express.Router()

router.post('/user/register', function (req, res) {
    //在req.body中添加IP和注册日期
    req.body.ip = req.ip;
    req.body.time = new Date()
    console.log(req.body)
    // 把数据保存至数据库
    var datas = new userModel(req.body)
    // 判断用户是否注册过 --- 根据用户名出现的次数
    userModel.find({username:datas.username}).count(function(err, count){
        if(!err){
            console.log(count)
            if(count == 0){
                datas.save(function(err, data){
                    if(!err){
                        console.log('用户保存成功')
                        res.status(200).json({code:'success', message:'恭喜，已注册成功，请登录'})
                    } else {
                        console.log('用户保存失败')
                    }
                })
            } else {
                console.log('该用户已注册过')
                res.status(200).json({code:'error', message:'该用户已注册，请重新输入'})
            }
        } else {
            console.log('数据库错误')
        }
    })
    
    
    
    
    
});

module.exports = router
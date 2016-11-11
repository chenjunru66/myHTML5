var express = require('express')
var userModel = require('./db/dbuser')
var router = express.Router()
router.post('/user/register',function(req,res){
       //console.log(req.body)
    function send(code, message){
        res.status(200).json({code, message})
    }

    var uname =req.body.uname
    var ids = req.body.ids
    userModel.find({uname:uname,ids:ids}).count(function(err,count){
        //console.log(count)
        if(err){
            send('error','系统错误')
        }else{
            if(count == 0){
                var times = new Date()
                //console.log(times)
                var time = (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString()
                req.body.time = time
                req.body.ip = req.ip
                var user = new userModel(req.body)
    user.save(function(err,data){
         //console.log(data)
         if(err){
             send('failed','注册失败')
         }else{
             send('success','注册成功')
         }
    })

            }else if(count != 0){
                send('registered','用户已注册')
            }
        }
    })

})
module.exports = router
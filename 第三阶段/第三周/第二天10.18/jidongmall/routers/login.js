var express = require('express')
var userModel = require('./db/dbuser')
var router = express.Router()
router.post('/user/login',function(req,res){
    //console.log(req.body)
    function send(code, message){
        res.status(200).json({code, message})
    }
    userModel.find({uname:req.body.uname,ids:req.body.ids}).count(function(err,count){
        //console.log(count)
        if(err){
            send('error','系统错误')
        }else{
            if(count == 0){
                send('failed','该用户未注册')
            }else{
                userModel.find({uname:req.body.uname,ids:req.body.ids}).exec(function(err,data){
                    //console.log(data)
                    if(err){
                        send('error','系统错误')
                    }else{
                        if(req.body.password == data[0].password){
                            res.cookie('uname',req.body.uname)
                            res.cookie('ids',req.body.ids)
                            send('success','登录成功')
                        }else{
                            send('wrong','密码错误，请重新输入')
                        }
                    }
                })
            }
        }
    })

})

module.exports = router
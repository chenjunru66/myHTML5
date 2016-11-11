var express = require('express')
var router = express.Router()
var User = require('./messdb')

router.post('/user/login',function(req,res){
    //console.log(req.body)
    function send(code, message){
        res.status(200).json({code, message})
    }
    var mess = req.body

    User.find({petname:mess.petname},function(err,data){
        if(err){
            send('error','该用户未注册')
        }else{
           //console.log(data[0])

            if(data[0].password == mess.password ){
                //var user = JSON.parse(data)

                res.cookie('petname', mess.petname)
                send('success','登录成功')
            }else{
                send('failed','密码错误请重新输入')
            }
        }
    })


})


module.exports = router
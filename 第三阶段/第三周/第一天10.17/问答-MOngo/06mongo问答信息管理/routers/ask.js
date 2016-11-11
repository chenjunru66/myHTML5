var express = require('express')
var cookieParser = require('cookie-parser')
var router = express.Router()
//var Answerdb = require('./answerdb')
var userModel =require('./messdb')
var Ques = require('./question')
router.post('/ask',function(req,res){
      //console.log(req.body)
    var petname = req.cookies.petname
    function send(code, message){
        res.status(200).json({code, message})
    }
    userModel.find({petname:petname}).exec(function(err,data){
        if(!err){
            //console.log('找到用户信息')
            var id = data[0].id
            var time = new Date()
            var time1 = (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString()
            req.body.ip = req.ip
            req.body.time1 = time1
            req.body.time =time
            req.body.times = time.getTime()
            req.body.createUser = id

            var asks = new Ques(req.body)
            asks.save(function(err, data){
                if(!err){
                    console.log('提问数据保存成功')
                    send('success', '提问保存成功')
                } else {
                    console.log('提问保存失败')
                    send('error','提问保存失败')
                }
            })

        }else {
            console.log('没有该用户信息')
        }
    })
    //var ques = new Ques(req.body)
    ////console.log(ques)
    //ques.save(function(err,data){
    //    if(!err){
    //        send('success','问题提交成功')
    //    }else{
    //        send('error','问题提交失败')
    //    }
    //})

})




module.exports = router
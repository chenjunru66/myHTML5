var express = require('express')

var router = express.Router()
var Ques = require('./question')
var answerdb = require('./answerdb')
router.post('/answers',function(req,res){
    var aname = req.cookies.petname
    var questions = req.cookies.questions
    //console.log(questions)
    req.body.ip = req.ip
    req.body.time = new Date()
    req.body.time1 = (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString()
    req.body.petname = aname
    function send(code, message){
        res.status(200).json({code, message})
    }
    Ques.find({times:questions}).exec(function(err,data){
        //console.log(data)
        if(!err){
            var asks = data[0]._id
            //console.log(asks)
            //console.log(req.body)
            //send('success','获取问题成功',asks)
            req.body.asks = asks
            var ans = new answerdb(req.body)
            //console.log(ans)
            ans.save(function(err,data){
                if(!err){
                    //console.log(data)
                    send('success','问题提交成功')
                }else{
                    send('error','问题提交失败')
                }
            })

        }

    })

    //var ans = new answerdb(req.body)
    ////console.log(ans)
    //ans.save(function(err,data){
    //    if(!err){
    //        //console.log(data)
    //        send('success','问题提交成功')
    //    }else{
    //        send('error','问题提交失败')
    //    }
    //})


})

module.exports = router
var express = require('express')
var router = express.Router()
var Answerdb = require('./answerdb')
var Ques = require('./question')
router.post('/ask',function(req,res){
      //console.log(req.body)
    var petname = req.cookies.petname

    var time = new Date()
    var time1 = (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString()
    req.body.petname = petname
    req.body.ip = req.ip
    req.body.time1 = time1
    req.body.time =time
    req.body.times = time.getTime()
    function send(code, message){
        res.status(200).json({code, message})
    }

    //Answerdb.find().exec(function(err,data){
    //   //console.log(data.length)
    //   for(var i = 0;i<data.length;i++){
    //
    //   }
    //
    //
    //})

    var ques = new Ques(req.body)
    //console.log(ques)
    ques.save(function(err,data){
        if(!err){
            send('success','问题提交成功')
        }else{
            send('error','问题提交失败')
        }
    })

})




module.exports = router
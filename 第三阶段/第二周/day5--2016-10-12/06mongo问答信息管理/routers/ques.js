var express = require('express')

var router = express.Router()
var  Que = require('./question')
var Ans = require('./answerdb')
router.get('/questions',function(req,res){
    function send(code, message, questions){
        res.status(200).json({ code, message, questions })
    }
   //console.log(req.cookies.petname)
   // console.log(req.body)
    var questions = req.cookies.questions
    var petname = req.cookies.petname
    Que.find({times:questions}).exec(function(err,data){
        //console.log(data)
        if(!err){
            var asks = data[0]._id
            //console.log(asks)
            send('success','获取问题成功',asks)

        }

    })


})

module.exports = router
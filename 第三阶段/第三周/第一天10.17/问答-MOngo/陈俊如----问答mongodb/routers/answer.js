var express = require('express')

var router = express.Router()
var Ques = require('./question')
var answerdb = require('./answerdb')
var userModel =require('./messdb')

router.get('/answers/:id',function(req,res){
    res.render('answer',{
        title:'答案'
    })
})
router.post('/answers/:id',function(req,res){
    var aname = req.cookies.petname
    //var questions = req.cookies.questions
    var id = req.params.id
    //console.log(id)
    req.body.asks = id
    req.body.ip = req.ip
    req.body.time = new Date()
    req.body.time1 = (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString()
    //req.body.petname = aname
    function send(code, message){
        res.status(200).json({code, message})
    }
    var answers = []
    userModel.find({petname:aname}).exec(function(err,data){
        if(!err){
            //console.log(data)
            var userId = data[0].id
            //console.log(userId)
            req.body.createUser = userId
            //console.log(req.body)
            var ans = new answerdb(req.body)

            ans.save(function(err,data){
                if(!err){
                    send('success','答案保存成功')
                    answerdb.find().exec(function(err,data){
                        if(!err){
                            //console.log(data)
                            for(var i = 0; i < data.length ; i++){
                                if( id == data[i].asks  ){
                                    answers.push(data[i])
                                }
                            }
                            //console.log(answers)
                            Ques.findByIdAndUpdate(id,{answers:answers},function(err,data){
                                if(!err){
                                    //console.log(data)
                                }
                            })
                        }
                    })
                    //console.log(data)
                    //send('success','答案保存成功')
                }
            })




        }
    })


    //Ques.find({times:questions}).exec(function(err,data){
    //    //console.log(data)
    //    if(!err){
    //        var asks = data[0]._id
    //        //console.log(asks)
    //        //console.log(req.body)
    //        //send('success','获取问题成功',asks)
    //        req.body.asks = asks
    //        var ans = new answerdb(req.body)
    //        //console.log(ans)
    //        ans.save(function(err,data){
    //            if(!err){
    //                //console.log(data)
    //                send('success','问题提交成功')
    //            }else{
    //                send('error','问题提交失败')
    //            }
    //        })
    //
    //    }
    //
    //})

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
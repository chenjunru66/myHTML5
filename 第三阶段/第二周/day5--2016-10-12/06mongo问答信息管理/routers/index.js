var express = require('express')
var router = express.Router()

var Que = require('./question')
var Ans = require('./answerdb')
router.get('/',function(req,res){
     //Que.find().exec(function(err,data){
     //    if(err){
     //        res.render('index',{
     //            title:'网站首页'
     //        })
     //    }else{
     //        console.log(data)
     //        //翻转数组
     //
     //
     //        var ques =data.reverse()
     //
     //        //console.log(ques)
     //        res.render('index',{
     //            title:'问答网站首页',
     //            datas:ques
     //        })
     //    }
     //})

//console.log(req.cookies.questions)
Ans.find().populate('asks','').exec(function(err,data){
    //console.log(data)
    if(err){
        res.render('index',{
            title:'网站首页'
        })
    }else{
        console.log(data)

        var ques =data.reverse()


        //console.log(ques)
        res.render('index',{
            title:'网站首页',
            datas:ques
        })
    }
})


})




module.exports = router
var express = require('express')
var router = express.Router()
var template = require('art-template')
var Que = require('./question')
var Ans = require('./answerdb')
router.get('/',function(req,res){

  Que.find().populate({path:'createUser answers',
populate:{path:'createUser'}}).exec(function(err,data){
      //console.log(data)
      if(!err){
          if(data.length){
              var ques =data.reverse()
              res.render('index',{
                  title:'问答首页',
                  datas:ques
              })
          }else{
              res.render('index',{
                  title:'问答首页'
              })
          }
      }
  })

})




module.exports = router
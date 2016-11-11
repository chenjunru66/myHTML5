var express = require('express'),
    ansModel = require('../db/answer'),
    askModel = require('../db/ask'),
    userModel = require('../db/user')
var router = express.Router()

router.get('/ans/:id', function (req, res) {
    // 答案保存的时候 -- 回答者，相对应的问题
    // id ==== 提问的问题的id值   
    
    res.render('answers', {
                        title:'大难'
                    })
    
})

router.post('/ans/:id', function(req, res){
    console.log(req.body)
    var id = req.params.id
    console.log(id)
    req.body.asks = id
    req.body.createTime = new Date()
    req.body.ip = req.ip
    var uname = req.cookies.username
    userModel.find({username:uname}).exec(function(err,data){
        if(!err){
            console.log(data)
            var userId = data[0].id
            req.body.createUser = userId
            var datas = new ansModel(req.body)
            datas.save(function(err,data){
                if(!err){

                    console.log('答案保存成功')
                    
                }
            })
            // 保存答案，
            // 更新问题的信息-----问题关联有回答的id
            // 查找所有的答案,只需要asks为id的答案
            var answers = []
            ansModel.find().exec(function(err,data){
                if(!err){
                    console.log(data) 
                    for(var i = 0; i <data.length; i++){
                        if( id == data[i].asks  ){
                            answers.push(data[i])
                        }
                    }
                    console.log(answers)
                    
                    askModel.findByIdAndUpdate(id, {answers:answers}, function(err,data){
                        if(!err){
                            console.log(data)
                        }
                    })
                    
                }
            })
        }
    })
})


module.exports = router
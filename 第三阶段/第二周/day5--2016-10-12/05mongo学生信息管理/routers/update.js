var express = require('express')
var router = express.Router()

var Student = require('./studb')
//编辑页面获取元数据
router.get('/update/:uid',function(req,res){
    //console.log(req.body)
    function send(code, message){
        res.status(200).json({code, message})
    }
    var uid = req.params.uid

    Student.findById(uid).exec(function(err,data){
        if(err){

        }else{
            // console.log(data)
            data.title = '信息编辑页面'
            res.render('eddit',data)
        }
    })

//更新数据
    router.post('/eddit/:id',function(req,res){
        var id = req.params.id
        console.log(req.body)
        Student.findByIdAndUpdate(id,req.body).exec(function(err,data){
            if(err){
                //res.json({result:0})
            }else{
                //console.log(data)
                //res.json({result:1})
                res.redirect('/')//跳转回首页
            }
        })
    })


})

module.exports = router
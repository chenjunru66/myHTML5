var express = require('express')
var router = express.Router()

var Student = require('./studb')

router.post('/login',function(req,res){
    function send(code, message){
        res.status(200).json({code, message})
    }
    var times =  new Date()
    var time = (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString()
    req.body.time = time
    //console.log(req.body)
    var stu = new Student(req.body)
    stu.save(function(err,datas){
        if(!err){
            //console.log('数据保存成功!')
            send('success','数据保存成功')
        }else{
            //console.log('数据保存失败!')
            send('failed','数据保存失败')
        }
    })

})



module.exports = router
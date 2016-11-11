var express = require('express')

var router = express.Router()
var Student = require('./studb')
///user/:uid ---发送请求的url路径的键值对的显示格式
//id--键名，值=/user/具体值
//多个键值对=== /user/:id/:age

router.get('/user/:uid',function(req,res){
    function send(code, message){
        res.status(200).json({code, message})
    }
     //console.log(req.body)
    var uid = req.params.uid
    //console.log(uid)
    Student.findByIdAndRemove(uid,function(err){

        //console.log(uid)
        send('success','删除成功')


    })




})

module.exports = router
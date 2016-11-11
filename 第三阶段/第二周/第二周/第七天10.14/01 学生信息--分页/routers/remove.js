/**
 * Created by Administrator on 2016/10/13.
 */
var express = require('express'),
    studb = require('./studb')
var router = express.Router()
//  /remove/:id  --- 发送请求的url路径的键值对的显示格式  id--键名，值 = /remove/
//  多个键值对====   /remove/:id/:age/:name
// 正常的显示格式url:  /remove?name=age&name=age&name=age
router.get('/remove/:id', function(req, res){
    var id = req.params.id
    //console.log(id)
    studb.findByIdAndRemove(id, function(err){
        if(err){
            res.json({result:0})
        } else {
            res.json({result:1})
        }
    })
})

module.exports = router


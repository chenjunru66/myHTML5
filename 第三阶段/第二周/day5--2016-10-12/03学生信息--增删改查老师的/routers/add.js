/**
 * Created by Administrator on 2016/10/12.
 */
//    数据添加功能模块
var express = require('express'),
    studb = require('./studb')
var router = express.Router()

//添加的请求处理

router.post('/add', function(req, res){
    console.log(req.body)
    var data = new studb(req.body)
    data.save()
})

module.exports = router
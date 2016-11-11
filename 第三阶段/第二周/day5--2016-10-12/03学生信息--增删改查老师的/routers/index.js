/**
 * Created by Administrator on 2016/10/13.
 */
var express = require('express'),
    studb = require('./studb')
var router = express.Router()

router.get('/', function(req, res){
    studb.find().exec(function(err, data){
        if(err){
            // 错误页面
        } else {
            //console.log(data)
            // 把ObjectId对象转化成普通的Object对象
            // 原因： 模板引擎{{data._id}}无法获取id值
            //model对象是复杂型的Object对象，
            //data = data.map(function(item){
            //    item = item.toObject()
            //    //console.log(item)
            //    item.ids = item._id
            //    console.log(item)
            //    return item
            //})
            //
            //res.send(data)
            res.render('index', {
                title:'学生信息管理系统',
                datas:data
            })
        }
    })

})

module.exports = router
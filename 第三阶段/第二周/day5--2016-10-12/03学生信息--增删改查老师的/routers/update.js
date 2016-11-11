/**
 * Created by Administrator on 2016/10/13.
 */
var express = require('express'),
    studb = require('./studb')
var router = express.Router()
//编辑页面获取原数据模块
router.get('/update/:id', function(req, res){
    var id = req.params.id
    studb.findById(id).exec(function(err,data){
        if(err){
            //错误页面
        } else {
            //console.log(data)
            data.title = '信息编辑页面'
            res.render('edit',data)
        }
    })
})
// 更新数据
router.post('/edit/:id', function(req, res){
    var id = req.params.id
    console.log(req.body)
    studb.findByIdAndUpdate(id, req.body).exec(function(err, data){
        if(err){
            ///
            //res.json({result:0})
        } else {
            // 跳转回首页
            res.redirect('/')
        }
    })
})



module.exports = router
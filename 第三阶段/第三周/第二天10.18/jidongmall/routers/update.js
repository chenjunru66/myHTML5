var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer')

var productModel= require('./db/dbmanadd')


var storage = multer.diskStorage({
        destination: "www/uploads",
        filename: function(req,file,callback){
            var proname = req.body.proname
            //console.log(req.body)
            callback(null,  proname + '.jpg')

        }
    }),
    uploads = multer({storage})
var router = express.Router()
//编辑页面获取元数据
router.get('/update/:uid',function(req,res){
    //console.log(req.body)
    function send(code, message){
        res.status(200).json({code, message})
    }
    var uid = req.params.uid

    productModel.findById(uid).exec(function(err,data){
        if(err){

        }else{
            //console.log(data)
            data.title = '信息编辑页面'
            res.render('eddit',data)
        }
    })
})
//更新数据
router.post('/eddit/:id',uploads.single("photos"), function(req,res){
    var id = req.params.id
    //console.log(id)
    //console.log(req.body)
    productModel.findByIdAndUpdate(id,req.body).exec(function(err,data){
        if(err){
            //res.json({result:0})
        }else{
            //console.log(data)
            //res.json({result:1})
            res.redirect('/')//跳转回首页
        }
    })
})
module.exports = router
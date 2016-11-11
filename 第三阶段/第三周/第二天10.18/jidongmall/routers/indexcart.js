var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser')

var productModel = require('./db/dbmanadd')
var buyproModel = require('./db/dbbuyer')
var router = express.Router()


router.post('/user/indexcart',function(req,res){
     //console.log(req.body)
    function send(code, message){
        res.status(200).json({code, message})
    }
    var uname = req.cookies.uname
    //console.log(uname)
    var mess = req.body.proname
        productModel.find({proname:mess}).exec(function(err,data){
            //console.log(data)
    if(err){
        send('error','系统错误')
    }else{
        req.body.uname = uname
        req.body.price = data[0].price
        //console.log(req.body)
          var buypro = new buyproModel(req.body)
          buypro.save(function(err,data){
              if(err){
                  send('failed','添加购物车失败')
              }else{
                  send('success','添加成功')
              }
          })
    }
        })

})
module.exports = router
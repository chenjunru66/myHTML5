var express = require('express')
var router = express.Router()
var template = require('art-template')
var buyproModel = require('./db/dbbuyer')

router.get('/cart.html',function(req,res){
    buyproModel.find({uname:req.cookies.uname}).exec(function(err,data){
       //console.log(data)
        if(!err){
            if(data.length){
                var datas=data.reverse()
                res.render('cart',{
                    title:'购物车',
                    datas:datas
                })
            }else{
                res.render('cart',{
                    title:'购物车'
                })
            }
        }
    })
})

module.exports = router
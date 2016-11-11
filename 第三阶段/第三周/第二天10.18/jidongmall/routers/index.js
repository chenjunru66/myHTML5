var express = require('express')
var router = express.Router()
var template = require('art-template')
var productModel = require('./db/dbmanadd')

router.get('/',function(req,res){
            productModel.find().exec(function(err,data){

                if(!err){
                    if(data.length){
                        var datas=data.reverse()
                        res.render('index',{
                            title:'京东首页',
                            datas:datas
                        })
                    }else{
                        res.render('index',{
                            title:'京东首页'
                        })
                    }
                }
            })
})

module.exports = router
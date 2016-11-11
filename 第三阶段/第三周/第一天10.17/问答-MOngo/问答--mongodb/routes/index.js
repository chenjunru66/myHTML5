var express = require('express')
var template = require('art-template')
var askModel = require('../db/ask'),
    userModel = require('../db/user')
var router = express.Router()

router.get('/',function(req,res){
    // 首页显示所有的提问信息   --- asks
    askModel.find()
    .populate('createUser', 'username')
    .exec(function(err, data){
        if(!err){
            console.log(data)
            // 如何把createUser的id值转化为用户名
            
            res.render('template',{
                        title:'问答网站首页',
                        datas:data 
                    })
        } else {
            
        }
    })
    
})

module.exports = router
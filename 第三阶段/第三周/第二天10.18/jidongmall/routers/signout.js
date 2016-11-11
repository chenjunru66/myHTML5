var express = require('express')
var router = express.Router()


router.get('/user/signout',function(req,res){
    //console.log(req.body)
    res.clearCookie('uname')
    res.clearCookie('ids')
    //console.log('1111')
    res.status(200).send('success')
})

module.exports =router
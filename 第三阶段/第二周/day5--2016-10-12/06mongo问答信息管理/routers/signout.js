var express = require('express')
var router = express.Router()


router.get('/user/signout',function(req,res){
    res.clearCookie('petname')
    res.status(200).send('success')
})

module.exports =router
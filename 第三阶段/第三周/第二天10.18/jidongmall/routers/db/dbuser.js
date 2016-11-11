var express = require('express'),
    mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/jdSystem')
var db = mongoose.connection


db.on('error',function(){
    console.log('数据库失败!!')
})

db.once('open',function(){
    console.log('数据库成功!!')
})


var userSchema = mongoose.Schema({
    uname:String,
    password:String,
    phone:String,
    ids:String,
    ip:String,
    time:String

})
var userModel = mongoose.model('user',userSchema)
module.exports = userModel
var express = require('express'),
    mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/messystem')

var db = mongoose.connection

db.on('error',function(){
    console.log('数据库失败!!')
})

db.once('open',function(){
    console.log('数据库成功!!')
})

var userSchema = mongoose.Schema({
    petname:String,
    password:String,
    isMale:Boolean,
    email:String,
    course:String
})

var User = mongoose.model('user',userSchema)

module.exports = User
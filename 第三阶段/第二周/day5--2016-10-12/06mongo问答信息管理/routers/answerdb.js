var express = require('express'),
    mongoose = require('mongoose')
var Ques = require('./question')

mongoose.connect('mongodb://localhost/messystem')

var db = mongoose.connection

db.on('error',function(){
    console.log('数据库连接失败!!')
})

db.once('open',function(){
    console.log('数据库连接成功!!')
})

var ansSchema = mongoose.Schema({
    content:String,
    time:String,
    time1:String,
    times:String,
    ip:String,
    petname:String,
    asks:{
        type:mongoose.Schema.ObjectId,
        ref:'questions'
    }
})

var Ans = mongoose.model('answers',ansSchema)

module.exports = Ans
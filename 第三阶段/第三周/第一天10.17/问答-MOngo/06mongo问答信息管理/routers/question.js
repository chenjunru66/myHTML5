var express = require('express'),
    mongoose = require('mongoose')
//var Ans = require('./answerdb')

mongoose.connect('mongodb://localhost/messystem')

var db = mongoose.connection

db.on('error',function(){
    console.log('数据库连接失败!!')
})

db.once('open',function(){
    console.log('数据库连接成功!!')
})

var queSchema = mongoose.Schema({
    content:String,
    time:String,
    time1:String,
    times:String,
    ip:String,
    createUser:{
        type:mongoose.Schema.ObjectId,
        ref:'user'   // 用户的相关信息，参考集合：users
    },
    answers:[{
        type:mongoose.Schema.ObjectId,
        ref:'answers'
    }]
})

var Ques = mongoose.model('questions',queSchema)

module.exports = Ques
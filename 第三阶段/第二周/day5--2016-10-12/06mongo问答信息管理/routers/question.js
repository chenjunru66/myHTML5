var express = require('express'),
    mongoose = require('mongoose')
var Ans = require('./answerdb')
//var ans =require('./answer')
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
    petname:String,
    answers:[{
        type:mongoose.Schema.ObjectId,
        ref:'answers'
    }]
})

var Ques = mongoose.model('questions',queSchema)

module.exports = Ques
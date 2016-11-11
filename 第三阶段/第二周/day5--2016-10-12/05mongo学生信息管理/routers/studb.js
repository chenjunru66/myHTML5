var express = require('express'),
    mongoose =require('mongoose')
mongoose.connect('mongodb://localhost/Stusystem')

var db = mongoose.connection
db.on('error',function(){
    console.log('数据库连接失败')
})

db.once('open',function(){
    console.log('数据库连接成功')
})
var stuSchema = mongoose.Schema({
    name:String,
    num:String,
    sex:String,
    email:String,
    address:String,
    phone:String,
    time:String
})
var Student = mongoose.model('students',stuSchema)
module.exports = Student
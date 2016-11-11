//三个集合：用户信息、提问信息、回答信息
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/teacherq')

var db = mongoose.connection

db.on('error',function(){
    console.log('数据连接失败')
})
db.once('open',function(){
    console.log('数据连接成功')
})

//判断集合关联的关系
//用户集合：问题，答案
//问题集合：用户，答案
//答案集合；用户，问题

//创建集合 ----创建模式--模型--集合实例
//用户的模式
var userSchema = mongoose.Schema({
    name:String,
    password:String,
    isMale:Boolean
})

//用户模型
var userModel = mongoose.model('users',userSchema)

//问题的模式
var quesSchema = mongoose.Schema({
    content:String,
    time:Date,
    createUser:{
        type:mongoose.Schema.ObjectId,
        ref:'users'
    },
    //一个问题多个答案，答案---ObjectId，
    answers:[{
        type:mongoose.Schema.ObjectId,
        ref:'ans'
    }]
})
var qusModel = mongoose.model('ques',quesSchema)
//答案的模式
var ansSchema = mongoose.Schema({
    content:String,
    time:Date,
    createUser:{
        type:mongoose.Schema.ObjectId,
        ref:'users'
    },
    asks:{
        type:mongoose.Schema.ObjectId,
        ref:'ques'
    }
})

//回答模型
var ansModel = mongoose.model('ans',ansSchema)
//var  ans = new ansModel({
//    content:'急急急',
//    asks:
//})
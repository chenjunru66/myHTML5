// 提问的问题集合
var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/askques')
var db = mongoose.connection
// 判断连接的状态--- 失败、成功
db.on('error', function(){
    console.log('数据库连接失败')
})
db.once('open', function(){
    console.log('连接成功， 打开数据库')
})
// 设置数据类型
var askSchema = mongoose.Schema({
    content:String,
    createUser:{
        type:mongoose.Schema.ObjectId,
        ref:'users'   // 用户的相关信息，参考集合：users
    },
    createTime:Date,
    ip:String,
    answers:[{
        type:mongoose.Schema.ObjectId,
        ref:'ans'  // 答案的相关信息，参考集合:ans
    }]
})

var askModel = mongoose.model('asks', askSchema)
module.exports = askModel


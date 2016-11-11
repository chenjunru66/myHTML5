// 数据库中的用户集合
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
// 用户的模式---数据类型
var userSchema = mongoose.Schema({
    username:String,
    pwd:String,
    isMale:Boolean,
    email:String,
    course:String,
    time:Date,
    ip:String
})
// 模型 --- 构造函数
var userModel = mongoose.model('users', userSchema)
module.exports = userModel
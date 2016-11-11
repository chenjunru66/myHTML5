/**
 * Created by Administrator on 2016/10/12.
 */
// 数据库模块
var mongoose = require('mongoose')
//连接本地数据库
mongoose.connect('mongodb://localhost/newstu')
var db = mongoose.connection
//测试连接是否成功 --- 事件
db.on('error', function(){
    console.log('数据库连接失败')
})
db.once('open', function(){
    console.log('数据库连接成功，打开数据库')
})

// 设置数据类型
var stuSchema = mongoose.Schema({
    name:String,
    age:Number,
    phone:Number,
    email:String,
    intro:String
})
var Student = mongoose.model('stus', stuSchema)

module.exports = Student
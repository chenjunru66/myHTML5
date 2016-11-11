var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/stuinfos')

var db = mongoose.connection

db.on('error',function(){
    console.log('数据库连接失败')
})

db.once('open',function(){
    console.log('数据库连接成功')
})
var stuSchema = mongoose.Schema({
    name:String,
    num:Number,
    sex:String,
    message:String,
    email:String
})

var Student = mongoose.model('students',stuSchema)

module.exports = Student
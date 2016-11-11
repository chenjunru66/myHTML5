var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/jdSystem')
var db = mongoose.connection
db.on('error',function(){
    console.log('数据库连接失败')
})
db.on('open',function(){
    console.log('数据库连接成功')
})


var buyproSchema = mongoose.Schema({
    uname:String,
    proname:String,
    price:String
})

var buyproModel = mongoose.model('buypro',buyproSchema)

module.exports =  buyproModel
var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/jdSystem')
var db = mongoose.connection

db.on('error',function(){
    console.log('数据库连接失败')
})
db.once('open',function(){
    console.log('数据库连接成功')
})

var  productSchema = mongoose.Schema({
    proname:String,
    uname:String,
    ids:String,
    miaoshu:String,
    price:String,
    time:String

})

var productModel = mongoose.model('product',productSchema)
module.exports = productModel
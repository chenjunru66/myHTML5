/**
 * Created by Administrator on 2016/11/7.
 */
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/remindDB')
//设置数据库的promise为全局域下Promise，mongoose中自带的promise被废弃了，修改promise为js中的promise
mongoose.Promise = global.Promise

var db = mongoose.connection

db.on('error',(error)=>{
    console.log('数据库打开失败')
})
db.once('open',()=>{
    console.log('数据库打开成功')
})

//模型：数据、功能、模式
const schema = mongoose.Schema({
    title:String,
    content:String,
    date:Date
})

const Model=mongoose.model('remind',schema)

module.exports = Model
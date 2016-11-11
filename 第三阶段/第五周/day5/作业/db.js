const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/tast')
mongoose.Promise=global.Promise
const db = mongoose.connection
db.on('error',(error)=>{console.log(error)})
db.once('open',()=>{console.log('打开数据库了')})

const schema = mongoose.Schema({
    content:String,
    time:String,
    complete:Boolean,
    index:Number
})

const Task = mongoose.model('task',schema)

module.exports =Task
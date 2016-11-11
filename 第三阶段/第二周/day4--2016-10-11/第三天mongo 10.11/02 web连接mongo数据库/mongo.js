//引入模块
var mongoose = require('mongoose')
// 建立与本地数据库的连接
// mongodb:  --- 协议
// localhost --- 本地ip
// test --- 数据库名称
mongoose.connect('mongodb://localhost/test')
// 找到所连接的数据库
var db = mongoose.connection
// 当是数据库连接失败的时候，触发的事件
db.on('error', function(){
    console.log('数据库连接失败')
})
// 数据库连接成功 ，可以开始数据库的各种操作
db.once('open', function(){
    console.log('数据库连接成功，打开数据库')
//    Schema, model, 实例
//    Schema --- 模式：设置相关数据的类型，以及该数据库中集合的结构
    var teacSchema = mongoose.Schema({
        name:String,
        age:Number,
        isMale:Boolean
    })

    //mongoose.model() 创建设置数据类型的集合
    // para1:---- 集合名称
    // para2: --- 该集合数据类型遵循teacSchema
    var Teacher = mongoose.model('teachers', teacSchema)
    //var Teacher = mongoose.model('tas',mongoose.Schema()) 
    // 定义具体的实例 -- 数据
    var tea1 = new Teacher({
        name:'lcy',
        age:15,
        isMale:false,
        birth:new Date(1910,10,16)
    })

    //保存数据
    //    para1  -- 错误处理
    //    para2 -- 保存的数据(写入的数据)
    tea1.save(function(err, datas){
        if(!err){
            console.log('数据保存成功')
        } else {
            console.log('数据保存失败')
        }
    })

})


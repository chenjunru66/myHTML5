var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/students')

var db = mongoose.connection

db.on('error',function(){
    console.log('数据库连接失败!!!')
})

db.once('open',function(){
    console.log('数据库连接成功!!!')
    //save()
})
var Student

//数据库的各种操作  增删改查
//    数据库 -- 集合 -- 文档
function schemaStu(){
    var stuSchema = mongoose.Schema({
        name:String,
        age:Number,
        isMale:Boolean,
        birth:Date,
        email:String
    })

    //console.log(stuSchema)
    //创建一个模型(类似于生成一个集合，集合的数据类型遵循stuSchema)
     Student = mongoose.model('students',stuSchema)
}
//Schema -- model --实例
function save(){
    schemaStu()

    //console.log(Student)
    //由模型创建实例化对象(类似生产一个文档)
    var stu1 = new Student({
        name:'tu',
        age:25,
        isMale:false,
        birth:new Date(1990,6,12),
        email:'61@qq.com'
    })
    //console.log(stu1)
    //保存数据到数据库内
    stu1.save(function(err,datas){
        if(!err){
            console.log('数据保存成功!')
        }else{
            console.log('数据保存失败!')
        }
    })

}

save()


//查找

function find(){
//    查找数据(文档)----集合中的文档
//    db.collectionName.find()
    schemaStu()

    //Student.find(callback)
    //Student.find().exec(callback)


    //无条件查询--方法一
    //Student.find(function(err,data){
    //    console.log(data)
    //})

//    find() --查找方法    exec() ---执行方法
//    无条件查询---方法二
//    Student.find().exec(function(err,data){
//        //console.log(data)
//        console.log(typeof data)
//
//    })


    //条件查找 ---查找符合条件的数据
    //Student.find({age:21},function(err,data){
    //    //console.log(data)
    //    console.log(typeof data[0]._id)
    //})

    //---查找条件：age大于等于18小于等于23
    //Student.find({age:{$lte:23,$gte:18}},function(err,data){
    //    console.log(data)
    //})

    //---显示部分数据,   先按条件查找信息，再选择可显示的数据
    //Student.find({age:{$lte:23,$gte:18}}).select('name age').exec(function(err,data){
    //
    //    console.log(data)
    //})

    //显示一条数据（第一条）
    //Student.findOne({age:{$lte:23,$gte:18}}).select('name age').exec(function(err,data){
    //
    //    console.log(data)
    //})

    //输出数据的数量
    //Student.find().count(function(err,data){
    //    console.log(data)
    //})


    //根据ID值查找数据
    //Student.findById('57fd9ddbd145dc1968f71c67').exec(function(err,data){
    //
    //    console.log(data)
    //})

    //升序/降序排列以属性名的正负值判断
    //Student.find().sort('-age').exec(function(err,data){
    //    console.log(data)//-age为降序
    //})
}
//find()


//更新文档
function update(){
    schemaStu()


    //Student.update({age:19},{age:30,isMale:true},function(err,data){
    //    console.log(data)
    //})
    //Student.update({age:21},{age:32,isMale:true}).exec(function(err,data){
    //    console.log(data)
    //})

    //根据Id值更新数据
    //Student.findByIdAndUpdate('57fda00e3140a20ae4ebf90b',{age:20}).exec(function(err,data){
    //    console.log(data)
    //})

    //更新符合条件的所有数据
    //Student.update({isMale:true},{isMale:false},{multi:true},function(err,data){
    //    console.log(data)
    //})



}

//update()

function remove(){
    schemaStu()

    Student.remove({age:30}).exec(function(err){
        console.log('数据删除成功')
    })

    //Student.findByIdAndRemove().exec()
    //     Student.findOneAndRemove().exec()

}
//remove()
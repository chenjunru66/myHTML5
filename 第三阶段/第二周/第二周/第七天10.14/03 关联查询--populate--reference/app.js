var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
var db = mongoose.connection
db.once('open', function(){
    console.log('打开数据库')
})

var classSchema = mongoose.Schema({
    name:String,
    teacher:String
})

var cls = mongoose.model('cls', classSchema)
var cls1 = new cls({
    name:'h5-9期',
    teacher:'周老师'
})

cls1.save(function(err, data){
    if(!err){
        console.log('保存成功')
    }
})
//设置初始数据的数据类型
var stuSchema = mongoose.Schema({
            name:String,
            age:Number,
            classId:{
                type:mongoose.Schema.ObjectId,
                ref:'cls'
            }
//    classId:数据类型为mongoose内置的ObjectId对象，
//    可以使用findById()查找班级信息
//    find({name:value})
//    ref=== reference 参考：集合名称，通过type和ref，将该模式与某个集合直接关联，在通过.populate(classId绑定名称),直接找到所绑定的集合

})


var Student = mongoose.model('stus', stuSchema)
//var stu1 = new Student({
//          name:'选录',
//           age:15,
//          classId:classId
//       })
//       stu1.save(function(err, data){
//           console.log(data)
//       })

cls.find({name:'h5-8期'}).exec(function(err, data){
    if(!err){
        //console.log(data)
        var classId = data[0]._id
        //console.log(classId)
        var stu1 = new Student({
            name:'选录',
            age:15,
            classId:classId
        })
        stu1.save(function(err, data){
            console.log(data)
        })
    }
})
//查找该学生所在的班级信息
//Student.find({name:'刘曼'}).exec(function(err, data){
//    console.log(data)
//    var clsId = data[0].classId
//    console.log(clsId)
//    cls.findById(clsId).exec(function(err, data){
//        console.log(data)
//    })
//})

//para1:所绑定的id的名称，para2：所关联的集合内容(默认显示所有的)
Student.find({name:'选录'}).populate('classId','name teacher').exec(function(err,data){
    console.log(data)
})
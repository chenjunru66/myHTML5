var express = require('express'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    template = require('art-template')

var app = express()
var form = multer()
app.use(express.static('www'))
app.use(bodyParser.urlencoded({extended:false}))





var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/stuinfos')

var db = mongoose.connection

db.on('error',function(){
    console.log('数据库连接失败')
})

db.once('open',function(){
    console.log('数据库连接成功')
})

app.post('/login',function(req,res){
    console.log(req.body)
    function send(code, message){
        res.status(200).json({code, message})
    }
    function schemaStu(){
        var stuSchema = mongoose.Schema({
            name:String,
            num:Number,
            isMale:String,
            message:String,
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
            name:req.body.name,
            num:req.body.num,
            isMale:req.body.sex,
            message:req.body.message,
            email:req.body.email
        })
        //console.log(stu1)
        //保存数据到数据库内
        stu1.save(function(err,datas){
            if(!err){
                //console.log('数据保存成功!')
                send('success','数据保存成功')
            }else{
                //console.log('数据保存失败!')
                send('failed','数据保存失败')
            }
        })

    }
    save()
})



app.listen(3000,function(){
    console.log('mongo is running')
})
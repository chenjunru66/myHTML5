var express = require('express'),
    bodyParser = require('body-parser')
var Task = require('./db.js')
var app = express()
app.use(express.static('www'))
app.use(bodyParser.json())

//查询数据
app.get('/tasks/:time',function(req,res){
  var time = req.params.time
    //console.log(time)
    //查询获取该日期下的数据进行排序，返回客户端,
    Task.find({time:time}).sort({'index':1}).then(function(data){
        data = data.map(function(item,index,arr){
            return{
                id:item._id.toString(),
                content:item.content,
                complete:item.complete,
                time:item.time,
                index:item.index
            }
        })
            res.json({result:1,data:data})
    }).catch(function(error){
            res.json({result:0,message:error.message})
    })
})

//保存数据
app.post('/tasks/:time',function(req,res){
    //查询数据是否存在，如果存在就修改数据，不存在就保存数据
    var task = new Task(req.body)
    //console.log(task)
    //Task.findById(req.body._id).then(function(task){
    //    //console.log(task)
    //    if(task){
    //        //查到数据就修改
    //        task.findByIdAndUpdate(req.body._id,{complete:req.body.complete})
    //    }else{
    //        //查询不到就添加
    //        var newTask =new Task(req.body)
    //        newTask.save()
    //    }
    //}).catch(function(err){
    //    console.log(err)
    //})

    task.save().then(function(data){
         //res.redirect('/')
        res.json({result:1,message:'保存数据成功'})
    }).catch(function(err){
        res.json({result:0,message:'保存数据失败'})
    })
})

//更新数据
app.put('/tasks/:time/:id',function(req,res){
    Task.findByIdAndUpdate(req.params.id,{complete:req.body.complete,index:req.body.index}).then(function(){
        //console.log('success')
        res.json({result:1,message:'保存数据成功'})
    }).catch(function(){
        console.log(error)
        res.json({result:0,message:'保存数据失败'})
    })
})
//删除数据
app.delete('/tasks/:time/:id',function(req,res){
    Task.findByIdAndRemove(req.params.id).then(function(data){
        res.json({result:1})
    }).catch(function(err){
        res.json({result:0})
    })
})


app.listen(4000,()=>{
    console.log('task is running')
})
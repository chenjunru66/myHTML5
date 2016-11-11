// const:常量，初始化之后，不会再修改
// var:变量；没有块级作用域
// let:变量；建议用let取代var；添加了块级作用域，大括号中声明的变量大括号外不能使用

const exp = require('express'),
    bodyParser = require('body-parser'),
    Reminder = require('./db.js')
const app = exp()

// 客户端发过来的是json数据，采用json（） 解析
// 客户端发过来的是key=value&key=value形式的数据，采用
// urlencoded()解析
app.use(bodyParser.json())

app.use(exp.static('www'))


app.post('/remind',function(req,res){
     //console.log(req.body)
     //把数据保存到数据库....
      const reminder = new Reminder(req.body)
      //ve方法返回的是promise对象
      //then中的方法是promise状态为resolve的下一步操作
      //catch中的方法是promise状态为reject的下一步操作
      reminder.save().then(function(data){                                        
          console.log(data)
         console.log('resolve状态回调')
         res.json({result:1,message:'备忘成功'})
      }).catch(function(err){
          console.log(err)
         console.log('reject状态回调')
         res.json({result:0,message:err.message})
      })

 })

app.get('/reminds',function(req,res){
//    获取所有的数据
    Reminder.find().then(function(data){
        //console.log(data)
        //map映射，获取一个新数组，只保存所需的数据
        data = data.map(function(item,index,arr){
            return{
                content:item.content,
                title:item.title,
                date:item.date
            }
        })
        //console.log(data)
        res.json({
            result:1,
            data:data
        })
    }).catch(function(err){
        console.log(err)
        res.json({
            result:0,
            message:err.message
        })
    })
})

app.listen(3000,function(){
    console.log('服务器监听3000端口')
})

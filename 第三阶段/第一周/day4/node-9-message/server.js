var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')
var fs = require('fs')
var app = express()
var form = multer()

app.use(express.static('wwwroot'))
app.use(bodyParser.urlencoded({extended:false}))

app.post('/login',form.array(),function(req,res){
      fs.exists('data',function(exists){
          if(!exists){
              fs.mkdirSync('data')
          }
          var infos = req.body
          var mess = {
              infos,
              date:new Date()
          }
          var inf = JSON.stringify(mess)
        //   inf是字符串
        // 加逗号是把inf数据用逗号分开
          fs.appendFile('data/info.txt',inf + ',',function(error){
              if(error){
                  console.log('数据保存失败')
                  res.send('数据保存失败')
              }
              else{
                  console.log('数据保存成功')
                  res.send('数据保存成功')
              }
          })
      })
})

app.get('/login',function(req,res){
    //  判断当前文件是否存在
    fs.exists('data',function(exists){
        if(exists){
            // 读取文件夹中的某个文件内容
            fs.readFile('data/info.txt',function(err,data){
                if(data){
                    res.send(data)
                }
                else{
                    res.send('获取数据失败')
                }
            })
        }
    })
})


app.listen(3000,function(){
    console.log('ajax is running')
})
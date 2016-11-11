//引入相关模块
const express = require('express'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
        template = require("art-template"),
      fs = require('fs')
//  实例化模块
var app = express()
//  设置中间件
app.use( express.static('www') )
app.use( bodyParser.urlencoded({ extended:false }) )
app.use( cookieParser() )
app.engine('.html',template.__express)
app.set('view engine','html')
template.config('cache',false)
/*--------------  注册  --------------*/
app.post('/user/register', function(req, res){
    console.log( req.body )      // 输出请求的内容
    req.body.ip = req.ip
    req.body.time = new Date()

    function send(code, message){
        res.status(200).json({code, message})
    }

    function saveFile(){
        var fileName = 'user/' + req.body.uname + '.txt'
        fs.exists(fileName, function(ex){
            if(ex){
                send('registered', '该用户已注册')
            } else {
                fs.appendFile(fileName, JSON.stringify( req.body ), function(err){
                    if(err){
                        send('file error', '文件系统错误')
                    } else {
                        send('success', '恭喜，已注册成功，请登录...')
                    }
                })
            }
        })

    }

//    判断存储用户名信息的文件夹是否存在
    fs.exists('user', function(ex){
        if( !ex ){
            fs.mkdirSync('user')
        //    保存文件---用户信息
            saveFile()

        } else {
        //    保存文件---用户信息
            saveFile()
        }
    })

})


/*-----------------  登录  -----------*/
app.post('/user/login', function(req, res){
    console.log( req.body )
    var uname = req.body.uname

    function send(code, message){
        res.status(200).json({code, message})
    }

//    判断用户名是否存在
    var fileName = 'user/' + uname + '.txt'

    fs.exists(fileName, function(ex){
        if( !ex ){
            send('error', '用户不存在')
        } else {
        //    判断用户密码是否匹配----读当前文件的密码
            fs.readFile(fileName, function(err, data){
                if(err){
                    send('file error', '文件系统错误')
                } else {
                    var datas = JSON.parse(data)
                    var password = datas.pwd
                    if( password == req.body.pwd ){
                        res.cookie('uname', uname)
                        send('success', '用户登录成功')
                    } else {
                        send('pwd error', '用户名或密码错误')
                    }
                }
            })
        }
    })

})

// 退出
app.get('/signout', function(req, res){
    res.clearCookie('uname')
    res.status(200).json({code:'success'})
})
//保存留言信息
app.post('/message', function(req, res){
    console.log( req.body )
    req.body.username = req.cookies.uname
    req.body.time = new Date()
    req.body.ip = req.ip
    
    function send(code,message){
        res.status(200).json({ code, message })
    }
//    保存留言信息
    fs.exists('message', function(ex){
        if( !ex ){
            fs.mkdirSync('message')
            var datas={title:'留言板内容展示',
            mess:[]    
           }
            datas.mess.push(req.body)
            console.log(datas)
            fs.writeFile('message/text.txt', JSON.stringify(datas), function(err){
              if (err) {
                  send('error','文件系统错误')
              } else{
                  send('success','提交留言成功')
              }
            })
        } else {
           fs.readFile('message/text.txt',function (err,data) {
               var data =JSON.parse(data)
               data.mess.push(req.body)
                 
            fs.writeFile('message/text.txt', JSON.stringify(data), function(err){
              if (err) {
                  send('error','文件系统错误')
              } else{
                  send('success','提交留言成功')
              }
              })
           })
           
        }
    })
    
})

//  读取留言信息
app.get('/save.html', function(req, res){
    fs.readFile('message/text.txt', function(err,data){
        if(err){
            res.json({code:'error',message:'读取文件失败'})
        } else {
          var data = JSON.parse(data)
          var datas=data.mess
          res.render('index',{datas:datas})
        }
    })
})

template.helper('dateFormate',function(data){
    var time = new Date(data)
    var year = time.getFullYear()
    var month = time.getMonth()+1
    var date = time.getDate()
    var hour = time.getHours()
    var second = time.getSeconds()
    var minute = time.getMinutes()
    hour = hour < 10 ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute
    second = second< 10 ? '0' + second: second
    var str = year+'年'+month+'月'+date+'日'+''+hour+''+':'+minute+':'+second
    return str
    // hour = hour<10? '0'
})

//监听端口
app.listen(2000, function(){
    console.log( 'nodejs is running' )
})

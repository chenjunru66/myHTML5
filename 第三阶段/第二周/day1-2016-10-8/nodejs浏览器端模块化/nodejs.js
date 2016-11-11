//var a = 1,b =3
//console.log(a+b)

//var a = function(){
//    console.log(this)
//}
//a()
//const这是引入常量，var是引入变量
//引入模块
var express = require('express')//变量名为express等是为了便于读代码
var bodyParser = require('body-parser')//解析post请求
var cookie = require('cookie-parser')//处理cookie请求
var fs = require('fs')

var app = express()//必须实例化具体到某个实例中

app.use(express.static('www'))
app.use(bodyParser.urlencoded({extended:false}))//开启高级编码功能
app.use(cookie())//设置cookie


//*------------------首先处理注册
app.post('/user/register',function(req,res){
    //console.log(req.body)//输出请求的内容
    req.body.ip = req.ip
    req.body.time = new Date()

    function send(code,message){
        res.status(200).json({code,message})

    }

    function saveFile(){
        var fileName = 'user/' + req.body.uname + '.txt'

        fs.exists(fileName,function(ex){
            if(ex){
                send('registered','该用户已注册')
            }else{
                fs.appendFile(fileName,JSON.stringify(req.body),function(err){
                    if(err){
                        send('file error','文件系统错误')
                    }else{
                        send('success','恭喜，已注册成功，请登录...')
                    }
                })
            }
        })
    }
//    判断存储用户名信息的文件夹是否存在
    fs.exists('user',function(ex){

        if(!ex){
            fs.mkdirSync('user')
        //    保存文件--用户信息
            saveFile()

        }else{
        //    直接保存用户信息
            saveFile()

        }
    })

})


//*---------------处理登录请求
app.post('/user/login',function(req,res){
    //console.log(req.body)
    var uname = req.body.uname

    function send(code,message){
        res.status(200).json({code,message})

    }

    //判断用户名是否存在
    var fileName = 'user/' + uname + '.txt'
    fs.exists(fileName,function(ex){
        if(!ex){
           send('file error','用户不存在')
        }else{
        //    判断用户密码是否匹配-----读当前文件的密码
            fs.readFile(fileName,function(err,data){
                if(err){
                    send('file error','文件系统错误')
                }else{
                    var datas = JSON.parse(data)
                    var password = datas.pwd
                    if(password == req.body.pwd){
                        res.cookie('uname',uname)

                        send('success','用户登录成功')
                    }else{
                        send('pwd error','密码错误')
                    }

                }
            })

        }
    })

})

//退出
app.get('/signout',function(req,res){
    res.clearCookie('uname')
    res.status(200).json({code:'success'})
})

//保存留言信息
app.post('/message',function(req,res){
    //console.log(req.body)
    req.body.username = req.cookies.uname
    req.body.time = new Date()
    req.body.ip = req.ip

//    保存留言信息,在txt中是字符串
    fs.exists('message',function(ex){
        if(!ex){
            fs.mkdirSync('message')
            fs.appendFile('message/text.txt',JSON.stringify(req.body)+',',function(err){
                if(err){
                    res.status(200).json({code:'error',message:'保存数据失败'})
                }else{
                    res.status(200).json({code:'success',message:'留言提交成功'})
                }
            })
        }else{
            fs.appendFile('message/text.txt',JSON.stringify(req.body)+',',function(err){
                if(err){
                    res.status(200).json({code:'error',message:'保存数据失败'})
                }else{
                    res.status(200).json({code:'success',message:'留言提交成功'})
                }
            })
        }
    })
})

app.get('/saveMessage',function(req,res){
    fs.exists('message/text.txt',function(ex){
        if(!ex){
            res.send('当前不存在该留言信息')
        }else{
            fs.readFile('message/text.txt',function(err,data){
                if(err){
                    res.send('文件错误')
                }else{
                    res.send(data)
                }
            })
        }
    })
})


app.listen(2000,function(){
    console.log('nodejs is running')//让我们更好的知道该文件运行
})


var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer'),
    fs = require('fs')
//实例化对象
var app = express(),
    form = multer()

//设置文件存储
var storage = multer.diskStorage({
        destination: 'www/uploads',
        filename: function(req, file, callback){
            var petname = req.cookies.petname
            callback(null, petname + '.jpg')
        }
    }),
    uploads = multer({storage})

//设置中间件
app.use(express.static('www'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())
/*-------------- 注册  --------------------*/
app.post('/user/register', function(req, res){
    console.log(req.body)
    req.body.ip = req.ip
    req.body.date = new Date()
    //将用户名作为文件名保存，判断用户名是否存在，如果存在，返回用户已注册，否则添加文件
    /*前提是判断文件夹是否存在，如果存在，直接保存文件，否则，添加文件夹后保存文件*/
    var fileName = 'user/' + req.body.petname + '.txt'
    function send(code, message){
        res.status(200).json({code, message})
    }
    function saveFile(){
        fs.exists(fileName, function(ex){
            if(ex){
                send('registered', '该用户已注册')
            } else {
                fs.appendFile(fileName, JSON.stringify(req.body),  function(err){
                    if(err){
                        send('file error', '系统错误哦')
                    } else {
                        send('success', '恭喜，注册成功，请登录')
                    }
                })
            }
        })
    }
//    文件夹是否存在
    fs.exists('user', function(ex){
        if( !ex ){
            fs.mkdirSync('user')
            saveFile()
        } else {
            saveFile()
        }
    })
})

/*----------------  登录请求  -------------------*/
app.post('/user/login', function(req, res){
    console.log(req.body)
//    判断用户是否存在，如果存在，判断密码是否正确 登录错误提示密码错误，不存在则提示用户未注册
    function send(code, message){
        res.status(200).json( {code, message} )
    }
    var fileName = 'user/' + req.body.petname + '.txt'
    fs.exists(fileName, function(ex){
        if( !ex ){
            send('register', '该用户未注册')
        } else {
            fs.readFile(fileName,  function(err, data){
                if( err ){
                    send('file error', '系统错误哦！')
                } else {
                    var user = JSON.parse(data)
                    if( user.password == req.body.password ){
                        res.cookie('petname', req.body.petname)
                        send('success', '用户登录成功')
                    } else {
                        send('failed', '用户名或密码错误')
                    }
                }
            })
        }
    })
})

/*---------------- 退出请求 ---------------------------*/
app.get('/user/signout', function(req, res){
    res.clearCookie('petname')
    res.status(200).send('success')
})
/*--------------------文件上传处理 --------------------*/
app.post('/user/photo',uploads.single('photo'), function(req, res){
    res.status(200).json({code:'success', message:'上传成功,'})
})

/*------------------------提问请求---------------------*/
app.post('/ask', function(req, res){
    console.log(req.body)
    //判断用户是否登陆i，如果未登录，提示登录
    var petname = req.cookies.petname
    if( !petname ){
        send('sign fail', '请重新登录')
        return
    }
    var time = new Date()
    req.body.petname = petname
    req.body.ip = req.ip
    req.body.time = time

    //设置返回的响应信息
    function send(code, message){
        res.status(200).json({code, message})
    }
//    设置文件的保存信息
    function saveFile(){
        //以当前时间为文件名
        var fileName = 'questions/' + time.getTime() + '.txt'
        fs.appendFile(fileName, JSON.stringify(req.body), function(err){
            if(err){
                send('file error', '抱歉，系统错误')
            } else {
                send('success', '问题提交成功')
            }
        })
    }
//    判断文件夹是否存在
    fs.exists('questions', function(ex){
        if(!ex){
            fs.mkdirSync('questions')
            saveFile()
        } else {
            saveFile()
        }
    })
})

/*--------首页获取提问信息---------------------*/
app.get('/questions', function(req, res){
    function send(code, message, questions){
        res.status(200).json({code, message, questions})
    }

    function readFiles(i, files, questions, complete ){
        var filePath = 'questions/' + files[i]
        if( i < files.length ){
            fs.readFile(filePath, function(err, data){
                if(!err){
                    questions.push(JSON.parse(data))
                }
                readFiles(++i, files, questions, complete)
            })
        } else {
            complete()
        }
    }


    fs.exists('questions', function(ex){
        if(!ex){
            send('fail', '获取信息失败')
        } else {
        //    读取文件夹中的所有文件
            fs.readdir('questions', function(err, files){
                if( err ){
                    send('file error', '系统错误')
                } else {
                    //文件倒着读取
                    //files = files.reverse()

                    //console.log(files)  // 对象
                    //console.log(files.length)
                    //var questions = []
                //    循环遍历获取数据信息
                //    for( var i = 0 ; i < files.length; i++ ){
                //        var filePath = 'questions/' + files[i]
                //        fs.readFile(filePath, function(err, data){
                //            if(err){
                //                send('file error', '获取数据失败')
                //            } else {
                //                datas = JSON.parse(data)
                //                //console.log(datas)
                //                questions.push(datas)
                //                //console.log(questions)
                //
                //            }
                //        })
                //
                //    }
                //    console.log(questions + '11')
                //数据传输始终为空，所以需要使用回调函数调用当前数据
                    files = files.reverse()
                    var questions  = []
                    readFiles(0, files, questions, function(){
                        send('success', '获取数据成功', questions)
                    })
                }
            })
        }
    })
})

/*-----------------------处理回答信息--------------------*/
app.post('/answer', function(req, res){
    var petname = req.cookies.petname
    function send(code, message){
        res.status(200).json({code, message})
    }
    if(!petname){
        send('sign fail', '请重新登录...')
        return
    }

    req.body.petname = pename
    req.body.ip = req.ip
    req.body.time = new Date()




})
app.listen(4000, function(){
    console.log( 'ask-answer is runnig' )
})





var datas = {
    tile:'',
    books:[
        {},
        {},
        {}
    ]
}








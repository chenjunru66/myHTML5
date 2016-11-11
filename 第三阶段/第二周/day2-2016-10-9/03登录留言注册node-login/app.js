var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer'),
    fs = require('fs'),
    template = require('art-template')
//实例化对象
var app = express(),
    form = multer()

app.engine('.html',template.__express)
app.set('view engine','html')

template.config('cache','false')

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
/*-------------------- 注册  --------------------*/
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
    //console.log(req.body)
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
                    console.log(user)
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
    console.log(req.body)
    res.status(200).json({code:'success', message:'上传成功,'})
})

/*------------------------提问请求---------------------*/
app.post('/ask', function(req, res){
    var petname = req.cookies.petname

    //console.log(req.body)
//    把当前提问的内容保存至某个文件中，文件名以当前时间取名，便于查询及后期的回答
//    设置时间+Ip
    var time = new Date()
    var time1 = (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString()
    req.body.petname = petname
    req.body.ip = req.ip
    req.body.time1 = time1
    req.body.time =time
    req.body.times = time.getTime()
//封装返回服务器信息的方法
    function send(code, message){
        res.status(200).json({ code, message })
    }
//    封装保存文件的方法
    function saveFile(){
    //    设置文件名 -- 以当前时间取名
        var fileName = 'questions/' + time.getTime() + '.txt'
        fs.appendFile(fileName, JSON.stringify(req.body), function(err){
            if( err ){
                send('error', '保存文件失败')
            } else {
                send('success', '问题提交成功')

            }
        })
    }
//    判断文件夹是否存在
    fs.exists('questions', function(ex){
        if( !ex ){
            fs.mkdirSync('questions')
            saveFile()
        } else {
            saveFile()
        }
    })
})
/*----------------- 首页获取提问的内容信息 ---------------*/
app.get('/questions', function(req, res){
    function send(code, message, questions){
        //code:读取是否成功，message:是否成功相对应的信息;questions:读到的文件的内容数据
        res.status(200).json({ code, message, questions })
    }

    function reads(i, files, questions, cb){
        var filePath = 'questions/' + files[i]
        if( i < files.length ){
            fs.readFile( filePath, function(err, data){
                if(err){
                    send('error', '获取数据失败')
                } else {
                    questions.push( JSON.parse(data) )
                }
                reads(++i, files, questions, cb)
            })
        } else {
            cb()
        }
    }
//    判断文件夹是否存在
    fs.exists('questions', function(ex){
        if(!ex){
            send('error', '文件系统错误','空')
        } else {
        //    读取文件夹内部的所有文件的内容
            fs.readdir('questions', function(err, files){
                if(err){
                    send('error', '文件系统错误')
                } else {
                    var files = files
                    //console.log(files)
                    var questions = []
                    reads(0, files, questions, function(){
                        send('success', '获取数据成功', questions)
                    })
                }
            })
        }
    })
})
//回答数据处理
app.post('/answers',function(req,res){
    var aname = req.cookies.petname
    var fileName = 'questions/' + req.cookies.questions + '.txt'
    //console.log(fileName)
    req.body.ip = req.ip
    req.body.time = new Date()
    req.body.time1 = (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString()
    req.body.petname = aname

    //fs.appendFile(fileName,',' + JSON.stringify(req.body),function(err){
    //       if(err){
    //           res.send('保存失败')
    //       }else{
    //           res.send('保存成功')
    //       }
    //})

    fs.readFile(fileName,function(err,data){
        if(err){
            res.send('保存失败')
        }else{
            var datas = JSON.parse(data)
        //    data:{}
        //    console.log(datas)
            if(!datas.answers){
                datas.answers = []
            }

            datas.answers.push(req.body)
            fs.writeFile(fileName,JSON.stringify(datas),function(err){
                if(err){
                    res.send('保存数据失败')
                }else{
                    res.send('回答提交成功')
                }
            })
        }
    })



})

//模板处理--首页
app.get('/',function(req,res){
    fs.exists('questions',function(ex){
        if(!ex){
            //防止在questions文件不存在的时候
            res.render('template',{
                title:'网站首页'
            })

        }else{
            fs.readdir('questions',function(err,files){
                if(err){
                    res.render('template',{
                        title:'网站首页'
                    })
                }else{
                    //翻转数组
                    var files = files.reverse()
                    //console.log(files)
                    var ques = []
                //    遍历数组
                    for(var i = 0;i < files.length;i++){
                       var filePath = 'questions/' + files[i]
                    // 同步读文件，fs.readFileSync
                        var data = fs.readFileSync(filePath)
                        data = JSON.parse(data)
                        //console.log(data)
                         ques.push(data)

                    }
                    //console.log(ques)
                    res.render('template',{
                        title:'问答网站首页',
                        datas:ques
                    })
                }
            })

        }
    })
})

//静态资源文件夹中的文件跳转到视图目录中的文件
app.get('/login.html',function(req,res){
    console.log('现在开始渲染登录页面了')
    res.render('login',{
        title:'登录页面',
        name:'login'
    })


})
app.get('/register.html',function(req,res){
    console.log('现在开始渲染注册页面了')
    res.render('register',{
        title:'注册页面',
        name:'register'
    })


})


app.get('/answer.html',function(req,res){
    console.log('现在开始渲染回答页面了')
    res.render('answer',{
        title:'回答页面',
        name:'answer'
    })


})
app.get('/ask.html',function(req,res){
    console.log('现在开始渲染提问页面了')
    res.render('ask',{
        title:'提问页面',
        name:'ask'
    })


})
app.get('/user.html',function(req,res){
    console.log('现在开始渲染用户页面了')
    res.render('user',{
        title:'用户页面',
        name:'user'
    })


})




app.listen(4000, function(){
    console.log( 'ask-answer is runnig' )
})




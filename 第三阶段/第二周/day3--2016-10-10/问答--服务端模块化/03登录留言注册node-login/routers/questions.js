var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer'),
    fs = require('fs'),
    template = require('art-template')
var router = express.Router()

router.get('/questions',function(req,res){
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

module.exports = router
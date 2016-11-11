var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer'),
    fs = require('fs'),
    template = require('art-template')
var router = express.Router()

router.post('/ask',function(req,res){
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

module.exports = router
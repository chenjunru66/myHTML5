var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer'),
    fs = require('fs'),
    template = require('art-template')
var router = express.Router()

router.post('/answers',function(req,res){
    var aname = req.cookies.petname
    var fileName = 'questions/' + req.cookies.questions + '.txt'

    req.body.ip = req.ip
    req.body.time = new Date()
    req.body.time1 = (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString()
    req.body.petname = aname

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

module.exports = router
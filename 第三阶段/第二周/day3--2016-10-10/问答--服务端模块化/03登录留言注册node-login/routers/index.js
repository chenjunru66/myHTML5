var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer'),
    fs = require('fs'),
    template = require('art-template')
var router = express.Router()

router.get('/',function(req,res){
    fs.exists('questions',function(ex){
        if(!ex){
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

module.exports = router
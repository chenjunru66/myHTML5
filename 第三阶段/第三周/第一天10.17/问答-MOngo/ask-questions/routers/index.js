var express = require('express'),
    fs = require('fs')
var router = express.Router()

router.get('/', function(req, res){
    fs.exists('questions', function(ex){
        if(!ex){
            res.render('template', {
                titile:'网站首页'
            })
        } else{
            fs.readdir('questions', function(err, files){
                if(err){
                    res.render('template', {
                        titile:'网站首页'
                    })
                } else {
                    //console.log(files)
                    var files = files.reverse()
                    var ques = []
                    for(var i = 0; i < files.length; i++){
                        var filePath = 'questions/' + files[i]
                    //    同步读文件 fs.readFileSync
                        var data = fs.readFileSync(filePath)
                        data = JSON.parse(data)
                        ques.push(data)
                    }
                    //console.log(ques)
                    res.render('template', {
                        title:'问答网站首页', datas:ques
                    })
                }
            })
        }
    })
})
module.exports = router
var express = require('express'),
    cookieParser = require('cookie-parser')
    fs = require('fs')
var app = express()
app.use(cookieParser())
var router = express.Router()
router.post('/answer', function(req, res){
//    回答的内容保存在哪------问题的文件内，如何与回答的那个问题联系起来？
//    获取文件名称--通过浏览器端设定的cookie

    var aname = req.cookies.petname
    var fileName = 'questions/' + req.cookies.question + '.txt'

    req.body.ip = req.ip
    req.body.time = new Date()
    req.body.petname = aname

    console.log(fileName)
    fs.readFile(fileName, function(err, data){
        if( err ){
            res.send('保存失败')
        } else {
            var datas = JSON.parse(data)
            console.log(datas)
        //    datas : {}
        //    console.log(datas)
            if( !datas.answers ){
                datas.answers = []
            }
            datas.answers.push(req.body)
            fs.writeFile(fileName, JSON.stringify(datas), function(err){
                if(err){
                    res.send('保存数据失败')
                } else {
                    res.send('回答提交成功')
                }
            })


        }
    })




})

module.exports = router
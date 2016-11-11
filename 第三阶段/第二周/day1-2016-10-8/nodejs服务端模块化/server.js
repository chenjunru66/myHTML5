/**
 * Created by Administrator on 2016/10/8.
 */
const express = require('express'),
    template = require('art-template'),
    fs = require('fs')
var app = express()

template.config('cache',false)


app.engine('.html',template.__express)



//设置视图引擎
app.set('view engine','html')

app.get('/',function(req,res){
    fs.readFile('./message/text.txt',function(err,data){
        if(err){
            res.json({'file error':'读取文件失败'})
        }else{

            var  datas = data.toString("utf-8")
var arrs = '[' + datas.substr(0,datas.length - 1) + ']'
//            console.log(typeof(datas))
            //console.log(arrs)
            var ress = JSON.parse(arrs)
            //console.log(ress)
             res.render('index',{mess:ress})
        }
    })
})

app.listen(3000,function(){
    console.log('art-template is running')
})
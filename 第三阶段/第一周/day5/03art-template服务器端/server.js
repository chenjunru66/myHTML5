const express = require('express'),
    template = require('art-template'),
    fs = require('fs')
var app = express()

template.config('cache',false)//禁止缓存，本地测试使用的时候可以设置，如果上线，则需要删除本行代码

//app.engine(para1,para2)---设置arttemplate为视图引擎
app.engine('.html',template.__express)
//设置模板数据---设置固定的代码写法，再进行模板解析(template.__express)


//设置视图引擎
app.set('view engine','html')

app.get('/',function(req,res){
    fs.readFile('./book.json',function(err,data){
        console.log(data)
        if(err){
            res.json({'file error':'读取文件失败'})
        }else{
            var  datas = JSON.parse(data)
            var books = datas.books
            //console.log(datas)
            //console.log(books)
            res.render('index',{bookss:books})//渲染当前页面
        //    para1：渲染的模板页面的文件名称
        //    para2：渲染的页面所需的数据（键名和模板页面的数组名一致）
        }
    })
})

app.listen(4000,function(){
    console.log('art-template is running')
})
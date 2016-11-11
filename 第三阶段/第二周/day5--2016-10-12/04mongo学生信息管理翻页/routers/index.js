var express = require('express')

var router = express.Router()
var Student = require('./studb')

//(ab)?  ---正则表达式：该值(ab)出现0次或1次

//router.get('/')
router.get('/(:page)?',function(req,res){

    //设置page最初的页面数
    var page = req.params.page || 1
    //console.log(typeof page) 字符串
    page = parseInt(page)

    //设置煤业显示五条数据
    var size = 5
    //获取数量
    Student.find().count(function(err,count){
        if(err){
        //
        }else{
            //console.log(count)
        //    获取页码值  --不足5条也算一页
            var pageTotal = Math.ceil(count / size)
            //console.log(page)
        //    首页显示前五条，第二页显示6-10条，第三页显示11-14
        // var pages = [page]       
        // var left = page
        // var right = page
        
        
        
        
        
          Student.find().skip((page - 1)*size).limit(size).exec(function(err,data){
              if(err){

              }else{
                  res.render('template',{
                      datas:data,
                      page:page,
                      pageTotal:pageTotal
                  })
              }
          })



        }
    })

    //Student.find(function(err,data){
    //    if(!err){
    //        //data = data.map(function(item){
    //        //
    //        //    //模板引擎{{data._id}}无法获取id值
    //        //    //model对象时复杂型的Object对象
    //        //    item = item.toObject()
    //        //    //console.log(item)
    //        //    item.ids = item._id
    //        //    console.log(item)
    //        //    return item
    //        //})
    //        //
    //        //res.send(data)
    //
    //        res.render('template',{
    //            title:'管理首页',
    //            datas:data
    //        })
    //        //console.log(data)
    //    }else{
    //        console.log(data)
    //    }
    //
    //
    //})

})

module.exports = router
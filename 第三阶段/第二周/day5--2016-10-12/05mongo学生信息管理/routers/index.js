var express = require('express')

var router = express.Router()

var Student = require('./studb')
router.get('/(:page)?',function(req,res){
    //Student.find(function(err,data){
    //    if(!err){
    //
    //        res.render('index',{
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



    var page = req.params.page || 1
    //console.log(page)
    page = parseInt(page)

    var size = 5

    Student.find().count(function(err,count){
        if(err){
            //
        }else{
            //console.log(count)

            var pageTotal = Math.ceil(count / size)

            //console.log(count)
            //    获取页码值  -- 不足5条也算一页
            var pageTotal = Math.ceil(count / size)
            var pages = [page]    // 当前页面的页码 [1]
            var left = page  // 当前页码值
            var right = page
            //当||条件和&&条件同时存在的时候，&&先执行的
            while( ( left> 1 || right < pageTotal ) && pages.length < 3 ){
                if( left > 1 ){
                    pages.unshift(--left)
                }
                if( right < pageTotal ){
                    pages.push(++right)
                }
            }
            //console.log(pages)
            //console.log(page)


            Student.find().skip((page - 1)*size).limit(size).exec(function(err,data){
                if(err){

                }else{
                    res.render('index',{
                        datas:data,
                        page:page,
                        pageTotal:pageTotal,
                        pages:pages
                    })
                }
            })



        }
    })
})


module.exports = router
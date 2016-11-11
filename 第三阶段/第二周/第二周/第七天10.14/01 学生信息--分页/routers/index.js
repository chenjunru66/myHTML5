/**
 * Created by Administrator on 2016/10/13.
 */
var express = require('express'),
    studb = require('./studb')
var router = express.Router()
//  （ab）?   --- 正则表达式写法  ：  该值(ab)出现0次或1次
//router.get('/')或者 router.get('/:page')
router.get('/(:page)?', function(req, res){
    //设置page最初的页面数
    var page = req.params.page  || 1
    //console.log( typeof page )   // 字符串
    page = parseInt(page)
    //设置每页显示五条数据
    var size = 5
    // 获取数据的数量
    studb.find().count(function(err, count){
        if(err){
            //
        } else {
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
            console.log(pages)
            //console.log(page)
        //    首页显示前五条，第二页显示6-10条，第三页显示11-15，
        //    skip( (page-1)*size ).limit(5); skip(page*size).limit(5); skip().limit(5)
            studb.find().skip( (page - 1) * size).limit(5).exec(function(err, data){
                if(err){
                    //
                } else {
                    res.render('index', {
                        datas:data,
                        page:page,
                        pageTotal:pageTotal,
                        pages:pages
                    } )
                }
            })

        }
    })

    //studb.find().exec(function(err, data){
    //    if(err){
    //        // 错误页面
    //    } else {
    //
    //        res.render('index', {
    //            title:'学生信息管理系统',
    //            datas:data
    //        })
    //    }
    //})

})

module.exports = router
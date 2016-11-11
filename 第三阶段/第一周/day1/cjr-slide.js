/**
 * Created by Administrator on 2016/9/26.
 */
//一个页面内部可以写多个轮播图，即多次调用某个js文件
$.fn.cjrslide = function(ele){
    var lisCss = [
        {width:250,height:143,left:200,top:78,$opacity:0.5,zIndex:1},
        {width:300,height:171,left:0,top:65,$opacity:0.5,zIndex:2},
        {width:320,height:221,left:220,top:35,$opacity:0.5,zIndex:3},
        {width:390,height:241,left:380,top:25,$opacity:1,zIndex:4},
        {width:320,height:221,left:650,top:35,$opacity:0.5,zIndex:3},
        {width:300,height:171,left:800,top:65,$opacity:0.5,zIndex:2},
        {width:250,height:143,left:680,top:78,$opacity:0.5,zIndex:1}
    ]

    $.fn.cjrslide = function(options){
        console.log($(this))
        console.log(this)
        this.each(function(i,ele){
            cjrslide(ele,options)
        })
        return this
    }
    var cjrslide = function(ele,options){
        //设置默认的循环时间间隔以及动画执行的时间
        var defspd = $.extend({
            delay:3000,
            speed:1000
        },options)
        var $ele = $(ele)
        var lis = $els.find('li')
        console.log(lis)
    }

}
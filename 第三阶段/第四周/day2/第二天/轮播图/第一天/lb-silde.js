/**
 * Created by Administrator on 2016/9/26.
 */
//一个页面内部可以写多个轮播图
$.fn.lbslide = function(options) {

    console.log(options)
    this.each(function (i, ele) {

        yslide(ele, options)
    })
    return this
}
var yslide = function(ele,options){
    //设置默认的循环时间间隔以及动画时间
    var optis = $.extend({
        delay:3000,
        speed:1000
    },options)
    console.log(optis)
    var $ele = $(ele)
    console.log($(ele))
    //var lis = $ele.find('li')


    var lisCSS = [
        {width: 8+'vw',left: 35+'vw',zIndex: 1,top:5+'vw',o:1},
        {width: 8+'vw',left: 27+'vw',zIndex: 2,top:5+'vw',o:0.5},
        {width: 15+'vw',left: 32+'vw',zIndex: 3,top:3+'vw',o:0.7},
        {width: 20+'vw',left: 37+'vw',zIndex: 4,top:2+'vw',o:1},
        {width: 15+'vw',left: 49+'vw',zIndex: 3,top:3+'vw',o:0.7},
        {width: 8+'vw',left: 60+'vw',zIndex: 2,top:5+'vw',o:0.5},
        {width: 8+'vw',left: 54+'vw',zIndex: 1,top:5+'vw',o:1}
    ]
    var lis = $ele.find('li')
    function move(){
        lis.each(function (ins) {
            //添加样式
            $(this).css('zIndex',lisCSS[ins].zIndex).stop(true,true).animate(lisCSS[ins],optis.delay).find('img').css('opacity',lisCSS[ins].o)

        })
    }
    function next(){
        lisCSS.unshift(lisCSS.pop())
        move()
    }
    function prev(){
        //shift()得到数组第一个元素
        lisCSS.push(lisCSS.shift())
        move()
    }

    function stop(){
        clearInterval(intes)
    }
    function play(){
        intes =  setInterval(prev,optis.speed)
    }

    $('.div span:first-of-type').click(function(){
        stop()
        prev()
        play()
    })

    $('.div span:last-of-type').click(function(){
        stop()
        next()
        play()

    })
    move()
    play()
}




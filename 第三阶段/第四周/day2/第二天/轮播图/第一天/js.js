/**
* Created by Administrator on 2016/9/23.
*/
//$(function(){
//    function bian(w,l,z){
//        this.width=w+'vw'
//        this.left=l+'vw'
//        this.zIndex=z
//    }
//    var a = 0,
//        b = 1,
//        c = 2,
//        d = 3,
//        e = 4,
//        f = 5,
//        g = 6
//    function kaishi(){
//
//        a = a>6? 0:a
//        b = b>6? 0:b
//        c = c>6? 0:c
//        d = d>6? 0:d
//        e = e>6? 0:e
//        f = f>6? 0:f
//        g = g>6? 0:g
//
//        //$('li').removeClass()
//        $('li').eq(a).animate(
//            new bian(8,27,2)
//            ,1000)
//        $('li').eq(b).animate(
//            new bian(15,32,3)
//            ,1000)
//        $('li').eq(c).animate(
//            new bian(20,37,4)
//            ,1000)
//        $('li').eq(d).animate(
//            new bian(15,49,3)
//            ,1000)
//        $('li').eq(e).animate(
//            new bian(8,60,2)
//            ,1000)
//        $('li').eq(f).animate(
//            new bian(8,54,1)
//            ,1000)
//        $('li').eq(g).animate(
//            new bian(8,35,1)
//            ,1000)
//        a++,b++,c++,d++,e++,f++,g++
//    }
//    setInterval(kaishi,2000)
//
//})


////解决平移：改变left
//$(function(){
//    var lis = $('ul').find('li')
////    获取定位元素的偏移量
//        var lefts=$(this).position().left
//        //console.log($(this).position().left)
//        var ins = index + 1
//        if( ins == 0){
//            lefts = lis.last().position().left
//        } else {
//            lefts = lis.eq(index-1).position().left
//        }
//        //当前元素的left位上一个元素，就是5用4····的值
//        $(this).stop().animate({
//            left:lefts
//        },1000)
//    })
//
//})

$(function(){
    //设置所有的li标签的css属性
    var lisCSS = [
                    {width: 8+'vw',left: 35+'vw',zIndex: 1,top:5+'vw',o:1},
                    {width: 8+'vw',left: 27+'vw',zIndex: 2,top:5+'vw',o:0.5},
                    {width: 15+'vw',left: 32+'vw',zIndex: 3,top:3+'vw',o:0.7},
                    {width: 20+'vw',left: 37+'vw',zIndex: 4,top:2+'vw',o:1},
                    {width: 15+'vw',left: 49+'vw',zIndex: 3,top:3+'vw',o:0.7},
                    {width: 8+'vw',left: 60+'vw',zIndex: 2,top:5+'vw',o:0.5},
                    {width: 8+'vw',left: 54+'vw',zIndex: 1,top:5+'vw',o:1}
                 ]
    //
    //$.fn.divs = function(){
    //    console.log($(this))
    //    this.each(function(){
    //        //console.log(this)
    //        $(this).find('li').each(function(ins){
    //            $(this).css(lisCSS[ins])
    //        })
    //    })
    //}

    var lis = $('.div ul').find('li')
    console.log(lis)
    function move(){
    lis.each(function (ins) {
        console.log(ins)
        console.log(lisCSS[ins])
        //添加样式
    $(this).css('zIndex',lisCSS[ins].zIndex).stop(true,true).animate(lisCSS[ins],500).find('img').css('opacity',lisCSS[ins].o)

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
       intes =  setInterval(prev,2000)
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
})
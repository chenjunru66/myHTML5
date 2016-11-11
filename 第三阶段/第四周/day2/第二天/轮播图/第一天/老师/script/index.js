/**
 * Created by Administrator on 2016/9/26.
 */
$(function(){
//    设置所有的LI标签的CSS属性
    var lisCss = [
        { width:100, height:150, left:150, top:68, $zIndex:1, $opacity:0.4 },
        { width:150, height:170, left:0, top:75, $zIndex:2, $opacity:0.5 },
        { width:200, height:230, left:120, top:45, $zIndex:3, $opacity:0.6 },
        { width:240, height:320, left:290, top:0, $zIndex:4, $opacity:1 },
        { width:200, height:230, left:500, top:45, $zIndex:3, $opacity:0.6 },
        { width:150, height:170, left:670, top:75, $zIndex:2, $opacity:0.5 },
        { width:100, height:150, left:520, top:68, $zIndex:1, $opacity:0.4 }
    ]

    var lis = $('.slides ul').find('li')
    //给li标签及Img标签添加初始样式
    function move(){
        lis.each(function(ins){
            $(this).css('zIndex',lisCss[ins].$zIndex).stop(true,true).animate(lisCss[ins], 500).find('img').css('opacity', lisCss[ins].$opacity)
        })
    }
//    如何把数组元素的最后一个元素放置在第一个元素的位置上？
//    下一张
    function next(){
        lisCss.unshift( lisCss.pop() )
        move()
    }

    //上一张
    function prev(){
        lisCss.push( lisCss.shift() )
        move()
    }

    function play(){
        inters = setInterval(next, 3000)
    }
    //停止循环
    function stop(){
        clearInterval(inters)
    }
    //切换上一张
    $('.slides section:first-of-type').click(function(){
        stop()
        prev()
        play()
    })
    //切换下一张
    $('.slides section:last-of-type').click(function(){
        stop()
        next()
        play()
    })
    //首先初始化当前页面样式
    move()
    //自动播放下一张
    play()
})
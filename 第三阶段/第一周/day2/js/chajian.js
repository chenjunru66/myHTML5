/**
 * Created by Administrator on 2016/9/27.
 */
(function($){
    $(function(){
        $.fn.cjrslide = function(options){
            //console.log(this)
            this.each(function(i,ele){
                cjrslide(ele,options)
            })
            return this
        }
        var cjrslide = function(ele,options){
            var $ele = $(ele)
            //console.log($ele)
            var defs = $.extend({
                direction:'left'

            },options)
            //console.log(defs)
            var heights = $($ele).find('li').height()
            var s_length = $($ele).find('li').length
            //console.log(s_length)
            var len = $($ele).find('li').width()
            //console.log(defs.direction)
            //console.log(len)
            if(defs.direction == 'left'){

                //console.log($ele)
                $($ele).parent().siblings().each(function(ins){
                    if(ins == 0){
                        $(this).click(function(){
                            $($ele).stop(true,true).animate({
                                left: -len
                            },300,function(){
                                $($ele).css('left','0').append($($ele).find('li').eq(0))
                            })
                        })
                    }else if(ins == 1){
                        $(this).click(function(){
                            $($ele).css('left',' - 165px ').prepend($($ele).find('li').eq(s_length - 1))
                            $($ele).stop(true,true).animate({
                                left: 0
                            },300)
                        })
                    }
                })
            }else if(defs.direction == 'top'){
                //tops()
                //console.log($($ele).parent().siblings())
                $($ele).parent().siblings().each(function(ins){
                    if(ins == 0){
                        $(this).click(function(){
                            $($ele).stop(true,true).animate({
                                top: -heights
                            },300,function(){
                                $($ele).css('top','0').append($($ele).find('li').eq(0))
                            })
                        })
                    }else if(ins == 1){
                        $(this).click(function(){
                            $($ele).css('top',' - 95px ').prepend($($ele).find('li').eq(s_length - 1))
                            $($ele).stop(true,true).animate({
                                top: 0
                            },300)
                        })
                    }
                })
            }
        }
    })
})(jQuery)





//(function($){
//这是用户先设置自己写好的类名，然后再合并选择
//$.fn.cjrslide = function(ops){
//    this.each(function(ins,ele){
//        slides(ele,ops)
//    })
//    return this
//}
//var slide =function(ele,ops){
////    设置默认的设置,即方向、相关作用的标签
//    var defs = {
//        preClass:'sld-pre',
//        nextClass:'sld-next',
//        direction:'left',
//        speed:1000,
//        moveClass:'sld-move',
//        listClass:'sld-lis'
//    }
////    合并默认的设置和用户的设置参数
//    var settings = $.extend(defs,ops)
////    插件过程
//    var dir = settings.direction
//
//    var $ele = $(ele),
//        $sldPre = $('.' + settings.preClass,$ele)
//        $sldNext = $('.' + settings.nextClass,$ele)
//        $sldMove = $('.' + settings.moveClass,$ele)
//        $sldList = $('.' + settings.listClass,$ele)
//        $sldList = $sldMove.children()
//    //设置初始化样式
//    if(dir == 'left'){
//        var $len = $li.width()
//        $sldMove.css('width',$len * $li.length)
//
//    }
//    if(dir == 'top'){
//        var $len = $li.height()
//        $sldMove.css('height',$len * $li.length)
//    }
//    //设置运动的对象
//    var data1 ={},data2 ={}
//    data1[dir] = -$len
//    data2[dir] = 0
//    function next(){
//        $sldMove.stop(true,true).animate(data1,settings.speed,function(){
//            $sldMove.css(data2).children().first().appendTo($sldMove)
//        })
//    }
//
//function pre(){
//    $sldMove.css(data1).children().last().prependTo($sldMove)
//    $sldMove.stop(true,true).animate(data2,settings.speed)
//}
//
//$sldPre.click(function(){
//    pre()
//})
//$sldNext.click(function(){
//    next()
//})
//
//
//
//}
//})(jQuery)
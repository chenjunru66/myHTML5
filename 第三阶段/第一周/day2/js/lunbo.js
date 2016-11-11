/**
 * Created by Administrator on 2016/9/27.
 */
(function($){
$.fn.cjrslide1 = function(optionss){
    console.log(this)
    this.each(function(j,eles){
        secsclick(eles)
    })

    return this

}

var secsclick = function(eles,optionss){
    var $eles = $(eles)
    var defes = $.extend({
        delay:3000,
        speed:200
    },optionss)
    var timers
    var h_length = $($eles).find('li').length
    var heights = $($eles).find('li').height()
    //console.log(heights)
    $($eles).find('ul').css('height',heights * h_length)

    function moveup(){
        $($eles).find('ul').stop(true,true).animate({
            top: -heights
        },defes.speed,function(){
            $($eles).find('ul').css('top','0').append($($eles).find('li').eq(0))
        })
    }

    function movedown(){
        //$($eles).find('ul').stop(true,true).animate({
        //    top: heights
        //},defes.speed,function(){
        //    $($eles).find('ul').prepend($($eles).find('li').eq(h_length - 1))
        //    $($eles).find('ul').css('top','0')
        //})
        $($eles).find('ul').css('top',' - 95px ').prepend($($eles).find('li').eq(h_length - 1))
        $($eles).find('ul').stop(true,true).animate({
            top: 0
        },defes.speed)
    }
    function plays(){
        timers = setInterval(moveup,defes.delay)
    }
    function stops(){
        clearInterval(timers)
    }
    $($eles).find('section').each(function(ins){
        if(ins == 0){
            $(this).click(function(){
                stops()
                moveup()
                plays()
            })
        }else if(ins == 1){
            $(this).click(function(){
                stops()
                movedown()
                plays()
            })
        }
    })
moveup()
    plays()


}


$.fn.cjrslide2 = function(options){
    console.log(this)
       this.each(function(i,ele){
           seclick(ele)
       })
    return this

}

var seclick = function(ele,options){
      var $ele = $(ele)
      var defs = $.extend({
          delay:3000,
          speed:200
      },options)
    var timer
    var s_length = $($ele).find('li').length
    //console.log(s_length)
    var len = $($ele).find('li').width()
    //console.log(len)
    $($ele).css('width',len * s_length)

    function movepre(){
        $($ele).find('ul').stop(true,true).animate({
            left: -len
        },defs.speed,function(){
            $($ele).find('ul').css('left','0').append($($ele).find('li').eq(0))
        })
    }
    function movenext(){
        //$($ele).find('ul').stop(true,true).animate({
        //    left: len
        //},defs.speed,function(){
        //    $($ele).find('ul').prepend($($ele).find('li').eq(s_length - 1))
        //    $($ele).find('ul').css('left','0px')
        //})
        $($ele).find('ul').css('left',' - 165px ').prepend($($ele).find('li').eq(s_length - 1))
        $($ele).find('ul').stop(true,true).animate({
            left: 0
        },defs.speed)

    }

    function play(){
        timer = setInterval(movepre,defs.delay)
    }
    function stop(){
        clearInterval(timer)
    }
    $($ele).find('section').each(function(ins){
        if(ins == 0){
            $(this).click(function(){
                stop()
                movepre()
                play()
            })
        }else if(ins == 1){
            $(this).click(function(){
                stop()
                movenext()
                play()
            })
        }
    })
movenext()
    play()
}
})(jQuery)
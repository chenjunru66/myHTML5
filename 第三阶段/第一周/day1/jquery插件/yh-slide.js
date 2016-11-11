/**
 * Created by Administrator on 2016/9/26.
 */

(function($){
    $.fn.yhslides = function(options){

        this.each(function(i,ele){
            yhslide(ele,options)
        })
        return this
    }
    var yhslide = function(ele,options){

        var defs = $.extend({
            delay:3000,
            speed:2000
        },options)
        var inters
        var $ele = $(ele)
        var lisCss = [
            {width:100,height:150,left:150,top:68,$zIndex:1,$opacity:0.4 },
            { width:150, height:170, left:0, top:75, $zIndex:2, $opacity:0.5 },
            { width:200, height:230, left:120, top:45, $zIndex:3, $opacity:0.6 },
            { width:240, height:320, left:290, top:0, $zIndex:4, $opacity:1 },
            { width:200, height:230, left:500, top:45, $zIndex:3, $opacity:0.6 },
            { width:150, height:170, left:670, top:75, $zIndex:2, $opacity:0.5 },
            { width:100, height:150, left:520, top:68, $zIndex:1, $opacity:0.4 }
        ]
        function move(){
            $($ele).find('li').each(function(ins){
                $(this).css('zIndex',lisCss[ins].$zIndex).stop(true,true).animate(lisCss[ins],defs.speed).find('img').css('opacity',lisCss[ins].$opacity)
            })
        }
        function next(){

            lisCss.unshift(lisCss.pop())
            move()
        }
        function prev(){

            lisCss.push(lisCss.shift())
            move()
        }
        function play(){
            inters = setInterval(next,defs.delay)
        }

        function stop(){
            clearInterval(inters)
        }
        //console.log($($ele).find('section'))
        $($ele).find('section').each(function(ins){
            if(ins == 0){
                $(this).click(function(){
                    stop()
                    prev()
                    play()
                })
            }else if(ins == 1){
                $(this).click(function(){
                    stop()
                    next()
                    play()
                })
            }
        })
        move()
        play()
    }

})(jQuery)

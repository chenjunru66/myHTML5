/**
 * Created by Administrator on 2016/9/28.
 */

//var tall = $('.pic').children().height()
//var len = $('.pic').children().length
////console.log(tall)
//var count = 0
//$('.pic').css('top','0')
//$('.count').children().first().addClass('current')
////console.log($('.count').children())
//$('.count').children().on('click',function(){
//    $(this).addClass("current").siblings().removeClass("current")
//    var index = $(this).index()
//    //console.log(index)
//    count = index
//    $('.pic').stop(true,true).animate({
//        top:-tall * count
//    },1000)
//})
//
//timer=setInterval(function(){
//    count++
//    if(count>( len - 1)){
//        count=0
//    }
//    $('.count').children().eq(count).trigger("click")
//},2000);



//面向过程插件写法
//(function($){
// $(function(){
//     $.fn.slide = function(options){
//         this.each(function(i,ele){
//             slide(ele,options)
//         })
//         return this
//     }
//
//     var slide = function(ele,options){
//         var defs = {
//             boxClass:'box',
//             countClass:'count',
//             picClass:'pic',
//             speed:2000,
//             delay:1000,
//             current:'current'
//         }
//         var settings = $.extend(defs,options)
//         var $ele = $(ele)
//         var tall = $ele.find('.' + settings.picClass).children().height()
//         var len = $ele.find('.' + settings.picClass).children().length
//         var count = 0
//         //console.log(settings.current)
//         $ele.find('.' + settings.picClass).css('top','0')
//         $ele.find('.' + settings.countClass).children().first().addClass( settings.current)
//         $ele.find('.' + settings.countClass).children().on('click',function(){
//             $(this).addClass(settings.current).siblings().removeClass(settings.current)
//             var index = $(this).index()
//             //console.log(index)
//             count = index
//             $ele.find('.' + settings.picClass).stop(true,true).animate({
//                 top:-tall * count
//             },settings.delay)
//         })
//
//         timer=setInterval(function(){
//             count++
//             if(count>( len - 1)){
//                 count=0
//             }
//             $ele.find('.' + settings.countClass).children().eq(count).trigger("click")
//         },settings.speed);
//     }
// })
//
//
//})(jQuery)



//面向对象写法写的插件
(function($){
    $(function(){
        var slide = function(ele,options){
            this.element = ele
            this.defs = {
                boxClass:'box1',
                countClass:'count1',
                picClass:'pic1',
                speed:20020,
                delay:10002,
                current:'current1'
            }
            this.settings = $.extend({},this.defs,options)
            this.counts = $('.' + this.settings.countClass,this.element)
            this.pics = $('.' + this.settings.picClass,this.element)
            this.boxs = $('.' + this.settings.boxClass,this.element)
            this.speeds = this.settings.speed
            this.delays = this.settings.delay
            this.current = this.settings.current
            this.tall = $(this.pics).children().height()
            this.len = $(this.pics).children().length

        }

        slide.prototype = {
            lunbo:function(){
                var count = 0
                var timer
                var zong = this
             $(zong.counts).children().first().addClass(zong.current)
             $(zong.pics).css('top','0')

                $(zong.counts).children().on('click',function(){
                    $(this).addClass(zong.current).siblings().removeClass(zong.current)
                    //console.log(this)
                    var index = $(this).index()
                    //console.log(index)
                    count = index
                    $(zong.pics).stop(true,true).animate({
                        top:-zong.tall * count
                    },zong.delay)
                })

                timer = setInterval(function(){
                    count++
                    if(count>( zong.len - 1)){
                        count=0
                    }
                    //console.log(count)
                    $(zong.counts).children().eq(count).trigger("click")
                },zong.speeds);



            }
        }
        $.fn.slides = function(options){
            var  mylunbo = new slide(this,options)
            mylunbo.lunbo()
            return this
        }


    })


})(jQuery)
















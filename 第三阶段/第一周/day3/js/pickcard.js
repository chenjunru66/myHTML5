/**
 * Created by Administrator on 2016/9/28.
 */

//面向过程插件写法
//$.fn.showhide = function(options){
//    this.each(function(ins,ele){
//        showhide(ele,options)
//    })
//    return this
//}
//var showhide = function(ele,options){
//    var defs = {
//         spanClass:'m1',
//         ulClass:'f2',
//         showClass:'current'
//    }
//    var settings = $.extend(defs,options)
//    var $ele = $(ele)
//    var $spans = $('.' + settings.spanClass,$ele)
//    var $shows = '.' + settings.showClass
//    var $uls = $('.' + settings.ulClass,$ele)
//    $($spans).hover(
//        function(){
//        $(this).addClass($shows).siblings().removeClass($shows)
//        $($uls).eq($(this).index()).show().siblings().hide()
//    })
//}
//

//    面向对象写法的插件
$.fn.showhides = function(options){
    var myhovers = new showhide(this,options)
    //console.log(myhovers)
    myhovers.hovers()
    //console.log(this)
    return this

}

var showhide = function(ele,options){
    this.element = ele
    this.defs = {
        spanClass:'m10',
        ulClass:'f20',
        showClass:'current0'
    }

    //console.log(this.defs)
    this.settings = $.extend(this.defs,options)
    //console.log(this.settings)
    this.spans = $('.' + this.settings.spanClass,this.element)
    this.shows =   this.settings.showClass
    this.uls = $('.' + this.settings.ulClass,this.element)
}
showhide.prototype = {
    hovers:function(){
        var a = this
        //console.log(a)
        this.spans.hover(function(){
              //console.log( $(this).parent() )
            //console.log(this)
            //console.log(a.shows)
            $(this).addClass(a.shows).siblings().removeClass(a.shows)
            $(a.uls).eq($(this).index()).show().siblings().hide()
        })
    }
}


//class Tab{
//    constructor(ids){
//        this.ids = ids
//        //console.log(this)
//    }
//    tabs(){
//       var $this = $('.' + 'this.ids'),
//           $spans = $this.children('.tab').find('spans'),
//           $lis = $this.children('.').find('.pic')
//     里面写的是方法
//
//    }
//}
//
//window.onload = function(){
//    new Tab('tabs').tabs()
//}

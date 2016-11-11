
$(function(){
    var slideShow=$(".box")
    var ul=slideShow.find(".lunbo")
    var showNumber=slideShow.find(".count li")
    var oneWidth=slideShow.find(".lunbo li").eq(0).width()
    var iNow=0

    showNumber.on("click",function(){
        $(this).addClass("current").siblings().removeClass("current")
        var index=$(this).index()
        iNow=index
        ul.animate({
            "left":-oneWidth*iNow
        })
    })

    timer=setInterval(function(){
        iNow++
        if(iNow>(showNumber.length - 1)){
            iNow=0
        }
        showNumber.eq(iNow).trigger("click")
    },2000);

    var oMg, oP
    $(".list li").hover(function(){
        oMg = $(this).find(".imgbox")
        oP = $(this).find("p")

        oMg.stop().animate({
            left:-350
        }, 500)
        oP.eq(0).stop().animate({
            top:30
        }, 500)
        oP.eq(1).stop().animate({
            top:0
        }, 500)
    }, function(){
        oMg.stop().animate({
            left:0
        }, 500)
        oP.eq(0).stop().animate({
            top:0
        }, 500)
        oP.eq(1).stop().animate({
            top:30
        }, 500)
    })
})

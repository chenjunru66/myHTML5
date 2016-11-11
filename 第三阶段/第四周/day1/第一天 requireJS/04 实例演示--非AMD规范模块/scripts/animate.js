/**
 * Created by Administrator on 2016/10/24.
 */
$(function(){
    $("#start").click(function(){
        $("div").animate({
            // width:"500px",
            // height:"300px",
            fontSize:"20px"
        }, 5000)
        $("div").animate({
            width:"500px"
        }, 5000)
        $("div").animate({
            height:"300px"
        }, 5000)

    })

    // 停止当前正在执行的动画,如果动画没有执行完，可以继续执行
    $("#top").click(function(){
        $("div").stop()
    })
    // 停止所有的动画,如果动画没有执行完，可以继续执行
    $("#topAll").click(function(){
        $("div").stop(true)
    })
    // 快速完成当前动画
    $("#end").click(function(){
        $("div").stop(true, true)
    })
    alert('animate.js开始加载了')
})
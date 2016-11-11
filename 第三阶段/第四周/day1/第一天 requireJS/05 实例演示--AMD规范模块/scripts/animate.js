/**
 * Created by Administrator on 2016/10/24.
 */
// 对jquery而言，当前面的依赖项modId == jquery时，传参变量可以为$，也可以为jquery
//  当前面的依赖项modId为具体的路径或者其他单词值时，传参变量只能用jquery
require.config({
    paths:{
        jquery:'../libs/jquery'
    }
})

define(['jquery'], function (jquery) {

//define(['../libs/jquery'], function (jquery) {
    console.log($)
    console.log(jquery)
    $(function () {
        $("#start").click(function () {
            $("div").animate({
                // width:"500px",
                // height:"300px",
                fontSize: "20px"
            }, 5000)
            $("div").animate({
                width: "500px"
            }, 5000)
            $("div").animate({
                height: "300px"
            }, 5000)

        })

        // 停止当前正在执行的动画,如果动画没有执行完，可以继续执行
        $("#top").click(function () {
            $("div").stop()
        })
        // 停止所有的动画,如果动画没有执行完，可以继续执行
        $("#topAll").click(function () {
            $("div").stop(true)
        })
        // 快速完成当前动画
        $("#end").click(function () {
            $("div").stop(true, true)
        })
        alert('animate.js开始加载了')
    })
})
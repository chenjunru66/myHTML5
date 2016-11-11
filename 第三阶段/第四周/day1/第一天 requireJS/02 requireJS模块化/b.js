// define 定义一个模块

//导出模块 ---- 方法二
//通过module.exports 导出
//通过引入一个module关键字(依赖项，requireJS内置的)，
// 传递参数（参数名可自定义）给当前的函数，
// 导出其他模块所需要的东西
// 数组中的依赖项与函数中的变量是一一对应的关系
define(['module'], function(mm){
    alert('b is running')
    function news(name){
        this.name = name
        alert(name + 'is singing')
    }
    var b = 150
    //show('yan')
    // 导出一个内容
    mm.exports =  news
//    导出多个内容
//    mm.exports = {
//        b,
//        news
//    }
})

// define 定义一个模块
// define(id, [], function)
// para1:  默认的ModuleId是文件名， id是可选值(不写)
// para2:  []  当前JS文件的依赖项，只有一个依赖项，也是个数组
// para3:  function: 依赖项加载完成之后的回调函数 === 当前JS的主要内容


//导出模块 ---- 方法一
//通过return 导出

define(['b'], function(bb){
    console.log(bb)
    alert('a is running')
    var a = 10
    var b = 'strings'
    function show(name){
        this.name = name
        alert(name + ' is running')
    }
    //导出一个内容
    //return a

//    导出多个内容
    return {
        a,
        b,
        show
    }
})

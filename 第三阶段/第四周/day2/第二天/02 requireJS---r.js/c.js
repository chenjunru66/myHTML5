// define 定义一个模块

//导出模块 ---- 方法三
//通过内置的exports关键字导出

define(['exports'], function(exports){
    alert('c is running')
    function show(name){
        this.name = name
        alert(name + 'running')
    }
    //show('yan')
    var c = 'c is now'
    exports.shows =  show
    exports.c = c
})

// 三种导出方法比较：
// return 和 module.exports，导出方法是一致的
// 当导出单个内容时，导出的是值
// 当导出多个内容时，导出的以对象形式展示

// exports导出内容时，无论是单个还是多个，都是对象形式展示


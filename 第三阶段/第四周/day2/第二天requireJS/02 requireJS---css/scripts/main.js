// 引入CSS文件
// css.js是require的插件之一，根据插件中的方法解析后面的css文件
// 默认css插件之后引入的文件为.css文件，后缀可不写

// css.js位置 + ! + .css文件所在位置
require(['../libs/css!../css/style', '../libs/css!../css/css'], function(){
    alert('加载CSS文件成功')
})
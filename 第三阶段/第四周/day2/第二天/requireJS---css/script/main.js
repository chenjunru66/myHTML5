// 找到css位置 + ! + .css文件所在的位置
// css.js是reqiure的插件之一，根据插件中解析其中的代码
require(['../libs/css!../css/style','../libs/css!../css/css '], function(jquery,as){
    alert('css.js 已经加载完成')
  
   
})
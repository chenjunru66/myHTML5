/**
 * Created by Administrator on 2016/10/24.
 */
//方法二： 加载AMD规范的代码，通过define（）定义模块
// 先建立依赖关系
// 导入其他的JS文件
// animate.js依赖于Jquery

require(['animate'], function($){
    alert('animate.js 已经加载完成')
})
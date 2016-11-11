/**
 * Created by Administrator on 2016/10/24.
 */
//方法一： 加载非AMD规范的代码，通过shim设置其特性
// 先建立依赖关系
// 导入其他的JS文件
// animate.js依赖于Jquery
require.config({
    baseUrl:'libs',
    paths:{
        jquery:'jquery',
        animate:'../scripts/animate'
    },
    shim:{
        animate:['jquery']
    }
})
require(['jquery', 'animate'], function($){
    alert('animate.js 已经加载完成')
})
require.config({
    baseUrl:'libs',
    paths:{
        jquery:'jquery',
        less:'less',
        jisun:'../script/jisun'
    },
    shim:{
        jisun:['jquery']
    }
})
require(['jquery','less','jisun','../libs/css!../css/index'],function () {
    
alert('内容已经开始加载')
})
require.config({
    baseUrl:'libs',
    paths:{
        jquery:'jquery',
        index:'../script/index'
        
    },
    shim:{
        index:['jquery']
    }
})
require(['jquery','index','../libs/css!../css/slide-style'],function () {
    alert('main开始加载')
})
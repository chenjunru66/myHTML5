
//require([], function)

// para1:依赖模块的id（名称），当前是个数组形式，即便只有一个依赖项，也是数组
// para2: 依赖项加载完成之后的回调函数  ==== 当前JS文件的主函数内容
//  其参数与依赖项的id是一一对应的，

//目的
// 点击按钮可实现全屏显示

// 配置 require.config()

require.config({
    //路径  ---- 键值对  ==== moduleID : 相对路径(相对于main)
    //baseUrl:在未设置config及data-main的情况下，默认的路径是data-main所在的路径
    //baseUrl:'libs',
    //paths:{
    //    jquery:'jquery',
    //    fullscreen:'jquery.fullscreen',
    //    d:'d'
    //},
    paths:{
        jquery:'../libs/jquery',
        fullscreen:'../libs/jquery.fullscreen',
        d:'../libs/d'
    },
    // 加载非AMD规范的代码模块时，需要设定其依赖项以及特征
    // shim属性配置这类模块
    // shim是处理非AMD规范的JS文件，键值对为两种表现形式：
    // 其1:  modelId：[](只写依赖项，
    //  这种情况仅限于该JS模块作为插件存在而不需要导出任何变量)
    // 其2: modleId:｛
    //    deps:[],   //  dependence  该模块的依赖项
    //    exporst:   // 导出的内容的值  ==  变量名/函数名(导出其他模块所需要的东西)
    //  ｝
    shim:{
        fullscreen:['jquery'],
        d:{
            deps:[],
            exports:'ds'
        }
    }
})


require(['jquery', 'fullscreen', 'd'], function($,$$, dd){
    alert('main is runing')
    console.log(this)   // this === window对象
    console.log(dd)    // function d()
    dd('123', '4567')
    // 输出jquery所包含的方法及版本信息
    //console.log($.fn)
    $('button').click(function(){
        $(document).fullScreen(true)
    })
})


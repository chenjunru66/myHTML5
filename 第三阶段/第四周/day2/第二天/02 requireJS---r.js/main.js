
//require([], function)

// para1:依赖模块的id（名称），当前是个数组形式，即便只有一个依赖项，也是数组
// para2: 依赖项加载完成之后的回调函数  ==== 当前JS文件的主函数内容
//  其参数与依赖项的id是一一对应的，



//引入所需要的模块
//比较谷歌与火狐，通过不间断刷新浏览器，观察到导入模块加载的顺序是随机的
require(['a', 'c'], function(as, cc){
    alert('main is runing')
    console.log(as)
    //console.log( as.a )
    //aa.show('yan')
    console.log(cc)
})


//nodejs中，以数据库为例，导出的模块 ==== 导出的是其他模块所需要的东西
//  module.exports = shopModel
// 引入模块的写法
// var shops = require('./db/shop')
// 根据当前的变量，写数据的增删改查
// shops.find().exce()
/**
 * Created by Administrator on 2016/10/26.
 */

console.log($.cookie())

//设置cookie  $.cookie(key, value)
// 存储时间: 如果没有设置时间， 默认直到当前浏览器窗口关闭，
// cookie会消失  === 被称为：会话(session)cookie
$('#set').click(function(){
    $.cookie('username', 'lucy')
    $.cookie('age', 20)
    $.cookie('class', 'H5-8期')

    //当key存在的时候，value覆盖原值
    $.cookie('username', 'lily')

    // 同时存储多个cookie === 存储对象
    var obj = {
        sex:'male', tall:190, weight:80
    }
    // 存储的内容以JS对象的方式存储，需要转化成序列对(JSON数据/字符串)存储大小为4k左右
    // 通过JSON.stringify()解析数据
    obj = JSON.stringify(obj)
    $.cookie('many', obj)

    //持久化cookie  $.cookie(key, value, {expires:天数})
    // 设置cookie有效期： {expires:天数}, 默认时间单位为 天
    //  天数也可以设置为 Date
    $.cookie('期限', '1天', {expires:1})
    $.cookie('时间', '半年多', {expires: new Date(2017,3,3)} )

    //设置cookie的路径
 //默认情况下，只有当前页面或者(同一文件夹下的页面)可以读取到cookie
 // 其路径保存在当前的文档路径
 // 路径可修改，  可改为顶级路径(正常情况下不使用的，避免cookie冲突)
    $.cookie('路径', '顶级', {expires:1, path:'/'})

    console.log($.cookie() )
})


// 读取cookie
// $.cookie(key) / $.cookie().key
$('#get').click(function(){
    console.log($.cookie('username'))
    console.log($.cookie().username )
//    读复杂的cookie  ---- 对象(JSON数据)
    var obj = $.cookie('many')
    // 解析  JSON数据----JS对象
    obj = JSON.parse(obj)
    console.log(obj)

})

// 清空cookie  值转化null
$('#clear').click(function(){
    $.cookie('username', null)
    console.log($.cookie() )
})

// 删除cookie
$('#remove').click(function(){
    $.removeCookie('username')
    console.log($.cookie())

})
console.dir($.cookie())
console.info($.cookie())
// 断言  ---- 条件(判断), 当条件为假时，输出第二个参数内容
console.assert($.cookie('age'), '当前names不存在')

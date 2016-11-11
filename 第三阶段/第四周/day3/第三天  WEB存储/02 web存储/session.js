/**
 * Created by Administrator on 2016/10/26.
 */
//console.log(this)  // this  === window
//console.log( Storage )
//web存储也分为两种：  ---- window的属性
// 1. 会话存储   === sessionStorage    ---- 临时性，当 窗口关闭就消失
// 2. 本地存储   === localStorage  ---- 除非删除或清空，否则会一直存在
/*
设置  ： setItem(key, value)
读取  ： getItem(key)
清空  :  clear()   ---- 清空所有的存储数据
删除 ： removeItem(key)  --- 删除某个存储数据
索引 ： key(index)  ----- 根据索引值获取某个数据的键名(即Key值)
 */




// 判断浏览器是否支持Web存储
if( typeof Storage !== 'undefined' ){
    console.log( true )
} else {
    console.log( false )
}

console.log( sessionStorage )
//  length:会话存储的个数

// 设置 setItem(key, value)
$('#set').click(function(){
    sessionStorage.setItem('name', 'lucy' )
    sessionStorage.setItem('age', 18)
    sessionStorage.setItem('sex', 'male')

    // 当key存在时，value会覆盖原值
    sessionStorage.setItem('sex', false)

    //一次性存储多个键值对
    var obj = {
        tall:180, weight:60, class:'h5-8期'
    }
    // 把JS对象转化成JSON数据(字符串)
    obj = JSON.stringify(obj)
    sessionStorage.setItem('object', obj)
    console.log( sessionStorage )
})

// 获取存储数据  getItem(key)
$('#get').click(function(){
    //console.log( sessionStorage.getItem('age') )
    // 当前会话存储的数据的个数
    //console.log(sessionStorage.length)

//    获取存储为对象形式的多个数据
//    var obj = sessionStorage.getItem('object')
//    obj = JSON.parse(obj)
//    console.log(obj)

//    如何获取所有的存储数据   ---- 一一列出
//    key(index)  根据索引值找到某个键名
//    var mm = sessionStorage.key(1)
//    console.log( mm )

    for( var i = 0; i < sessionStorage.length; i++ ){
        // 一一获取所有的键名
        var keys = sessionStorage.key(i)
        //console.log(keys)
        var values = sessionStorage.getItem(keys)
        //console.log(values)
        //判断值的第一个字符是否是 {
        if( values.substr(0, 2) == '{"'  ){
            values = JSON.parse(values)
            //console.log(values)

            for ( var j in values ){
                //console.log(values[j])
                console.log( j + ':' + values[j] )
            }

        } else {
            console.log( keys + ':' + values )
        }

    }

})

// 清空  clear()  清空所有的存储数据
$('#clear').click(function(){
    sessionStorage.clear()
    console.log( sessionStorage )
})

//删除 removeItem(key) 删除某个存储数据
$('#remove').click(function(){
    sessionStorage.removeItem('name')
    console.log( sessionStorage )
})



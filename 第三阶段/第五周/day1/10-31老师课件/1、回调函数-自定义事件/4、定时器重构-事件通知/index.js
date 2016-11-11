$('button').click(function(){
    var value = $('input').val()
    value = parseInt(value)
    // 创建倒计时对象
    var down = new CountDown(value)
    // 事件监听
    // (一个事件可以添加多个监听)
    // para1：事件名称
    // para2：回调函数
    // 类似 $('button').on('click',function(){})
    $(down).on('com.zhiyou100.change',change1)
    $(down).on('com.zhiyou100.change',change2)
     $(down).on('com.zhiyou100.complete',complete)
    // 调用start方法
    down.start()
})

// 该页面随着计时器时间变化想要做的操作
// para1:事件对象
// para2：触发事件时，传递的数据
function change1 (event,value){
    console.log(event)
    console.log(value)
    console.log('监听到com.zhiyou100.change事件了')
    $('div').text(value)
    $('progress').val(value/parseInt($('input').val()))
}
function change2(value){
    console.log('时间改变了')
}

function change (value){
    change1(value)
    change2(value)
}

function complete(){
    alert('计时结束了')
}



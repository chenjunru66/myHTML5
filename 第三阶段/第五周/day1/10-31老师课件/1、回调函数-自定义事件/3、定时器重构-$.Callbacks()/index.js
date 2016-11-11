$('button').click(function(){
    var value = $('input').val()
    value = parseInt(value)
    // 创建倒计时对象
    var down = new CountDown(value)

    //添加回调函数
    down.change.add(change1)
    down.change.add(change2)
    down.complete.add(complete)


    //调用start方法
    down.start()
})

// 该页面随着计时器时间变化想要做的操作
function change1 (value){
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

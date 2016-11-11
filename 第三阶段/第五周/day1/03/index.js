$('button').click(function(){
    var value = $('input').val()
    var value = parseInt(value)

    //创建倒计时对象
    var down = new CountDown(value)
    //事件的监听，para1：事件名称，para2：回调函数，类似于$('button').on('click',function(){})
    $(down).on('change',change1)
    //console.log(down)
    //down.change.add(change)
    //down.complate.add(complate)
    //调用start方法
    down.start()

})

//    该页面随着计时器时间变化想要做的操作
function change1(ev,value){
    console.log(ev)
    console.log(value)
    console.log('change')
    $('div').text(value)
    $('progress').val(value/parseInt($('input').val()))
}

function complate(){
    alert('倒计时结束了')
}

    $('button').click(function(){
        var value = $('input').val()
        var num = parseInt(value)

        //创建倒计时对象
       var down = new CountDown(value,change,complate)
        console.log(down)
        //调用start方法
        down.start()



       // var total = num
       // var timer
       //function show(){
       //    num--
       //    if(num < 0){
       //        //return
       //        alert('倒计时结束')
       //        clearInterval(timer)
       //    }
       //    $('div').text(num)
       //    $('title').text(num)
       //    $('progress').val(num/total)
       //}
       // timer= setInterval(show,1000)
    })

//    该页面随着计时器时间变化想要做的操作
function change(value){
    $('div').text(value)
    $('progress').val(value/parseInt($('input').val()))
}

   function complate(){
      alert('倒计时结束了')
   }
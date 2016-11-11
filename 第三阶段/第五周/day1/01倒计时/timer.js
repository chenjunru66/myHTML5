
$('button').click(function(){
    var value = $('input').val()
    var num = parseInt(value)
    var total = num
    var originHeight = $('div').height()
    var timer
    

    function show(){
        num--
        if(num <= 0){
            //return
            alert('倒计时结束')
            clearInterval(timer)
        }
        $('div').text(num)
        $('div').css({'height':originHeight*num/total})
        $('title').text(num)

    }
    timer= setInterval(show,1000)
})

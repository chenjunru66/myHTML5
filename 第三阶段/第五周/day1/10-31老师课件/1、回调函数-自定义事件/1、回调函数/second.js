$('button').click(function(){
    var value = $('input').val()
    value = parseInt(value)
    var total = value
    var originHeight = $('div').height()
    
    var timer =  setInterval(function(){
        value--
        $('div').css({"height":originHeight*value/total})
        console.log(value)
        if(value<=0){
            alert('第二个页面计时结束了')
            clearInterval(timer)
        }
    },1000)
})
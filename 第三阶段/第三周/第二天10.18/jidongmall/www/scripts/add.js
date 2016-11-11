$(function(){
    $('form').submit(function(ev){
        ev.preventDefault()
        //var data = $(this).serialize()
        var data = new FormData(this)
        $.post({
            url:"/user/add",
            data:data,
            contentType:false,  //默认的格式是 application/x-www-form-urlencoded
            processData:false, // 默认发送到服务器的数据，会发生数据转换，防止自动转换数据格式
            success:function(res){
                //console.log('2222')
                if(res.code = 'success'){
                    alert(res.message)
                    location.href = '/'
                }
            }

        })
    })
})

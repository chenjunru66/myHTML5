/**
 * Created by Administrator on 2016/10/8.
 */

$('form').submit(function(ev){
    ev.preventDefault()
    var datas = $(this).serialize()
    console.log(datas)
    $.post('/user/login', datas, function(res){
        //console.log(res)
        if( res.code == 'success' ){
            location.href = '/'
        } else {
            alert(res.message)
        }
    })
})


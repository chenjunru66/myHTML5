/**
 * Created by Administrator on 2016/10/8.
 */
$('form').submit(function(ev){
    ev.preventDefault()
//    判断两次密码是否一致
    var pass = $(':password').map(function(){
        return $(this).val()
    })

    if( pass[0] == pass[1] ){
        console.log('两次的密码已保持一致，可以提交')
        var datas = $(this).serialize()
        $.post('/user/register', datas, function(res){
            //console.log(res)
            if( res.code == 'success' ){
                alert(res.message)
                location.href = '/login.html'
            }
        })
    } else {
        alert('两次密码不一致，请重新输入')
    }

})




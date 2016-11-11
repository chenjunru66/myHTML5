$('form').submit(function(ev){
    ev.preventDefault()
    var data = $(this).serialize()
    var pass = $(':password').map(function(){
        return $(this).val()
    })
    //console.log(pass)
    if(pass[0] == pass[1]){
        $.post('/user/register',data,function(res){
          if(res.code == 'success'){
              alert(res.message)
              location.href = 'login.html'
          }else {
              alert(res.message)
          }


        })
    }else{
        alert('两次密码输入错误，请重新输入')
    }

})
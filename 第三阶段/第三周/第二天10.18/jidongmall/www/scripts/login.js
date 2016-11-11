$('form').submit(function(ev){
    ev.preventDefault()
    var data = $(this).serialize()
    $.post('/user/login',data,function(res){
          if(res.code == 'success'){
              //console.log(res.message)
              alert(res.message)
              location.href = '/'
          }else{
              alert(res.message)
              //console.log(res.message)
          }
        //console.log(res)
    })
})
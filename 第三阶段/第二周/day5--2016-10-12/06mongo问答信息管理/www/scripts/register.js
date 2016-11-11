$('form').submit(function(ev){
    ev.preventDefault()
    var data = $(this).serialize()
    var pass = $(':password').map(function(){
        return $(this).val()
    })

   if(pass[0] == pass[1]){
       $.post('/user/register',data,function(res){
           //console.log(res)
           if(res.code == 'success'){
               $('.modal-body').text(res.message)
               $('.modal').modal('show').on('hidden.bs.modal', function(){
                   if( res.code == 'success' ){
                       location.href = 'login.html'
                   }
               })
           }
           else if( res.code == 'registered'){

               $('.modal-body').text(res.message)
               $('.modal').modal('show').on('hidden.bs.modal', function(){
                   if( res.code == 'registered' ){
                      location.reload()
                   }
               })
           }
       })
   }else{
       $('.modal-body').text('两次输入的密码不一样！')
       $('.modal').modal('show')
   }


})

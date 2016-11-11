$('form').submit(function(ev){
    ev.preventDefault()
    var data = $(this).serialize()
    $.post('/login',data,function(res){
        console.log(res)
        if(res.code == 'success'){
            location.href = '/'
        }else{
            location.href = 'login.html'
        }
    })

})
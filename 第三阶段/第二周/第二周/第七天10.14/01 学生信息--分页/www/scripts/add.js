$('form').submit(function(ev){
    ev.preventDefault()
    $.post('/add',
        $('form').serialize(),
        function(res){
            console.log(res)
            if(res.result == 1){
                location.href = '/'
            }
        })
})
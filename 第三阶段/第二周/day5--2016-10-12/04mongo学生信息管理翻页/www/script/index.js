     $('.shan').click(function(){
        var r = confirm('确定删除')

        if(r == true){
            var uid = $(this).attr('uid')
            //console.log(uid)
            $.get('/user/' + uid,function(res){
           //console.log(res.message)
                if(res.code =='success'){
                    alert('删除成功')
                    location.reload()
                }else{
                    return
                }

            })
        }

})
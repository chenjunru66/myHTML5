$('.remove').click(function(){
    var result = confirm('确定删除该数据吗？')
    var id = $(this).attr('data-id')
    if(result){
        //删除的时候，删除当前行的数据  --- 根据指定的id删除数据
        $.get('/remove/' + id, null, function(res){
            if(res.result == 1){
                alert('删除成功')
                location.reload()
            } else {
                location.reload()
            }
        })
    } else {
        //location.reload()
    }
})





$('.glyphicon-trash').click(function(){
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

$('form').submit(function(ev){
    ev.preventDefault()
    var data = $(this).serialize()
    $.post('/find',data,function(res){
       //console.log(res)
        var mess = res
        var divs = ''
        for(var i=0;i<mess.length;i++){
            divs += "<div class = 'container  table-responsive' >"
            divs += "<table class='table table-bordered table-hover'>"
            divs += "<tr class='active'>"

            divs += "<th>学号</th>"
            divs += "<th>姓名</th>"
            divs += "<th>性别</th>"
            divs += "<th>联系电话</th>"
            divs += "<th>邮箱</th>"
            divs += "<th>家庭地址</th>"
            divs += "</tr>"
            divs += "<td>" + mess[i].name +"</td>"
            divs += "<td>" + mess[i].num +"</td>"
            divs += "<td>" + mess[i].sex +"</td>"
            divs += "<td>" + mess[i].phone +"</td>"
            divs += "<td>" + mess[i].email +"</td>"
            divs += "<td>" + mess[i].address +"</td>"
            divs += "</table >"
            divs += "</div>"
        }
        $('.xian').html(divs)


    })

})
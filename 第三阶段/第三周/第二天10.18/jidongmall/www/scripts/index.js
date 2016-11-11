var uname = $.cookie('uname')
var ids = $.cookie('ids')
//console.log(uname)
//console.log(ids)
if(uname){
    if( ids == 'buyer' ){
        $('.login').find('span').text('普通用户:'+uname)
        $('.fa-user .zi').text('退出')
        $('.guanli').css('display','none')
        $('.fa-shopping-cart').click(function(){
            location.href = 'cart.html'
        })
    }else if(ids == 'manager'){
        $('.login').find('span').text('管理员:'+uname)
        $('.fa-user .zi').text('退出')
        $('.yonghu').css('display','none')
    }
}
else {
    $('.guanli').css('display','none')
    $('.yonghu').css('display','none')
    $('.login').find('span').click(function(){
        location.href = 'login.html'
    })
    $('.fa-shopping-cart').click(function(){
        location.href = 'login.html'
    })
}
//管理员退出
$('.fa-user .zi').click(function(){

    $.get('/user/signout', null, function(res){
        //console.log(res)
        if( res == 'success' ){
            location.href = '/'
        }
    })
})
//管理员删除
$('.delete').click(function(){
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
//普通用户提交到购物车信息
$('form').submit(function(ev){
    ev.preventDefault()
    var sels = $('.select')

    for(var i = 0,counts = 0;i<sels.length;i++) {
        if (sels[i].checked == true) {
            counts++
        }

    }
    //console.log(counts)
    if(counts == 0){
        alert('请选定后再提交')
    }else{
        var data = $(this).serialize()
        $.post('/user/indexcart',data,function(res){
            //console.log(res)
            if(res.code == 'success'){
                location.reload()
            }

        })
    }

})

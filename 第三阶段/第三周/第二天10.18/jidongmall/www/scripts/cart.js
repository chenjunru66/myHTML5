
var uname = $.cookie('uname')
var ids = $.cookie('ids')
//console.log(uname)
//判断当前用户身份和名称
if(uname){
    if( ids == 'buyer' ){
        $('.user').text('普通用户:'+uname)
        $('.fa-user .zi').text('退出')
        $('.fa-shopping-cart').click(function(){
            location.href = 'cart.html'
        })
    }else if(ids == 'manager'){
        $('.user').text('管理员:'+uname)
        $('.fa-user .zi').text('退出')

    }
}
else {
    $('.login').find('span').click(function(){
        location.href = 'login.html'
    })
    $('.fa-shopping-cart').click(function(){
        location.href = 'login.html'
    })
}
//退出
$('.fa-user .zi').click(function(){

    $.get('/user/signout', null, function(res){
        //console.log(res)
        if( res == 'success' ){
            location.href = '/'
        }
    })
})
//删除购物车内的商品
$('.delete').click(function(){
    var r = confirm('确定删除')

    if(r == true){
        var pid = $(this).attr('pid')
        //console.log(pid)
        $.get('/buyer/' + pid,function(res){
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
//购物车内为空的处理
var thing= $('.thing')
//console.log(thing.length)
if(thing.length == 0){
    $('.none').html(
        "<p>目前购物车内没有任何商品</p> <button>去购物</button>"
    )
      $('.none button').click(function(){
          location.href='/'
      })
}else{
    $('.none').css('display','none')
}
//购买
$('.buy').click(function(){
    var sels = $('.select')
    var counts = 0
    var s =  0.0;
    //console.log($(":checked").siblings().find($('span')))
    //var len = $(":checked")
    for(var i = 0,count = 0;i<sels.length;i++){
        if(sels[i].checked == true){
            counts++
            $(":checked").siblings().find($('span')).each(function () {
                var id  = $(this).text();
                //console.log(id)
                s += parseInt(id);
                //console.log(s)
            })
        }
    }
    var  totalPrice = (s/counts).toFixed(2)

    if(counts == 0){
        $('.none').html(
            "<p>目前购物车内没有任何商品</p>"
        )
    }
    else{
        $('.count').text('购买数量为:'+ counts +'件' )
        $('.zongjia').text('合计为￥' +totalPrice+'元')
    }
})


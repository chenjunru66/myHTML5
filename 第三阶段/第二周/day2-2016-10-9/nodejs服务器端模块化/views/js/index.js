/**
 * Created by Administrator on 2016/10/8.
 */
//console.log($.cookie())
//console.log($.cookie('uname'))

var uname = $.cookie('uname')

if(uname){
    $('header').empty()
    $('header').html(
        '<h2> ' + uname + '</h2>' + '<span>退出</span>'
    )
    $('span').click(function(){
        $.get('/signout',null,function(res){
            //location.href = '/'
            if(res.code = 'success'){
                location.href = 'index.html'
            }
        })
    })
}


$('#btn').click(function(){
    if(uname){
        location.href = 'message.html'
    }else{
        location.href = 'login.html'
    }
})




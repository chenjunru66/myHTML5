/**
 * Created by Administrator on 2016/9/20.
 */
//$('#user').click(function(){
//    location.href = 'login.html'
//})
console.log($.cookie() )
var petname = $.cookie('petname')
if( petname ){
    $('#user').find('span').last().text(petname)
} else {
    $('#user').removeAttr('data-toggle').find('span').last().click(function(){
        location.href = 'login.html'
    })
}
$('.dropdown-menu li').last().click(function(){

    $.get('/user/signout', null, function(res){
        //console.log(res)
        if( res == 'success' ){
            location.href = '/'
        }
    })
})
//如果存在登录用户名，可跳转到提问页面，否则，跳转到登录页面
$('#ask').click(function(){
    if( petname ){
        location.href = 'ask.html'
    } else {
        location.href = 'login.html'
    }
})
//显示提问的问题
$('.mask').click(function(){
    if(petname){
        $.cookie('questions', $(this).attr('questions'))
        location.href = 'answer.html'
    } else {
        location.href = 'login.html'
    }
})


function formatDateTime(t){
    var M = t.getMonth() + 1,
        d = t.getDate(),
        h = t.getHours(),
        m = t.getMinutes()

    M = M < 10 ? '0' + M : M
    d = d < 10 ? '0' + d : d
    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m

    return t.getFullYear() + '-' + M + '-' + d + ' ' + h + ':' + m
}



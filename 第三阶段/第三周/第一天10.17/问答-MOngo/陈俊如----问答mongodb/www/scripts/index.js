

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
//$.get('/questions', null, function(res){
    //console.log(res)

    $('.ask').click(function(){
        //console.log('111')

      //var id =  $.cookie('questions',$(this).attr('questions'))
        //console.log( $.cookie('questions',$(this).attr('questions')))
        if(petname){
            var id = $(this).attr("questions")
            $.cookie('ids',id)
            location.href = '/answers/' + id
            //$.cookie('questions',$(this).attr('questions'))
            //console.log( $.cookie('questions',$(this).attr('questions')))
        }
        else{
            location.href = 'login.html'
        }
        //location.href = 'answer.html'


    })




//})
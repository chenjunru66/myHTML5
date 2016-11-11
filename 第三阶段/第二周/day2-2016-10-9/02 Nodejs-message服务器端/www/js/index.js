/**
 * Created by Administrator on 2016/10/8.
 */
console.log($.cookie() )
console.log($.cookie('uname') )
var uname = $.cookie('uname')
if(uname){
    $('header').empty()
    $('header').html(
        '<h2>' + uname + '</h2> <br/>' + '<span> 退出 </span>'
    )
    $('span').click(function(){
        $.get('/signout', null, function(res){
            if( res.code == 'success' ){
                location.href = '/'
            }
        })
    })

}


$('#btn').click(function(){
    if(uname){
        location.href = 'message.html'
    } else {
        location.href = 'login.html'
    }
})

//$.get('/saveMessage', null, function(res){
//    console.log(res)
//    console.log( typeof res )
//    var arrs = '[' +  res.substr(0, res.length - 1) + ']'
//    console.log(arrs)
//    var datas = JSON.parse(arrs)
//    console.log(datas)
//    var message = {
//        title:'留言板的具体信息',
//        datas:datas
//    }
//
//    var html = template('template', message)
//    $('article').html(html)
//
//})






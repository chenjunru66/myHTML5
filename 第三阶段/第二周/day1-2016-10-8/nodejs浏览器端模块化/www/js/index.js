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
                location.href = '/'
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

$.get('/saveMessage',null,function(res){
    //console.log(res)
    var arrs  = '[' + res.substr(0,res.length - 1) +']'
    console.log(arrs)
    var datas = JSON.parse(arrs)
    console.log(datas)
    var mess = {
        title:'留言板的具体信息',
        data:datas
    }
    var html = template('template',mess)
    $('article').html(html)
})


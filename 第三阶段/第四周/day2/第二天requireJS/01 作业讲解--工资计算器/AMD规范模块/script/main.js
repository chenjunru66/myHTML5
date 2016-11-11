//正常情况下，方法或者过程是写在依赖项中，执行/计算结果在主程序入口写
require(['../libs/jquery', 'calc'], function(jquery, as){
    alert('工资已计算，可输入内容显示计算结果')
//    当前方法中计算结果
    console.log(as)
    $('button').click(function(){
        console.log('111')
        var jishu = $('#jishu').val(),
            jixiao = $('#jixiao').val(),
            jiangjin = $('#jiangjin').val()

        var data = as(jishu,jixiao,jiangjin)
        //显示计算结果
        console.log(data)
        //$('#zonge').html(data.zonge)

        $('section').css('display', 'block')
    })
})
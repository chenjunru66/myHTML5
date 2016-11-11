//定义一个集合类
define([
    'backbone','../models/task'
],function(B,Task){
    return B.Collection.extend({
        model:Task,
        //将数据发送到某个地方的url路径
        url:function(){
            //把日期作为url的一部分发送到服务端，获得url要写成方法的返回值
            var date = this.shareData.date
            return '/tasks/'+ (date.getFullYear()*10000+(date.getMonth()+1)*100+date.getDate())
        },
        //数据解析
        parse:function(data){
            return data.data
        }
    })
})
define([
    'backbone','../models/remind'
],function(B,Remind){
    //定义集合类
    return B.Collection.extend({
        model:Remind,
        //设置路径
        url:'/reminds',
        //解析，每次调用从服务端获取数据的时候，会自动调用parse方法，parse方法返回值可以是可以添加到集合的模型属性数组
        parse:function(data){
            console.log(data)
            return data.data
        }
    })

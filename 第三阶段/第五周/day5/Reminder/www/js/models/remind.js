//定义模型类
define([
    'backbone'
],function(B){
// ---模型类
    return B.Model.extend({
        //设置模型在服务器的路径
        urlRoot:'/remind',
        defaults:{
            title:'',
            content:'',
            date:null
        },
        //作用：数据校验
        validate:function(attrs,options){
            console.log('进行数据校验')
            if(!attrs.title || attrs.title==''){
                // 校验失败，返回错误信息
                return {attr:'title',message:'备忘标题不能为空'}
            }
            if(!attrs.content || attrs.content.length<10){
                return {attr:'content',message:'备忘详情不能少于10个字'}
            }
        },
        // 把数组数据填充到模型中
        setDataToModel:function(data){
            // 把数组转化为key-value构成的对象
            data = data.reduce(function(memo,value,index,arr){
                memo[value.name] = value.value
                return memo
            },{})
            console.log(data)
            // 补充日期
            data.date = new Date()
            //把数据保存在模型中
            this.set(data)
        }
    })

})

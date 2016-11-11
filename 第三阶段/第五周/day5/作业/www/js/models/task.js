//定义任务模型
define([
    'backbone'
],function(B){
    return B.Model.extend({
        defaults:{
            //任务内容
            content:'',
           // 任务时间
            time:'',
        //    任务是否完成
            complete:false,
        //    任务的次序
            index:0,
            //backboen会根据id是否存在，决定是更新数据还是保存新数据
            //0 和null：0表示id的值为0，null表示id没有值
            id:null
        }
    })
})
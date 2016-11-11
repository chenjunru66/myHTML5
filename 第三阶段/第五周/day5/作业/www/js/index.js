require.config({
    paths:{
        'jquery':'libs/jquery',
        'jquery-ui':'libs/jquery-ui',
        'underscore':'libs/underscore',
        'template':'libs/template',
        'backbone':'libs/backbone'
    },
    shim:{
        'jquery-ui':['jquery'],
        'backbone':['underscore','jquery']
    }
})
//导入视图类
require(['views/header','views/footer','collections/taskset','views/list','underscore','backbone'],function(Header,Footer,Taskset,List,_,B){
    //采用sharedata用来去保存header、footer公用的数据，在header和changeDate是，需要去修改shareData,继承自B.events，就具有了触发事件的能力
    var shareData =_.extend({date:new Date()}, B.Events)
   var header= new Header()
    var taskset = new Taskset()
    //把集合与视图关联
   var footer = new Footer({model:taskset})


    header.shareData = shareData
    footer.shareData = shareData
    taskset.shareData = shareData
    //位置放在shareData下面
    var list = new List({model:taskset})

//    监听到changeDate事件，监听到后渲染页面
    list.listenTo(shareData,'changeDate',list.render)
})
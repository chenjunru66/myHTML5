//reqiure配置
require.config({
    paths:{
        'jquery':'libs/jquery',
        'underscore':'libs/underscore',
        'backbone':'libs/backbone',
        'localstorage':'libs/backbone.localStorage'
    },
    //依赖关系设置,数组里面的依赖项没有顺序
    shim:{
        'backbone':['underscore','jquery'],
        'localstorage':['backbone']
    }
})

require(['models/remind','views/add'],function(Remind,Add){
// 新建视图对象，关联数据模型
    new Add({model:new Remind()})
})






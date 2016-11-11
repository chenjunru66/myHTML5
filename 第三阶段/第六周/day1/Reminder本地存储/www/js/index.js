require.config({
    paths:{
        'jquery':'libs/jquery',
        'underscore':'libs/underscore',
        'backbone':'libs/backbone',
        'template':'libs/template',
        'localstorage': 'libs/backbone.localStorage'
    },
    //依赖关系设置,数组里面的依赖项没有顺序
    shim:{
        'backbone':['underscore','jquery'],
        'localstorage':['backbone']
    }
})

require(['views/index','collections/reminds'],function(Index,Reminds){
  var reminds =  new Reminds()
  //  fetch:从服务端获取数据
  //  注意在集合中设置url路径

  //  fetch内部会向服务端发起请求获取所有的数据，返回的是一个deferred对象,内部会调用parse方法，处理数据然后把数据保存到集合中


// 新建视图对象，关联数据模型
    new Index({model:reminds})
})
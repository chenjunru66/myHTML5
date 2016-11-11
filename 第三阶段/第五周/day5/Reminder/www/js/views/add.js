//定义视图类
define(['backbone'],function(B){
    // --视图类
    return B.View.extend({
        el:'body',
        events:{
            'submit form':'submit'
        },
        // 初始化方法
        initialize:function(){
            // 监听模型的invalid事件
            this.listenTo(this.model,'invalid',this.warning)
            //   监听事件，处理服务端回馈的响应
            //    this.listenTo(this.model,'sync',this.success)
            //    this.listenTo(this.model,'error',this.error)
        },
        //success:function(){
        //    console.log(arguments)
        //},
        //error:function(){
        //    console.log(arguments)
        //},
        warning:function(model,error,options){
            console.log('warning')
            //提示用户
            // error参数 以及model.validationError均为validate方法的返回值
            this.$('*').removeClass('error')
            // jquery....
            this.$('[name=' + error.attr + ']').addClass('error').attr('title',error.message).focus()

        },
        submit:function(ev){
            // 在视图中方法调用的内部this指向的是当前视图
            console.log(this)
            ev.preventDefault()
            //从页面上获取数据
            var data = this.$('form').serializeArray()
            // 把数据写到model中
            this.model.setDataToModel(data)
            //保存数据
            // 保存数据之前会自动调用模型类的validate方法进行数据校验，
            // 校验不通过save方法不会继续执行,同时会触发invalid事件
            // 可以去监听invalid事件，提示用户
            // 注意：需要填写服务器路径,否则不知道保存到哪里

            //开始进行数据同步的时候，会触发‘request’事件
            //数据同步成功，会触发‘sync’事件
            //数据同步失败，会触发‘error’事件
            //因此，也可以去监听事件，处理响应

            //save方法内部采用的是jQuery中的ajax向服务器发请求
            //save方法的返回值是一个deferred对象

            //请求成功：客户端请求，服务端有回应，就是成功
            //不论保存数据成功或者失败，只要服务端有响应，请求就是成功的
            //请求失败：一般都是网络出现问题
            this.model.save().done(function(data){
                console.log(data)
                if(data.result==1){
                    //数据保存成功
                    location.href = '/'
                }else{
                    //数据保存失败
                    alert(data.message)
                }
            }).fail(function(err){
                console.log(err)
                alert('请检查网络')
            })
        }
    })
})
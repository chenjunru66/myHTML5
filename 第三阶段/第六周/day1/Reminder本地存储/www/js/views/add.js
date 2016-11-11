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
        },
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
            this.model.save()
            location.href='/'
        }
    })
})
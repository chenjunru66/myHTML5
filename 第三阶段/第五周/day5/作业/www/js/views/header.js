//定义header对应的视图类
define([
    'backbone','jquery-ui'
],function(B){
    return B.View.extend({
       el:'header',
        //初始化操作
        initialize:function(){
            //console.log(this)
            //设置单选的按钮组
            this.$('#radio').buttonset()
        //    设置日历
            this.$('#radio6').datepicker()

            this.$('#radio label').eq(0).addClass('ui-state-defaults').siblings().eq(2).addClass('ui-state-actives')
            this.$('#radio label').click(function(){
               $(this).addClass("ui-state-actives").siblings().removeClass("ui-state-actives")
            })

            //    设置h1的初始值
            var now = new Date()
            var week = this.getWeek(now.getDay())
            this.$('h1').text(now.getFullYear()+'年'+(now.getMonth()+1)+'月'+now.getDate()+'日'+week)
        },
        getWeek:function(num){
            var week =['周日','周一','周二','周三','周四','周五','周六']
            return week[num]
        },
        events:{
            //监听输入事件，修改日期
            //not:排除第六个input，点击日历的时候没有修改日期
            'input input:not(#radio6)':'changeDate',
            //选择日历上的日期(也就是选择日期是调用)
            'change #radio6':'changeDate'
        },
        changeDate:function(){
            console.log('changeDate')
        //    如果仅仅是点击日历，没有选择日历中某一天，不需要重置h1标签的内容
        //    console.log(arguments)
        //    根据选择的日期修改h1
        //    var input = this.$('input:checked')
        //    找到被选中的这个input是第几个input
            var index = this.$('input:checked').index() / 2
            //console.log(index)
            var now = new Date()
        //    昨天
            now.setDate(now.getDate()-1)
            //console.log(now)
            //昨天加上index就是选中的日期(在这里日历不对)
            now.setDate(now.getDate()+index)
            //console.log(now)
            if( index == 5 ){
            //    说明选中的是日历这个标签
          now = this.$('#radio6').datepicker("getDate")
            }
            //console.log(now)
        //    重新渲染h1标签的内容
            var week = this.getWeek(now.getDay())
            this.$('h1').text(now.getFullYear()+'年'+(now.getMonth()+1)+'月'+now.getDate()+'日'+week)

        //    记录选中的日期
            this.shareData.date = now

        //    触发改变日期的事件
            this.shareData.trigger('changeDate')
        }
    })
})
define(['backbone','template'],function(B,T){
    T.helper('dateToString',function(date){
        //console.log(date)
        date = new Date(date)
        var year = date.getFullYear()
        var month = date.getMonth()+1
        var day = date.getDate()
        var hour = date.getHours()
        var minute = date.getMinutes()
        var sec = date.getSeconds()

        return year +'年'+month+'月'+day+'日'+hour+'时'+minute+'分'+sec+'秒'

    })

    return B.View.extend({
        el:'body',
        render:function(){
            //console.log(this.model.models)
            //console.log(this.model.toJSON())
            //从集合中取出数据，返回集合中包含的每个模型
            var html = T('reminds',{arr:this.model.toJSON()})
            //console.log(html)
            this.$('main').html(html)
        },
        events:{

        },
        initialize:function(){
            this.model.fetch().done(function(data){

                this.render()
            }.bind(this)).fail(function(err){
                console.log(arguments)
                alert('请检查网络')
            })
        }
    })
})
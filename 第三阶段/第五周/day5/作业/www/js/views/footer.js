define([
    'backbone'
],function(B){
    return B.View.extend({
        el:'footer',
        initialize:function(){
            //让footer也支持排序
            this.$el.sortable({
                receive:function(ev,ui){
                    console.log('接收到另一个区域的标签')
                //    删除这个标签对应的数据
                    var id = ui.item.find('input').attr('id')
                    var task = this.model.find(function(item){
                        return item.get('id') == id
                    })
                    //删除数据
                    task.destroy()
                //    删除这个标签
                    ui.item.remove()

                }.bind(this)
            })
        },
        events:{
            //点击+号按钮
            'click span':'showEditBox',
            //点击提交按钮
            'click button':'commit'
        },
        showEditBox:function(){
            this.$('#editBox').show()
            this.$('span').hide()
        },
        commit:function(){
            this.$('#editBox').hide()
            this.$('span').show()
        //    提交数据
            var content = this.$('input').val()
            if(content.length==0){
                return
            }

            //清空输入框
            this.$('input').val('')
           // 从共享数据中获取事件this.shareData.date
           //console.log(this.shareData.date)
            var date = this.shareData.date
                //20161108 = 2016*10000+11*100+8+''
                var time = date.getFullYear()*10000+(date.getMonth()+1)*100+date.getDate()
            //console.log(time)
            var complete = false
        //    获取当前数据对应的序号，从数据库中获取当前日期的所有数据，最后一条数据的index+1
            var index=0
            //console.log(this.model)
            if(this.model.models.length >0){
                //找到所有数据
                var data = this.model.models
                var length = data.length
                //获取最后一条数据
                var lastData = data[length-1]
                index=lastData.get('index')
            }
            index++
            //保存数据，create方法会根据填入的参数，新建模型对象，同事保存数据到服务端
            //添加到集合中的时候，会触发add事件，保存到服务器成功时触发sync，保存到服务端会触发error
            //添加参数{wait:true}保证当数据保存到服务器成功之后，才添加到集合中在触发add事件
            this.model.create({
                content:content,
                time:time,
                complete:complete,
                index:index
            },{wait:true})
          //this.model.fetch().done(function(data){
          //    console.log(data)
          //    if(data.result==1){
          //           //如果数组中有数据
          //           if(data.data.length >0){
          //               //数组中最后一条数据的index值
          //               var length = data.data.length
          //               index = data.data[length-1].index
          //           }
          //        //当前数据的index
          //        index++
          //    //    保存数据,create方法会根据填入的参数，新建模型对象，同事保存数据到服务端
          //         this.model.create({
          //             content:content,
          //             time:time,
          //             complete:complete,
          //             index:index
          //         })
          //
          //    }
          //}.bind(this)).fail(function(err){
          //    console.log(err)
          //})
        }
    })
})
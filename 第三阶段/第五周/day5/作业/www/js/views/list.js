//定义展示任务的视图类
define([
    'backbone','template','jquery','jquery-ui'
],function(B,T,$){
    return B.View.extend({
        el:'section',
        events:{
            'click label':'changeCompleteState'
        },
        changeCompleteState:function(ev){
          //console.log('--click')
        //    修改这条数据的complete字段
        //    console.log(ev)
            var label = ev.currentTarget
            var id = this.$(label).prev().attr('id')
            //console.log(id)
        //    找到id对应的数据
            var task = this.model.find(function(item){
                return item.get('id') == id
            })
           //console.log(task)
           // 根据input是否选中修改修改这条数据的complete
            var complete= this.$(label).prev().prop('checked')
          //console.log(complete)
            task.set('complete',!complete)
        //    把修改保存到服务端
            task.save()

        },
        initialize:function(){
            //获取当前日期的数据进行展示
            this.render()
            this.listenTo(this.model,'add',this.render)
            this.$('ul').sortable({
                //revert:true,
                placeholder:'placeholder',
                start:function(){
                    console.log('开始排序了')
                $('footer>span').removeClass('icon-plus-sign icon-4x').addClass('icon-trash icon-4x')
                },
                stop:function(){
                console.log('结束排序')
                    $('footer>span').removeClass('icon-trash icon-4x ').addClass('icon-plus-sign icon-4x')
            },
            //    与另一个区域产生联系，可以跨区域排序，注意另一个区域也要支持排序
                connectWith:'footer',
            //    保存排序的位置
            //    只修改移动的数据A的index，其他数据的index不变；如果A移动到最上面，index修改为A下面的数据的index-1，
            //    如果A移动到最下面，index就修改为A上面的数据的index+1，如果A移动到中间，index修改为A上面和下面的index的和除以2
            //    如果A移动到ul的外面，就无操作
            //    当被移动的元素放在一个新的位置上时会触发的事件，para1：事件对象；para2：事件涉及到的界面元素
                update:function(ev,ui){
                    console.log('调整顺序了')

                    //console.log(arguments)
                //    找到被移动的元素
                    var li = ui.item
                    //console.log(li)
                    //console.log(li.parent())
                    //console.log(li.parent()[0])
                    //当li移动到外面时
                    if(li.parent()[0]!= this.$('ul')[0]){
                        return
                    }

                    //找到当前数据，然后修改index
                    var currentId= li.find('input').attr('id')
                    var  task = this.model.find(function(item){
                        return item.get('id')==currentId
                    })
                    var index
                    //console.log(currentId)
                //移动到最上面
                    if(li.index() == 0){
                        console.log('移动到最上面了')
                    //    找到下一个标签对应的数据,找到对应的数据
                        var nextIndex = this.getIndex(li.next())
                        //    修改当前数据的index
                         index = nextIndex - 1

                    }
                //移动到中间
                    if(li.index()>0 && li.index()<this.$('li').length-1){
                        console.log('移动到了中间了')
                        //上一个数据的index
                        var prevIndex = this.getIndex(li.prev())
                        //下一个数据的index
                        var nextIndex = this.getIndex(li.next())

                        index = (prevIndex+nextIndex)/2
                        //console.log(index)


                    }
                    // 移动到最下面
                     if(li.index()==this.$('li').length-1){
                        console.log('移动到最下面了')

                         var prevIndex = this.getIndex(li.prev())
                         index = prevIndex+1

                    }
                    task.set('index',index)
                    //保存
                    task.save()

                }.bind(this)
            })

        },
        getIndex:function(ele){
          var task = this.model.find(function(item){
              return item.get('id')==ele.find('input').attr('id')
          })
            return task.get('index')
        },
        render:function(){
            console.log('监听到changeDate事件了')
            this.model.fetch().done(function(data){
                //console.log(this.model.toJSON())
                //    渲染页面
                    var html = T('reminds',{arr:this.model.toJSON()})
                    //console.log(html)
                    this.$('ul').html(html)
            }.bind(this)).fail(function(err){
                //console.log(err)
                alert('请尝试重新刷新页面')
            })


        }
    })
})
/**
 * Created by Administrator on 2016/9/27.
 */


(function($){
    $(function(){
        $.fn.myswim = function(){
//选中li标签，添加点击事件
            console.log(this)//所有的nav标签
            this.each(function(i,ele){
                ulclick(ele)
            })
            return this

        }


        var ulclick = function(ele){
            var $ele = $(ele)
            var lis = $ele.children().find('li')
            lis.each(function(){
                var count = 0
                $(this).click(function(){
                    count++
//                 console.log('222')
                    if( count % 2 != 0){
                        $(this).find('ul').css('display','block')
                    }else{
                        $(this).find('ul').css('display','none')
                    }

                })

            })
        }
    })
})(jQuery)

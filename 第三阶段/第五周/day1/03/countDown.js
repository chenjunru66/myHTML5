//countDown:封装一个倒计时器；
//随着计时时间的变化时进行的操作
//计时结束的操作；

//para1:倒计时的开始事件
//para2：事件变化时的操作函数或者操作函数构成的数组
//para3：结束的操作函数
function CountDown(value){
    //记录倒计时的起始值
    this.originValue = value

}
//目标：开始倒计时
CountDown.prototype.start = function(){


    function show(){

        this.originValue --
         //自定义事件
         //para1:事件名称
         //para2：传送的数据
         $(this).trigger('change',this.originValue)

        if(this.originValue<=0){

            clearInterval(timer)
        }
    }
    var newShow = show.bind(this)
        var timer = setInterval(newShow,1000)
}


//鼠标事件、键盘事件、form事件、浏览器事件、自定义事件
//事件发生分为捕获阶段和冒泡阶段


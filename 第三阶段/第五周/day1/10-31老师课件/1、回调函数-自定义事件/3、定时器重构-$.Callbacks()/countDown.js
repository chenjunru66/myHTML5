// countDown：封装一个倒计时器；

// para1:倒计时的开始事件

function CountDown(value){
    // 记录倒计时的起始值
    this.originValue = value
    // this.change是一个回调函数列表对象，管理回调函数 
    this.change = $.Callbacks()
    this.complete = $.Callbacks()
}

// 目标：开始倒计时
CountDown.prototype.start = function(){
   
    var timer = setInterval(function(){
        this.originValue --

        // 执行回调函数列表中的回调函数
        this.change.fire(this.originValue)

        console.log(this)
        console.log(this.originValue)
        if(this.originValue<=0){

            this.complete.fire()

            clearInterval(timer)
        }
    }.bind(this),1000)
}


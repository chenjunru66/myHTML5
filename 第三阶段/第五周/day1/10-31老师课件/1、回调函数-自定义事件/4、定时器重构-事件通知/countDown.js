// countDown：封装一个倒计时器；

// para1:倒计时的开始事件

function CountDown(value){
    // 记录倒计时的起始值
    this.originValue = value
}

// 目标：开始倒计时
CountDown.prototype.start = function(){
    var timer = setInterval(function(){
        this.originValue --
        //时间变化了
        // 触发事件，通知外部我发生变化了
        // 自定义事件
        // para1：事件名称
        // para2：传递的数据
        $(this).trigger('com.zhiyou100.change',this.originValue)

        console.log(this)
        console.log(this.originValue)
        if(this.originValue<=0){
            //    计时结束了
            $(this).trigger('com.zhiyou100.complete')
            clearInterval(timer)
        }
    }.bind(this),1000)
}

// 鼠标事件、键盘事件、form事件、浏览器事件、自定义事件
// click、dbclick、mouseover....
// keydown\keyup\keypress
// submit\reset\input\change\select\fouseIn\fouseOut....
// load\unload\reload....

// W3C标准规定中，事件发生分为捕获阶段、冒泡阶段
// 捕获阶段:从最不确定的标签到最确定的标签 (从大到小)
// 冒泡阶段:从最确定的标签到最不确定的标签(从小到大)

// 


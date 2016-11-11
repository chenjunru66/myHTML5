// countDown：封装一个倒计时器；

// 计时时间变化时的操作；
// 计时结束的操作；

// para1:倒计时的开始事件
// para2：时间变化时的操作函数或者操作函数构成的数组；
// para3：结束的操作函数
function CountDown(value,change,complete){
    // 记录倒计时的起始值
    this.originValue = value
    this.change = change
    this.complete = complete
}

// 目标：开始倒计时
CountDown.prototype.start = function(){
    // 注意this的指向；setInterval中this指向window
    // 我们想要this指向创建的倒计时对象
    // 修改this的指向
    // 修改this指向的方法call、apply、bind
    var timer = setInterval(function(){
        this.originValue --
        //简单的容错
        //第一种情况：保证存在change并且change是个函数才调用
        if(this.change && typeof this.change == 'function')
        {
            this.change(this.originValue)
        }
        //第二种情况：保证change存在并且是一个数组
        if(this.change && this.change instanceof Array == true){
            // 遍历回调函数数组
            for(var i = 0 ;i < this.change.length ;i ++){
                var change = this.change[i]
                if(change && typeof change == 'function'){
                    change(value)
                }
            }
        }


        console.log(this)
        console.log(this.originValue)
        if(this.originValue<=0){
              if(this.complete && typeof this.complete == 'function')
                {
                    this.change(this.originValue)
                }
            clearInterval(timer)
        }
    }.bind(this),1000)
}


// typeof 取值： function\number\string\boolean\object\undefined

// console.log(typeof 1)
// console.log(typeof '111')
// var a 
// console.log( typeof a )
// console.log(typeof true)
// console.log(typeof null)

// instanceof :是不是...的实例
// var arr = [1,3]
// // 判断arr是不是数组的一个实例
// console.log( arr instanceof Array)

// var date = new Date()
// console.log(date instanceof Date)

// var a = new Number()
// console.log(a instanceof Number)


// 装箱：把值包装成对象
// 拆箱：把对象变为值
// var a = 3.1415926
// a.toFixed(2)

// 知识点：
// 1、回调函数、回调函数数组
// 2、this指向的修改：call、apply、bind 
// 3、typeof取值
// 4、instanceof
// 133 8383 9248
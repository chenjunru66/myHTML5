//countDown:封装一个倒计时器；
//随着计时时间的变化时进行的操作
//计时结束的操作；

//para1:倒计时的开始事件
//para2：事件变化时的操作函数或者操作函数构成的数组
//para3：结束的操作函数
function CountDown(value){
    //记录倒计时的起始值
    this.originValue = value
    this.change = $.Callbacks()
    this.complate =  $.Callbacks()
}
//目标：开始倒计时
CountDown.prototype.start = function(){

        //call,apply,bind来修改this的指向
        //call(para1,para2...),para1:this的新值
        //apply(para1,[]),para1:this的新值，方法的原始参数放在数组中
        //bind(para1)para1:this的新值,方法不会被调用，会返回一个新方法，新方法中this指向的是bind的参数
    function show(){

        this.originValue --

       this.change.fire(this.originValue)

        //当change为数组时保证change存在而且是一个数组


        //判断是否为数组
        //  var arr=[1,2]
        //console.log(arr instanceof Array)

        //装箱：把值包装成对象；拆箱：把把对象变为值
        //var a= 23232
        //var b = new Number()
        //console.log(a instanceof Number)
        //console.log(b instanceof Number)


        //$('div').text(this.originValue)
        //this指向windows，在这需要修改this的指向
        //console.log(this)
        //console.log(this.originValue)
        if(this.originValue<=0){
            this.complate.fire(this.originValue)
            clearInterval(timer)
        }
    }
    var newShow = show.bind(this)
        var timer = setInterval(newShow,1000)
}

//1.回调函数、回调函数数组
//2.this指向的修改：call、apply、bind
//3.typeof取值
//4.instanceof
//133 8383 9248

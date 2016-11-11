//向promise扩充finally方法
Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
            value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
    );
};
//箭头函数例子
//app.listen(3000,function(){
//    console.log('111')
//})
//app.listen(3000,()>={
//    console.log('111')
//})

var promise = new Promise(function(resolve,reject){
             setTimeout(function(){
                 var num = Math.random()
             if(num >=0.5){
             //    认为异步任务成功
                 resolve(num)

             }else{
                   reject(num)
             }
             },1000)
})
//promise.then(function(value){
//    console.log('第一步成功了')
//    console.log(value)
//},function(err){
//    console.log('第一步失败了')
//    console.log(err)
//})

//then:一半填写一个参数，用户处理成功的下一步操作
//接下来调用catch，用户处理失败时的下一步操作
//最后调用finally，用户执行成功、失败的共有操作(注意先想promise中扩充finally方法)
promise.then(function(value){
    console.log('第一步成功了')
    console.log(value)
}).catch(function(err){
    console.log('第一步失败了')
    console.log(err)
}).finally(function(){
    //一般会用来执行一些成功、失败时的共有操作
    console.log('不管成功或者失败都会被执行')
})

//=============then的链式调用=============
//then方法返回值是一个新的promise对象，支持链式调用
//如果then中回调函数的返回值是一个promise对象，直接使用；如果是一个普通的值，promise内部会把这个值包裹成一个fulfilled状态的promise对象，然后使用
var promise2 =  new Promise(function(resolve,reject){
//    任务的第一步
    setTimeout(function(){
        var num = Math.random()
        if(num>=0.5){
            resolve({
                result:1,
                data:{
                    namelists:['小米','小婷'],
                    citylists:['北京','上海']
                }
            })
        }else{
            reject(new Error('第一步任务失败了'))
        }
    },1000)
})

promise2.then(function(value){
//    任务第二步
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            var num = Math.random()
            if(num >=0.5){
                //    认为异步任务成功
                resolve(num)

            }else{
                reject('任务的第二步失败了')
            }
        },1000)
    })

}).then(function(value){
    console.log(value)
}).catch(function(err){
     //不管哪一步失败了，都会执行到catch，处理失败的业务逻辑，而then中只处理成功的业务逻辑，避免了代码的嵌套，使得代码结构简单易懂
     console.log(err)
}).finally(function(){
    console.log('任务结束了')
})





//链式调用是如何实现的,上一个函数执行完后要有返回当前对象才能让下一个函数继续执行
//var stu = {
//    sayHello1:function(){
//        console.log('sayHello1')
//        return this
//    },
//    sayHello2:function(){
//        console.log('sayHello2')
//        return this
//    },
//    sayHello3:function(){
//        console.log('sayHello3')
//        return this
//    }
//}
//
//stu.sayHello1().sayHello2()

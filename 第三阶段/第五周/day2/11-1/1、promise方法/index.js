// 向Promise中扩充finally方法（http://es6.ruanyifeng.com/#docs/promise）
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
}

var promise = new Promise(function(resolve,reject){
    setTimeout(function() {
        var num = Math.random()
        if(num >=0.5){
            //认为异步任务成功
            resolve(num)
        }else{
            reject(num)
        }
    }, 1000)
})

// then：一般填写一个参数，用于处理成功的下一步操作
//接下来调用 catch，用于处理失败时的下一步操作
// 最后调用finally，用于执行成功、失败的共有操作（注意：
// 先向promise中扩充finally方法）
// promise.then(function(value){
//     console.log('第一步成功了')
//     console.log(value)
// }).catch(function(error){
//     console.log('失败了')
//     console.log(error)
// }).finally(function(){
//     // 一般会用来执行一些成功、失败时的共有操作
//     console.log('不管成功或者失败都会被执行')
// })


//============then的链式调用==========
// then方法的返回值是一个新的promise对象,支持链式调用
//如果then中回调函数的返回值是一个promise对象，直接使用；
// 如果then中回调函数的返回值是一个普通的值，promise内部会把这个值
// 包裹成一个fulfilled状态的promise对象，然后使用；
var promise2 = new Promise(function(resolve,reject){
    //任务的第一步
    setTimeout(function(){
        var num = Math.random()
        if(num > 0.5){
            resolve({
                result:1,
                data:{
                    namelists:['小红','小明'],
                    citylists:['北京','上海']
                } 
            })
        }else{
            reject(new Error('第一步任务失败了'))
        }
    },1000)
})

promise2.then(function(value){
    //任务第二步
    return new Promise(function(resolve,reject){
        setTimeout(function() {
        var num = Math.random()
        if(num >=0.5){
            //认为异步任务成功
            resolve(num)
        }else{
            reject('任务的第二步失败了')
        }
    }, 1000)
    })
}).then(function(value){
    console.log(value)
    return value
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log('任务结束了')
})

// 不管哪一步失败了，都会执行到catch，处理失败的业务逻辑
// 而then中只处理成功的业务逻辑，
// 避免了代码的嵌套，使得代码结构简单易懂


// 以前的实现方式
// {
//     ..第一步...
//     if(success){
//         ..第二步..
//         if(success){
//             ..第三步..
//             if(success){

//             }else{

//             }
//         }else{

//         }
//     }else{

//     }
// }



// //类jquery链式调用如何实现的？
// //方法调用结束时，返回当前的对象
// var stu = {
//     sayHello1:function(){
//         console.log('sayHello1')
//         return this
//     },
//     sayHello2:function(){
//         console.log('sayHello2')
//         return this
//     },
//     sayHello3:function(){
//         console.log('sayHello3')
//         return this
//     }
// }
// stu.sayHello1().sayHello2()









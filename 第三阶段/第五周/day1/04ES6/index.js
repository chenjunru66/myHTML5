/**
 * Created by Administrator on 2016/10/31.
 */
//js本身是单线程执行的（同一时间只能做一件事）
//同步：代码顺序执行，一件事情不完成不能进行下一件，很容易阻塞线程，造成页面卡死
//异步：代码不按照顺序执行，不会阻塞线程
//为了避免页面卡死，一半耗时的操作都采用异步编程，例如xhr、ajax、setTimeout、setInterval、事件监听...
//还有promise、多线程

//$('button').click(function(){
//    for(var i=p;i<100000;i++){
//        console.log(i)
//    }
//
//})

//注意输出顺序，并不是先输出‘111’，而是先输出下面的‘执行到这里’
//异步任务是等待空闲的时候才会执行
//setTimeout(function(){
//    console.log('111')
//},0)
//
//console.log('执行到这里了')
//console.log('执行到这里了')
//console.log('执行到这里了')
//console.log('执行到这里了')
//console.log('执行到这里了')
//console.log('执行到这里了')

//异步编码，常见解决方案是回调函数和事件；但是这两种解决方案都有缺点，事件必须保证事件监听者的添加在事件发生之前进行，否则监听不到；2）回调函数：任务的结果只能在回调函数中使用，其他地方无法使用

//为了弥补回调函数和事件的缺陷，ES6提出了异步编程的一种新的实现方案--promise；promise保证任何时候添加的回调函数都会被执行，保证任何地方都可以使用任务的结果，同是保证任务一经执行完成之后，状态不会改变，另外，实现了任务以及后续操作的分离，简化了逻辑


    //创建一个promise对象
//    构造函数的参数是一个函数，para1：resolve；para2：reject，resolve和reject是promise内置的两个方法，只能在构造函数内部使用
var  promise = new Promise(function(resolve,reject){
//      进行耗时的异步任务
    var img = new Image()
    img.onload = function(){
        console.log('图片下载完成')
    //    修改promise的状态为fulfilled（成功）
        resolve(img)
    }
    img.onerror = function(){
        console.log('图片下载失败')
    //    修改promise的状态为rejected(失败)
        reject(new Error('下载失败'))
    }
     img.src = 'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/bainuo/wh%3D216%2C166/sign=f09336d6bf99a9013b6053342ca3264a/7c1ed21b0ef41bd542cd023656da81cb38db3d52.jpg'
})

//then:然后，下一步
//para1:promise的状态为fulfilled的回调函数
//para2：promise的状态为rejected的回调函数
promise.then(function(value){
    console.log(value)
    //把img添加到body中
    document.body.appendChild(value)
},function(err){
    console.log(err)
})

//可以随时随地通过promise的then方法，使用任务的结果
//setTimeout(function(){
//    promise.then(function(value){
//        console.log(value)
//    },function(err){
//        console.log(err)
//    })
//},1000)

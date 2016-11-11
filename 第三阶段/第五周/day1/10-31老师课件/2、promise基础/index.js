/*
js本身是单线程执行的（同一时间只能做一件事）
同步：代码顺序执行，一件事情不完成不能进行下一件,
很容易阻塞线程，造成页面卡死；

异步:代码不按照顺序执行，不会阻塞线程；

为了避免页面卡死，一般耗时的操作都采用异步编程，例
如 xhr、ajax、setTimeout、setINterval、事件监听...

还有 promise、多线程
*/ 

// $('button').click(function(){
//     // 在这里点击button，进行耗时操作，会造成页面卡死
//     for(var i = 0 ;i<=1000000 ;i++){
//         console.log(i)
//     }
// })

// 注意：输出顺序
//当等待时间为0时，并不是先输出 ‘呵呵呵呵’，再输出‘执行到这里了’
// 异步任务是等待当前线程空闲的时候才会执行。
// setTimeout(function() {
//     console.log('呵呵呵呵')
// },0)

// console.log('执行到这里了')
// console.log('执行到这里了')
// console.log('执行到这里了')
// console.log('执行到这里了')
// console.log('执行到这里了')
// console.log('执行到这里了')
// console.log('执行到这里了')
// console.log('执行到这里了')
// console.log('执行到这里了')

/*
异步编码，常见解决方案是回调函数和事件。
但是这两种解决方案都有缺点：
1）事件必须保证 事件监听者的添加在事件发生之前进行，否则监听不到；
2）回调函数：任务的结果只能在回调函数中使用，其他地方无法使用；
*/ 
// var result 
// $.getJSON('http://api.map.baidu.com/telematics/v3/weather?location=郑州市&output=json&ak=TueGDhCvwI6fOrQnLM0qmXxY9N0OkOiQ&callback=?',function(data){
    // console.log(data)
//     result = data
// })

// //无法知道什么时候result有值，无法使用
// console.log(result)

/*
为了弥补回调函数和事件的缺陷，
ES6中提出了异步编程的一种新的实现方案-promise;
promise:保证任何时候添加的回调函数都会被执行，
保证任何地方都可以使用任务的结果，
同时保证任务执行完成之后，状态固化，不能被篡改；
另外，实现了任务以及后续操作的分离，简化了逻辑；
// promise MDN 地址
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/
// 创建一个promise对象
// 构造函数的参数是一个函数：
//                  para1：resolve
//                  para2：reject
// resolve\reject是promise内置的两个方法，只能在构造函数内部使用
var promise = new Promise(function(resolve,reject){
    //进行耗时的任务
    var img = new Image()
    img.onload = function(){
        console.log('图片下载完成了')
        //修改promise的状态为fulfilled (成功)
        // resolve、reject的参数可以随便
        resolve(img)
    }
    img.onerror = function(){
        console.log('下载图片失败了')
        //修改promise的状态为rejected (失败)
        reject(new Error('下载失败'))
    }
    img.src = 'http://cms-bucket.nosdn.127.net/catchpic/c/c5/c52221a567ea66c281b1a6d2e2f0e1c3.jpg?imageView&thumbnail=550x0'
})

// then:然后，下一步
// para1：promise状态为fulfilled的回调函数
// para2:promise状态为rejected的回调函数
promise.then(function(value){
    console.log(value)
    // 把img添加到body中
    document.body.appendChild(value)
},function(error){
    console.log(error)
})

// promise初始状态为pending(挂起)
// 任务成功，调用resolve方法修改任务状态为fulfilled
// 任务失败，调用reject方法修改任务状态为rejected
// 通过then方法，执行下一步操作



// 可以随时随地通过调用promise的then方法，使用任务的结果
// setTimeout(function() {
//     promise.then(function(value){
//         console.log(value)
//     },function(error){
//         console.log(error)
//     })
// }, 10000);






var d = $.Deferred()

setTimeout(function() {
    d.resolve('2000ms时间到啦！')
}, 2000);

d.done(function(data){
    alert(data)
})

// Deferred对象中什么也没有，Deferred对象的状态是在外面改变的



var p = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve('2000ms时间到啦！')
    }, 2000);
})

// p.then(function(data){
//     alert(data)
// })

// Promise对象需要传入一个函数，Promise对象的状态是在内部改变的



// var d = $.Deferred(function(de){
//     setTimeout(function() {
//         de.resolve('2000ms时间到啦！')
//     }, 2000);
// })

// d.done(function(data){
//     alert(data)
// })

// Deferred也可以写成类似Promise的方式



function getTimer(ms){
    return $.Deferred(function(de){
        setTimeout(function() {
            de.resolve(ms + 'ms时间到啦！')
        }, ms);
    })
}

var t1 = getTimer(2000)
var t2 = getTimer(10000)

$.when(t1, t2).done(function(t1, t2){
    alert(t1)
    alert(t2)
})

// jquery中Deferred详情见
// http://www.ruanyifeng.com/blog/2011/08/a_detailed_explanation_of_jquery_deferred_object.html
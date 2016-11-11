//  调用$.Callbacks()方法可以获取一个回调函数列表对象
// 提供了对回调函数的一系列的管理操作
// 例如 添加、删除、执行回调函数等
// var callbacks = $.Callbacks()
// console.log(callbacks)
// function func1 (){
//     console.log('func11')
// }
// function func2 (a,b){
//     console.log('func2')
//     console.log(a)
//     console.log(b)
//     console.log(this)
// }
// // 添加 
// callbacks.add(func1)
// callbacks.add(func2)
// callbacks.add('func3')

// 执行回调函数列表中每一个回调函数
// callbacks.fire(1,2)

// 判断回调函数是否被执行过
//  console.log(callbacks.fired())

// fireWith:修改this的指向并执行回调函数列表中每一个回调函数
// para1：this的新值
// para2：数组，执行回调函数所需的参数
// var obj = {
//     name:'lucy'
// }
// callbacks.fireWith(obj,[1,2])

//使回调函数失效，即使调用fire方法也不会执行
// callbacks.disable()
// callbacks.fire()

// lock：锁定回调函数列表，避免修改状态
// callbacks.lock()

// 从回调函数列表中删除执行的函数
// callbacks.remove(func1)

// 清空回调函数列表
// callbacks.empty()

//创建回调函数列表对象的时候，可以添加unique\once\memory\stopOnFalse等标识符
// 
    // once: 确保这个回调列表只执行一次
    // memory: 保持以前的值和将添加到这个列表的后面的最新的值立即执行调用任何回调
    // unique: 确保一次只能添加一个回调(所以有没有在列表中的重复).
    // stopOnFalse: 当一个回调返回false 时中断调用

function func1 (){
    console.log('func1')
}
function func2 (){
    console.log('func2')
}
function func3 (){
    console.log('func3')
}

// unique:唯一，保证列表中回调函数不重复，多次加入无效
var callbacks = $.Callbacks('unique')
callbacks.add(func1)
callbacks.add(func1)
callbacks.fire()


// memory:记忆；执行过fire之后，后加入的回调函数加入后会被立即执行 
// var callbacks = $.Callbacks('memory')
// callbacks.add(func1)
// callbacks.fire()
// callbacks.add(func2)

// once:一次；回调函数只会被执行一次
// var callbacks = $.Callbacks('once')
// callbacks.add(func1)
// callbacks.fire()
// callbacks.fire()

function func4(){
    console.log('func4')
    return false
}

// stopOnFalse: 遇到某个回调函数的返回值是false，其后的回调函数都不会被执行
// var callbacks = $.Callbacks('stopOnFalse')
// callbacks.add(func1)
// callbacks.add(func4)
// callbacks.add(func2)
// callbacks.fire()


// 这四个标识符可以混合使用,
// 支持一个列表的flags而不仅仅是一个，设置几个flags，
// 有一个累积效应，类似“&&”。
// 这意味着它可能结合创建回调名单，
// 例如： $.Callbacks("unique memory")







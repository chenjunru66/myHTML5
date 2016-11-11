//类：class：抽象的概念；说明一类事物具有的特点、功能
//实例（对象）：类中一个具体的个体，具体的概念
//实例方法：对象能够调用的方法
//类方法：类才能调用的方法
function People(name,age){
    this.name=name
    this.age =age
}
People.prototype.sayHello = function(){
    console.log('hello world')
}

var xiaoMing = new People('小明',15)

xiaoMing.sayHello()
console.log(xiaoMing)

//类方法
//People.getPopulation = function(){
//    console.log('人类的总人口为60亿')
//    return 6000000
//}
//错误的，该对象不能使用类的方法
//xiaoMing.getPopulation()

//类方法
//People.getPopulation()

//all，race
//var promise1 = new Promise(function(resolve,reject){
//    setTimeout(function(){
//        var num = Math.random()
//        if(num>=0.5){
//            resolve('买地成功')
//        }else{
//            reject('买地失败')
//        }
//    },1000)
//})
//var promise2 = new Promise(function(resolve,reject){
//    setTimeout(function(){
//        var num = Math.random()
//        if(num>=0.5){
//            resolve('买建筑材料成功')
//        }else{
//            reject('买建筑材料失败')
//        }
//    },1000)
//})
////all:参数是数组，数组中可以是多个promise对象，返回值是一个新的promise对象，当数组中所有的promise状态均为fulfilled时，新promise的状态才为fulfilled，只要数组中有一个promise的状态为rejected，新promise对象的状态就为rejected，不再执行下一个promise
//var promise = Promise.all([promise1,promise2])
//promise.then(function(value){
//    console.log(value)
////    vaule是数组中每隔promise成功时resolve的参数封装成的一个新数组
//}).catch(function(er){
//    //error是失败的那个promise对象的reject参数
//    console.log(er)
//})

var promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        var num = Math.random()
        if(num>=0.5){
            resolve('第一个人回答成功')
        }else{
            reject('第一个人回答失败')
        }
    },Math.random()*1000)
})
var promise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        var num = Math.random()
        if(num>=0.5){
            resolve('第二个人回答成功')
        }else{
            reject('第二个人回答失败')
        }
    },Math.random()*1000)
})
//race：赛跑
//参数是一个数组，数组中是多个promise对象
//返回值是一个新promise对象
//只要数组中一个promise对象（假设为A）结束，新的promise就结束
//同事新promise的状态与A的状态一致
var promise = Promise.race([promise1,promise2])
promise.then(function(value){
    console.log(value)
}).catch(function(er){
    console.log(er)
})

//数据库中也可以使用promise写法,mongoose支持promise
//var mongoose = require('mongoose')
//修改mongoose中的promise为ES6中自带的Promise
//mongoose.Promise = global.Promise
//Student.find({}).exec().then(function(data){
//    return Student.update({})
//}).then(function(){})

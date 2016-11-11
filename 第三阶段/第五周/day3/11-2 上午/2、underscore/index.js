// ====each:遍历=========
// var arr = [1,23,3,45]
// // para1:需要被遍历对象
// // para2：迭代函数
// // para3:可选的，this的指向
// _.each(arr,function(ele,index,list){
//     console.log(ele)
//     console.log(index)
//     console.log(list)
//     console.log(this)
// },arr)

// var obj = {
//     name:'lucy',
//     age:20,
//     sex:'female',
//     sayhello:function(){
//         console.log('helloworld!!')
//     }
// }

// _.each(obj,function(value,key,list){
//     console.log(value)
//     console.log(key)
//     console.log(list)
// })

// ======reduce:聚合==========
// var arr = [10,100,20,30]
// var result = _.reduce(arr,function(memo,value,index,list){
//     console.log(memo)
//     console.log(value)
//     console.log(index)
//     console.log(list)
//     return memo + value
// },0)
// console.log(result)
//   memo      value        index   return
//   0           10          0        10  
//   10          100         1        110
//   110         20          2        130
//   130         30          3        160

// result = 160 

// ======predicate:谓词==============
// // predicate:谓词，表示判断；填写查找条件，会获取满足条件的数据
// var arr = [10,21,3,4,5,6,7,8]
// // 从数组中获取满足条件的第一个数据，返回
// var result = _.find(arr,function(value){
//     console.log(value)
//     // if(value %3 == 0){
//     //     return true
//     // }
//     // return false

//     return value%3==0
// })
// console.log(result)

// ======where=================
// where:遍历数组中的元素，返回包含指定属性的元素构成的新数组
// var arr = [
//     {name:'xiaoMing',age:20,sex:true},
//     {name:'xiaoHong',age:22,sex:false},
//     {name:'xiaoQing',age:20,sex:false},
//     {name:'xiaoBai',age:20,sex:true}
// ] 
// var result = _.where(arr,{age:20,sex:true})
// console.log(result)

// ======invoke:唤醒、执行=========
// //arguments:是函数中内置的一个局部变量，
// // 通过这个对象可以获取调用方法时
// // 传递的每一个参数，以及参数的数目，还有所在函数；
// function test(a,b){
//     console.log(a  + '---' + b)
//     console.log(arguments)
//     console.log(arguments.length)
//     console.log(arguments[0])
//     console.log(arguments.callee)
// }
// test(1,2)

// var result = _.invoke([[5, 1, 7], [3, 2, 1]], 'sort')
// console.log(result)

// -------toArray:转化为数组=========
// function test(a,b,c,d){
//     var result = _.toArray(arguments)
//     console.log(arguments)
//     console.log(result)
// }
// test(16,21,3,4)












// $('div').text()
// function text(){
//     if(arguments.length ==0){
//         return document.getElementById().innerHtml
//     }else{
//         document.getElementById().innerHtml = arguments[0]
//     }
// }

// var a = 10 
// function test(a){
//     a++
//     console.log(a)
// }
// test(a)
// console.log(a)
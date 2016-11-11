/**
 * Created by Administrator on 2016/11/2.
 */
//var  arr =[1,23,3,45]
////para1:需要被遍历的对象
////para2：迭代函数
////para3：可选的，this的指向
//_.each(arr,function(ele,index,list){
//    console.log(ele)
//    console.log(index)
//    console.log(list)
//    console.log(this)
//},arr)
//
//var obj ={
//    name:'lucy',
//    age:20,
//    sex:'female',
//    sayHello:function(){
//        console.log('helloworkd!!')
//    }
//}
//_.each(obj,function(value,key,list){
//        console.log(value)
//        console.log(key)
//        console.log(list)
//        console.log(this)
//    })


//=========reduce:聚合====
//var arr = [10,100,20,30]
//var result=_.reduce(arr,function(memo,value,index,list){
//    console.log(memo)
//    console.log(value)
//    console.log(index)
//    console.log(list)
//    return memo + value
//},0)
//console.log(result)
//memo  value  index return
//0      10      0    10
//10     100     1    110
//110    20      2    130
//130    30      3    160
//result:160

//====predicate:谓语，表示判断；填写查找条件，会找到满足条件的数据
//var arr = [1,23,35,54,656,6,7,8]
////从数组中获取满足条件的第一个数据，返回该数据
//var result=_.find(arr,function(value){
//    //console.log(value)
//    //if(value %3 ==0){
//    //    return true
//    //}
//    //return false
//    return value % 3 ==0
//
//})
//console.log(result)

//======where==遍历数组中的元素，返回包含指定属性的元素构成的新数组
//var arr =[
//    {name:'ming', age:20, sex:true},
//    {name:'hong', age:23, sex:false},
//    {name:'qing', age:24, sex:true},
//    {name:'gang', age:23, sex:true}
//]
////para1：需要被遍历的对象，para2；条件(对象中的属性)
//var result = _.where(arr,{age:20})
//console.log(result)

//=======invoke：唤醒，执行
//var arr = [1,20,23]
////arguments:势函数中内置的一个局部变量，通过这个对象可以获取调用方法时，传递的每一个参数，以及参数的数目，还有所在函数的名称
//function test(a,b){
//    console.log(a+b)
//    console.log(arguments)
//    console.log(arguments.length)
//    console.log(arguments[0])
//    console.log(arguments.callee)
//}
//test(1,2)
//var result = _.invoke(arr,test,100,20)
//var result = _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
//console.log(result)

//=====toArray将其转化为数组
//function test(a,b,c,d){
//    var result = _.toArray(arguments)
//    console.log(arguments)
//    console.log(result)
//}
//test(16,23,2,5)


//    underscore模板化
//var a='hello,<%=name%>:<p>你今年几岁了?</p><p>我<%=age%></p>'
////传入模板字符串得到模板编译函数
//var complile = _.template(a)
////传入数据，调用模板编译函数得到html字符串
//var html = complile({name:'lucy',age:20})
//console.log(html)



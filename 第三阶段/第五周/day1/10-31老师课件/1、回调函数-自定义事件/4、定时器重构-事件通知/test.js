function test(a,b){
    console.log(this)
    console.log(a)
    console.log(b)
}
var stu = {
    name:'lucy',
    sex:true
}
test(1,2)

// call修改this的指向，同时调用方法
// call  para1：this的新值
// test.call(stu,1,2)

//apply修改this的指向，同时调用方法
//方法的原始参数放在数组中
// test.apply(stu,[1,2])


// bind方法也可以修改this的指向，但是方法不会被调用，
// 会返回一个新方法，新方法中this指向的是bind的参数
var newMethod = test.bind(stu)
console.log(newMethod)
 newMethod(1,2)



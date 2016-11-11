/**
 * Created by Administrator on 2016/10/24.
 */
//函数的自我调用可以避免产生全局变量
//(function(){
    console.log(this)
    var a = 100
    alert('a is runing')
    function show(name,age){
        this.name = name
        this.age = age
        alert(name + '已经' + age + '了')
    }
//})()
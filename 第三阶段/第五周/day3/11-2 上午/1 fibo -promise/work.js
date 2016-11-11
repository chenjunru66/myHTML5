function f(n){
    if(n<=2) return 1 
    return f(n-1) + f(n-2)
}


//接到主线程发过来数据时，对应的回调函数
onmessage = function(ev){
    //从事件中获取传递过来的数据
    console.log(ev.data)
    //执行耗时任务
    var result = f(ev.data)
   //把任务的执行结果发到主线程
   postMessage(result)
}




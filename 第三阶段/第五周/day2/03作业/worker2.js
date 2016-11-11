function f(n){
    //console.log('方法被调用了'+n)
    if(n<2)return n
    return f(n-1)+f(n-2)
}

//消息监听
onmessage = function(ev){
    //ev.data就是主线程中postMessage时发送过来的数据
    console.log(ev.data)
    //console.log('接收到消息了')

    var result = f(ev.data)
//   发消息把运算结果发送到主线程
    postMessage(result)


}
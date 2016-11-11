// 斐波那契数列
//  f(0)=0,f(1)=1,f(n)=f(n-1)+f(n-2)

function f(n){
    if(n<2) return n
    return f(n-1)+f(n-2)
}

// 消息监听
onmessage = function(ev){
    console.log('接收到消息了')
    console.log(ev)
    // ev.data就是主线程中postMessage时发送过来的数据
    console.log(ev.data)
    var result = f(ev.data)
    //发消息把运算结果发送到主线程
    postMessage(result)
}

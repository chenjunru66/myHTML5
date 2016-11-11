//记录当前是第几项
var i =  1 

//创建一个worker
var worker = new Worker('work.js')

function calc(){
    var p1 = new Promise(function(resolve,reject){
        //时间到1秒
        setTimeout(function() {
            //修改任务的状态
            resolve('到1秒啦')
        }, 1000);
    })

    var p2 = new Promise(function(resolve,reject){
        
        //计算斐波那契某一项的值

        //接收worker发送过来的任务结果的回调函数
        worker.onmessage = function(ev){
            
            //修改任务的状态
            resolve(ev.data)
        }
        //向worker中发送数据
        worker.postMessage(i)
    })

    //p1,p2都resolve，才调用p3的回调
    var p3 = Promise.all([p1,p2])

    p3.then(function(value){
        console.log(value[1])
        $('<tr></tr>').prependTo('table')
        $('<td>第' + i + '项</td>').appendTo('tr:first')
        $('<td>' + value[1] + '</td>').appendTo('tr:first')
        
        
        // 计算下一项
        i ++
        //迭代
        if(!isStop){
             calc() 
        }
    })

}

//调用
calc()

//记录是否停止
var isStop = false 
$('button').click(function(){
    isStop = true 
    worker.terminate()
    $(this).text('停止啦！')
})




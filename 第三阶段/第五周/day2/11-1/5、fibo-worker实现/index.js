var worker = new Worker('worker.js')
var i = 1 
worker.onmessage = function(ev){
    //把数据显示到页面上
    $('table').prepend('<tr><td>第'+i+'项</td><td>'+ev.data+'</td></tr>')
    i++
    worker.postMessage(i)
}
worker.postMessage(i)

$('button').click(function(){
    worker.terminate()
})
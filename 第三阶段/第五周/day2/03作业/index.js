var count=0
var i=1
var timer
$('button').click(function(){
    count++
    var worker = new Worker('worker.js')
    if(count % 2 !=0){
        console.log(count)
        function show(){
            //接收分线程中的数据
            worker.onmessage = function(ev){
                //alert(ev.data)
                $('table').prepend('<tr><td>第'+i+'项</td><td>'+ev.data+'</td></tr>')
                i++
                //worker.postMessage(i)

            }

            worker.postMessage(i)
        }
        timer=setInterval(show,1000)
    }

    else{

        worker.onmessage = function(ev){
            //终止worker(内部销毁分线程)
            worker.terminate()
        }
        clearInterval(timer)
    }






})

var i=1
var timer
$('button').click(function(){
    var worker = new Worker('worker2.js')

    worker.onmessage = function(ev){
        var promise1 = new Promise(function(resolve,reject){
            var div ='<tr><td>第'+i+'项</td><td>'+ev.data+'</td></tr>'
            if(div){
                resolve($('table').prepend(div))
            }else{
                reject('失败')
            }
        })
        var promise = Promise.all([promise1])
        promise.then(function(value){
            console.log('成功')
            //console.log(value)
        }).catch(function(er){
            console.log('失败')
        })
        i++
        worker.postMessage(i)
    }
    worker.postMessage(1)
})

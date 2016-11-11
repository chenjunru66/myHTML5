/**
 * Created by Administrator on 2016/9/12.
 */
var demo2 = document.querySelector('#demo2')
var xhr = new XMLHttpRequest()
function result(){
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            //console.log(xhr.responseText)
            var text = xhr.responseText
            var ress = '[' + text.substr(0,text.length - 1) + ']'
            var arr = JSON.parse(ress)
            var datas ={arrs:arr}
            var html = template('text',datas)
            $('#demo2').html(html)
            //console.log(arr)
            //console.log(datas)
            //
            //for(var i = 0 ;i < arr.length;i++){
            //    arr[i].index = i
            //    demo2.innerHTML += '<p class="m1">' + arr[i].infos.liuyan +'</p>'+ '<p class="m2">'+arr[i].date+'</p>'
            //}
        }
    }
    xhr.open('get', '/login')
    xhr.send()

}
result()
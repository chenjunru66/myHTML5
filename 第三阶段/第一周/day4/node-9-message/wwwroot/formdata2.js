/**
 * Created by Administrator on 2016/9/12.
 */
var btn = document.querySelector('#btn1')
var demo1 = document.querySelector('#demo1')
var f1 = document.querySelector('.f1')

var form = document.querySelector('form')
var xhr = new XMLHttpRequest()
form.onsubmit = function(ev){
    ev.preventDefault()
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            console.log(xhr.responseText)
            f1.style.display = 'block'
   f1.style.background = '#666666'
        }
    }
    var data = new FormData(form)
    xhr.open('post','/login')
    xhr.send(data)
}


// btn.onclick = function(){
//    f1.style.display = 'block'
//    f1.style.background = '#666666'
// }


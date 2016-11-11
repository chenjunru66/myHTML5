// 找到css位置 + ! + .css文件所在的位置
// css.js是reqiure的插件之一，根据插件中解析其中的代码
//require(['../libs/template','../libs/text!../text.html'], function(template,aa){
//     alert('css.js 已经加载完成')
//     console.log(template)
//     console.log(aa)
//     var bb = template.compile(aa)
//     var data = bb({
//         username:'liu',
//         password:'123456',
//         age:18
//     })
//   console.log(data)
//    document.body.innerHTML=data
//})


require(['../libs/template','../libs/text!../abc.txt'], function(template,aa){
    alert('css.js 已经加载完成')
    //console.log(template)
    //console.log(aa)
   //  var bb = template.compile(aa)
   //  var data = bb({
   //      username:'liu',
   //      password:'123456',
   //      age:18
   //  })
   //console.log(data)
   document.body.innerHTML=aa
})
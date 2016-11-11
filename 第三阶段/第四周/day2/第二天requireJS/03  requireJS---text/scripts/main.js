// 引入文档内容
// text.js是requireJS的插件之一，引入相关的文档并解析


// text.js路径 + ! + 文档所在位置
//require(['../libs/template', '../libs/text!../text.txt'],
//    function(template , aa){
//    //console.log(template)
//    //    console.log(aa)   // 模板内容
//    //  根据模板文件及其方法，编译当前的模板生成一个模板解析函数
//    var bb = template.compile(aa)
//        //console.log(bb)
////        赋值
//        var data = bb({
//            username:'yan',
//            password:'1234567',
//            age:18
//        })
//
//        console.log(data)
//        document.body.innerHTML = data
//})

require(['../libs/text!../abdc.txt'], function(aa){
    console.log(aa)
    document.body.innerHTML = aa
})
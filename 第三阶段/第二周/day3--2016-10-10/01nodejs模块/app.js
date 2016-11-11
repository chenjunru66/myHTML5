//nodejs环境,一个JS文件可称之为模块，多个JS文件放置在文件夹中，可称这个文件夹为模块包

//当前模块如果想调用另一个模块，需要引入模块（require）
//function show(name){
//    return console.log(name)
//}
//show('chen')
//当前模块A如果想调用另一个模块，B需要引入模块(require)
//A导入  (require) 模块B
//B通过module.exports到处模块A所需要的东西

var show = function(name,age){
    this.name = name,
    this.age = age,
    this.run = function(){
        console.log(name +'已经' + age + '岁了，会跑步')
    }
}
//var set = new show('chen',19)
//set.run()
//exports:出口
module.exports = show


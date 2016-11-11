// --------Backbone.Events对象----------------
// var obj = {}
// // 将Backbone.Events对象扩展到obj，obj就有了绑定和触发自定义事件的能力
// _.extend(obj,Backbone.Events)
// // 监听事件
// obj.on('alert',function(data){
//     alert(data)
// })
// //触发事件
// obj.trigger('alert','backbone赋予对象绑定和触发自定义事件的能力')


//
// var baby  = {}
// _.extend(baby,Backbone.Events)

// var mother = {}
// _.extend(mother,Backbone.Events)
// // 一个对象可以监听另一个对象触发的事件
// mother.listenTo(baby,'cry',function(){
//     alert('听到小孩哭了')
// }) 

// baby.trigger('cry')

// -------------Backbone.Model--------

// // 新建Student类，继承于Backbone.Model
// // para1:向原型中添加的方法、属性 (实例方法)
// // para2：向构造函数上添加的方法、属性 (类方法)
// var Student = Backbone.Model.extend({
//     //添加属性以及属性的默认值;存在于attributes和原型的defaults中；
//     defaults:{
//         name:'名字',
//         age:20,
//         sex:'male',
//         phone:''
//     },
//     sayHello:function(){
//         console.log('helloWorld')
//     },
//     study:function(){
//         console.log('夙兴夜寐')
//     },
//     // 初始化方法；
//     // 创建完对象，会自动调用初始化方法进行对象的初始设置
//     initialize:function(){
//         console.log('初始化对象')
//     }
// },{
//     say:function(){
//         console.log('say')
//     }
// })

// //新建一个Student对象
// var xiaoMing = new Student()
// console.log(xiaoMing)
// xiaoMing.sayHello()
// xiaoMing.study()
// Student.say()
// xiaoMing.on('change:name',function(model){
//     console.log('xiaoMing的属性变化了')
//     console.log(model)
//     // 可以获取属性修改之前的值：旧值
//     console.log(model.previous('name'))
// })

// // 这样写，可以修改属性，但是不会触发change事件
// // xiaoMing.attributes.age = 18
// // 修改age属性值为18
// // 修改attributes中属性
// // 采用set方法可以触发change事件
// // xiaoMing.set('age',18)
// xiaoMing.set({age:18,name:'小明'})

// // 取值
// var name = xiaoMing.get('name')
// console.log(name)

// // 把attributes中属性转化为json对象
// var xiaoMingJSON = xiaoMing.toJSON()
// console.log(xiaoMingJSON)


// =========================
// MVC、restfull、backbone（events、model）


// ===========Backbone.Collection======
// 新建一个Book类 Model
var Book = Backbone.Model.extend({
    defaults:{
        name:'',
        author:'',
        index:''
    }
})
// 新建一个集合类
var Library = Backbone.Collection.extend({
    // 指定集合中存储的模型对象的类型
    model:Book
})

// 新建一个Library对象
var lib = new Library()
console.log(lib)

// 向集合中添加一个model对象
var book = new Book({
    name:'javaScript',
    author:'阮一峰',
    index:'00001'
})
console.log(book)
// 把一个model类型的对象添加到集合中
lib.add(book)
console.log(lib)

// 如果传入的参数不是model类型的对象，而是普通对象
// 内部会自动转化为model类型的对象，然后再添加到collection中
lib.add({name:'HTML5从入门到精通',author:'廖雪峰',index:'0002'})

// 一次添加多个model
lib.add([
    {name:'CSS入门',author:'佚名',index:'0003'},
    {name:'web前端开发',author:'小明',index:'0004'},
    {name:'NodeJS基础',author:'小青',index:'0005'}
])
console.log(lib)

var names = lib.pluck('name')
console.log(names)



// -------------Backbone.View--------------
// 新建一个视图类
var View = Backbone.View.extend({
    // 说明视图类控制的html范围
    el:'body',
    // 事件绑定
    events:{
        // '事件名称  选择器':'回调函数名称'
        'click button':'helloWorld',
        'dblclick p':'sayHello'
    },
    helloWorld:function(){
        alert('你好')
    },
    sayHello:function(){
        alert('双击p')
    },
    // 创建完视图对象会自动调用的方法，进行视图的初始化操作
    initialize:function(){
        console.log('视图的初始化')

        //假设页面加载时，展示所有的书

        // 找到与视图关联的model
        console.log(this.model)
        // 把model中数据转化为json
        var array =  this.model.toJSON()
        // 采用arttemplate编译得到html
        var html = template('books',{arr:array})
        console.log(html)
        // 把html添加到$el中
        // $el：是el指向的标签封装的jquery对象
        this.$el.append(html)
    }
})

// 新建一个视图对象
// 传递{model:}参数，指明与视图相关联的数据模型
// （可以是Model类的对象，也可以是Collection类的对象）
var view = new View({model:lib})
console.log(view)




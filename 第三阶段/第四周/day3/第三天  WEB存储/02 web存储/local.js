/**
 * Created by Administrator on 2016/10/26.
 */
// 存储数据是保存在Storage 对象中
console.log( localStorage )
$('#set').click(function(){
    localStorage.setItem('name', 'lily')
    localStorage.setItem('age', 18)
    localStorage.setItem('isMale', false)


    console.log( localStorage )
})

$('#get').click(function(){

    // 遍历获取所有的存储数据
    for( var i = 0; i < localStorage.length; i++ ){
        var datas = localStorage.key(i)
        data = localStorage.getItem(datas)
      // 对data进行解析，不确定data是否为以对象存在的数据
      //  错误代码调试
    /* try和catch同时存在，catch(param)参数 不可少
      try{ 测试代码(可能会出错的代码) }
      catch(param){ 不符合测试代码的数据会被捕获到，并输出 }
    */
        try {
            var values = JSON.parse(data)
            console.log( typeof values )
        } catch (err){
            console.log('不是JSON数据')
            console.log( typeof data)
        }
    }

})



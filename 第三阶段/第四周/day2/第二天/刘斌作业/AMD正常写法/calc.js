// 获取表单按钮/按钮/计算区域的标签
var form = document.getElementsByTagName('form')[0];
var button = document.getElementsByTagName('button')[0];
var section = document.getElementsByTagName('section')[0];


//function 创建函数 ，名称自定义 name();
function hide() {
    section.style.dispaly='none';
    // 给section加入一个style为dispaly=none这个属性
    // 如上写法
}
// 添加监听事件
//eventL:是事件名，function 执行方法
form.addEventListener('input',hide);
button.addEventListener('click',calc);
//计算方法
function calc() {
    // 获取数值,数据类型
        var jishu = document.getElementById('jishu').value;
    
    var jixiao = document.getElementById('jixiao').value;
    var jiangjin = document.getElementById('jiangjin').value;
    
    // alert(jishu);
    // var jishu = typeof(jishu);判断获取数值的数据类型
    // alert(jishu)
    //数据类型转换。浮点数；
    // parseFloat()解析字符串，并返回浮点数
    jishu = parseFloat(jishu)
    jixiao = parseFloat(jixiao)
    jiangjin = parseFloat(jiangjin)
    
    var zonge =jishu + jixiao +jiangjin
    // NaN: not a number 下面的意思是判断输出的值是不是个数子
    // 如果不是则不输出代码执行到此，如果是则输出，下面的return是返回的意思。
    if( isNaN(zonge)) return;
    
    if( zonge < 2000){
        alert('工资太低你个穷逼！')
        return;
    }
    // 获取在HTML中id为zonge的标签的使其内容进行改变
    // toFixed(N),保留N个小数点
    document.getElementById('zonge').innerHTML = zonge.toFixed(2);
    
    // alert(zonge)
    
    section.style.display = 'block'
    
}
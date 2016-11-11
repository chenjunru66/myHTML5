
define(function(){
    // 参数指代输入框的内容
    // 计算方法
    function calc(jishu,jixiao,jiangjin){
        jishu = parseFloat(jishu)
        jixiao = parseFloat(jixiao)
        jiangjin = parseFloat(jiangjin)

        if( isNaN( jishu + jixiao + jiangjin ) )  return
    //    三者之和为数字，代码往下执行
        if( jishu + jixiao + jiangjin  < 2000 ){
            alert('工资低于2000')
            return
        }

        var zonge = jishu + jixiao + jiangjin
        zonge = zonge.toFixed(2)  // 保留两位小数

        var yanglao = zonge * 0.08,
            yiliao = zonge * 0.02,
            shiye = zonge * 0.05,
            gongjijin = zonge * 0.08,
            shifa = zonge - yanglao - yiliao - shiye - gongjijin

        yanglao = yanglao.toFixed(2)
        yiliao = yiliao.toFixed(2)
        shiye = shiye.toFixed(2)
        gongjijin = gongjijin.toFixed(2)
        shifa = shifa.toFixed(2)

        return {
            zonge, yanglao, yiliao, shiye, gongjijin, shifa
        }
    }

    //mod.exports =  calc

    return calc
})



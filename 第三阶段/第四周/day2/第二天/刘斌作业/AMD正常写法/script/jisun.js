
//    console.log($)
   $(function () {

    $('button').click(function () {
        // $('section').css('dispaly','block')
        var jishu = $('#jishu').val()
        var jixiao = $('#jixiao').val()
        var jiangjin = $('#jiangjin').val()


        jishu = parseFloat(jishu)
        jixiao = parseFloat(jixiao)
        jiangjin = parseFloat(jiangjin)
    
        var zonge = jishu + jixiao + jiangjin
        var yanglao = zonge * 0.08
        var yiliao = zonge * 0.02
        var shiye = zonge * 0.05
        var gongjijin = zonge * 0.08
        var shifa = zonge - yanglao - yiliao - shiye - gongjijin
        shifas = shifa.toFixed(2)
        if (zonge < 2000) {
            alert('工资太低你个穷逼！')
            return;
        }
        $('#yanlao').html(yanglao)
        $('#yanlao').html(yiliao)
        $('#yanlao').html(shiye)
        $('#yanlao').html(gongjijin)
        $('#shifa').html(shifas)
          
        $('section').css({"display":"block"})
        

    })


})
    

 








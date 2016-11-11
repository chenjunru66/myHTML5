/**
 * Created by Administrator on 2016/9/26.
 */
//$(function(){
//    var lis = $('.box').find('li')
//    lis.each(function(index){
//        //console.log(lis.eq(index).position().left)
//         lefts = lis.eq(index).position().left
//        //console.log(lefts)
//        //var ins = index + 1
//        if(index == 0 ){
//            lefts = lis.last().position().left
//        }else{
//            lefts = lis.eq(index - 1).position().left
//        }
//        console.log(lefts)
//    //    当前元素的left为上一个元素的，即5用4,4用3
//
//            $(this).stop().animate({
//               left:lefts
//            },1000)
//
//    })
//})
  $(function(){
  //    设置所有的li标签的css属性
      var lisCss = [
          {width:250,height:143,left:200,top:78,$opacity:0.5,zIndex:1},
          {width:300,height:171,left:0,top:65,$opacity:0.5,zIndex:2},
          {width:320,height:221,left:220,top:35,$opacity:0.5,zIndex:3},
          {width:390,height:241,left:380,top:25,$opacity:1,zIndex:4},
          {width:320,height:221,left:650,top:35,$opacity:0.5,zIndex:3},
          {width:300,height:171,left:800,top:65,$opacity:0.5,zIndex:2},
          {width:250,height:143,left:750,top:78,$opacity:0.5,zIndex:1}
      ]
      var timer
      var lis = $('.box').find('li')
     function move(){
         lis.each(function(ins){

             $(this).css('zIndex',lisCss[ins].zIndex).stop(true,true).animate(lisCss[ins]).find('img').css('opacity',lisCss[ins].$opacity)

         })
     }


  //    如何把数组元素的最后一个元素放置在第一个元素的位置上
      function next(){
          lisCss.unshift(lisCss.pop())
          move()
      }
   //next()
      function play(){
          timer = setInterval(next,3000)
      }
      function stop(){
          clearInterval(timer)
      }

      function prev(){
          lisCss.push( lisCss.shift)
      }

      $('#pre').click(function(){
          stop()
          prev()
          play()
      })
      $('#next').click(function(){
          stop()
          next()
          play()
      })
      move()
      play()
  })

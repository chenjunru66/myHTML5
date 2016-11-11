/**
 * Created by Administrator on 2016/10/10.
 */
var result = require('./app')//app后面不用跟着.js

result.prototype.sing = function(){
    console.log('会唱歌')
}

module.exports = result
//var set = new result('chen',19)
////set.run()
//////result('小米',19)
////console.log(set)
//set.sing = function(){
//    console.log(name + '会唱歌')
//}
//console.log(set)
//console.log(result)
////var nows = function(sing){
////    this.sing = set.run()
////}
//
//var set2 = new result('chen',23)
//console.log(set2)
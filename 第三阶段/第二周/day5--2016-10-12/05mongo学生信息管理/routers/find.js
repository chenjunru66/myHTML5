var express = require('express')
var bodyParser = require('body-parser')
var router = express.Router()

var Student = require('./studb')

router.post('/find',function(req,res){
    //function send(code, message){
    //    res.status(200).json({code, message})
    //}
var  mess = req.body

  var text =  JSON.stringify(mess)
    //console.log(text)
    //console.log( text.length)
var texts = text.substring(9, text.length - 2 )
    //var textss = parseInt(text)
    //console.log(textss)
    //console.log(texts)
     Student.find({
    //name:texts
        $or:[
            {name:texts},
            {num:texts},
            {phone:texts},
            {address:texts},
            {email:texts}
        ]
    //     $or:[
    //         {name:'分机'},
    //         {num:201315502},
    //         {phone:111111},
    //         {address:'福建省'},
    //         {email:'4645646@qq.com'}
    //     ]
    },function(err,data){
             if(err){

             }else{
                 //console.log(data)
                res.send(data)

             }
     })

})

module.exports = router
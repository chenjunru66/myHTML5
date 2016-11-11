var express = require('express')
var router = express.Router()

var User = require('./messdb')
router.post('/user/register',function(req,res){
      //console.log(req.body)
    var text = req.body
    function send(code, message){
        res.status(200).json({code, message})
    }

    var petnames = text.petname
    //console.log(petnames)
    User.find({petname:petnames}).count(function(err,counts){
        //console.log(counts)
        if(err){
            res.send('error','系统错误')
        }else{
            if(counts == 0){
                    var user = new User(text)
                    //console.log(user)
                    user.save(function(errs,data){
                        if(!errs){
                            //console.log(data)
                            send('success','恭喜，注册成功，请登录')
                        }else{
                            send('failed','注册失败')
                        }
                    })
            }else if(counts != 0){
                //console.log(data)
                send('registered', '该用户已注册')

            }
        }
    })





})




module.exports = router
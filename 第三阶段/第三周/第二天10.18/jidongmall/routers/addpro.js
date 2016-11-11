var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer')

var productModel = require('./db/dbmanadd')

var storage = multer.diskStorage({
        destination: "www/uploads",
        filename: function(req,file,callback){
            var proname = req.body.proname
            //console.log(req.body)
            //var times = (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString()
            callback(null,  proname + '.jpg')

        }
    }),
    uploads = multer({storage})
//console.log(times)
var router = express.Router()
router.post("/user/add",uploads.single("photos"), function(req,res){
    //console.log('111')
    //console.log(req.body)
    function send(code, message){
        res.status(200).json({code, message})
    }



    productModel.find({proname:req.body.proname}).count(function(err,count){
        if(err){
            send('error','系统错误')
        }else{
            //console.log(count)
            if(count == 0){

                var time = (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString()
                var uname = req.cookies.uname
                var ids = req.cookies.ids
                req.body.time = time
                req.body.uname = uname
                req.body.ids = ids
                var  p= req.body.price
                req.body.price = parseInt(p).toFixed(2)
                //  console.log(typeof parseInt(p))
                //console.log(p.toFixed(2))
                var product = new productModel(req.body)

                product.save(function(err,data){
                    //console.log(data)
                    if(err){
                       send('error','系统错误')
                    }else{
                        send('success','添加商品成功')
                    }
                })
            }else{
                send('failed','该商品已添加')
            }
        }

    })
    //res.status(200).json({code:'success', message:'上传成功,'})
})

module.exports= router


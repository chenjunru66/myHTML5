var express = require('express')
var multer = require('multer')
var router = express.Router()
var form = multer()
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
//设置文件存储
router.use(bodyParser.urlencoded({extended:false}))
router.use(cookieParser())
var storage = multer.diskStorage({
        destination: 'www/uploads',
        filename: function(req, file, callback){
            var petname = req.cookies.petname

            callback(null, petname + '.jpg')
        }
    })
 var uploads = multer({storage})
//console.log(uploads)
router.post('/user/photo',uploads.single('photo'), function(req, res){
    //console.log(req.body)
    res.status(200).json({code:'success', message:'上传成功,'})

})

module.exports = router
var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer')

var router = express.Router()
var storage = multer.diskStorage({
        destination: "www/uploads",
        filename: function(req, file, callback){
            var petname = req.cookies.petname
            callback(null, petname + '.jpg')
        }
    }),
    uploads = multer({storage})
router.post("/user/photo",uploads.single("photo"), function(req,res){
    console.log('aaa')
    res.status(200).json({code:'success', message:'上传成功,'})
})

module.exports = router
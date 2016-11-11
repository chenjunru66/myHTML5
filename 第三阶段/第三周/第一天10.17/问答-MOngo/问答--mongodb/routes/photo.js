var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')
var fs = require('fs')
var cookieParser = require('cookie-parser')
var template = require('art-template')
var router = express.Router()

//存储上传的文件
var storage = multer.diskStorage({
    //设置存储的文件路径
    destination: 'wwwroot/uploads',
    //文件名称
    filename: function (req, file, cb) {
        var username = req.cookies.username
        cb(null, username + '.jpg')
    }
})
//文件上传设置
var uploads = multer({ storage: storage })

router.post('/user/photo',uploads.single('photo'), function (req, res) {
    res.status(200).json({code:'success',message:'头像上传成功'})
})

module.exports = router
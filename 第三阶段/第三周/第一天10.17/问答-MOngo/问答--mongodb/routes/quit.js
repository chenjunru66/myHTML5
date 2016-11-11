var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')
var fs = require('fs')
var cookieParser = require('cookie-parser')
var template = require('art-template')
var router = express.Router()

router.get('/user/signout', function (req, res) {
    res.clearCookie('username')
    res.status(200).json({'code':'success'})
})

module.exports = router
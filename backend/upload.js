var express = require('express')
var multer = require('multer')
var path = require('path')
var helpers = require('./helpers')

const router = express.Router()

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'uploads')
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

router.post('/', function (req, res) {
    var upload = multer({
        storage: storage,
        fileFilter: helpers.imageFilter
    }).single('userFile');
    upload(req, res, function (err) {


        if (req.fileValidationError) {
            return res.status(400).send({ 'errorText': req.fileValidationError });
        }
        else if (!req.file) {
            return res.status(400).send({ 'errorText': 'Please select an image to upload' });
        }
        else if (err instanceof multer.MulterError) {
            return res.send({ 'errorText': err });
        }
        else if (err) {
            return res.send(err);
        }
        res.send({ 'status': 'File is uploaded' })
    })
})

module.exports = router


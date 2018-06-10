var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'public/uploads' })

router.post('/upload', upload.single(), function (req, res, next) {
  req.send(req.files)
  res.render('survivor/upload')
  
})
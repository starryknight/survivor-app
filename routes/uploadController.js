var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'public/uploads' })
const Survivor = require('../models/Survivor')

router.get('survivor/upload', (req, res) => {
  res.render('survivor/upload')
})

router.post('/upload', upload.single(), function (req, res, next) {
  req.send(req.files)
})


module.exports = router
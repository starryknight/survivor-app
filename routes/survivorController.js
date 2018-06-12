var express = require('express');
var router = express.Router();

const Survivor = require('../models/Survivor')


// localhost/survivor
router.get('/', (req, res, next) => {

  // Find all Survivors
  Survivor
    .find()
    .then((listOfSurvivors) => {

      res.render('survivor/index', { listOfSurvivors: listOfSurvivors })
    })
    .catch((err) => res.send(err))

})

//-----NEW Route------
router.get('/new', (req, res) => {
  res.render('survivor/new')
})

// CREATE Route
router.post('/', (req, res) => {
  const newSurvivor = req.body
  Survivor
    .create(newSurvivor)
    .then(() => {
      res.redirect('/survivor')
    })
})

//------SHOW Route--------
router.get('/:id', (req, res) => {
  Survivor
    .findById(req.params.id)
    .then((survivorInstance) => {
      res.render('survivor/show', { survivorInstance })
    })
})

//----EDIT Route-------
router.get('/:id/edit', (req, res) => {
  Survivor
    .findById(req.params.id)
    .then((survivorInstance) => {
      res.render('survivor/edit', { survivorInstance: survivorInstance })
    })
})

//-----UPDATE Route--------
router.put('/:id', (req, res) => {
  Survivor.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
    res.redirect(`/survivor/${req.params.id}`)
  })
})

//----DELETE Route--------
router.delete('/:id', (req, res) => {
  Survivor.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log('Successfully Delete ')
      res.redirect('/survivor')
    })
})

//------UPLOAD Route------
router.get('/upload', (req, res) => {
  res.render('survivor/upload')
})

module.exports = router
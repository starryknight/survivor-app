
const express = require('express')
const router = express.Router({ mergeParams: true })
const Survivor = require('../models/Survivor')
const Medical = require('../models/Medical')

/* GET listing. */

router.get('/', (req, res, next) => {

  // use survivorId to find Survivor assignment
  Survivor.findById(req.params.survivorId)
    .then((survivor) => {
      const medicals = survivor.medicals
      res.render('medical/index', {
        medicals
      })
    })

  // take the medical and apply them to a 
  // hbs file
})

// NEW Route
router.get('/new', (req, res) => {
  res.render('medical/new', {
    survivorId: req.params.survivorId
  })
})

// CREATE Route
router.post('/', (req, res) => {

  // make medical req.body
  const medical = new Medical(req.body)

  // get survivor assignment by the id
  Survivor.findById(req.params.survivorId)
    .then((survivorInstance) => {

      // push new medical to medicals
      survivorInstance.medicals.push(medical)

      // save the survivor assignment
      return survivorInstance.save()
    })
    .then(() => {

      // redirect to medicals
      res.redirect(`/survivor/${req.params.survivorId}`)
    })
})

// DELETE Route
router.delete('/:id', (req, res) => {

})

module.exports = router
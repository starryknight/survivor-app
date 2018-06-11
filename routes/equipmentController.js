
const express = require('express')
const router = express.Router({ mergeParams: true })
const Survivor = require('../models/Survivor')
const Equipment = require('../models/Equipment')

/* GET listing. */

router.get('/', (req, res, next) => {

  
  Survivor.findById(req.params.survivorId)
    .then((survivor) => {
      const equipments = survivor.equipment
      res.render('equipment/index', {
        equipments
      })
    })

  
})

// NEW Route
router.get('/new', (req, res) => {
  res.render('equipment/new', {
    survivorId: req.params.survivorId
  })
})

// CREATE Route
router.post('/', (req, res) => {

  // make equipment req.body
  const equipment = new Equipment(req.body)

  // get survivor assignment by the id
  Survivor.findById(req.params.survivorId)
    .then((survivorInstance) => {

      // push new equipment to equipments
      survivorInstance.equipments.push(equipment)

      // save the survivor assignment
      return survivorInstance.save()
    })
    .then(() => {

      // redirect to equipments
      res.redirect(`/survivor/${req.params.survivorId}/equipment`)
    })
})

// DELETE Route
router.delete('/:id', (req, res) => {

})

module.exports = router
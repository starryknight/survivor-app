const mongoose = require('mongoose')
const equipmentSchema = require('../db/schemas/equipmentSchema')

const Equipment = mongoose.model('equipment', equipmentSchema)

module.exports = Equipment
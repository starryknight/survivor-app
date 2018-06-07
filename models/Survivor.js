const mongoose = require('mongoose')
const survivorSchema = require('../db/schemas/survivorSchema')

const Surivor = mongoose.model('homework', survivorSchema)

module.exports = Survivor
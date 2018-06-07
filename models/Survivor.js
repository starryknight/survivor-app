const mongoose = require('mongoose')
const survivorSchema = require('../db/schemas/survivorSchema')

const Survivor = mongoose.model('survior', survivorSchema)

module.exports = Survivor
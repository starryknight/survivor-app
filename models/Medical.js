const mongoose = require('mongoose')
const medicalSchema = require('../db/schemas/medicalSchema')

const Medical = mongoose.model('comment', medicalSchema)

module.exports = Medical
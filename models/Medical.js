const mongoose = require('mongoose')
const medicalSchema = require('../db/schemas/medicalSchema')

const Medical = mongoose.model('medical', medicalSchema)

module.exports = Medical
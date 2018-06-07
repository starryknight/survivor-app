const mongoose = require('mongoose')
const commentSchema = require('../db/schemas/equipmentSchema')

const Equipment = mongoose.model('comment', equipmentSchema)

module.exports = Equipment
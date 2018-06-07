const Schema = require('mongoose').Schema

const equipmentSchema = new Schema({
  body: String,
  submittedBy: String,
  score: Number
})

module.exports = equipmentSchema
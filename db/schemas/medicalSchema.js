const Schema = require('mongoose').Schema

const medicalSchema = new Schema({
  type: String,
  quantity: Number,
  frequency: String
})

module.exports = medicalSchema
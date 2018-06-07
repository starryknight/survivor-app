const Schema = require('mongoose').Schema

const medicalSchema = new Schema({
  body: String,
  submittedBy: String,
  score: Number
})

module.exports = medicalSchema
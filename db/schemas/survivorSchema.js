const Schema = require('mongoose').Schema
const medicalSchema = require('./medicalSchema')
const equipmentSchema = require('./equipmentSchema')

const survivorSchema = new Schema({
  firstName: String,
  lastName: String,
  description: String,
  dateOfBirth: {
    type: Date,
    default: new Date()
  },
  location:String,
  photo:String,
  diagnosis: String,
  sex: String,
  ssn:Number
  medicals: [ medicalSchema ]
  equipments: [equipmentSchema]
})

module.exports = survivorSchema
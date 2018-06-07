const Schema = require('mongoose').Schema

const equipmentSchema = new Schema({
  type: String,
  size: Number,
  quantity: Number,
  picture:String
})

module.exports = equipmentSchema
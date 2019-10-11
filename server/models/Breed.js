
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const breedSchema = new Schema({
  name: String,
  energy: Number,
  exercise: Number,
  affection: Number,
  watchfulness: Number,
  heatSensitivity: Number
})

const Breed = mongoose.model('Breed', breedSchema)
module.exports = Breed;
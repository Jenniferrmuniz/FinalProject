const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  // preferences: {
  //   location: String,
  //   children: String,
  //   otherPets: String,
  //   age: String,
  //   size: String,
  //   active: String,
  //   affection: String,
  //   watchful: String,
  //   heat: String
  // }  
  preferences: {}
})

const User = mongoose.model('User', userSchema)
module.exports = User
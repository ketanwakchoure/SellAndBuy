const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  emailId: String,
  password: String,
  admin: Boolean
})

const model = mongoose.model('User',userSchema)
module.exports = model
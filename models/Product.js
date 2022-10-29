const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: String,
  price: Number,
  user: String,
  isApproved: Boolean
})

const model = mongoose.model('Product',productSchema)
module.exports = model
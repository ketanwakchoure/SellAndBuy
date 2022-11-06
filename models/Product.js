const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')

const productSchema = new Schema({
  name: {
    type: String, 
    required: true, 
    maxLength: [25,"max length of name should be 25 please"]
  },
  price: {
    type: Number,
    required: [true, "name is required"],
    minimum: 0
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  _userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "user id is required"]
  },
  description: {
    type: String,
    required: true, 
    maxLength: [200,"max length of name should be 25 please"]
  }
})

module.exports = mongoose.model('Product',productSchema)

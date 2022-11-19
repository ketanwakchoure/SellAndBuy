const User = require('../models/User')
const Products = require('../models/Product')

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Products.find()
    res.status(200).json({
      status: 'success',
      total: products.length,
      data: {
        products
      }
    })
  } catch (err) {
    // error handler to be implemented
  }
}

exports.getProduct = async (req, res, next) => {
  try {
    const products = await Products.find({_id: req.params.id})
    res.status(200).json({
      status: 'success',
      data: {
        products
      }
    })
  } catch (err) {

  }
}

exports.postProduct = async (req, res, next) => {
  try {
    const products = await Products.create(req.body)
    res.status(201).json({
      status: 'success',
      data: {
        products
      }
    })
  } catch (err) {
    
  }
}

exports.updateProduct = async (req, res, next) => {
  try {
    
  } catch (err) {

  }
}

exports.deleteProduct = async (req, res, next) => {
  try {
    
  } catch (err) {

  }
}
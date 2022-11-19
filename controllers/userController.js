const User = require('../models/User')
const Products = require('../models/Product')

exports.getAllUsers = async (req, res, next) => {
  let usersdoc
  try {
    usersdoc = await User.find()
  } catch (err) {
    next(err)
  }
  return res.status(200).json(usersdoc)
}

exports.getUser = async (req, res, next) => {
  let usersdoc,_userId = req.params.id
  try {
    usersdoc = await User.find({_id: _userId})
  } catch (err) {
    next(err)
  }
  return res.status(200).json(usersdoc)
}

exports.postUser = async (req, res, next) => {
  try {
    const usersdoc = await User.create(req.body)
    return res.status(201).json({
      status: 'success',
      data: usersdoc
    })
  } catch (err) {
    return next(err)
  }
}

exports.updateUser = async (req, res, next) => {
  try {
    const _id = req.params.id
    const usersdoc = await User.findByIdAndUpdate(_id, req.body,{
      new: true
    })
    return res.status(200).json({
      status: 'success',
      data: usersdoc // need to remove few fields
    })
  } catch (err) {
    return next(err)
  }
}

exports.deleteUser = async (req, res, next) => {
  try {
    const _id = req.params.id
    const usersdoc = await User.findByIdAndDelete(_id)
    return res.status(204).json({
      status: 'success'
    })
  } catch (err) {
    return next(err)
  }
}


exports.getUserProducts = async (req, res, next) => {
  // users/:id/products
  try {
    const products = await Products.find({_userId: req.params.id})
    res.status(200).json({
      status: 'success',
      total: products.length,
      data: {
        products
      }
    })
  } catch (err) {
    next(err)
  }
}
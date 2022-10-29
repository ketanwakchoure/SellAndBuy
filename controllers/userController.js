const User = require('../models/User')


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
      data: req.body
    })
  } catch (err) {
    return next(err)
  }
}


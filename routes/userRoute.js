const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')

router.route('/:id/products')
  .get(userController.getUserProducts)

router.route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser)

router.route('/')
  .get(userController.getAllUsers)
  .post(userController.postUser)
  .delete() // only few roles can do this operation

module.exports = router
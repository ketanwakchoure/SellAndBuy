const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.route('/:id')
  .get(userController.getUser)
  .patch()
  .delete()

router.route('/')
  .get(userController.getAllUsers)
  .post(userController.postUser)
  .delete()

module.exports = router
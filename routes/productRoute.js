const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.route('/:id')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct)

router.route('/')
  .get(productController.getAllProducts)
  .post(productController.postProduct)
  .delete() // only for few roles

  module.exports = router
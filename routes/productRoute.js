const express = require('express')
const router = express.Router()


router.route('/product/:id')
  .get()
  .post()
  .patch()
  .delete()

router.route('/products')
  .get()
  .post()
  .patch()
  .delete()
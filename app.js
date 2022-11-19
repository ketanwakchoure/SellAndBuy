'use strict'
const express = require('express')
const req = require('express/lib/request')
const userRoute = require('./routes/userRoute')
const productRoute = require('./routes/productRoute')

const app = express()

app.use(express.json())

app.use('/sbv1/user', userRoute)
app.use('/sbv1/product', productRoute)

module.exports = app



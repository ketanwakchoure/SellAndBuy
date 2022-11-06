'use strict'
const express = require('express')
const userRoute = require('./routes/userRoute')

const app = express()

app.use(express.json())

app.use('/sbv1/user', userRoute)

module.exports = app



'use strict'
const dotenv = require('dotenv')
const mongoose = require('mongoose')
//set env variables in process
dotenv.config({path: './config.env'})

const app = require('./app')

//connect mongoDB
const DB_LINK = process.env.DB_LINK.replace('<password>', process.env.MONGO_PASSWORD)
mongoose.connect(DB_LINK, {
  useNewUrlParser : true,
  useUnifiedTopology: true 
})
  .then(()=>{
    console.log('DB connected successfully')
  })




//start server
const port = process.env.PORT || 3000
const localhost = process.env.LOCALHOST

const server = app.listen(port,localhost, () => {
  console.log(`server running on port ${port} & host ${localhost}`)
})

process.on('unhandledRejection', err => {
  console.log(err.name, err.message,"its an unhandled promise rejection")
  server.close(()=>{
    process.exit(1) 
  })
})
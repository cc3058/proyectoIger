const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
// MongoDB Driver
const mongoose = require('mongoose')

const port = 8080
const DB_URI = "mongodb://localhost:27017/igerDB" // mongodb://domain:port/database-name

// Connect to MongoDB
mongoose.connect(DB_URI)

mongoose.connection.once('connected', function() {
    console.log("Database connected to " + DB_URI)
})
mongoose.connection.on('error', function(err) {
    console.log("MongoDB connection error: " + err)
})
mongoose.connection.once('disconnected', function() {
    console.log("Database disconnected")
})

process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log("Database disconnected through app termination")
        process.exit(0);
    })
})

var users = require('./routes/api-posts')
app.use('/users', users)




app.listen(port, function() {
    console.log(`listening on port ${port}...`)
})

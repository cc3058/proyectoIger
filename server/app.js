const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport')
// MongoDB Driver
const mongoose = require('mongoose')

const port = process.env.PORT || 3000
const DB_URI = "mongodb://localhost:27017/igerDB" // mongodb://domain:port/database-name

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/igerDB')

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

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// Serve Static Files from /public
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use(session({
    name: 'sessionId',
    secret: "iger",
    saveUninitialized: false, 
    resave: false,
    
    // Where to store session data
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 1 * 24 * 60 * 60 // = 14 days. ttl means "time to live" (expiration in seconds)
    }),

    // cookies settings
    cookie: {
    	secure: false,  
    	httpOnly: false, // if true, will disallow JavaScript from reading cookie data
    	expires: new Date(Date.now() + 60 * 60 * 1000) // 1 hour;
    }
}))
// Passport Config
require('./config/passport')(passport); // pass passport for configuration

//Routes Config
require('./routes')(app)

// Passport init (must be after establishing the session above)
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Pass 'req.user' as 'user' to ejs templates
// Just a custom middleware
app.use(function(req, res, next) {
  res.locals.user = req.user || null;
  // res.locals is an object available to ejs templates. for example: <%= user %>
  next();
})



// Routes ----------------------------------------------
app.use('/api/posts', require('./routes/api-posts'))
app.use('/auth', 	  require('./routes/auth'))
app.use('/', 		  require('./routes/pages'))
app.use('/circulos',   require('./routes/circle-route'))
// -----------------------------------------------------

app.listen(port, function() {
    console.log(`listening on port ${port}...`)
})
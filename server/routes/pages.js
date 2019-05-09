const router = require('express').Router()
// Models
const User = require('../models/user')

// Static Pages ================================================================
router.get('/', function(req, res, next) {
    res.render('index')
})

router.get('/member', function(req, res, next) {
    if (req.isAuthenticated() && req.user.isAdmin()) {
        res.render('member')
    } else {
        res.sendStatus(403) // Forbidden
    }
})

router.get('/schedule', function(req, res, next) {
    if (req.isAuthenticated() && req.user.isAdmin()) {
        res.render('schedule')
    } else {
        res.sendStatus(403) // Forbidden
    }
})

router.get('/schedule_viewer', function(req, res, next) {
    if (req.isAuthenticated() && req.user.isAdmin()) {
        res.render('schedule_viewer')
    } else {
        res.sendStatus(403) // Forbidden
    }
})

router.get('/author', function(req, res, next) {
    if (req.isAuthenticated() && req.user.isStudent()) {
        res.render('author')
    } else {
        res.sendStatus(403) // Forbidden
    }
})

module.exports = router;
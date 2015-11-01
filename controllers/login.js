// controllers/index.js
var express = require('express');
var passport = require('passport');

var router = express.Router();

router.get('/', function (req, res) {
    res.render('login/index', {
        errorMessages: req.flash('error')
    });
});

router.get('/signup', function (req, res) {
    res.render('login/signup', {
        errorMessages: req.flash('error')
    });
});

router.get('/signup', function (req, res) {
    res.render('login/signup');
})

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect:    '/login',
    failureRedirect:    '/login/signup',
    failureFlash:       true,
    badRequestMessage:  'Hiányzó adatok'
}));

router.post('/', passport.authenticate('local', {
    successRedirect: '/raktar/list',
    failureRedirect: '/login',
    failureFlash: true,
    badRequestMessage: 'Hiányzó adatok'
}));

module.exports = router;
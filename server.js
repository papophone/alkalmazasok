var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
var flash = require('connect-flash');

var Waterline = require('waterline');
var waterlineConfig = require('./config/waterline');
var raktarCollection = require('./models/raktar');
var userCollection = require('./models/user');

var indexController = require('./controllers/index');
var raktarController = require('./controllers/raktar');
var loginController = require('./controllers/login');

//------------------------------------------------------

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use('local-signup', new LocalStrategy({
        usernameField: 'neptun',
        passwordField: 'password',
        passReqToCallback: true,
    },   
    function(req, neptun, password, done) {
        req.app.models.user.findOne({ neptun: neptun }, function(err, user) {
            if (err) { return done(err); }
            if (user) {
                return done(null, false, { message: 'Létező neptun.' });
            }
            req.app.models.user.create(req.body)
            .then(function (user) {
                return done(null, user);
            })
            .catch(function (err) {
                return done(null, false, { message: err.details });
            })
        });
    }
));

passport.use('local', new LocalStrategy({
        usernameField: 'neptun',
        passwordField: 'password',
        passReqToCallback: true,
    },
    function(req, neptun, password, done) {
        req.app.models.user.findOne({ neptun: neptun }, function(err, user) {
            if (err) { return done(err); }
            if (!user || !user.validPassword(password)) {
                return done(null, false, { message: 'Helytelen adatok.' });
            }
            return done(null, user);
        });
    }
));

function setLocalsForLayout() {
    return function (req, res, next) {
        res.locals.loggedIn = req.isAuthenticated();
        res.locals.user = req.user;
        next();
    }
}

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login');
}

//------------------------------------------------------

//ViewModel réteg
var app = express();
app.set('views', './views');
app.set('view engine', 'hbs');

// ORM példány
var orm = new Waterline();
orm.loadCollection(Waterline.Collection.extend(raktarCollection));
orm.loadCollection(Waterline.Collection.extend(userCollection));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'titkos szoveg',
    resave: false,
    saveUninitialized: false,
}));
app.use(flash());

//Passport middlewares
app.use(passport.initialize());
//Session esetén (opcionális)
app.use(passport.session());

app.use(setLocalsForLayout());

app.use('/', indexController);  //rákötöm a rootra az indexControllert
app.use('/raktar', ensureAuthenticated, raktarController);
app.use('/login', loginController);

app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

// ORM indítása
orm.initialize(waterlineConfig, function(err, models) {
    if(err) throw err;
    
    app.models = models.collections;
    app.connections = models.connections;
    
    // Start Server
    var port = process.env.PORT || 3000;
    app.listen(port, function () {
        console.log('Server is started.');
    });
    
    console.log("ORM is started.");
});
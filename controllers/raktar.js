// index controller js
var express = require('express');

var statusTexts = {
    'new': 'Beszállítás',
    'assigned': 'Eladás',
    'success': 'Selejt-árú',
    'rejected': 'Törött árú',
    'pending': 'Számlázott árú',
};
var statusClasses = {
    'new': 'success',
    'assigned': 'info',
    'success': 'warning',
    'rejected': 'warning',
    'pending': 'success',
};
var router = express.Router();

router.get('/list', function (req, res) {
    req.app.models.error.find().then(function (raktar) {
        //megjelenítés
        res.render('raktar/list', {
            raktar: decorateItems(raktar),
            messages: req.flash('info')
        });
    });
});
router.get('/new', function(req, res) {
    var validationErrors = (req.flash('validationErrors') || [{}]).pop();
    var data = (req.flash('data') || [{}]).pop();
    
    res.render('raktar/new', {
        validationErrors: validationErrors,
        data: data,
    }); 
});
router.post('/new', function (req, res) {
    // adat ellenor
    req.checkBody('osszeg', 'Hibás összeg').notEmpty().withMessage('Kötelező megadni!');
    req.sanitizeBody('leiras').escape();
    req.checkBody('leiras', 'Hibás leírás').notEmpty().withMessage('Kötelező megadni!');
    
    var validationErrors = req.validationErrors(true);
    
    if (validationErrors) {
        // adatok hibakkal urlapon
        req.flash('validationErrors', validationErrors);
        req.flash('data', req.body);
        res.redirect('/raktar/new');
    }
    else {
        req.app.models.error.create({
            status: req.body.tipus,
            osszeg: req.body.osszeg,
            description: req.body.leiras
        })
        .then(function (error) {
            req.flash('info', 'Árú sikeresen feltöltve!');
            res.redirect('/raktar/list');
        })
        .catch(function (err) {
            console.log(err);
        });
    }
});
//delete
router.get('/:id', function(req, res) {
    req.app.models.error.destroy({ 
        id: req.params.id
    })
    .then(function (error) {
        req.flash('info', 'Árú sikeresen törölve!');
        res.redirect('/raktar/list');
    })
    .catch(function (err) {
        console.log(err);
    });
    
});
//adatok leker es visszaad
router.get('/review/:id', function(req, res) {
    req.app.models.error.findOne({ id: req.params.id }).then(function (error) {
        res.render('raktar/review', {
            error: error
        }); 
    }); 
});
//formon modkor, adatok mentese
router.post('/review/:id', function (req, res) {
    req.app.models.error.update({ 
        id: req.params.id
    }, { 
        status: req.body.tipus,
        osszeg: req.body.osszeg,
        description: req.body.leiras
    })
    .then(function (error) {
        req.flash('info', 'Árú sikeresen frissítve!');
        res.redirect('/raktar/list');
    })
    .catch(function (err) {
        console.log(err);
    });
});

function decorateItems(itemContainer) {
    return itemContainer.map(function (e) {
        e.statusText = statusTexts[e.status];
        e.statusClass = statusClasses[e.status];
        return e;
    });
}

module.exports = router;
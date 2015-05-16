var express = require('express');
var router  = express.Router();
var db   = require('../models/db');


/* View all students in a <table> */
router.get('/gamestats', function (req, res) {
    db.GetAll(function (err, result) {
            if (err) throw err;
            res.render('displaygamestats.ejs', {rs: result});
        }
    );
});


/* View all students in a <table> */
router.get('/seasonstats', function (req, res) {
    db.GetAll2(function (err, result) {
            if (err) throw err;
            res.render('displayseasonstats.ejs', {rs: result});
        }
    );
});

/* View all students in a <table> */
router.get('/startinglineup', function (req, res) {
    db.GetAll3(function (err, result) {
            if (err) throw err;
            res.render('displaystartinglineup.ejs', {rs: result});
        }
    );
});




router.get('/points', function (req, res) {
    db.GetAll4(function (err, result) {
            if (err) throw err;
            res.render('displaypoints.ejs', {rs: result});
        }
    );
});


router.get('/highscoring', function (req, res) {
    db.GetAll5(function (err, result) {
            if (err) throw err;
            res.render('displayhighscoring.ejs', {rs: result});
        }
    );
});






/* View a single students information */
router.get('/', function (req, res) {
    if(req.query.courseid == null) {
        res.redirect('/course/all');
    }
    else {
        db.GetByID(req.query.courseid, function (err, result) {
                if (err) throw err;

                // Send result to the template along with the original course id in case there were no results
                res.render('displayRosterInfo.ejs', {rs: result, courseid: req.query.courseid});
            }
        );
    }
});


/* View a single students information */
router.post('/', function (req, res) {
    if(req.body.courseid == null) {
        res.send("The courseid parameter was not provided")
    }
    else {
        db.GetByID(req.body.courseid, function (err, result) {
                if (err) throw err;

                // Send result to the template along with the original course id in case there were no results
                res.render('displayRosterInfoSnippet.ejs', {rs: result, courseid: req.body.courseid});
            }
        );
    }
});

// Create Student Form
router.get('/create', function(req, res){
    res.render('createRoster.ejs', {action: '/course/create'});
});

// Save Student information
router.post('/create', function (req, res) {
    db.Insert( req.body, function (err, result) {
            if (err) {
                throw err;
            }

            if(typeof result !== 'undefined') {
                db.GetByID(req.body.Num, function(err, result){
                    console.log(result);
                    res.render('displayRosterInfoSnippet.ejs', {rs: result, courseid: req.body.Num});

                });
            }
            else {
                res.send('Player was not inserted.');
            }
        }
    );
});






router.get('/update', function(req, res){
    res.render('editRoster.ejs', {action: '/course/update'});
});

// Save Student information
router.post('/update', function (req, res) {
    db.Update( req.body, function (err, result) {
            if (err) {
                throw err;
            }

            if(typeof result !== 'undefined') {
                db.GetByID(req.body.Num, function(err, result){
                    console.log(result);
                    res.render('displayRosterInfoSnippet.ejs', {rs: result, courseid: req.body.Num});

                });
            }
            else {
                res.send('Player was not updated.');
            }
        }
    );
});




router.get('/updateseason', function(req, res){
    res.render('editSeason.ejs', {action: '/course/updateseason'});
});

// Save Student information
router.post('/updateseason', function (req, res) {
    db.Updateseason( req.body, function (err, result) {
            if (err) {
                throw err;
            }

            if(typeof result !== 'undefined') {
                db.GetByID(req.body.Num, function(err, result){
                    console.log(result);
                    res.send('Sucessfully Updated!');

                });
            }
            else {
                res.send('Player was not updated.');
            }
        }
    );
});





router.get('/updatestarting', function(req, res){
    res.render('editStarting.ejs', {action: '/course/updatestarting'});
});

// Save Student information
router.post('/updatestarting', function (req, res) {
    db.Updatestarting( req.body, function (err, result) {
            if (err) {
                throw err;
            }

            if(typeof result !== 'undefined') {
                db.GetByID(req.body.Num, function(err, result){
                    console.log(result);
                    res.send('Sucessfully Updated!');

                });
            }
            else {
                res.send('Player was not updated.');
            }
        }
    );
});





router.get('/updategame', function(req, res){
    res.render('editGame.ejs', {action: '/course/updategame'});
});

// Save Student information
router.post('/updategame', function (req, res) {
    db.Updategame( req.body, function (err, result) {
            if (err) {
                throw err;
            }

            if(typeof result !== 'undefined') {
                db.GetByID(req.body.Num, function(err, result){
                    console.log(result);
                    res.send('Sucessfully Updated!');

                });
            }
            else {
                res.send('Player was not updated.');
            }
        }
    );
});




// Create Student Form
router.get('/createseason', function(req, res){
    res.render('createseasonstats.ejs', {action: '/course/createseason'});
});

// Save Student information
router.post('/createseason', function (req, res) {
    db.Insertseason( req.body, function (err, result) {
            if (err) {
                throw err;
            }

            if(typeof result !== 'undefined') {
                db.GetByID(req.body.Num, function(err, result){
                    console.log(result);
                    res.send('Player Successfully Added Into Season Statistics');

                });
            }
            else {
                res.send('Player was not inserted.');
            }
        }
    );
});




// Create Student Form
router.get('/creategame', function(req, res){
    res.render('createGamestats.ejs', {action: '/course/creategame'});
});

// Save Student information
router.post('/creategame', function (req, res) {
    db.Insertgame( req.body, function (err, result) {
            if (err) {
                throw err;
            }

            if(typeof result !== 'undefined') {
                db.GetByID(req.body.Num, function(err, result){
                    console.log(result);
                    res.send('Player Successfully Added Into Game Statistics');
                });
            }
            else {
                res.send('Player was not inserted.');
            }
        }
    );
});



// Create Student Form
router.get('/createstarting', function(req, res){
    res.render('createStartinglineup.ejs', {action: '/course/createstarting'});
});

// Save Student information
router.post('/createstarting', function (req, res) {
    db.Insertstarting( req.body, function (err, result) {
            if (err) {
                throw err;
            }

            if(typeof result !== 'undefined') {
                db.GetByID(req.body.Num, function(err, result){
                    console.log(result);
                    res.send('Player Successfully Added Into Starting Lineup');

                });
            }
            else {
                res.send('Player was not inserted.');
            }
        }
    );
});





/* View a single students information */
router.get('/deleteseason/', function (req, res) {
    if(req.query.courseid == null) {
        res.redirect('/course/all');
    }
    else {
        db.Deleteseason(req.query.courseid, function (err, result) {
                if (err) throw err;

                // Send result to the template along with the original course id in case there were no results
                res.render('deleteseason.ejs', {rs: result, courseid: req.query.courseid});
            }
        );
    }
});



router.get('/deletegame/', function (req, res) {
    if(req.query.courseid == null) {
        res.redirect('/course/all');
    }
    else {
        db.Deletegame(req.query.courseid, function (err, result) {
                if (err) throw err;

                // Send result to the template along with the original course id in case there were no results
                res.render('deleteseason.ejs', {rs: result, courseid: req.query.courseid});
            }
        );
    }
});



router.get('/deleteroster/', function (req, res) {
    if(req.query.courseid == null) {
        res.redirect('/course/all');
    }
    else {
        db.Deleteroster(req.query.courseid, function (err, result) {
                if (err) throw err;

                // Send result to the template along with the original course id in case there were no results
                res.render('deleteseason.ejs', {rs: result, courseid: req.query.courseid});
            }
        );
    }
});




router.get('/deletestarting/', function (req, res) {
    if(req.query.courseid == null) {
        res.redirect('/course/all');
    }
    else {
        db.Deletestarting(req.query.courseid, function (err, result) {
                if (err) throw err;

                // Send result to the template along with the original course id in case there were no results
                res.render('deleteseason.ejs', {rs: result, courseid: req.query.courseid});
            }
        );
    }
});







/* View all users in a drop down menu */
router.get('/dropdown', function (req, res) {
    db.GetAllView(function (err, result) {
            if (err) throw err;
            res.render('displayGameDropDown.ejs', {rs: result});
        }
    );
});

/* View all users in a drop down menu */
router.get('/dropdown_ajax', function (req, res) {
    db.GetAllView(function (err, result) {
            if (err) throw err;
            res.render('displayRosterDropDownAJAX.ejs', {rs: result});
        }
    );
});

module.exports = router;



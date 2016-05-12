var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var router = express.Router();
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});
app.use('/api', router);

var def = require('./default');



app.listen(port);
console.log('Listening on port ' + port);

var mongoose   = require('mongoose');
mongoose.connect( 'mongodb://layoutuser:Password1@ds021182.mlab.com:21182/userLayout' );

var Layout = require('./model');
console.log(Layout);


router.get('/default', function(req, res) {
    //res.json({ message: 'Default!' });
    //res.json(def);
    //Layout.find(function(err, data) {
    //    if (err)
    //        res.send(err);
    //
    //    res.json(data);
    //});
    return Layout.find({_id: "5734473fdcba0f089281436a" })
        .exec(
            function(err, data) {
                if (err)
                    res.send(err);

                res.json(data);
            }
        );
});
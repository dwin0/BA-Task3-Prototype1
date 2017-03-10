var express = require('express');
var router = express.Router();
var overpass = require('../services/overpass');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BA-Task3-Prototype' });
});

router.get('/overpass', function(req, res, next) {

    overpass(function (error, data) {
        if(error) {
            res.send('error');
        }
        res.send(data);
    });

});

module.exports = router;


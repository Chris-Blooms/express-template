var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    title: 'lab 2', body: 'Welcome to the Mighty Frogs home page, or as some would say: Beinvenue au Grand Marais'
  });
});
router.get('/h', function (req, res, next) {
  res.render('index', { title: 'H' });
});


module.exports = router;

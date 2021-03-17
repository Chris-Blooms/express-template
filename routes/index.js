var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'School Project' });
});
router.get('/h', function (req, res, next) {
  res.render('index', { title: 'H' });
});
router.get('/users', function (req, res, next) {
  res.render('users');
});

module.exports = router;

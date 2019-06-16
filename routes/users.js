var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is User Home');
});

router.get('/about', function(req, res, next) {
  res.send('This is User About');
});

router.get('/contact', function(req, res, next) {
  res.send('This is User Contact');
});

module.exports = router;
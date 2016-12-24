var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index');
  //res.render('hello world')
  res.send('this is the index page');
});

module.exports = router;
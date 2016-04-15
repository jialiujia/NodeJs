var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('safety',{ title: 'Jialiujia' });
});

module.exports = router;
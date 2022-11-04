var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('zara', { title: 'Search Results zara' });
});
module.exports = router;


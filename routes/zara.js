var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('zara', { title: 'Search Results zara' });
});
var express = require('express');
const zara_controlers= require('../controllers/zara');
var router = express.Router();
/* GET zaras */
router.get('/', zara_controlers.zara_view_all_Page );
module.exports = router;



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
/* GET detail zara page */ 
router.get('/detail', zara_controlers.zara_view_one_Page); 
/* GET createzara page */
router.get('/create',zara_controlers.zara_create_Page);
/* GET create update page */
router.get('/update', zara_controlers.zara_update_Page);
/* GET delete zara page */
router.get('/delete', zara_controlers.zara_delete_Page);
module.exports = router;



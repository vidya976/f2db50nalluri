var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var zara_controller = require('../controllers/zara');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// zara ROUTES ///
// POST request for creating a zara.
router.post('/zaras', zara_controller.zara_create_post);
// DELETE request to delete zara.
router.delete('/zaras/:id', zara_controller.zara_delete);
// PUT request to update zara.
router.put('/zaras/:id', zara_controller.zara_update_put);
// GET request for one zara.
router.get('/zaras/:id', zara_controller.zara_detail);
// GET request for list of all zara items.
router.get('/zaras', zara_controller.zara_list);
module.exports = router;
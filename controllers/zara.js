var zara = require('../models/zara');
// List of all zaras
exports.zara_list = async function(req, res) {
    try{
    thezaras = await zara.find();
    res.send(thezaras);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific zara.
exports.zara_detail = function(req, res) {
res.send('NOT IMPLEMENTED: zara detail: ' + req.params.id);
};
// Handle zara create on POST.
exports.zara_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: zara create POST');
};
// Handle zara delete form on DELETE.
exports.zara_delete = function(req, res) {
res.send('NOT IMPLEMENTED: zara delete DELETE ' + req.params.id);
};
// Handle zara update form on PUT.
exports.zara_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: zara update PUT' + req.params.id);
};
exports.zara_view_all_Page = async function(req, res) {
    try{
    thezaras = await zara.find();
    res.render('zara', { title: 'zara Search Results', results: thezaras });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    exports.zara_create_post = async function(req, res) {
        console.log(req.body)
        let document = new zara();
        // We are looking for a body, since POST does not have query parameters.
        // Even though bodies can be in many different formats, we will be picky
        // and require that it be a json object
        // {"zara_type":"goat", "cost":12, "size":"large"}
        document.zara_dresstype = req.body.zara_dresstype;
        document.zara_color = req.body.zara_color;
        document.zara_price = req.body.zara_price;
        try{
        let result = await document.save();
        res.send(result);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };
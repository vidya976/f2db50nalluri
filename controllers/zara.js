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
        exports.zara_detail = async function(req, res) {
            console.log("detail" + req.params.id)
            try {
            result = await zara.findById( req.params.id)
            res.send(result)
            } catch (error) {
            res.status(500)
            res.send(`{"error": document for id ${req.params.id} not found`);
            }
           };
           exports.zara_update_put = async function(req, res) {
            console.log(`update on id ${req.params.id} with body
           ${JSON.stringify(req.body)}`)
            try {
            let toUpdate = await zara.findById( req.params.id)
            // Do updates of properties
            if(req.body.zara_dresstype)
            toUpdate.zara_dresstype = req.body.zara_dresstype;
            if(req.body.zara_color) toUpdate.zara_color = req.body.zara_color;
            if(req.body.zara_price) toUpdate.zara_price = req.body.zara_price;
            let result = await toUpdate.save();
            console.log("Sucess " + result)
            res.send(result)
            } catch (err) {
            res.status(500)
            res.send(`{"error": ${err}: Update for id ${req.params.id}
           failed`);
            }
           }
           // Handle zara delete on DELETE. 
exports.zara_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await zara.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
// Handle a show one view with id specified by query 
exports.zara_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await zara.findById( req.query.id) 
        res.render('zaradetail',  
{ title: 'zara Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a zara.
// No body, no in path parameter, no query.
// Does not need to be async
exports.zara_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('zaracreate', { title: 'zara Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   exports.zara_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await zara.findById(req.query.id)
    res.render('zaraupdate', { title: 'zara Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    exports.zara_delete_Page = async function(req, res) {
        console.log("Delete view for id " + req.query.id)
        try{
        result = await zara.findById(req.query.id)
        res.render('zaradelete', { title: 'zara Delete', toShow:
        result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
        };
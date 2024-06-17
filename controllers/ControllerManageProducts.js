// ------------------------------------------------------ Dependencies ------------------------------------------------------
const path = require("path");
const ProductsModel = require("../models/ModelProducts");


// ------------------------------------------------------ Control Functions ------------------------------------------------------
const fetchProducts = (req, resp) => {
    resp.set("json");

    ProductsModel.find(req.body).then((result) => {
        if(result.length != 0){
            resp.json({status : true, result : result});    
        }else{
            resp.json({status : false, result : result});    
        }
    }).catch((err) => {
        resp.json({status : false, result : err});
    });
}

const deleteProduct = (req, resp) => {
    resp.set("json");

    ProductsModel.deleteOne(req.body).then((result) => {
        resp.json({status : true, message : "The item has been deleted successfully!"});    
    }).catch((err) => {
        resp.json({status : false, message : err.message});
    });
}


module.exports = { fetchProducts, deleteProduct };
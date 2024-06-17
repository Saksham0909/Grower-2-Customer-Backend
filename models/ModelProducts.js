// ------------------------------------------------------ Dependencies ------------------------------------------------------
const mongoose = require("mongoose");


// ------------------------------------------------------ Profile Document Schema ------------------------------------------------------
const Products = new mongoose.Schema({
    email : String,
    productCategory : String,
    item : String,
    town : String,
    productPic : String,
},{
    versionKey: false
});

const ProductsModel = mongoose.model("products", Products);

module.exports = ProductsModel;
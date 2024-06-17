// ------------------------------------------------------ Dependencies ------------------------------------------------------
const path = require("path");
const ProductsModel = require("../models/ModelProducts");


// ------------------------------------------------------ Control Functions ------------------------------------------------------
const saveProduct = (req, resp) => {
    resp.set("json");
    let imageName = "nopic.jpg";

    if (req.files != null) {
        let {productPic} = req.files;
        imageName = `${new Date().getTime()}_${req.body.email}_${productPic.name}`;
        let imagePath = path.join(__dirname, "..", "uploads", imageName);
        productPic.mv(imagePath);
    }
    
    req.body.productPic = imageName;
    
    const product = new ProductsModel(req.body);
    product.save().then((result) => {
        resp.json({status : true, message : "Product has been added successfully"});
    }).catch((err) => {
        resp.json({status : false, message : err.message});
    });
}


module.exports = { saveProduct };
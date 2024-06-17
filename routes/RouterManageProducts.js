// ------------------------------------------------------ Dependencies ------------------------------------------------------
const express = require("express");
const router = express.Router();
const { fetchProducts, deleteProduct } = require("../controllers/ControllerManageProducts")


// ------------------------------------------------------ API's ------------------------------------------------------
router.post("/fetch-products", fetchProducts);

router.post("/delete-product", deleteProduct);


module.exports = router;
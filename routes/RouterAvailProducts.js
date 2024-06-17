// ------------------------------------------------------ Dependencies ------------------------------------------------------
const express = require("express");
const router = express.Router();
const { saveProduct } = require("../controllers/ControllerAvailProducts")


// ------------------------------------------------------ API's ------------------------------------------------------
router.post("/save-product", saveProduct);


module.exports = router;
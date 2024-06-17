// ------------------------------------------------------ Dependencies ------------------------------------------------------
const express = require("express");
const router = express.Router();
const { doLogin } = require("../controllers/ControllerLogin")


// ------------------------------------------------------ API's ------------------------------------------------------
router.post("/do-login", doLogin);


module.exports = router;
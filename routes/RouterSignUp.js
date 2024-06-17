// ------------------------------------------------------ Dependencies ------------------------------------------------------
const express = require("express");
const router = express.Router();
const { doSignUp } = require("../controllers/ControllerSignUp")


// ------------------------------------------------------ API's ------------------------------------------------------
router.post("/do-sign-up", doSignUp);


module.exports = router;
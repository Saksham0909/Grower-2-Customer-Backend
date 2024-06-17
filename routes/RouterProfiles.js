// ------------------------------------------------------ Dependencies ------------------------------------------------------
const express = require("express");
const router = express.Router();
const { saveUserProfile, fetchUserProfile, updateUserProfile } = require("../controllers/ControllerProfiles")


// ------------------------------------------------------ API's ------------------------------------------------------
router.post("/save-user-profile", saveUserProfile);

router.post("/fetch-user-profile", fetchUserProfile);

router.post("/update-user-profile", updateUserProfile);


module.exports = router;
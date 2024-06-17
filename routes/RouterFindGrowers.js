// ------------------------------------------------------ Dependencies ------------------------------------------------------
const express = require("express");
const router = express.Router();
const { fetchCities, fetchGrowers, fetchGrowerDetails } = require("../controllers/ControllerFindGrowers")


// ------------------------------------------------------ API's ------------------------------------------------------
router.post("/fetch-cities", fetchCities);

router.post("/fetch-growers", fetchGrowers);

router.post("/fetch-grower-details", fetchGrowerDetails);


module.exports = router;
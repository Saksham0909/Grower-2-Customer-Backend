// ------------------------------------------------------ Dependencies ------------------------------------------------------
const ProductsModel = require("../models/ModelProducts");
const ProfilesModel = require("../models/ModelProfiles");


// ------------------------------------------------------ Control Functions ------------------------------------------------------
const fetchCities = (req, resp) => {
    resp.set("json");

    ProductsModel.find({}, 'town').then((result) => {
        resp.json({status : true, result : result});
    }).catch((err) => {
        resp.json({status : false, result : err.message});
    });
}

const fetchGrowers = (req, resp) => {
    resp.set("json");

    ProductsModel.find(req.body).then((result) => {
        resp.json({status : true, result : result});
    }).catch((err) => {
        resp.json({status : false, result : err.message});
    });
}

const fetchGrowerDetails = (req, resp) => {
    resp.set("json");

    ProfilesModel.findOne(req.body).then((result) => {
        resp.json({status : true, result : result});
    }).catch((err) => {
        resp.json({status : false, result : err.message});
    });
}


module.exports = { fetchCities, fetchGrowers, fetchGrowerDetails };
// ------------------------------------------------------ Dependencies ------------------------------------------------------
const mongoose = require("mongoose");


// ------------------------------------------------------ Profile Document Schema ------------------------------------------------------
const Profile = new mongoose.Schema({
    email : { type : String, unique : true, index : true, required : true },
    name : String,
    address : String,
    town : String,
    city : String,
    category : String,
    contact : String,
    adhaarNo : String,
    adhaarPic : String
},{
    versionKey: false
});

const ProfilesModel = mongoose.model("profiles", Profile);

module.exports = ProfilesModel;
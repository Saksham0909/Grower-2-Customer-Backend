// ------------------------------------------------------ Dependencies ------------------------------------------------------
const mongoose = require("mongoose");


// ------------------------------------------------------ Profile Document Schema ------------------------------------------------------
const Users = new mongoose.Schema({
    email : { type : String, unique : true, index : true, required : true },
    password : String,
    type : String
},{
    versionKey: false
});

const UsersModel = mongoose.model("users", Users);

module.exports = UsersModel;
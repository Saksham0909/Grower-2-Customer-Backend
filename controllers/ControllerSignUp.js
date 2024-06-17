// ------------------------------------------------------ Dependencies ------------------------------------------------------
const UsersModel = require("../models/ModelUsers");


// ------------------------------------------------------ Control Functions ------------------------------------------------------
const doSignUp = (req, resp) => {
    resp.set("json");
    const userData = new UsersModel(req.body);

    userData.save().then((result) => {
        resp.json({status : true, message : "Account has been created successfully", type : result.type});
    }).catch((err) => {
        if(err.code === 11000){
            resp.json({status : false, message : "You are already a user! Please login", type : null});
        }else{
            resp.json({status : false, message : err.message, type : null});
        }
    });
}


module.exports = { doSignUp };
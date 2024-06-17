// ------------------------------------------------------ Dependencies ------------------------------------------------------
const UsersModel = require("../models/ModelUsers");


// ------------------------------------------------------ Control Functions ------------------------------------------------------
const doLogin = (req, resp) => {
    resp.set("json");
    const email = req.body.email;
    const password = req.body.password;

    UsersModel.findOne({email}).then((result) => {
        if(result != null){
            if(result.password == password){
                resp.json({status : true, message : "The account has been logged in successfully", type : result.type});
            }else{
                resp.json({status : false, message : "Password entered is incorrect!", type : null});
            }
        }else{
            resp.json({status : false, message : "User does not exists! Please Sign up", type : null});
        }
    }).catch((err) => {
        resp.json({status : false, message : err.message, type : null});
    });
}


module.exports = { doLogin };
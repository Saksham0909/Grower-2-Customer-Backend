// ------------------------------------------------------ Dependencies ------------------------------------------------------
const path = require("path");
const ProfilesModel = require("../models/ModelProfiles");


// ------------------------------------------------------ Control Functions ------------------------------------------------------
const saveUserProfile = (req, resp) => {
    resp.set("json");
    let imageName = "nopic.jpg";

    if (req.files != null) {
        let {adhaarPic} = req.files;
        imageName = `${new Date().getTime()}_${req.body.email}_${adhaarPic.name}`;
        let imagePath = path.join(__dirname, "..", "uploads", imageName);
        adhaarPic.mv(imagePath);
    }
    
    req.body.adhaarPic = imageName;
    
    const userProfile = new ProfilesModel(req.body);
    userProfile.save().then((result) => {
        resp.json({status : true, message : "User data has been saved successfully"});
    }).catch((err) => {
        if(err.code === 11000){
            resp.json({status : false, message : "User data already exists! Please update to make any changes"});
        }else{
            resp.json({status : false, message : err.message});
        }

    });
}

const fetchUserProfile = (req, resp) => {
    resp.set("json");

    ProfilesModel.findOne(req.body).then((result) => {
        if(result != null){
            resp.json({status : true, result : result});    
        }else{
            resp.json({status : false, result : result});    
        }
    }).catch((err) => {
        resp.json({status : false, result : err});
    });
}

const updateUserProfile = (req, resp) => {
    resp.set("json");
    let email = req.body.email;

    if (req.files != null) {
        let {adhaarPic} = req.files;
        let imageName = `${new Date().getTime()}_${req.body.email}_${adhaarPic.name}`;
        let imagePath = path.join(__dirname, "..", "uploads", imageName);
        adhaarPic.mv(imagePath);
        req.body.adhaarPic = imageName;
    }else{
        req.body.adhaarPic = req.body.hdn;
    }

    ProfilesModel.updateOne({email}, {$set : req.body}).then((result) => {
        if(result.matchedCount == 1){
            resp.json({status : true, message : "User data has been updated successfully"});
        }else{
            resp.json({status : false, message : "User data has not been updated"});
        }
    }).catch((err) => {
        resp.json({status : false, message : err.message});
    });
}


module.exports = { saveUserProfile, fetchUserProfile, updateUserProfile };
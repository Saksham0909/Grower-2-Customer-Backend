// ------------------------------------------------------ Modules ------------------------------------------------------
const express = require("express");
const fileuploader = require("express-fileupload");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");


// ------------------------------------------------------ Dependencies ------------------------------------------------------
const {PORT, database, dburi} = require("./config/config");
const signup = require("./routes/RouterSignUp");
const login = require("./routes/RouterLogin");
const profiles = require("./routes/RouterProfiles");
const availProducts = require("./routes/RouterAvailProducts");
const itemManager = require("./routes/RouterManageProducts");
const findGrowers = require("./routes/RouterFindGrowers");


// ------------------------------------------------------ Middlewares ------------------------------------------------------
const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(fileuploader());
app.use(express.urlencoded(true));


// ------------------------------------------------------ Routes ------------------------------------------------------
app.use("/uploads", express.static("uploads"));
app.use("/signup", signup);
app.use("/login", login);
app.use("/profile", profiles);
app.use("/avail-products", availProducts);
app.use("/item-manager", itemManager);
app.use("/find-growers", findGrowers);


// ------------------------------------------------------ Server configuration ------------------------------------------------------
mongoose.connect(dburi).then(() => {
        app.listen(PORT);
        console.log(`Server started at PORT:- ${PORT}\nConnected to ${database} successfully`);
    }).catch((err) => {
        console.log(err);
});
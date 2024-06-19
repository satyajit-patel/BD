/*
    npm i mongoose
*/

require("dotenv").config();
const mongoose = require("mongoose");
const uri = process.env.DB_URL;

const dbConnect = () => {
    mongoose.connect(uri)
    .then(() => {
        console.log("database connection successful");
    })
    .catch((err) => {
        console.log("error in database connection", err);
    });
}

module.exports = dbConnect;
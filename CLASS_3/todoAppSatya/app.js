/*
    npm init
    npm i express
    npm i dotenv
    npm i mongoose
    node app.js
*/

const express = require("express");
const app = express();
const {dbConnect, connectParser, startServer} = require("./config/config.js");
const {router} = require("./routes/route.js");

connectParser();
app.use("/api/v1/", router);
startServer();
dbConnect();


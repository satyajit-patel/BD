const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT;
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const dbConnect = async() => {
    mongoose.connect(DB_URL)
    .then(() => {
        console.log("db connected");
    })
    .catch((err) => {
        console.log(err.message);
    })
}

const startServer = async() => {
    app.get("/", (req, res) => {
        res.send(`<h1>Running</h1>`);
    });
    app.listen(PORT, () => {
        console.log(`Running at PORT ${PORT}`);
    });
}

const connectParser = async() => {
    app.use(bodyParser.json());
    app.use(bodyParser.text);
    app.use(bodyParser.urlencoded({extended: true}));
}

module.exports = {dbConnect, startServer, connectParser};
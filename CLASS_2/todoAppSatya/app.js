/*
    npm init
    npm i express
    nodemon(like live server)
    npm i dotenv
*/

const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

// body parser as something should be comming in this request
app.use(express.json());
const todoRoute = require("./routes/todo.js")
// mount API routes
app.use("api/v1/", todoRoute);


// db connect
const dbConnect = require("./config/database.js");
dbConnect();

// server start
app.get("/", (req, res) => {
    res.send("<h1>Running</h1>");    
})
app.listen(PORT, () => {
    console.log("running at port ", PORT);
})

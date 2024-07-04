// npm init
// npm i express
// node server.js
// http://localhost:3000/home

const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log("app is running at port ", PORT);
})

// route
app.get("/home", (req, res) => {
    res.send("You are Running");
})

// get means server is sending something as clint has requested something
// post means server is receiving something as clint has sent something

// we need a middleware(body-parser) to parse JSON data
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/api/cars", (req, res) => {
    const {name, brand} = req.body; // access data from request body
    console.log("name of car and brand are ", name, " and ", brand);
    res.send("car submitted successfully");
})
// http -> body -> raw -> json




// mongoose is the bridge between mongoDB and Node
// npm i mongoose
const mongoose = require("mongoose");

// mongoose returns a promise(promise has to state either success or reject)
// and it takes 2 parameters as syntax suger
// is myTable database is not there then it will create one
mongoose.connect("mongodb://localhost:27017/myTable")
.then(() => {
    console.log("Connection Successful");
})
.catch((err) => {
    // console.log(err);
    console.log("Received an error");
}); 
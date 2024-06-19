const express = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo.js");

// define API routes
router.post("/createTodo", createTodo); // i.e saying when you hit /createTodo then redirect to createTodo

module.exports = router;
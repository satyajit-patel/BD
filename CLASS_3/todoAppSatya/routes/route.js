const express = require("express");
const router = express.Router();

// mount api
const {createTodo} = require("../controllers/create.js");
const {readTodo, readTodoById} = require("../controllers/read.js");
const {updateTodo} = require("../controllers/update.js");
const {deleteTodo} = require("../controllers/delete.js");

router.post("/createTodo", createTodo);
router.get("/readTodo", readTodo);
router.get("readTodo/:id", readTodoById);
router.put("updateTodo/:id", updateTodo);
router.delete("deleteTodo/:id", deleteTodo);

module.exports = {router};
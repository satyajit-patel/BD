const todo = require("../models/todo.js");

exports.createTodo = async (req, res) => {
    try {
        const {title, description} = req.body;
        // create todo object and insert in DB
        const response = todo.create({title, description});
        // send a message
        res.status(200).json({
            success: true,
            data: response,
            message: "entry created successfully"
        });
    }
    catch(err) {
        console.log("error in entry creation ", err);
        res.status(500).json({
            success: false,
            data:"error in entry creation",
            message: err.message,
        });
    }
}
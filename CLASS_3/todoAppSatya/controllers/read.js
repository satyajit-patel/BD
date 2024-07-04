const {Table} = require("../models/table.js");

exports.readTodo = async(req, res) => {
    try {
        const response = await Table.find({});

        console.log("got all data");
        res.status(200).json({
            success: true,
            data: response,
            message: "got all data"
        });
    } catch(err) {
        console.log(err.message);
        res.status(500).json({
            success: false,
            data: "not got all data",
            message: err.message
        });
    }
}

exports.readTodoById = async(req, res) => {
    try {
        const {id} = req.params;
        const response = await Table.findById(id);

        console.log("got single data");
        res.status(200).json({
            success: true,
            data: response,
            message: "got single data"
        });
    } catch(err) {
        console.log(err.message);
        res.status(500).json({
            success: false,
            data: "not got data",
            message: err.message
        });
    }
}

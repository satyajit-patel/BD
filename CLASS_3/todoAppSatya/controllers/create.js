const Table = require("../models/table.js");

exports.createTodo = async(req, res) => {
    try {
        const {title, description} = req.body;
        await Table.create({title, description});

        console.log(`entry created`);
        res.status(200).json({
            success: true,
            message: "entry created"
        });
    } catch(err) {
        console.log(err.message);
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}
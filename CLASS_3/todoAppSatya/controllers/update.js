const {Table} = require("../models/table.js");

exports.updateTodo = async(req, res) => {
    try {
        const {id} = req.params;
        const {title, description} = req.body;
        await Table.findByIdAndUpdate(id, {title, description, updatedAt: Date.now()});

        console.log("data updated");
        res.status(200).json({
            success: true,
            message: "data updated"
        });
    } catch(err) {
        console.log(err.message);
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}
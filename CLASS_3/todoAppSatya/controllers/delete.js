const {Table} = require("../models/table.js");

exports.deleteTodo = async(req, res) => {
    try {
        const {id}= req.params;
        await Table.findByIdAndDelete(id);

        console.log("entry deleted");
        res.status(200).json({
            success: true,
            message: "entry deleted"
        });
    } catch(err) {
        console.log(err.message);
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}
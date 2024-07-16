const ToDo = require("../models/ToDo")

exports.deleteTodo = async (req, res) => {
    try {
        //extract todo items basis on id
        const id = req.params.id
        const todo = await ToDo.findByIdAndDelete(id)

        //data for given id not found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No Data found for given Id"
            })
        }

        //data for given id found
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully deleted.`
        })
    }
    catch (err) {
        console.log(err),
        console.error(err),
        res.status(500).json({
            success: false,
            message: "Error creating entry.",
            message: err.message
        })
    }
}
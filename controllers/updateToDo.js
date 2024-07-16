const ToDo = require("../models/ToDo")

exports.updateTodo = async (req, res) => {
    try {
        //extract todo items basis on id
        const { id } = req.params     //destructuring syntax
        const { title, description } = req.body       //fetch the title and description from body

        const todo = await ToDo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() },
        )

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
            message: `Todo ${id} data successfully updated.`
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
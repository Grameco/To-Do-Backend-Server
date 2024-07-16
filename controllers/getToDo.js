const ToDo = require("../models/ToDo")

exports.getTodo = async(req, res) => {
    try {
        //fetch all todo items from database
        const todos = await ToDo.find({});

        //response
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire ToDo data is fetched."
        })
    }
    catch(err) {
        console.log(err),
        console.error(err),
        res.status(500).json({
            success: false,
            message: "Error creating entry.",
            message: err.message
        })
    }
}

exports.getTodoById = async(req, res) => {
    try{
        //extract todo items basis on id
        const id = req.params.id
        const todo = await ToDo.findById({_id: id})

        //data for given id not found
        if(!todo) {
            return res.status(404).json({
                success: false,
                message: "No Data found for given Id"
            })
        }

        //data for given id found
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully fetched.`
        })
    }
    catch(error){
        console.log(error),
        console.error(error),
        res.status(500).json({
            success: false,
            message: "Error creating entry.",
            message: error.message
        })
    }
}
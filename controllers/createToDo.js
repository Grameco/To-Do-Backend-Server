const ToDo = require("../models/ToDo")

//define route handler
//we use async function as we do not prefer network call on main thread
//it will block entire program as js is single-threaded
exports.createTodo = async(req, res) => {
    try {
        const { title, description } = req.body                      //extract title and desc 
        const response = await ToDo.create({title, description});    //creat({e a new ToDo object and insert in DB
        res.status(200).json({
            success: true,
            data: response,
            message: "Entry created successfully."
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
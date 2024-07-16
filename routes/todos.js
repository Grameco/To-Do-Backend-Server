const express = require("express")
const router = express.Router()

//import controller
const { createTodo } = require("../controllers/createToDo")
const { getTodo, getTodoById } = require("../controllers/getToDo")
const { updateTodo } = require("../controllers/updateToDo")
const { deleteTodo } = require("../controllers/deleteToDo")

//create route
router.post("/createToDo", createTodo)
router.get("/getToDo", getTodo)
router.get("/getToDo/:id", getTodoById)
router.put("/updateToDo/:id", updateTodo)
router.delete("/deleteToDo/:id", deleteTodo)

module.exports = router
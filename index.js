const express = require("express");
const app = express();

//access env file data
require("dotenv").config()
const PORT = process.env.PORT || 4000;

//middleware to parse json request
app.use(express.json())

//import routes
const toDoRoutes = require("./routes/todos")

//mount/append the todo api routes
app.use("/api/todos", toDoRoutes)

//start server
app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
})

//connect to database
const dbConnection = require("./config/database")
dbConnection();

//default route
app.get("/", (req, res) => {
    res.send(`<h1>This is Home Page.</h1>`)
})


// we get our API_URL -> http://localhost:3000/api/todos/createToDo for POST request
// we get our API_URL -> http://localhost:3000/api/todos/getToDo for GET request
// we get our API_URL -> http://localhost:3000/api/todos/getToDo/id for GET by id request eg.http://localhost:3000/api/todos/getToDo/6691c6dc1fe4c24751699615
// we get our API_URL -> http://localhost:3000/api/todos/updateToDo/id for PUT request eg.http://localhost:3000/api/todos/updateToDo/6691c6dc1fe4c24751699615
// we get our API_URL -> http://localhost:3000/api/todos/deleteToDo/id for DELETE request eg.http://localhost:3000/api/todos/deleteteToDo/6691c6dc1fe4c24751699615
// index.js -> route -> controller -> model -> Schema
// config -> connect with database
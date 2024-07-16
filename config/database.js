const mongoose = require("mongoose");

require("dotenv").config();        //everything from .env file will load into config(), now all data is present in process.env

const dbConnection = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {console.log("Connection successful")})
    .catch((error) => {
        console.log("Connection Failed",
        console.log(error.message),
        process.exit(1)
    )})
}

module.exports = dbConnection
const mongoose = require('mongoose')


const connectDB = async () =>{
    try {
        console.log("inside connect DB function")
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("successfully connected to database")
    } catch (error) {
        console.log("Failed to connect to database",error)
        process.exit(1)
    }
}

module.exports = connectDB;
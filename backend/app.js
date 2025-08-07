const express = require('express')
const app = express()
require('dotenv').config()
const cookieParser = require('cookie-parser')

const connectDB = require('./config/database')
const cors = require("cors");
const {cloudinaryConnect} = require('./config/cloudinary')
const fileUpload = require('express-fileupload')

const PORT = process.env.PORT || 4000

const userRoutes = require('./routes/User')
const paymentRoutes = require('./routes/Payments')
const profileRoutes = require('./routes/Profiles')
const courseRoutes = require('./routes/Course')

app.use(express.json())
app.use(cookieParser())





app.use(cors({
     origin:"http://localhost:3000",
     credentials:true,
}))

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp"
}))

cloudinaryConnect();

app.use('/api/v1/auth',userRoutes)
app.use('/api/v1/payment',paymentRoutes)
app.use('/api/v1/profile',profileRoutes)
app.use('/api/v1/course',courseRoutes)

// default route
app.get("/",(req,res)=>{
    // res.send("This is the homepage  ")
    return res.json({
        success:true,
        message:"Your server is Up and Running on port "+process.env.PORT
    })
})


console.log("connecting to db")
//connecting to DB 
connectDB()
.then(
    ()=>{
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    }
)
.catch(
    (error)=>{
        console.log("Error connecting to DB",error)
    }
)
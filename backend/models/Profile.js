const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    gender:{
        type:String,
        enum:['Male','Female','Others']
    },
    dateOfBirth:{
        type:String,

    },
    about:{
        type:String,
        
    },
    contactNumber:{
        type:Number,
        trim:true
    }
})

const Profile = mongoose.model('Profile',profileSchema)

module.exports = Profile
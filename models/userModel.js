const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 50,
        require: true
    },
    contactNumber: {
        type: String,
        minlength: 10,
        maxlength: 10
    },
    address: {
        type: String,
        maxlength: 250,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    pincode: {
        type: Number,
        require: true
    },
    email:{
        type: String,
        unique: true,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    creationTime:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('userSch',userSchema) 
    

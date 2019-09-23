const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 50,
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
    }
    // creationTime:{
    //     type: Date,
    //     default: Date.now
    // }
})

module.exports = mongoose.model('userSch',userSchema) 
    

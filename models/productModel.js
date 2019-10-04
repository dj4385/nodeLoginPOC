const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName:{
        type: "string",
        minlength: 3,
        require: true
    },
    category:{
        type: "string",
        require: true
    },
    productQty:{
        type: Number,
        minlength: 1,
        require: true,
    },
    price:{
        type: Number,
        require: true
    },
    creationTime:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("_productSchema",productSchema)

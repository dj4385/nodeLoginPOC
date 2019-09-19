const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName:{
        type: "string",
        min: 3,
        require: true
    },
    productQty:{
        type: Number,
        min: 0,
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
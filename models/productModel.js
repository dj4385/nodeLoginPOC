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
    productImg: {
        type: String,
        require: true
    },
    productDescription: {
        type: String,
        require: true
    },
    isAddedToCart: {
        type: Boolean,
        default : false
    },
    creationTime:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("_productSchema",productSchema)

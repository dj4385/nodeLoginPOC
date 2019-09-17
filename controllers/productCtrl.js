const productModel = require('../models/productModel')

module.exports = {
    viewProducts: async (req,res)=>{
        try{
            const products = await productModel.find()
            if(!products){
                res.status(500).send({
                    "message":"There are no products"
                })
            } else {
                res.status(200).send({
                    "_products": products
                })
            }
        }catch(err){

        }
    },
    addProduct: (req, res)=>{
        if(!req.body){
            res.status(400).send({
                "message":"Invalid products detail"
            })
        } else {
            const product = new productModel({
                productName : req.body.productName,
                productQty : req.body.productQty,
                price : req.body.price
            })
            product.save().then(data=>{
                res.send({
                    "message":"Product added successfully",
                    "productDetail":data
                })
            }).catch(err=>{
                res.status(500).send(err)
            })
        }
    },
    updateProduct: (req, res)=>{

    },
    deleteProduct: (req, res)=>{

    }
}
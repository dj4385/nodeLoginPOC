const productModel = require('../models/productModel')

module.exports = {
    viewProducts: async (req,res)=>{
        try{
            const products = await productModel.find()
            if(!products){
                winston.debug(`There is no products`)
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
    getSingleProduct: async (req,res)=>{
        
        if(!req.params.id){
            winston.debug(`Invalid product ID ${req.params.id}`)
            res.status(400).send({
                "message":"Invalid product id"
            })
        } else {
            if(req.params.id.length === 24){
                const product = await productModel.findById({_id: req.params.id})
                if(!product){
                    winston.debug(`Product does not exist ${req.params.id}`)
                    res.send(400).send({
                        "message": "Product does not exist"
                    })
                } else {
                    res.status(200).send({
                        "message": "Product Found",
                        "product": product
                    })
                }
            } else {
                res.status(400).send({
                    "message": "Invalid product id"
                })
            }
        }
    },
    addProduct: (req, res)=>{
        if(!req.body){
            winston.debug(`Invalid products detail ${req.body}`)
            res.status(400).send({
                "message":"Invalid products detail"
            })
        } else {
            const product = new productModel({
                productName : req.body.productName,
                category: req.body.category,
                productQty : req.body.productQty,
                price : req.body.price,
                totalPrice: req.body.totalPrice,
                productImg: req.body.productImg
            })
            product.save().then(data=>{
                res.send({
                    "message":"Product added successfully",
                    "productDetail":data
                })
            }).catch(err=>{
                winston.debug(`Error in adding product ${err}`)
                res.status(500).send(err)
            })
        }
    },
    updateProduct: (req, res)=>{
        if(!req.body){
            winston.debug(`Invalid products detail ${req.body}`)
            res.status(400).send({
                "message": "Invalid product Id"
            })
        } else {
            productModel.findByIdAndUpdate(req.params.id,{
                productName : req.body.productName,
                productQty : req.body.productQty,
                price : req.body.price
            }).then(product=>{
                res.status(200).send({
                    "message":"Product Detail Updated",
                    "data": product
                })
            }).catch(ex=>{
                winston.debug(`Invalid products id ${ex}`)
                res.status(500).send({
                    "message":"Invalid Product ID"
                })
            })
        }
    },
    deleteProduct: (req, res)=>{
        if(!req.params.id){
            winston.debug(`Invalid products id ${req.params.id}`)
            res.status(404).send({
                "message":"Product does not exist"
            })
        }else {
            productModel.findByIdAndRemove(req.params.id)
                .then(product=>{
                    if(!product){
                        winston.debug(`Product Not found ${req.params.id}`)
                        res.status(404).send({
                            "message":"Product not found"
                        })
                    } else {
                        res.status(200).send(product)
                    }
                }).catch(err=>{
                    winston.debug(`Error in deleting products ${err}`)
                    res.status(500).send({
                        "message":"Something went wrong"
                    })
                })
        }
    }
}
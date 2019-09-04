const userModel = require('../models/userModel')

module.exports = {
    "registerUser": (req,res)=>{
        if(!req.body){
            res.status(400).send({
                "message": "User Detail Cannot be empty"
            })
        } else{
            const user = new userModel({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password
            })
            user.save().then(data=>{
                res.status(200).send(data)
            }).catch(err=>{
                res.status(500).send({
                    "message": err.message || "Something went wrong"
                })
            })
        }
    },
    "login":(req,res)=>{
        res.send({
            "message":"This is an register method"
        })
    }
}
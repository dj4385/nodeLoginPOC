const userModel = require('../models/userModel')

module.exports = {
    register : (req,res)=>{
        if(!req.body){
            res.status(400).send({
                "message": "User Detail Cannot be empty"
            })
        } else{
            console.log(req.body)
            const user = new userModel({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password
            })
            user.save().then(data=>{
                res.status(200).json(data)
            }).catch(err=>{
                res.status(500).send({
                    "message": err.message || "Something went wrong"
                })
            })
        }
    },
    login :(req,res)=>{
        res.send({
            "message":"This is an register method"
        })
    }
}
const userModel = require('../models/userModel'),
      utils = require('../utils/utilFile')

module.exports = {
    register : (req,res)=>{
        if(!req.body){
            res.status(400).send({
                "message": "User Detail Cannot be empty"
            })
        } else{
            var hashPassword = utils.encryptPassword(req.body.password)
            const user = new userModel({
                name : req.body.name,
                email : req.body.email,
                password : hashPassword
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
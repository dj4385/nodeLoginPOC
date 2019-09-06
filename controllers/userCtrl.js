const userModel = require('../models/userModel'),
      utils = require('../utils/utilFile'),
      bcrypt = require('bcrypt')


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
        if(!req.body){
            res.send({
                "message":"Invalid email id and password"
            })
        } else {
            userModel.findOne({
                email: req.body.email
            }),(err, user)=>{
                if(err){
                    throw err
                } else if(!user){
                    res.send({
                        "message": "Authentication fail user is not found"
                    })
                } else if(user){
                    if(!bcrypt.compareSync(user.password, req.body.password)){
                        res.send({
                            "message":"Incorrect Password"
                        })
                    } else {
                        res.send({
                            "message":"Login success",
                            "name": user.name,
                            "email":user.email
                        })
                    }
                }
            }
        }
    }
}
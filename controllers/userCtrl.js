const userModel = require('../models/userModel'),
      utils = require('../utils/utilFile'),
      bcrypt = require('bcrypt'),
      jwt = require('jsonwebtoken')


module.exports = {

    // clients : async (req,res)=>{
    //     var clients = await userModel.find()
    //     console.log(clients)
    //     res.send(clients)
    // },
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
                var response = utils.sendMail(data.email)
                console.log(response)
                res.status(200).json({
                    "user" : data,
                    "message": response
                })
                
            }).catch(err=>{
                res.status(500).send({
                    "message": err.message || "Something went wrong"
                })
            })
        }
    },
    login : async (req,res)=>{
        if(!req.body){
            res.send({
                "message":"Invalid email id and password"
            })
        } else {
            var user = await userModel.findOne({
                email : req.body.email
            })
            if(!user){
                res.send({
                    "message":"User not found"
                })
            } else if(user){
                var matchPassword = await bcrypt.compare(req.body.password, user.password)
                if(!matchPassword){
                    res.send({
                        "message": "Invalid Password"
                    })
                } else {
                    var token = jwt.sign({
                        _id: user._id
                    },'loginAPIPOC')
                    res.setHeader("x-token",token)
                    res.send({
                        "message": "login success",
                        "name" : user.name,
                        "email" : user.email
                    })
                }
            }
        }
    }
}
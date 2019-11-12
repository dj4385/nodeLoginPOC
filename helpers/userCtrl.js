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
            winston.debug(`Request body is empty ${req.body}`)
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
                response.then(data=>{
                    console.log("Mail res",data)
                }).catch(err=>{
                    winston.debug(`Error in sending mail when user register ${err}`)
                    console.log("Error",err)
                })
                res.status(201).json({
                    "message":"Mail Sended Successfully",
                    "user" : data
                })
                
            }).catch(err=>{
                winston.debug(`Error in register user ${err}`)
                res.status(500).send({
                    "message": err.message || "Something went wrong"
                })
            })
        }
    },
    login : async (req,res)=>{
        if(!req.body){
            winston.debug(`Request body is empty ${req.body}`)
            res.send({
                "message":"Invalid email id and password"
            })
        } else {
            var user = await userModel.findOne({
                email : req.body.email
            })
            if(!user){
                winston.debug(`User not found ${req.body.email}`)
                res.send({
                    "message":"User not found"
                })
            } else if(user){
                var matchPassword = await bcrypt.compare(req.body.password, user.password)
                if(!matchPassword){
                    winston.debug(`Invalid Password ${req.body.password}`)
                    res.send({
                        "message": "Invalid Password"
                    })
                } else {
                    var token = jwt.sign({
                        _id: user._id
                    },'loginAPIPOC')
                    // res.setHeader("token",token)
                    res.send({
                        "token":token,
                        "message": "login success",
                        "name" : user.name,
                        "email" : user.email
                    })
                }
            }
        }
    },
    changePassword : async (req, res)=>{
        if(!req.body){
            winston.debug(`Request body is empty ${req.body}`)
            res.status(401).send({
                "status": 401,
                "message": "Invalid Object"
            })
        } else {
            if(req.body.newPass !== req.body.reNewPass){
                winston.debug(`Password is not matched, newPassword  ${req.body.newPass}, reNewPass: ${req.body.reNewPass}`)
                res.send({
                    "message":"Password is not matched"
                })
            } else {
                var ePassowrd = utils.encryptPassword(req.body.reNewPass)
                const user = await userModel.findOneAndUpdate({ email: req.body.email },{password:ePassowrd})
                if(!user){
                    winston.debug(`user not found ${req.body.email}`)
                    res.send({
                        "status": 404,
                        "message": "User not found"
                    })
                } else {
                  res.status(200).send({
                      "message":"Password Change successfully. Now you can login with new password"
                  })
                }
            }
        }
    },
    forgetPassword: async (req,res)=>{
        if(!req.body){
            winston.debug(`Request body is empty while forget password ${req.body}`)
            res.send({
                "message": "Empty Email Field"
            })
        } else {
            var user = await userModel.findOne({"email": req.body.email})
            if(!user){
                winston.debug(`emial address is not found while forgetpassword ${user}`)
                res.status(401).send({
                    "message": "Invalid Email Address"
                })
            } else{
                var link = `http://localhost:4000/api/servePage?email=${user.email}`;
                var sendMail = utils.mailPassword(user.name,user.email,link)
                sendMail.then(mailRes=>{
                    res.send({
                        "message": "Please check the link which is sended to your registered mail id",
                        "info": mailRes,
                        "status":200
                    })
                }).catch(err=>{
                    winston.debug(`Error while sending mail ${err}`)
                    res.send({
                        "message": "Failed to send mail",
                        "info":err
                    })
                })
            }
        }
    },
    servePage: async (req,res)=>{
        if(!req.query.email){
            res.send({
                "message":"Invalid Link"
            })
        } else {
            var user = await userModel.findOne({email:req.query.email})
            if(!user){
                res.send({
                    "message":"Invalid Email Address"
                })
            } else {
                res.render('index',{
                    emailAddress: user.email
                })
            }
        }
    }

}
const jwt = require('jsonwebtoken')
module.exports = (req,res,next)=>{
    console.log(req.headers.token)
    const token = req.headers.token
    if(!token){
        res.status(401).send({
            "message": "Access denied. No token provided"
        })
    } else {
        try{
            const decode = jwt.verify(req.headers.token,"loginAPIPOC")
            req.userCtrl =  decode
            next()
        }catch(err){
            res.status(401).send({
                "message":err
            })
        }    
    }
    
}
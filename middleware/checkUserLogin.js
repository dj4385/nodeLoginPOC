const jwt = require('jsonwebtoken')
module.exports = (req,res,next)=>{
    console.log(req.headers.token)
    try{
        const decode = jwt.verify(req.headers.x-token,"loginAPIPOC")
        next()
    }catch(err){
        res.status(401).send({
            "message":"Authentication fail"
        })
    }
}
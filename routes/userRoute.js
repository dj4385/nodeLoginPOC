const express = require('express'),
      route = express.Router(),
      userCtrll = require('../controllers/userCtrl'),
      path = require('path'),
      changePasswordFilePath = path.join(path.normalize(__dirname+'/..'),'/template/changePassword.html')

console.log(changePasswordFilePath)
// route.get('/users', userCtrll.clients)
route.get('/changePassword.html',(req,res)=>{
    res.sendFile(changePasswordFilePath, (err)=>{
        if(err){
            console.log(err)
        } else {
            console.log('File served successfully')
        }
    })
})
route.post('/register',userCtrll.register)
route.post('/login',userCtrll.login)
route.post('/forgetPassword', userCtrll.forgetPassword)
route.post('/changePasword', userCtrll.changePassword)

module.exports = route
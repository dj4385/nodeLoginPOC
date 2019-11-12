const express = require('express'),
      route = express.Router(),
      userCtrll = require('../helpers/userCtrl')

route.post('/register',userCtrll.register)
route.post('/login',userCtrll.login)
route.post('/changePassword', userCtrll.changePassword)
route.post('/forgetPassword', userCtrll.forgetPassword)
route.get('/servePage:email',userCtrll.servePage)

module.exports = route
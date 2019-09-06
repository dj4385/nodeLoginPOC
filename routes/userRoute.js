const express = require('express'),
      route = express.Router(),
      userCtrll = require('../controllers/userCtrl')

route.post('/register',userCtrll.register)
route.post('/login',userCtrll.login)

module.exports = route
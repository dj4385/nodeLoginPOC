const express = require('express'),
      route = express.Router(),
      userCtrll = require('../controllers/userCtrl')

// route.get('/users', userCtrll.clients)
route.post('/register',userCtrll.register)
route.post('/login',userCtrll.login)

module.exports = route
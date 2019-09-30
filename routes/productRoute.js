const express = require('express'),
      productRouter = express.Router(),
      productCtrl = require('../controllers/productCtrl'),
      checkAuth = require('../middleware/checkUserLogin')

productRouter.get('/products', checkAuth, productCtrl.viewProducts)
productRouter.get('/product/:id', checkAuth, productCtrl.getSingleProduct)
productRouter.post('/addProduct', checkAuth, productCtrl.addProduct)
productRouter.put('/products/:id', checkAuth, productCtrl.updateProduct)
productRouter.delete('/products/:id',checkAuth, productCtrl.deleteProduct)

module.exports = productRouter
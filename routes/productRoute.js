const express = require('express'),
      productRouter = express.Router(),
      productCtrl = require('../helpers/productCtrl'),
      checkAuth = require('../middleware/checkUserLogin')

productRouter.get('/products', productCtrl.viewProducts)
productRouter.get('/product/:id', productCtrl.getSingleProduct)
productRouter.post('/addProduct', checkAuth, productCtrl.addProduct)
productRouter.put('/products/:id', checkAuth, productCtrl.updateProduct)
productRouter.delete('/products/:id',checkAuth, productCtrl.deleteProduct)

module.exports = productRouter
const express = require('express'),
      productRouter = express.Router(),
      productCtrl = require('../controllers/productCtrl')

productRouter.get('/products',productCtrl.viewProducts)
productRouter.post('/addProduct',productCtrl.addProduct)
productRouter.put('/products/:id',productCtrl.updateProduct)
productRouter.delete('/products/:id',productCtrl.deleteProduct)

module.exports = productRouter
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productControllers');

router.post('/products', productsController.createProduct);
router.get('/products', productsController.getProducts);
router.get('/products/:id', productsController.getProductById);
router.put('/products/:id', productsController.updateProduct); // Adding the missing update route

module.exports = router;
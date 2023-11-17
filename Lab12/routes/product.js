const express = require('express');
const productController = require('../controller/productController');

const options = {
    'caseSensitive': false,
    'strict': false
};
const router = express.Router(options);

router.get('/product/add', productController.getAddPage);
router.post('/product/add', productController.addProduct);
router.get('/product/', productController.listProduct);

module.exports = router;
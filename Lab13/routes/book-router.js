const express = require('express');
const bookController = require('../controllers/book-controller');

let router = express.Router();

router.get('/',bookController.getAllbooks);
router.post('/',bookController.addBook);
router.put('/:id',bookController.updateBook);
router.delete('/:id',bookController.deleteBook);

module.exports = router;
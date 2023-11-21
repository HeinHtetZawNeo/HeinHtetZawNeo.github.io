const express = require('express');
const bookController = require('../controllers/books-controller');

const router = express.Router();

router.get('/',bookController.getAllBooks);
router.post('/',bookController.createBooks);

module.exports = router;
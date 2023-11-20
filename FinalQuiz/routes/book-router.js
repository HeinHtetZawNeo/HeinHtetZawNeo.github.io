const express = require('express');
const bookController = require('../controllers/book-controller');

const router = express.Router();

router.get('/:id',bookController.getAllBooks);
router.get('/',bookController.getBookByAurthorFirstName);
router.post('/',bookController.createNewBook)

module.exports = router;
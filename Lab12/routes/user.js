const express = require('express');
const fs = require('fs');
const path = require('path');
const userController = require('../controller/userController');

const options = {
    'caseSensitive': false,
    'strict': false
};
const router = express.Router(options);

router.get('/add', userController.getAddPage);
router.post('/add', userController.addUser);
router.get('/', userController.listUser);

module.exports = router;
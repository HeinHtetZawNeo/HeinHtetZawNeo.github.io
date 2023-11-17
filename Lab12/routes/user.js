const express = require('express');
const fs = require('fs');
const path = require('path');
const userController = require('../controller/userController');

const options = {
    'caseSensitive': false,
    'strict': false
};
const router = express.Router(options);

router.get('/add', (req, res, next) => {
    fs.createReadStream(path.join(__dirname, '..', 'view','user', 'add.html')).pipe(res);
});

router.post('/add', (req, res, next) => {
    userController.addUser(req);
    fs.createReadStream(path.join(__dirname, '..', 'view','user', 'saved.html')).pipe(res);
});
router.get('/', (req, res, next) => {
    
    res.send(userController.listUser());
});

module.exports = router;
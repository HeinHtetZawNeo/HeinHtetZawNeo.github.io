const express = require('express');
const path = require('path');
const fs = require('fs');

const userRouter = require('./routes/user');
const productRouter = require('./routes/product');

const app = express();

app.set('port', process.env.PORT || 3000);

//Resources
app.use('/public', express.static(path.join(__dirname, 'public', 'resources')));
//form url encode
app.use(express.urlencoded());

app.use('/user', userRouter);
app.use(productRouter);

//for status 404
app.use((req, res, next) => {
    fs.createReadStream(path.join(__dirname, 'view', 'error','error.html')).pipe(res);
});

//for status 500
app.use((err,req, res, next) => {
    fs.createReadStream(path.join(__dirname, 'view', 'error','error.html')).pipe(res);
});



app.listen(app.get('port'), () => console.log(`listing from port ${app.get('port')}`));
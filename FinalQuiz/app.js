const express = require('express');
const booksRouter = require('./routes/book-router');

const app = express();

app.use(express.json());
app.use('/books',booksRouter);

app.listen(3000,()=>console.log("Listening port 3000"));
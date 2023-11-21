const express = require('express');
const bookRouter = require('./routers/books-router');
const authorRouter = require('./routers/author-router');

const app = express();
app.use(express.json())

app.use('/books',bookRouter);
app.use('/authors',authorRouter);

app.listen(3000,()=>console.log("listening from port 3000...."));
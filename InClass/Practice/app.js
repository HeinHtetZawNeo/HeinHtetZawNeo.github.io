const express = require('express');
const studentRouter = require('./routes/student-router');
const app = express();

app.use('/students',studentRouter);

app.listen(3000,()=>console.log("Listening from 3000 port"));
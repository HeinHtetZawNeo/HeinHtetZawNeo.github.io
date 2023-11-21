const express = require('express');
const app = express();

app.use(express.json());

const studentRoute = require('./routes/student-routes');
app.use('/students',studentRoute);

app.use((err,req,res,next)=>{
    res.status(500).json({error:err.message});
})

app.listen(3000,()=>{console.log('listening to 3000...')});
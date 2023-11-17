const express = require('express');
const options = {
    'caseSensitive':false,
    'strict':false
};
const router = express.Router(options);

router.get('/product/list',(req,res,next)=>{
    
});

module.exports = router;
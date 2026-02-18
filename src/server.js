const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({
        sucess : true,
        message : "testing"
    })
});

app.listen(4545 ,()=>{
    console.log('server start....')
})